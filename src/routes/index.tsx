import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Bot,
  Mail,
  MessageCircle,
  Palette,
  Plug,
  Rocket,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

type Project = {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  preview: React.ReactNode;
};

const projects: Project[] = [
  {
    title: "StudyFlow",
    description:
      "AI-платформа для персонализированного обучения. Подстраивает программу и темп под каждого студента.",
    tags: ["React", "TypeScript", "OpenAI", "Supabase"],
    gradient:
      "linear-gradient(135deg, #e0e7ff 0%, #f5d0fe 50%, #fce7f3 100%)",
    preview: (
      <div className="flex h-full w-full items-end justify-around gap-2 px-6 pb-6">
        {[40, 65, 50, 85, 70, 55, 90].map((h, i) => (
          <div
            key={i}
            className="w-4 rounded-full"
            style={{
              height: `${h}%`,
              background:
                "linear-gradient(180deg, #a78bfa 0%, #60a5fa 100%)",
            }}
          />
        ))}
      </div>
    ),
  },
  {
    title: "НейроАналитик",
    description:
      "AI-сервис для анализа данных. Превращает сырые таблицы в понятные инсайты и прогнозы за секунды.",
    tags: ["Next.js", "Python", "LangChain", "PostgreSQL"],
    gradient:
      "linear-gradient(135deg, #dbeafe 0%, #cffafe 50%, #ecfeff 100%)",
    preview: (
      <div className="relative flex h-full w-full items-center justify-center">
        <div
          className="h-28 w-28 rounded-full"
          style={{
            background:
              "conic-gradient(#60a5fa 0deg 130deg, #a78bfa 130deg 220deg, #f0abfc 220deg 300deg, #e5e7eb 300deg 360deg)",
          }}
        />
        <div className="absolute h-16 w-16 rounded-full bg-white/90" />
        <span className="absolute text-sm font-semibold text-slate-700">
          7.36%
        </span>
      </div>
    ),
  },
  {
    title: "LaunchPro",
    description:
      "Лендинг для продукта с продуманной структурой и высокой конверсией. Быстрый запуск за считаные дни.",
    tags: ["Astro", "Tailwind", "Framer Motion", "Vercel"],
    gradient:
      "linear-gradient(135deg, #fef3c7 0%, #fecdd3 50%, #fce7f3 100%)",
    preview: (
      <div className="flex h-full w-full flex-col justify-center gap-2 px-8">
        <div className="h-3 w-2/3 rounded-full bg-white/80" />
        <div className="h-3 w-1/2 rounded-full bg-white/60" />
        <div className="mt-2 flex gap-2">
          <div
            className="h-8 w-20 rounded-full"
            style={{
              background:
                "linear-gradient(135deg, #f472b6 0%, #fb923c 100%)",
            }}
          />
          <div className="h-8 w-16 rounded-full border border-white/80 bg-white/40" />
        </div>
      </div>
    ),
  },
];

type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
  result: string;
  gradient: string;
};

const services: Service[] = [
  {
    icon: <Rocket className="h-6 w-6 text-slate-700" />,
    title: "MVP за неделю",
    description:
      "Превращаю идею в работающий продукт за 7 дней. Быстрые циклы обратной связи и готовность к запуску.",
    result: "Готовый продукт за неделю",
    gradient: "linear-gradient(135deg, #fef3c7 0%, #fecdd3 100%)",
  },
  {
    icon: <Bot className="h-6 w-6 text-slate-700" />,
    title: "AI-автоматизация",
    description:
      "Встраиваю искусственный интеллект в процессы: от генерации контента до анализа данных. Экономлю время команды.",
    result: "До 80% рутины на AI",
    gradient: "linear-gradient(135deg, #dbeafe 0%, #cffafe 100%)",
  },
  {
    icon: <Palette className="h-6 w-6 text-slate-700" />,
    title: "UI/UX с вайбкодингом",
    description:
      "Создаю интерфейсы, которые выглядят живо и приятно взаимодействуют. Дизайн, который чувствуется.",
    result: "Интерфейсы с высокой конверсией",
    gradient: "linear-gradient(135deg, #e0e7ff 0%, #f5d0fe 100%)",
  },
  {
    icon: <Plug className="h-6 w-6 text-slate-700" />,
    title: "Интеграции",
    description:
      "Соединяю сервисы, API и базы данных в единый поток. Всё работает синхронно и надёжно.",
    result: "Единая экосистема сервисов",
    gradient: "linear-gradient(135deg, #dcfce7 0%, #fef3c7 100%)",
  },
];

