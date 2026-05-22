# Aurora Dental — демо-сайт

Современный лендинг стоматологической клиники в Алматы. Next.js 16 + Tailwind CSS 4 + Motion.

## Локальный запуск

```bash
npm install
npm run dev
```

Открой [http://localhost:3000](http://localhost:3000).

## Стек

- Next.js 16.2 (App Router, Turbopack)
- React 19
- Tailwind CSS 4
- Motion (Framer Motion) для анимаций
- Manrope (Google Fonts)
- Lucide React иконки

## Структура

- `app/` — корневой layout, метаданные, глобальные стили
- `components/` — все секции лендинга
- `public/` — статика

## Деплой на Netlify

Уже настроен `netlify.toml`. Подключи репозиторий в Netlify:

1. New site → Import from GitHub
2. Выбери репозиторий
3. Настройки сборки определятся автоматически из `netlify.toml`
4. Deploy

Команда сборки: `npm run build` · Publish dir: `.next` · Plugin: `@netlify/plugin-nextjs`
