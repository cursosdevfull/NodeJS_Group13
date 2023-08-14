FROM node:alpine3.17 as build

WORKDIR /build

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM node:alpine3.17

WORKDIR /app

COPY --from=build /build/dist ./dist
COPY --from=build /build/node_modules ./node_modules
COPY --from=build /build/package.json .

CMD ["npm", "run", "start"]