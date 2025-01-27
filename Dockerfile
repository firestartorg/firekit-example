FROM node:22.5-alpine3.19 AS build
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build
RUN pnpm tsup '.\node_modules\@firestart\firekit\dist\cli\index.js' -d dist/cli --format esm

FROM node:22.5-alpine3.19 AS production
WORKDIR /app
COPY package.json ./package.json
COPY --from=build /app/dist ./dist
WORKDIR /app/dist
CMD ["cli/index.js", "start"]