# Estudos - Codificando um Saas em NextJS + NodeJS

###### Monorepo & Multi-tenant & modelo RBAC de autenticação & Fastify & Prisma

## Notas de Estudos

Criando o Monorepo

```
- pnpm dlx create-turbo@latest

```

Tudo que estiver em packages serão os pacotes usados entre os apps;
Separando os pacotes em uma pasta config colocando tudo que remete a configuração;
Acrescentar config em pnpm-workspace.yaml;

Criando toda a configuração do config; Consultar o commit em separado somente desta configuração;
Para instalar as coisas de um pacote específico, navegar no terminal até a pasta, exemplo cd config/prettier, e só ai executar o pnpm para instalar alguma coisa;

Dentro do pacote prettier instale:

```
- pnpm i -D prettier
- pnpm i -D prettier-plugin-tailwindcss

```

Dentro do pacote eslint-config instale:

```
- pnpm i -D @rocketseat/eslint-config
- pnpm i -D eslint-plugin-simple-import-sort

```

Depois de terminar toda a config dos pacotes de config, trazer o meu padrão de setting.json de workspace para o prettier funcionar;
Precisei ainda fazer umas coisas no settings de user, muito xato essa questão de manter esses 2 espaços no tab, precisei forçar usando no settings global;

Decidindo pela estratégia de criar as permissões e mante-las em código e não em banco;
Criando as permissões antes mesmo do backend ou do frontend;
Vai ser criado como um pacote, para que seja compartilhado entre ambientes; O frontend não vai depender do backend para saber que por exemplo um usuário comum não pode excluir projetos;

Criando o package auth e definindo as dependencias;

Configuração Inicial do pacote Auth, criada e separada em um só commit (ajuda a entender como criar pacotes e quais etapas);

Usando a lib CASL para a parte de permissões;

```
 - pnpm i @casl/ability
```

Construindo a api manualmente começando com o package.json, depois criando e linkando os arquivos de tsconfig até deixar um index.ts no ponto para começar a testar as permissões criadas no package "auth";

Fazendo os primeiros usos de checkagem de permissões dentro da api;
Importando o ability para dentro do index após colocar o auth como dependência no package da api;
Tudo até aqui está separado em um commit: "Criando o package auth e a api e usando o auth na api"

Trabalhando agora os primeiros cargos (ADMIN e MEMBER) e algumas permissões para exemplo;
Fazendo uma melhoria do primeiro protótipo do recursos de permissões usados na API passando agora a chamar o defineAbilityFor passando um objeto USER que conterá uma determinada ROLE, e então depois disso um fluxo um pouco complexo é executado a fim de no final ser construída a arvore de permissões daquela role de tal forma que logo a seguir no index da API essas permissões podem ser checkadas;
Aparentemente será no arquivo permissions onde conterá descrito em código (e não em database) a arvore de permissão de todas as roles;
Tudo isso separado no commit: "Melhorando a forma de obter a arvore de permissões para uma Role específica"

Dentro do CASL:

- as actions são os verbos (que podem ser os verbos do HTTPS, assim como outras actions personalizadas)
  - a action manage é nativa do CASL para que quer dizer tudo e todas as actions
- subjects são os models, entidades, coisas que as actions afetam, coisas as quais as permissão são feitas;

Criando tipagem para as subjects; Criando uma forma de definir actions para as subjects (exemplo quando uma actions é somente para um subject);
Essa parte está separado no commit: "Definindo actions para os subjects"

Usando o Zod para melhorar a leitura das permissões (em tipagens) validando elas;

Trabalhando condicionais dentro das permissões; Exemplo o usuário pode atualizar ou deletar um projeto, mas apenas se ele for o dono do projeto;

Definindo todos as permissões do APP;
em cannot não é possível usar condicional (poderia criar uma de "não-igual" mas não funciona );
