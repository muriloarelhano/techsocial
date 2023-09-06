FROM node:lts-alpine as builder

WORKDIR /app

ARG APP_NAME
ENV APP_NAME=${APP_NAME}

RUN corepack enable

COPY *.json .
COPY pnpm-*.yaml .
COPY apps/${APP_NAME} apps/${APP_NAME}

FROM builder as development
WORKDIR /app
RUN pnpm install
CMD pnpm run --filter=${APP_NAME} dev

FROM builder as production
WORKDIR /app
RUN pnpm install --prod --fix-lockfile
CMD pnpm run --filter=${APP_NAME} dev