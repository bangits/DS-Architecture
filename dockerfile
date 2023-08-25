FROM node:lts

COPY . .

RUN npm i

RUN npm run build-storybook

EXPOSE 8080

CMD ["npx", "http-server", "./apps/react-docs/storybook-static"]