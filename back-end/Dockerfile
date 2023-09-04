FROM node:lts-alpine AS builder
WORKDIR /app

RUN corepack enable

COPY package*.json ./
COPY . .

FROM builder as development
WORKDIR /app

RUN pnpm install

CMD [ "pnpm", "run", "start:dev" ]

FROM builder as production
WORKDIR /app

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
RUN pnpm install --only=production
COPY --from=development /app/dist ./dist
CMD ["node", "dist/main"]