type Step = {
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    title: "Погружаюсь в задачу",
    description:
      "Изучаю бизнес-цели, аудиторию и ограничения. Формулирую чёткое техническое задание и план работы.",
  },
  {
    title: "Создаю с ИИ",
    description:
      "Генерирую архитектуру, код и дизайн с помощью AI-инструментов. Скорость без потери качества.",
  },
  {
    title: "Тестирую и улучшаю",
    description:
      "Проверяю работу на реальных сценариях, собираю обратную связь и довожу детали до идеала.",
  },
  {
    title: "Запускаю и масштабирую",
    description:
      "Вывожу продукт в продакшн, настраиваю аналитику и помогаю расти дальше.",
  },
];

function HeroDashboard() {
  return (
    <div className="relative w-full max-w-md shrink-0 rounded-3xl border border-hero-foreground/5 bg-hero-card p-5 shadow-[0_25px_60px_-20px_rgba(139,92,246,0.35)] backdrop-blur-xl">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs text-hero-muted">Доброе утро</p>
          <h3 className="text-base font-semibold text-hero-foreground">
            AI-Дашборд
          </h3>
        </div>
        <div className="grid h-8 w-8 place-items-center rounded-full bg-neon-orange/25">
          <TrendingUp className="h-4 w-4 text-hero-foreground" />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-2xl border border-hero-foreground/5 bg-hero-bg p-3">
          <p className="text-[10px] uppercase tracking-wider text-hero-muted">
            Доход
          </p>
          <p className="mt-1 text-sm font-bold text-hero-foreground">148К ₽</p>
          <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-hero-foreground/10">
            <div className="h-full w-[72%] rounded-full bg-neon-orange" />
          </div>
        </div>
        <div className="rounded-2xl border border-hero-foreground/5 bg-hero-bg p-3">
          <p className="text-[10px] uppercase tracking-wider text-hero-muted">
            Юзеры
          </p>
          <p className="mt-1 text-sm font-bold text-hero-foreground">3,2К</p>
          <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-hero-foreground/10">
            <div className="h-full w-[58%] rounded-full bg-neon-purple" />
          </div>
        </div>
        <div className="rounded-2xl border border-hero-foreground/5 bg-hero-bg p-3">
          <p className="text-[10px] uppercase tracking-wider text-hero-muted">
            Сделки
          </p>
          <p className="mt-1 text-sm font-bold text-hero-foreground">18</p>
          <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-hero-foreground/10">
            <div className="h-full w-[84%] rounded-full bg-gradient-to-r from-neon-orange to-neon-purple" />
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-2xl border border-hero-foreground/5 bg-hero-bg p-3">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-[10px] text-hero-muted">Выручка</p>
            <span className="rounded-full bg-neon-purple/10 px-1.5 py-0.5 text-[9px] font-medium text-neon-purple">
              +12%
            </span>
          </div>
          <div className="flex h-24 items-end gap-1">
            {[35, 55, 40, 80, 60, 45, 70].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-md bg-neon-purple"
                style={{ height: `${h}%`, opacity: i === 3 ? 1 : 0.35 }}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center rounded-2xl border border-hero-foreground/5 bg-hero-bg p-3">
          <div className="relative h-24 w-24">
            <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="var(--hero-foreground)"
                strokeOpacity="0.1"
                strokeWidth="3"
              />
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="var(--neon-purple)"
                strokeWidth="3"
                strokeDasharray="70, 100"
              />
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="var(--neon-orange)"
                strokeWidth="3"
                strokeDasharray="30, 100"
                strokeDashoffset="-70"
              />
            </svg>
            <div className="absolute inset-0 grid place-items-center">
              <span className="text-xs font-bold text-hero-foreground">
                7.36%
              </span>
            </div>
          </div>
          <p className="mt-2 text-[10px] text-hero-muted">Конверсия</p>
        </div>
      </div>
    </div>
  );
}

function Index() {
  return (
    <main
      className="min-h-screen px-4 py-16 sm:px-8 lg:px-16"
      style={{
        background:
          "linear-gradient(180deg, #fafaff 0%, #f5f3ff 50%, #fdf4ff 100%)",
      }}
    >
      <section
        id="hero"
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-hero-bg px-6 py-16 sm:px-10 lg:px-16 lg:py-24"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.97 0.03 320) 0%, oklch(0.98 0.02 260) 50%, oklch(0.97 0.03 190) 100%)",
        }}
      >
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-neon-purple/40 blur-[120px]" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-neon-orange/30 blur-[120px]" />
        <div className="absolute right-1/3 bottom-0 h-72 w-72 rounded-full bg-pastel-blue/30 blur-[120px]" style={{ background: "color-mix(in oklab, var(--pastel-blue) 40%, transparent)" }} />

        <div className="relative flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex max-w-2xl flex-col gap-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-hero-foreground/10 bg-hero-card/70 px-4 py-1.5 text-xs font-medium text-hero-foreground backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              Специалист по вайбкодингу
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-hero-foreground sm:text-5xl lg:text-6xl">
              Создаю <span className="text-gradient-hero">AI-продукты</span> через{" "}
              <span className="text-gradient-hero">вайбкодинг</span>
            </h1>
            <p className="text-lg text-hero-muted sm:text-xl">
              Быстро собираю MVP, лендинги и веб-приложения с помощью
              современных AI-инструментов.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 rounded-full bg-neon-orange px-6 py-3 text-sm font-semibold text-hero-foreground shadow-lg glow-orange transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-neon-orange/50"
              >
                Посмотреть проекты
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-neon-purple px-6 py-3 text-sm font-semibold text-hero-foreground shadow-lg glow-purple transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-neon-purple/50"
              >
                Связаться
              </a>
            </div>
          </div>

          <HeroDashboard />
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl">
        <div className="mb-10 flex flex-col gap-3">
          <span className="text-sm font-medium text-violet-500">Услуги</span>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Что я делаю
          </h2>
          <p className="max-w-xl text-base text-slate-500">
            Четыре направления, в которых помогаю запускать и развивать
            продукты.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article
              key={s.title}
              className="group flex flex-col gap-5 rounded-3xl border border-white/60 bg-white/70 p-6 shadow-[0_10px_40px_-15px_rgba(139,92,246,0.25)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_rgba(139,92,246,0.35)]"
            >
              <div
                className="grid h-14 w-14 place-items-center rounded-2xl shadow-sm"
                style={{ background: s.gradient }}
              >
                {s.icon}
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-slate-900">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  {s.description}
                </p>
              </div>
              <div className="mt-auto rounded-xl border border-violet-100 bg-violet-50/70 px-4 py-3">
                <p className="text-xs font-medium text-violet-600">{s.result}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl">
        <div className="mb-10 flex flex-col gap-3">
          <span className="text-sm font-medium text-violet-500">Процесс</span>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Как я работаю
          </h2>
          <p className="max-w-xl text-base text-slate-500">
            Прозрачный путь от задачи до запущенного продукта.
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="relative hidden lg:block">
          <div className="absolute left-0 right-0 top-6 h-0.5 bg-violet-100" />
          <div className="grid grid-cols-4 items-stretch gap-6">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="relative flex h-full flex-col items-center gap-6"
              >
                <div className="z-10 grid h-12 w-12 place-items-center rounded-full border border-violet-100 bg-white shadow-[0_4px_20px_-5px_rgba(139,92,246,0.3)]">
                  <span className="text-lg font-bold text-violet-600">
                    {i + 1}
                  </span>
                </div>
                <article className="flex h-full w-full flex-1 flex-col rounded-3xl border border-white/60 bg-white/70 p-6 text-center shadow-[0_10px_40px_-15px_rgba(139,92,246,0.25)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {step.description}
                  </p>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="relative lg:hidden">
          <div className="absolute bottom-0 left-6 top-0 w-0.5 bg-violet-100" />
          <div className="flex flex-col gap-6">
            {steps.map((step, i) => (
              <div key={step.title} className="relative flex items-start gap-5">
                <div className="z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border border-violet-100 bg-white shadow-[0_4px_20px_-5px_rgba(139,92,246,0.3)]">
                  <span className="text-lg font-bold text-violet-600">
                    {i + 1}
                  </span>
                </div>
                <article className="flex-1 rounded-3xl border border-white/60 bg-white/70 p-5 shadow-[0_10px_40px_-15px_rgba(139,92,246,0.25)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {step.description}
                  </p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="mx-auto mt-20 max-w-6xl">
        <div className="mb-10 flex flex-col gap-3">
          <span className="text-sm font-medium text-violet-500">
            Портфолио
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Избранные проекты
          </h2>
          <p className="max-w-xl text-base text-slate-500">
            Несколько работ, собранных в подходе vibe-coding — от идеи до
            запуска.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/60 bg-white/70 p-4 shadow-[0_10px_40px_-15px_rgba(139,92,246,0.25)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_rgba(139,92,246,0.35)]"
            >
              <div
                className="relative h-44 w-full overflow-hidden rounded-2xl"
                style={{ background: p.gradient }}
              >
                {p.preview}
              </div>

              <div className="flex flex-1 flex-col gap-4 p-3 pt-5">
                <h3 className="text-xl font-semibold text-slate-900">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  {p.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-violet-100 bg-violet-50/70 px-3 py-1 text-xs font-medium text-violet-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto mt-20 max-w-6xl">
        <div
          className="relative overflow-hidden rounded-[2.5rem] bg-hero-bg px-6 py-14 shadow-[0_20px_60px_-20px_rgba(139,92,246,0.35)] sm:px-10 sm:py-16 lg:px-16"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.97 0.03 320) 0%, oklch(0.98 0.02 260) 50%, oklch(0.97 0.03 190) 100%)",
          }}
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-neon-purple/40 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-neon-orange/30 blur-[120px]" />
          <div
            className="pointer-events-none absolute right-1/3 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full blur-[120px]"
            style={{ background: "color-mix(in oklab, var(--pastel-blue) 40%, transparent)" }}
          />

          <div className="relative flex flex-col items-center gap-6 text-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-hero-foreground/10 bg-hero-card/70 px-4 py-1.5 text-xs font-medium text-hero-foreground backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              Контакты
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-hero-foreground sm:text-4xl lg:text-5xl">
              Готовы <span className="text-gradient-hero">начать проект?</span>
            </h2>
            <p className="max-w-xl text-base text-hero-muted sm:text-lg">
              Напишите мне, и мы обсудим вашу задачу.
            </p>
            <div className="mt-2 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <a
                href="https://t.me/vibecoder"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-neon-purple px-6 py-3 text-sm font-semibold text-hero-foreground shadow-lg glow-purple transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-neon-purple/50"
              >
                <MessageCircle className="h-4 w-4" />
                Написать в Telegram
              </a>
              <a
                href="mailto:hello@vibecoder.dev"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-neon-orange px-6 py-3 text-sm font-semibold text-hero-foreground shadow-lg glow-orange transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-neon-orange/50"
              >
                <Mail className="h-4 w-4" />
                Написать на Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
