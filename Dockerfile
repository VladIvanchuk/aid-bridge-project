# Встановлюємо базовий образ Node.js
FROM node:18-alpine

# Встановлюємо робочу директорію всередині контейнера
WORKDIR /app

# Копіюємо package.json і package-lock.json (або yarn.lock) для встановлення залежностей
COPY package*.json ./

# Встановлюємо залежності
RUN npm install

# Копіюємо інші файли проекту в робочу директорію
COPY . .

# Відкриваємо порт для сервера Next.js
EXPOSE 3000

# Команда для запуску Next.js у режимі розробки
CMD ["npm", "run", "dev"]
