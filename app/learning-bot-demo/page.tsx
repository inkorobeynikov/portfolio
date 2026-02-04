"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Demo app URL
const DEMO_URL =
  process.env.NODE_ENV === "development"
    ? "https://demo.learningbot.online"
    : "https://demo.learningbot.online";

// Telegram bot URL
const TELEGRAM_BOT_URL = "https://t.me/LearnWordsBot";

// Games data
const games = [
  {
    title: "Letter Puzzle",
    description: "Собери слово из перемешанных букв",
    icon: "🧩",
  },
  {
    title: "Recall Typing",
    description: "Напиши слово по его переводу",
    icon: "⌨️",
  },
  {
    title: "Audio Recognition",
    description: "Услышь слово и напиши его",
    icon: "🎧",
  },
  {
    title: "Fill in the Blank",
    description: "Заполни пропуск в предложении",
    icon: "📝",
  },
];

// Process steps
const addWordSteps = [
  {
    step: "1",
    title: "Отправьте слово боту",
    description:
      "Текстом или голосовым сообщением. Можно отправить до 10 слов через запятую.",
  },
  {
    step: "2",
    title: "Бот генерирует карточку",
    description:
      "Определение, перевод, 3 примера использования и аудио-произношение.",
  },
  {
    step: "3",
    title: "Проверьте и подтвердите",
    description: "Подтвердите карточку или отклоните, если перевод неточный.",
  },
];

// SM-2 intervals
const sm2Intervals = [
  { day: "День 1", interval: "Первое повторение" },
  { day: "День 3", interval: "Второе повторение" },
  { day: "День 7", interval: "Третье повторение" },
  { day: "День 14+", interval: "Интервалы растут: 30, 60 дней..." },
];

// Telegram screenshots
const telegramScreenshots = [
  {
    id: 1,
    alt: "Telegram Bot - слово на апрув",
    src: "/learning-bot-demo/telegram1.jpg",
  },
  {
    id: 2,
    alt: "Telegram Bot - слово добавлено",
    src: "/learning-bot-demo/telegram2.jpg",
  },
];

