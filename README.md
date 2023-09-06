# Tech Social

POC de um sistema de cadastro de usuários e vendas para os usuários cadastrados.

# Infra

## Pré-requisitos

- Docker
- Docker Compose
- NodeJs LTS
- PNPM

## Estrutura

- `/`: A raiz do diretório contém os arquivos de configuração do pnpm workspace, package.json e um tsconfig base para as aplicações e os arquivos para subir os containers docker.
- `/apps`: Diretório que contem as aplicações que são executadas

## Como rodar a aplicação ▶️

Em seu terminal digite o seguinte comando:

```bash
docker compose up -d
```

execute o comando `docker ps` para ver o status dos containers.

Caso queria rodas a aplicação localmente mude a dentro do arquivo `.env` o valor de `POSTGRES_HOST` para `localhost` e execute o comando:

```bash
pnpm run dev
```

## Portas das aplicações

| app        | port |
| ---------- | ---- |
| webclient  | 3000 |
| users-api  | 3001 |
| orders-api | 3002 |

## Como rodar os testes

Para rodar os testes das aplicações individualmente para cada uma das API utilize o commando:

```bash
pnpm run --filter=users-api test
```

Ou é possível rodar para as duas APIs ao mesmo tempo usando o comando:

```bash
pnpm run --filter=*api test
```

# Aplicações

Todas as aplicações foram construídas usando a plataforma do NodeJS.

## APIs

O backend foi feito utilizando NestJs com todas as bibliotecas e recomendações da documentação oficial.

Documentação das APIs estão disponíveis em:

- http://localhost:3001/api
- http://localhost:3002/api

## Web Client

O client web foi construído com NextJs, TailwindCss utilizando DaisyUI para trazer um Design mais padronizado.

O cliente fica acessível na url: http://localhost:3000

### Dependências e libs utilizadas

- ZOD - ótima lib de validação, adotada por vários usuário da comunidade e tem uma performance relativamente maior que as outras libs como yup de acordo com https://moltar.github.io/typescript-runtime-type-benchmarks/. Para algumas validações foi usado também validator.js.

- Luxon - Usei essa lib para manipulação de data pois tem várias funções auxiliarem muito úteis e acho a sintaxe dela muito declarativa e clara, alguma libs de manipulação de data são mais confusas.

- React Query - Auxilia muito na hora de fazer as requisições e já trás alguns estados como de erro e loading de maneira mais simples. Além disso ele gera cache que faz melhorar a UX para o usuário, parecendo que as requests estão mais rápidas.

- React Hook Forms - Além de ser uma das libs mais adotadas pela comunidade do React, por experiencia pessoal é uma lib muito mais fácil de usar, compreensível e rápida do que o Formik por exemplo.

## Tarefas em aberto

- Comunicação entre serviços podia ser em gRPC
- Melhorias na UI e UX
- Adicionar Healthchecks eficientes com Terminus
