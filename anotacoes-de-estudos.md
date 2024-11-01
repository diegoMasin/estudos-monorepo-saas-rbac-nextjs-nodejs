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
