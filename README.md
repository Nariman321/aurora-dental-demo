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

## Деплой на Vercel

1. Зайди на [vercel.com/new](https://vercel.com/new)
2. Import Git Repository → выбери `aurora-dental-demo`
3. Жми Deploy — никаких настроек не нужно

Через ~1 минуту получишь URL вида `aurora-dental-demo.vercel.app`. Каждый push в `main` будет автоматически деплоиться, на каждый PR появится preview-ссылка.

## Альтернативы

- **Cloudflare Pages** — безлимит трафика, нужен `@cloudflare/next-on-pages`
- **Netlify** — добавь обратно `netlify.toml` с `[build] command = "npm run build"` и плагином `@netlify/plugin-nextjs`
- **GitHub Pages** — только при `output: "export"` в `next.config.ts` (без SSR)