// Carousel component
function TelegramCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === telegramScreenshots.length - 1 ? 0 : prev + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? telegramScreenshots.length - 1 : prev - 1,
    );
  };

  return (
    <div className="relative w-full max-w-[240px] mx-auto">
      {/* iPhone frame */}
      <div className="relative bg-black rounded-[1.5rem] p-1.5 shadow-xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-b-xl z-10" />

        {/* Screen */}
        <div className="relative bg-gray-100 rounded-[1.25rem] overflow-hidden aspect-[9/19.5]">
          {telegramScreenshots[currentIndex].src ? (
            <Image
              src={telegramScreenshots[currentIndex].src}
              alt={telegramScreenshots[currentIndex].alt}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100">
              <div className="text-center p-4">
                <div className="text-4xl mb-2">📱</div>
                <p className="text-gray-500 text-xs">
                  {telegramScreenshots[currentIndex].alt}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-gray-600 rounded-full" />
      </div>

      {/* Navigation */}
      <div className="flex justify-center items-center gap-3 mt-4">
        <button
          onClick={prevSlide}
          className="p-1.5 rounded-full bg-[var(--color-background-secondary)] hover:bg-gray-200 transition-colors"
          aria-label="Previous screenshot"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex gap-1.5">
          {telegramScreenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                index === currentIndex ? "bg-gray-800" : "bg-gray-300"
              }`}
              aria-label={`Go to screenshot ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-1.5 rounded-full bg-[var(--color-background-secondary)] hover:bg-gray-200 transition-colors"
          aria-label="Next screenshot"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function LearnWordsDemoPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.17;
      setIsScrolled(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className="mx-4 md:mx-16 lg:mx-40 pt-0 pb-16 min-h-screen">
        {/* Back link */}
        <div className="mb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] no-underline transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to home
          </Link>
        </div>

        <div className="flex flex-col gap-12 md:grid md:grid-cols-[minmax(0,1fr)_420px] md:items-start md:gap-12">
          {/* Left content */}
          <div className="space-y-8">
            {/* Hero */}
            <div className="text-center">
              <p className="section__text__p1">Telegram Mini App</p>
              <h1 className="title">LearnWords</h1>
              <p className="text-xl text-[var(--color-text-secondary)] mt-4 max-w-2xl mx-auto">
                Умное изучение иностранных слов
              </p>
              <p className="text-[var(--color-text-secondary)] mt-4 max-w-2xl mx-auto">
                Научный метод интервального повторения (SM-2), который
                автоматически подбирает оптимальное время для повторения каждого
                слова. Всё обучение происходит прямо в Telegram.
              </p>
              <div className="btn-container mt-6">
                <a
                  href={TELEGRAM_BOT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-color-1"
                >
                  Открыть в Telegram
                </a>
                <a href="#demo" className="btn btn-color-2">
                  Попробовать демо
                </a>
              </div>
            </div>

            {/* Features tags */}
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "Интервальное повторение",
                "4 типа игр",
                "Аудио-произношение",
                "AI-генерация карточек",
                "Telegram Bot",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-[var(--color-background-secondary)] text-[var(--color-text-secondary)] rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Demo Container (right side, sticky) */}
          <div
            id="demo"
            className="md:col-start-2 md:row-start-1 md:row-span-2"
          >
            <div className="flex justify-center md:justify-end">
              <div
                className={`bg-[var(--color-background-secondary)] rounded-2xl shadow-xl overflow-hidden transition-all duration-300 w-full max-w-[375px] md:fixed md:right-16 lg:right-40 md:w-[375px] ${
                  isScrolled ? "md:top-10" : "md:top-[calc(17vh+1rem)]"
                }`}
                style={{ height: "700px" }}
              >
                <div className="bg-gray-900 h-6 flex items-center justify-center">
                  <div className="w-20 h-1 bg-gray-700 rounded-full" />
                </div>

                <iframe
                  src={DEMO_URL}
                  title="LearnWords Demo"
                  className="w-full border-0"
                  style={{ height: "calc(100% - 24px)" }}
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
                  allow="clipboard-write"
                />
              </div>
            </div>
          </div>

          {/* Main content sections */}
          <div>
            {/* Games Section */}
            <div className="max-w-2xl mx-auto">
              <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4 text-center">
                Игры для закрепления
              </h2>
              <p className="text-[var(--color-text-secondary)] text-center mb-6">
                Интерактивные пазлы для изучения новых слов и закрепления
                запоминания. Новые типы игр добавляются быстро.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {games.map((game) => (
                  <div
                    key={game.title}
                    className="p-4 bg-[var(--color-background-secondary)] rounded-lg"
                  >
                    <div className="text-3xl mb-2">{game.icon}</div>
                    <h3 className="font-medium text-[var(--color-text-primary)]">
                      {game.title}
                    </h3>
                    <p className="text-sm text-[var(--color-text-muted)]">
                      {game.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Games Demo iframe */}
              <div className="mt-8">
                <p className="text-[var(--color-text-muted)] text-sm text-center mb-4">
                  Попробуйте игры прямо сейчас:
                </p>
                <div className="flex justify-center">
                  <div
                    className="bg-[var(--color-background-secondary)] rounded-2xl shadow-lg overflow-hidden w-full max-w-[320px]"
                    style={{ height: "640px" }}
                  >
                    <div className="bg-gray-900 h-5 flex items-center justify-center">
                      <div className="w-16 h-0.5 bg-gray-700 rounded-full" />
                    </div>
                    <iframe
                      src={`${DEMO_URL}/demo`}
                      title="LearnWords Games Demo"
                      className="w-full border-0"
                      style={{ height: "calc(100% - 20px)" }}
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
                      allow="clipboard-write"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* How to add words */}
            <div className="mt-12 max-w-2xl mx-auto">
              <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4 text-center">
                Добавление слов
              </h2>
              <div className="space-y-4">
                {addWordSteps.map((item) => (
                  <div
                    key={item.step}
                    className="flex gap-4 p-4 bg-[var(--color-background-secondary)] rounded-lg"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center font-semibold">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-medium text-[var(--color-text-primary)]">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[var(--color-text-muted)]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Telegram Screenshots Carousel */}
            <div className="mt-12 max-w-2xl mx-auto">
              <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4 text-center">
                Работа в Telegram
              </h2>
              <p className="text-[var(--color-text-secondary)] text-center mb-6">
                Всё обучение происходит прямо в Telegram — не нужно
                устанавливать отдельные приложения
              </p>
              <TelegramCarousel />

              {/* Group mode */}
              <div className="mt-8 p-5 bg-[var(--color-background-secondary)] rounded-lg">
                <h3 className="font-medium text-[var(--color-text-primary)] mb-2 flex items-center gap-2">
                  <span className="text-xl">👥</span> Групповой режим
                </h3>
                <p className="text-[var(--color-text-secondary)] text-sm">
                  Бот работает в групповых чатах — слова, добавленные одним
                  участником, автоматически попадают в словари всех членов
                  группы.
                </p>
                <p className="text-[var(--color-text-muted)] text-xs mt-2">
                  Идеально для преподавателей: добавьте слово один раз — оно
                  появится у всех учеников
                </p>
              </div>
            </div>

            {/* SM-2 Algorithm */}
            <div className="mt-12 max-w-2xl mx-auto">
              <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4 text-center">
                Интервальное повторение (SM-2)
              </h2>
              <div className="p-6 bg-[var(--color-background-secondary)] rounded-lg">
                <p className="text-[var(--color-text-secondary)] mb-4">
                  Без повторения мозг забывает информацию по экспоненте — это
                  «кривая забывания» Эббингауза. Алгоритм SM-2 показывает слово
                  именно тогда, когда вы вот-вот его забудете.
                </p>
                <div className="space-y-2 mb-4">
                  {sm2Intervals.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="font-medium text-[var(--color-text-primary)] w-20">
                        {item.day}
                      </span>
                      <span className="text-[var(--color-text-secondary)]">
                        {item.interval}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-[var(--color-text-muted)]">
                  После каждого повторения вы оцениваете, насколько легко
                  вспомнили слово. Алгоритм адаптируется под вашу память.
                </p>
              </div>
            </div>

            {/* Browser Extension */}
            <div className="mt-12 max-w-2xl mx-auto">
              <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4 text-center">
                Browser Extension
              </h2>
              <div className="p-6 bg-[var(--color-background-secondary)] rounded-lg">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="flex-1">
                    <p className="text-[var(--color-text-secondary)] mb-4">
                      Расширение для браузера позволяет добавлять слова прямо с
                      веб-страниц:
                    </p>
                    <ul className="space-y-2 text-[var(--color-text-secondary)] list-disc list-inside">
                      <li>Добавляйте слова с любых сайтов</li>
                      <li>Переводите выделенный текст</li>
                      <li>Мгновенно сохраняйте в словарь</li>
                    </ul>
                  </div>
                  <div className="flex-shrink-0">
                    <Image
                      src="/learning-bot-demo/browser-extension.png"
                      alt="Browser Extension"
                      width={280}
                      height={350}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Audio */}
            <div className="mt-12 max-w-2xl mx-auto">
              <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4 text-center">
                Профессиональное аудио
              </h2>
              <div className="p-6 bg-[var(--color-background-secondary)] rounded-lg">
                <p className="text-[var(--color-text-secondary)] mb-4">
                  Каждое слово включает качественную озвучку с естественным
                  произношением носителя языка:
                </p>
                <ul className="space-y-2 text-[var(--color-text-secondary)] list-disc list-inside">
                  <li>Само слово</li>
                  <li>Перевод</li>
                  <li>Все примеры предложений</li>
                </ul>
                <p className="text-sm text-[var(--color-text-muted)] mt-4">
                  Аудио генерируется нейросетями с естественным произношением
                </p>
              </div>
            </div>

            {/* Word Cards */}
            <div className="mt-12 max-w-2xl mx-auto">
              <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4 text-center">
                Словарные карточки
              </h2>
              <div className="p-6 bg-[var(--color-background-secondary)] rounded-lg">
                <p className="text-[var(--color-text-secondary)] mb-4">
                  Каждая карточка содержит всё необходимое для эффективного
                  запоминания:
                </p>
                <ul className="space-y-2 text-[var(--color-text-secondary)] list-disc list-inside">
                  <li>Слово с определением на языке оригинала</li>
                  <li>Перевод на родной язык</li>
                  <li>Аудио-произношение (нативный спикер)</li>
                  <li>3 примера использования в контексте</li>
                </ul>
              </div>
            </div>

            {/* Supported Languages */}
            <div className="mt-12 max-w-2xl mx-auto">
              <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4 text-center">
                Любой язык за пару часов
              </h2>
              <div className="p-6 bg-[var(--color-background-secondary)] rounded-lg">
                <p className="text-[var(--color-text-secondary)] mb-4">
                  Архитектура бота позволяет быстро добавить поддержку любого
                  языка — настройка занимает 2-3 часа.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium text-[var(--color-text-primary)] mb-2">
                      Изучаемые языки
                    </h3>
                    <p className="text-[var(--color-text-secondary)] text-sm">
                      Сейчас: <strong>Польский</strong>
                    </p>
                    <p className="text-[var(--color-text-muted)] text-xs mt-1">
                      Можно добавить любой язык
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-[var(--color-text-primary)] mb-2">
                      Интерфейс
                    </h3>
                    <p className="text-[var(--color-text-secondary)] text-sm">
                      Русский, Английский
                    </p>
                    <p className="text-[var(--color-text-muted)] text-xs mt-1">
                      Легко локализуется на любой язык
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Demo note */}
            <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg max-w-2xl mx-auto">
              <p className="text-blue-800 text-sm">
                <strong>Демо:</strong> Интерактивная демо-версия справа работает
                на тестовых данных. В продакшене бот интегрируется с реальным
                бэкендом и персонализированным подбором слов.
              </p>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <p className="text-[var(--color-text-muted)] mb-4">
                Готовы начать учить слова?
              </p>
              <div className="btn-container justify-center">
                <a
                  href={TELEGRAM_BOT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-color-1"
                >
                  Открыть в Telegram
                </a>
                <Link href="/demo" className="btn btn-color-2">
                  Техническое описание
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
