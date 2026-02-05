# Demo Games Integration Guide

Документация для встраивания демо-игр на лендинг школ польского языка.

## Base URL

**Production:** `https://your-domain.com`
**Local dev:** `http://localhost:5173`

---

## Доступные игры

| Игра | URL | Описание |
|------|-----|----------|
| **Все игры** | `/demo` | Страница-каталог со всеми играми |
| **Пазл из букв** | `/demo/game/letter-puzzle` | Собери слово из перемешанных букв |
| **Вспомни и напиши** | `/demo/game/recall-typing` | Напиши слово по его переводу |
| **Аудио-распознавание** | `/demo/game/audio-word` | Послушай и напиши услышанное слово |
| **Заполни пропуск** | `/demo/game/context-cloze` | Заполни пропуск в предложении |

---

## Встраивание через iframe

### Один iframe с каталогом игр

```html
<iframe
  src="https://your-domain.com/demo"
  width="100%"
  height="700"
  frameborder="0"
  style="border-radius: 16px; max-width: 400px;"
></iframe>
```

### Конкретная игра

```html
<!-- Пазл из букв -->
<iframe
  src="https://your-domain.com/demo/game/letter-puzzle"
  width="100%"
  height="700"
  frameborder="0"
  style="border-radius: 16px; max-width: 400px;"
></iframe>

<!-- Аудио-распознавание -->
<iframe
  src="https://your-domain.com/demo/game/audio-word"
  width="100%"
  height="700"
  frameborder="0"
  style="border-radius: 16px; max-width: 400px;"
></iframe>
```

### Рекомендуемые размеры

- **Ширина:** 320-400px (мобильный формат)
- **Высота:** 600-700px
- **Border-radius:** 16px для скругленных углов

---

## JavaScript API (postMessage)

Игры отправляют события в родительское окно через `postMessage`. Это позволяет отслеживать действия пользователя.

### События

| Событие | Описание | Данные |
|---------|----------|--------|
| `demo-game-completed` | Игра завершена | `{ type, gameType, results }` |
| `demo-game-skipped` | Игра пропущена | `{ type, gameType }` |
| `demo-game-closed` | Пользователь закрыл игру | `{ type, gameType }` |

### Пример обработки событий

```javascript
window.addEventListener('message', (event) => {
  // Проверка источника (опционально)
  // if (event.origin !== 'https://your-domain.com') return;

  const { type, gameType, results } = event.data;

  switch (type) {
    case 'demo-game-completed':
      console.log(`Игра ${gameType} завершена`);
      console.log(`Результат: ${results.filter(r => r.correct).length}/${results.length}`);
      // Показать CTA или следующий шаг
      break;

    case 'demo-game-closed':
      console.log('Пользователь закрыл игру');
      // Показать форму записи на курс
      break;

    case 'demo-game-skipped':
      console.log('Игра пропущена');
      break;
  }
});
```

---

## Дизайн и стилизация

### Цветовая схема

- **Градиент фона:** `#92A3FD` → `#9DCEFF`
- **Белые карточки:** `#FFFFFF` с тенью
- **Текст:** `#1F2937` (dark gray)
- **Акцент:** градиент `#92A3FD` → `#9DCEFF`

### CSS для контейнера

```css
.demo-game-container {
  max-width: 400px;
  margin: 0 auto;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.demo-game-container iframe {
  width: 100%;
  height: 700px;
  border: none;
}
```

---

## Контент демо

- **20 польских слов** с русским переводом
- **Реальное аудио** из Google Cloud Storage
- **Примеры предложений** для каждого слова
- **5 слов за сессию** в каждой игре

---

## Пример полной интеграции

```html
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Попробуйте наши игры</title>
  <style>
    .games-section {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
      padding: 40px 20px;
    }

    .game-card {
      max-width: 400px;
      width: 100%;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }

    .game-card iframe {
      width: 100%;
      height: 600px;
      border: none;
    }

    .cta-modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      align-items: center;
      justify-content: center;
    }

    .cta-modal.visible {
      display: flex;
    }

    .cta-content {
      background: white;
      padding: 40px;
      border-radius: 16px;
      text-align: center;
      max-width: 400px;
    }
  </style>
</head>
<body>
  <section class="games-section">
    <div class="game-card">
      <iframe src="https://your-domain.com/demo/game/letter-puzzle"></iframe>
    </div>
  </section>

  <div class="cta-modal" id="ctaModal">
    <div class="cta-content">
      <h2>Понравилось?</h2>
      <p>Запишитесь на бесплатный урок!</p>
      <button onclick="window.location.href='/signup'">Записаться</button>
    </div>
  </div>

  <script>
    window.addEventListener('message', (event) => {
      if (event.data.type === 'demo-game-completed') {
        // Показать CTA после завершения игры
        setTimeout(() => {
          document.getElementById('ctaModal').classList.add('visible');
        }, 1000);
      }
    });
  </script>
</body>
</html>
```

---

## Локальное тестирование

```bash
cd app
yarn dev:demo
# Открыть http://localhost:5173/demo
```

## Production build

```bash
cd app
yarn build:demo
# Результат в app/dist/
```
