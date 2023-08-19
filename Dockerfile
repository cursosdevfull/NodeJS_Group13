FROM node:alpine3.17 as build
#FROM public.ecr.aws/b7h8q0t5/nodejsv16 as build

WORKDIR /build

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM node:alpine3.17
#FROM public.ecr.aws/b7h8q0t5/nodejsv16 

WORKDIR /app

COPY --from=build /build/dist ./dist
COPY --from=build /build/node_modules ./node_modules
COPY --from=build /build/package.json .

CMD ["npm", "run", "start"]