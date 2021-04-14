FROM node:14.16.0 as devserver
WORKDIR /app
ENV PORT 80
COPY package.json /app/package.json
RUN npm install --save-dev
COPY . /app
CMD ["npm", "start"]

FROM node:14.16.0 as build
WORKDIR /app
ENV PORT 80
COPY package.json /app/package.json
RUN npm install --save-prod
COPY . /app
RUN npm run build

# production environment
FROM nginx:1.17.8 as production
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]