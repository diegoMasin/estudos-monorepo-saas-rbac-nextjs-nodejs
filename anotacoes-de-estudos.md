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
