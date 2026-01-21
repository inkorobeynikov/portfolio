# Инструкции по развертыванию

## Часть 1: Загрузка на GitHub

### 1. Инициализация Git репозитория

```bash
# Инициализация Git (если еще не сделано)
git init

# Добавление всех файлов
git add .

# Создание первого коммита
git commit -m "Initial commit: Portfolio website"
```

### 2. Создание репозитория на GitHub

1. Перейдите на [GitHub](https://github.com)
2. Нажмите "+" в правом верхнем углу → "New repository"
3. Введите название репозитория (например, `portfolio`)
4. Выберите "Public" или "Private"
5. **НЕ** создавайте README, .gitignore или license (они уже есть у вас)
6. Нажмите "Create repository"

### 3. Подключение и загрузка

```bash
# Замените YOUR_USERNAME и YOUR_REPO на ваши данные
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Переименование ветки в main (если используется master)
git branch -M main

# Загрузка кода
git push -u origin main
```

---

## Часть 2: Развертывание на VPS

### Предварительные требования на VPS:

- Ubuntu 20.04+ / Debian 11+ (или другой Linux)
- Доступ по SSH
- Root или sudo права

### 1. Подключение к VPS

```bash
ssh your_username@your_vps_ip
```

### 2. Установка Node.js и npm

```bash
# Обновление системы
sudo apt update && sudo apt upgrade -y

# Установка Node.js 20.x (LTS)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Проверка установки
node --version
npm --version
```

### 3. Установка PM2 (менеджер процессов)

```bash
sudo npm install -g pm2
```

### 4. Установка Nginx (веб-сервер)

```bash
sudo apt install -y nginx
```

### 5. Клонирование проекта

```bash
# Создание директории для проекта
sudo mkdir -p /var/www
cd /var/www

# Клонирование репозитория (замените на ваш URL)
sudo git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git portfolio
cd portfolio

# Установка зависимостей
sudo npm install

# Сборка проекта
sudo npm run build
```

### 6. Запуск приложения с PM2

```bash
# Запуск Next.js приложения
sudo pm2 start npm --name "portfolio" -- start

# Автозапуск PM2 при перезагрузке сервера
sudo pm2 startup systemd
sudo pm2 save

# Проверка статуса
sudo pm2 status
```

### 7. Настройка Nginx

```bash
# Создание конфигурации Nginx
sudo nano /etc/nginx/sites-available/portfolio
```

Вставьте следующую конфигурацию:

```nginx
server {
    listen 80;
    server_name your_domain.com www.your_domain.com;  # Замените на ваш домен или IP

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

```bash
# Активация конфигурации
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/

# Удаление дефолтной конфигурации (опционально)
sudo rm /etc/nginx/sites-enabled/default

# Проверка конфигурации
sudo nginx -t

# Перезапуск Nginx
sudo systemctl restart nginx
```

### 8. Настройка Firewall (опционально)

```bash
# Разрешение HTTP и HTTPS трафика
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
sudo ufw enable
```

### 9. Настройка SSL (HTTPS) с Let's Encrypt

```bash
# Установка Certbot
sudo apt install -y certbot python3-certbot-nginx

# Получение SSL сертификата (замените на ваш домен)
sudo certbot --nginx -d your_domain.com -d www.your_domain.com

# Автоматическое обновление сертификата
sudo certbot renew --dry-run
```

---

## Обновление проекта

Когда вы вносите изменения в код:

```bash
# На локальной машине
git add .
git commit -m "Описание изменений"
git push

# На VPS
cd /var/www/portfolio
sudo git pull
sudo npm install  # Если были изменения в зависимостях
sudo npm run build
sudo pm2 restart portfolio
```

---

## Полезные команды PM2

```bash
# Просмотр логов
sudo pm2 logs portfolio

# Перезапуск приложения
sudo pm2 restart portfolio

# Остановка приложения
sudo pm2 stop portfolio

# Удаление из PM2
sudo pm2 delete portfolio

# Мониторинг в реальном времени
sudo pm2 monit
```

---

## Проверка работы

После развертывания, ваш сайт будет доступен по:

- http://your_vps_ip (если без домена)
- http://your_domain.com (если настроили домен)
- https://your_domain.com (если настроили SSL)

---

## Альтернатива: Использование Docker (опционально)

Если хотите использовать Docker, я могу создать `Dockerfile` и `docker-compose.yml` для более простого развертывания.
