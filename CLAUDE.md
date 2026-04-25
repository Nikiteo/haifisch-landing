# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Команды

```bash
npm run dev           # Dev-сервер на порту 3000
npm run build         # Проверка TypeScript + сборка Vite → dist/
npm run preview       # Предпросмотр продакшн-сборки локально
npm run lint          # Запуск ESLint
npm run lint:fix      # Автоисправление ошибок линтера
npm run build:catalog # Загрузка каталога из Yandex API → src/assets/catalog.json
```

## Архитектура

React + TypeScript SPA для Haifisch (декоративные изделия из мрамора). Сборщик — Vite, анимации — Framer Motion, локализация — i18next (только русский, `src/locales/ru.json`).

**Роутинг** (`src/App.tsx`) — два маршрута:

- `/` — `MainPage`: секции страницы расположены вертикально (Main, About, Catalog, Tables, Advantages, Shops, Footer)
- `/catalog` — `CatalogPage`: полный каталог с Header

**Слои компонентов:**

- `src/pages/MainPage/` — секционные компоненты страницы, каждый в своей папке
- `src/components/` — переиспользуемые UI-компоненты, общие для всех страниц
- `src/hooks/` — `useScrollToId`, `useMediaQuery`
- `src/lib/` — утилиты (`ymaps.ts` для Яндекс Карт, `get-short-product-name.ts`)
- `src/styles/` — глобальные стили (`global.css`, `reset.css`, `variables.css` с дизайн-токенами)

**Пайплайн данных каталога:** `scripts/build-catalog.ts` забирает XML из Yandex API и выгружает `src/assets/catalog.json`. Запускается автоматически через GitHub Actions каждую ночь в 3:00 UTC, коммитит обновлённый JSON и запускает деплой.

**Стили:** CSS Modules с camelCase-конвенцией. CSS-переменные в `src/styles/variables.css` для отступов, типографики и брейкпоинтов (480px / 640px / 960px / 1200px).

**Алиас пути:** `@` указывает на `src/`.

## Стиль кода

ESLint использует `@antfu/eslint-config` — одинарные кавычки, отступы табами. TypeScript strict mode включён; неиспользуемые переменные и параметры запрещены.

SVG импортируются как React-компоненты через плагин SVGR.
