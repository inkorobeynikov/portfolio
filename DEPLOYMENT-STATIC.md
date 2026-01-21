# Инструкции по развертыванию статического сайта

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
# Подключение репозитория
git remote add origin https://github.com/inkorobeynikov/portfolio.git

# Переименование ветки в main (если используется master)
git branch -M main

# Загрузка кода
git push -u origin main
```

---

## Часть 2: Настройка GitHub Actions для автоматического деплоя

### 1. Настройка SSH ключа для деплоя

На вашей локальной машине или VPS:

```bash
# Генерация SSH ключа (если еще нет)
ssh-keygen -t ed25519 -C "github-actions" -f ~/.ssh/github_actions

# Копирование публичного ключа на VPS
ssh-copy-id -i ~/.ssh/github_actions.pub your_username@146.59.92.14

# Вывод приватного ключа (для добавления в GitHub Secrets)
cat ~/.ssh/github_actions
```

### 2. Добавление секретов в GitHub

1. Перейдите в ваш репозиторий на GitHub
2. Settings → Secrets and variables → Actions
3. Нажмите "New repository secret" и добавьте:
   - `VPS_HOST`: IP адрес вашего VPS (например, `123.45.67.89`)
   - `VPS_USERNAME`: имя пользователя на VPS (например, `root` или `ubuntu`)
   - `VPS_SSH_KEY`: приватный ключ SSH (содержимое файла `github_actions`)

### 3. Как работает автоматический деплой

Workflow файл уже создан в `.github/workflows/deploy.yml`. Теперь при каждом push в ветку `main`:

1. ✅ GitHub Actions соберет статический сайт (`npm run build`)
2. ✅ Загрузит файлы из папки `out/` на ваш VPS в `/var/www/portfolio`
3. ✅ Перезагрузит Nginx

---

## Часть 3: Настройка VPS для статического сайта

### Предварительные требования:

- Ubuntu 20.04+ / Debian 11+ (или другой Linux)
- Доступ по SSH
- Root или sudo права

### 1. Подключение к VPS

```bash
ssh your_username@146.59.92.14
```

### 2. Установка Nginx

```bash
# Обновление системы
sudo apt update && sudo apt upgrade -y

# Установка Nginx
sudo apt install -y nginx

# Проверка статуса
sudo systemctl status nginx
```

### 3. Создание директории для сайта

```bash
# Создание директории
sudo mkdir -p /var/www/portfolio

# Установка правильных прав доступа
sudo chown -R $USER:$USER /var/www/portfolio
sudo chmod -R 755 /var/www/portfolio
```

### 4. Настройка Nginx

```bash
# Создание конфигурации
sudo nano /etc/nginx/sites-available/portfolio
```

Вставьте следующую конфигурацию:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name your_domain.com www.your_domain.com;  # Замените на ваш домен или IP

    root /var/www/portfolio;
    index index.html;

    location / {
        try_files $uri $uri.html $uri/ =404;
    }

    # Кэширование статических файлов
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Сжатие gzip
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css text/xml text/javascript application/json application/javascript application/xml+rss application/rss+xml font/truetype font/opentype application/vnd.ms-fontobject image/svg+xml;
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

### 5. Настройка Firewall

```bash
# Разрешение HTTP и HTTPS трафика
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
sudo ufw enable
```

### 6. Настройка SSL (HTTPS) с Let's Encrypt

```bash
# Установка Certbot
sudo apt install -y certbot python3-certbot-nginx

# Получение SSL сертификата (замените на ваш домен)
sudo certbot --nginx -d your_domain.com -d www.your_domain.com

# Автоматическое обновление сертификата
sudo certbot renew --dry-run
```

---

## Ручной деплой (без GitHub Actions)

Если хотите загрузить сайт вручную:

### На локальной машине:

```bash
# Сборка статического сайта
npm run build

# Загрузка на VPS через SCP
scp -r out/* your_username@146.59.92.14:/var/www/portfolio/
```

### Или через rsync (рекомендуется):

```bash
rsync -avz --delete out/ your_username@146.59.92.14:/var/www/portfolio/
```

---

## Обновление сайта

### Автоматически (через GitHub Actions):

Просто сделайте push в main:

```bash
git add .
git commit -m "Update content"
git push
```

GitHub Actions автоматически соберет и задеплоит новую версию.

### Вручную:

```bash
# Локально
npm run build
rsync -avz --delete out/ your_username@146.59.92.14:/var/www/portfolio/

# На VPS (опционально)
ssh your_username@146.59.92.14
sudo systemctl reload nginx
```

---

## Проверка работы

После развертывания, ваш сайт будет доступен по:

- http://your_vps_ip (если без домена)
- http://your_domain.com (если настроили домен)
- https://your_domain.com (если настроили SSL)

---

## Мониторинг GitHub Actions

1. Перейдите в ваш репозиторий на GitHub
2. Вкладка "Actions"
3. Вы увидите все запуски workflow
4. Можете посмотреть логи каждого шага

---

## Устранение проблем

### GitHub Actions не может подключиться к VPS

```bash
# Проверьте, что публичный ключ добавлен на VPS
cat ~/.ssh/authorized_keys

# Проверьте права доступа
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
```

### Ошибка прав доступа при загрузке файлов

```bash
# На VPS установите правильные права
sudo chown -R your_username:your_username /var/www/portfolio
sudo chmod -R 755 /var/www/portfolio
```

### Nginx показывает 403 Forbidden

```bash
# Проверьте права доступа
ls -la /var/www/portfolio

# Должно быть что-то вроде:
# drwxr-xr-x your_username your_username
```
