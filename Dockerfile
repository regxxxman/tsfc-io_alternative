## ---- Этап сборки ----
#FROM node:18.17.1-alpine AS build
#
## Метаданные в стиле открытого стандарта и информация об авторах
#LABEL org.opencontainers.image.title="TSFC IO" \
#      org.opencontainers.image.description="TSFC IO" \
#      org.opencontainers.image.version="1.0.0" \
#      org.opencontainers.image.authors="Aleksandra Loshkareva, Stanislav Ziganshin" \
#      org.opencontainers.image.source="https://www.google.ru"
#
## Устанавливаем рабочую директорию в контейнере
#WORKDIR /app
#
## Копируем файлы package.json и package-lock.json
#COPY package*.json ./
#
## Устанавливаем зависимости
#RUN npm install
#
## Копируем исходный код приложения
#COPY . .
#
## Здесь команды для сборки приложения
## RUN npm run build
#
## ---- Этап запуска ----
#FROM node:18.17.1-alpine
#
#WORKDIR /app
#
## Копируем зависимости из этапа сборки
#COPY --from=build /app/node_modules /app/node_modules
#COPY --from=build /app/package*.json ./
#
## Если есть этап сборки в приложении,
## то копируем собранные файлы. Иначе просто исходный код:
## COPY --from=build /app/dist /app/dist
#COPY --from=build /app/ ./
#
## Открываем порт для приложения
#EXPOSE 3000
#
## Запускаем приложение
#CMD ["npm", "run", "dev"]

# Используем официальный образ Node.js с LTS-версией
FROM node:18.17.1-alpine as builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы из текущего контекста в рабочую директорию
COPY . .

# Собираем Vite приложение в режиме production
RUN npm run build

# Создаем контейнер для запуска приложения
FROM node:18.17.1-alpine

# Устанавливаем serve для статического сервера
#RUN npm install -g serve

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем только необходимые файлы из предыдущего контейнера
COPY --from=builder /app/ ./

# Определяем порт, который будет использоваться приложением
EXPOSE 5000

# Запускаем приложение с помощью serve
CMD ["npm", "run", "production"]