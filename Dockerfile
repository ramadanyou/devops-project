# Dockerfile - Image Docker pour l'application
# Utilise Node.js version 18 (LTS)
FROM node:18-alpine

# Répertoire travail dans le container
WORKDIR /app

# Copie les fichiers package.json et package-lock.json
COPY package*.json ./

# Installe les dépendances 
RUN npm install --production

# Copie le reste des fichiers de l'application (.js ...)
COPY . .

# Expose le port 3000
EXPOSE 3000

# Définit la variable d'environnement
ENV NODE_ENV=production

# Commande pour démarrer l'application
CMD ["node", "app.js"]
