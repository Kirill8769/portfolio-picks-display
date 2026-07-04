import { createFileRoute } from "@tanstack/react-router";
import { Rocket, Bot, Palette, Plug } from "lucide-react";

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

function Index() {
  return (
    <main
      className="min-h-screen px-4 py-16 sm:px-8 lg:px-16"
      style={{
        background:
          "linear-gradient(180deg, #fafaff 0%, #f5f3ff 50%, #fdf4ff 100%)",
      }}
    >
      <section className="mx-auto max-w-6xl">
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
    </main>
  );
}
