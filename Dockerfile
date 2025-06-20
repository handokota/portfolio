FROM node:22-alpine AS builder

WORKDIR /app

ARG NEXT_PUBLIC_DISCORD_ID

ENV NEXT_PUBLIC_DISCORD_ID=$NEXT_PUBLIC_DISCORD_ID

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

FROM node:22-alpine

WORKDIR /app

COPY --from=builder /app/src ./src
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.js ./

EXPOSE 3000

CMD ["yarn", "start"]