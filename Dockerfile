# Build
FROM node:20-alpine AS build

WORKDIR /app

# Copiamos dependencias primero (mejor cache)
COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

# Copiamos el resto del código
COPY . .

# Build del proyecto (Vite)
RUN yarn build


# 2: Nginx 
FROM nginx:1.25-alpine

# Borramos config por defecto
RUN rm /etc/nginx/conf.d/default.conf

# Copiamos nuestra config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiamos el build generado
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
