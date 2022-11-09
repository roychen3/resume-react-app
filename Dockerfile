FROM node AS react-app
WORKDIR /react-app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.19
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=react-app /react-app/build /usr/share/nginx/html