[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Nikiteo_haifisch-landing&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Nikiteo_haifisch-landing)
[![code style](https://antfu.me/badge-code-style.svg)](https://github.com/antfu/eslint-config)

# Haifisch Landing

Одностраничный сайт компании **Haifisch**, разработанный с фокусом на адаптивность, производительность и современный UI/UX.

## 🌐 Сайт

👉 [haifisch.ru](https://haifisch.ru)

## 🚀 Технологии

- **React 19** — библиотека для создания UI
- **TypeScript** — типизированный JavaScript
- **CSS Modules** — инкапсуляция стилей
- **Framer Motion** — анимации компонентов
- **i18next** — интернационализация (мультиязычность)
- **Vite** — быстрый сборщик и дев-сервер
- **ESLint + Prettier** — автоформатирование и линтинг
- **Responsive Design** — адаптивная верстка на всех брейкпоинтах
- **Пользовательские переменные CSS (`:root`)** — для консистентной типографики и отступов

## 🧩 Особенности

- Гибкая сетка и адаптивные медиазапросы от `480px` до `1200px+`
- Анимации появления блоков при скролле и наведении
- Кнопки с вариациями (`primary`, `outline`)
- Универсальные ссылки (`as="a"` / `as="button"`)
- Использование `lazy` загрузки для изображений
- Поддержка SEO и социальных ссылок
- Интеграция Яндекс.Карт (через компонент `YandexMap`)

## 🛠️ Скрипты

```bash
# Установка зависимостей
npm install

# Локальная разработка
npm dev

# Сборка проекта
npm build

# Превью сборки
npm preview

# Линтинг
npm lint
```

## 📦 Деплой

Проект собирается через Vite и размещается на **cloud.ru**. Деплой осуществляется через **GitHub Actions**.

## 🧪 TODO / Возможные улучшения

- Добавление формы обратной связи
- Автоматическое определение языка
- Тесты на компоненты
- Поддержка темной темы

## 🧑‍💻 Автор

[Nikiteo](https://github.com/Nikiteo)
