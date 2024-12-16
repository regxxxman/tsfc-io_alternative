# TSFC Frontend README

Этот README предоставляет инструкции по настройке, установке и запуску фронтенда.

## Предварительные требования

Перед началом убедитесь, что на вашей системе установлены следующие компоненты:

- Node.js
- npm (Node Package Manager): Обычно поставляется вместе с установкой Node.js.

## Установка

1. Клонируйте репозиторий:

   ```bash
   git@github.com:ProfitChef/tsfc-io.git
   ```
2. Установите зависимости

   ```bash
   npm install
   ```
   
## Переменные окружения

Создайте файл `.env` в корневом каталоге вашего проекта и добавьте следующие переменные:

   ```
      # Базовый URL
      VITE_BASE_URL=link_api
      
      # Базовый token
      VITE_TOKEN=your_token

      # Email для контакта
      VITE_EMAIL=your@gmail.com
      
      # Ссылка на Twitter
      VITE_TWITTER=https://twitter.com/xxxx
      
      # Ссылка на Telegram
      VITE_TELEGRAM=https://t.me/xxxx
      
      # Ссылка на WhatsApp
      VITE_WHATSAPP=your_whatsapp_url_here
      
      # Ссылка на GooglePlay
      VITE_GOOGLE_PLAY='your_googleplay_url_here'

      # Ссылка на AppStore
      VITE_APP_STORE='your_appstore_url_here'
   ```

Замените на ваши реальные данные.

#### Обратите внимание, что переменные среды в Vite должны начинаться с префикса ``VITE_``.

## Запуск приложения

   ```bash
    npm run dev
   ```
#### Доступ:  `http://localhost:5173/`

## Build приложения

   ```bash
   npm run build 
   ```
