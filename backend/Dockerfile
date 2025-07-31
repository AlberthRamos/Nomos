# backend/Dockerfile
FROM node:18-alpine

WORKDIR /app

# Instala dependências
COPY package*.json ./
RUN npm install --production

# Copia o código fonte
COPY . .

# Compila TS para JS
RUN npm run build

# Expõe as portas
EXPOSE 3000
EXPOSE 9229

# Variáveis de ambiente
ENV NODE_ENV=production

# Comando para rodar a aplicação
CMD ["npm", "start"]