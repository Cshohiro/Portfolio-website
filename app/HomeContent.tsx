"use client";

import { useEffect, useState } from "react";
import ImageLightbox from "./ImageLightbox";

// 语言与页面内容的数据结构定义。
type Language = "ja" | "zh";

interface ChartItem {
  name: string;
  label: string;
  description: string;
}

interface ProjectContent {
  title: string;
  subtitle: string;
  highlights: string[];
  objective: string;
  dataset: string[];
  findings: string[];
  charts: ChartItem[];
}

interface SimpleProject {
  title: string;
  subtitle: string;
  highlights: string[];
}

interface Copy {
  languageLabel: string;
  languageNames: Record<Language, string>;
  nav: {
    home: string;
    projects: string;
    detail: string;
    about: string;
  };
  hero: {
    school: string;
    name: string;
    role: string;
    description: string[];
    skillsLabel: string;
    projectsLink: string;
    aboutLink: string;
    stackLabel: string;
    focusLabel: string;
    focus: [string, string][];
  };
  projects: {
    eyebrow: string;
    title: string[];
    detailLink: string;
    highlightsLabel: string;
    filmarks: ProjectContent;
    simple: SimpleProject[];
  };
  detail: {
    eyebrow: string;
    title: string[];
    overviewLabel: string;
    datasetLabel: string;
    findingsLabel: string;
    chartsLabel: string;
  };
  about: {
    eyebrow: string;
    title: string[];
    body: string[];
  };
}

const skills = [
  {
    title: "Web Scraping / Automation",
    items: ["Python", "Web Scraping", "Playwright / Requests"],
  },
  {
    title: "Programming",
    items: ["C言語（3年）", "C++（1年）", "Unity C#（1年）"],
  },
  {
    title: "Web Development",
    items: ["TypeScript", "React", "Next.js", "TailwindCSS"],
  },
];

// 项目中复用的标签、技术栈和兴趣方向数据。
const tags = ["Python", "aiohttp", "BeautifulSoup", "asyncio", "matplotlib"];

const simpleTags = ["Python", "Playwright", "JSON", "MongoDB", "Automation"];

const stack = [
  "TypeScript",
  "React",
  "Next.js",
  "TailwindCSS",
  "Python",
  "C",
  "C++",
  "Unity",
];

const interests = [
  "Scraping & Automation",
  "Data Analysis",
  "AI Tools",
  "Practical Prototyping",
];

// 多语言文案配置，页面渲染时根据当前语言读取对应内容。
const copy: Record<Language, Copy> = {
  ja: {
    languageLabel: "Language:",
    languageNames: {
      ja: "日本語",
      zh: "中文",
    },
    nav: {
      home: "Home",
      projects: "Projects",
      detail: "Filmarks Detail",
      about: "About",
    },
    hero: {
      school: "KOGAKUIN UNIVERSITY",
      name: "張 書浩",
      role: "工学院大学 3年生",
      description: [
        "Python・Web開発を軸に、実際に動く仕組みを作ることを重視しています。",
        "データ収集、分析、可視化、そしてシステム化まで一貫して実装することに関心があります。",
      ],
      skillsLabel: "スキル",
      projectsLink: "Projects →",
      aboutLink: "About →",
      stackLabel: "Current Stack",
      focusLabel: "Selected Focus",
      focus: [
        ["Data Collection", "公開Webデータの取得と整理"],
        ["Analysis", "行動指標の設計と可視化"],
        ["Implementation", "実際に動くシステムの構築"],
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: ["実装と分析を通して、", "形にしてきたプロジェクト"],
      detailLink: "詳細を見る →",
      highlightsLabel: "Highlights",
      filmarks: {
        title: "Filmarks映画視聴行動分析",
        subtitle:
          "Filmarksの公開データを用いて、日本ユーザーの映画視聴傾向を分析したデータ分析プロジェクト。",
        highlights: [
          "92,938件のデータ収集",
          "独自指標 Viewing Multiplier を設計",
          "ジャンル別の自然拡散傾向を分析",
          "ランキング・可視化まで一貫実装",
        ],
        objective:
          "Filmarksの公開映画データを用いて、日本ユーザーの『観たい』と『観た』の行動差を分析し、作品・ジャンル単位で自然拡散傾向を可視化することを目的としたプロジェクトです。",
        dataset: [
          "原始取得件数：92,938件",
          "重複除去後ユニーク映画数：69,249件",
          "重複率：25.49%",
          "平均出現回数：1.34回",
        ],
        findings: [
          "ファミリー映画は自然拡散力が最も高い",
          "アニメ作品はIP依存による強い拡散傾向を示す",
          "ドラマ / 恋愛 / クライム系は計画型視聴傾向が強い",
        ],
        charts: [
          {
            name: "/charts/genre_weighted_view_multiplier.png",
            label: "ジャンル別自然拡散ランキング",
            description:
              "ジャンルごとの mark / clip 比率を比較したグラフです。どのジャンルが『保存せずに直接視聴されやすいか』を把握できます。",
          },
          {
            name: "/charts/top20_clip_movies.png",
            label: "最も期待された映画 Top20",
            description:
              "保存数を基準に、ユーザーが『観たい』と強く反応した作品を可視化しています。",
          },
          {
            name: "/charts/top20_mark_movies.png",
            label: "最も視聴された映画 Top20",
            description:
              "mark_count を基準に、実際に多く観られた作品を示しています。",
          },
          {
            name: "/charts/top20_view_multiplier_movies.png",
            label: "自然拡散が強い映画 Top20",
            description:
              "独自指標 Viewing Multiplier により、『保存を経由せず直接観られやすい作品』を抽出しています。",
          },
        ],
      },
      simple: [
        {
          title: "Web Scraping Automation Projects",
          subtitle:
            "動的ページを含むWebデータ取得と自動化処理を行う、実践的なスクレイピング開発群。",
          highlights: [
            "動的ページの取得と解析",
            "自動化フロー構築",
            "構造化保存と再利用設計",
            "実案件を意識した収集基盤",
          ],
        },
      ],
    },
    detail: {
      eyebrow: "Filmarks Detail",
      title: ["収集・分析・可視化まで", "一貫して設計したプロジェクト"],
      overviewLabel: "Overview",
      datasetLabel: "Dataset",
      findingsLabel: "Key Findings",
      chartsLabel: "Chart Images",
    },
    about: {
      eyebrow: "About",
      title: ["実際に動くものを作りながら、", "技術を深めています。"],
      body: [
        "日本で情報通信分野を学びながら、Pythonを中心としたスクレイピング、データ分析、そしてWeb実装に取り組んでいます。",
        "単にコードを書くのではなく、課題を整理し、実行可能な形まで落とし込むプロセスを大切にしています。",
      ],
    },
  },
  zh: {
    languageLabel: "Language:",
    languageNames: {
      ja: "日本語",
      zh: "中文",
    },
    nav: {
      home: "首页",
      projects: "项目",
      detail: "Filmarks 详情",
      about: "关于",
    },
    hero: {
      school: "KOGAKUIN UNIVERSITY",
      name: "张 书浩",
      role: "工学院大学 三年级",
      description: [
        "主要围绕 Python 与 Web 开发，专注把想法真正落地成可运行的系统。",
        "更关注从数据采集、分析到可视化与系统搭建的完整流程。",
      ],
      skillsLabel: "技能",
      projectsLink: "项目 →",
      aboutLink: "关于 →",
      stackLabel: "目前使用的技术栈",
      focusLabel: "关注方向",
      focus: [
        ["数据收集", "公开 Web 数据的获取与整理"],
        ["分析", "行为指标设计与可视化"],
        ["实现", "搭建真正能够运行起来的系统"],
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: ["通过实践与分析，", "把想法沉淀成真正的项目"],
      detailLink: "查看详情 →",
      highlightsLabel: "亮点",
      filmarks: {
        title: "Filmarks 电影观看行为分析",
        subtitle:
          "基于 Filmarks 公共数据，对日本用户电影观看偏好进行分析的数据项目。",
        highlights: [
          "收集 92,938 条数据",
          "自主设计指标 Viewing Multiplier",
          "分析不同类型电影的自然扩散倾向",
          "完成从排名到可视化的一体化实现",
        ],
        objective:
          "本项目基于 Filmarks 公共电影数据，分析日本用户在“想看”与“看过”之间的行为差异，并从作品和类型两个维度，对自然传播倾向进行可视化呈现。",
        dataset: [
          "原始获取数量：92,938 条",
          "去重后唯一电影数：69,249 部",
          "重复率：25.49%",
          "平均出现次数：1.34 次",
        ],
        findings: [
          "家庭电影的自然扩散力最高",
          "动画作品呈现出较强的 IP 依赖扩散倾向",
          "剧情 / 恋爱 / 犯罪类更偏计划型观看",
        ],
        charts: [
          {
            name: "/charts/genre_weighted_view_multiplier.png",
            label: "按类型划分的自然扩散排名",
            description:
              "比较不同类型的 mark / clip 比率，用于判断哪些类型更容易被用户直接观看。",
          },
          {
            name: "/charts/top20_clip_movies.png",
            label: "最受期待电影 Top20",
            description:
              "以保存数为基准，可视化用户强烈表达“想看”的作品。",
          },
          {
            name: "/charts/top20_mark_movies.png",
            label: "观看人数最多电影 Top20",
            description:
              "以 mark_count 为基准，展示实际被大量观看的电影作品。",
          },
          {
            name: "/charts/top20_view_multiplier_movies.png",
            label: "自然扩散较强电影 Top20",
            description:
              "通过 Viewing Multiplier 提取更容易绕过保存行为、直接被观看的作品。",
          },
        ],
      },
      simple: [
        {
          title: "Web 爬虫与自动化项目",
          subtitle:
            "围绕动态页面的数据采集与自动化处理，持续构建面向真实场景的爬虫项目。",
          highlights: [
            "动态页面获取与解析",
            "自动化流程构建",
            "结构化保存与复用设计",
            "面向实际场景的数据采集基础",
          ],
        },
      ],
    },
    detail: {
      eyebrow: "Filmarks Detail",
      title: ["从收集、分析到可视化，", "完整设计的数据项目"],
      overviewLabel: "概要",
      datasetLabel: "数据集",
      findingsLabel: "主要发现",
      chartsLabel: "图表图片",
    },
    about: {
      eyebrow: "About",
      title: ["一边构建实际可运行的作品，", "一边持续深化技术能力。"],
      body: [
        "目前在日本学习信息通信相关专业，同时持续实践 Python、爬虫开发、数据分析与 Web 技术。",
        "比起单纯完成代码，更重视理解问题本身，并将思路整理成真正可落地的方案。",
      ],
    },
  },
};

// 首页主体组件，负责语言切换和各内容模块渲染。
export default function HomeContent() {
  const [language, setLanguage] = useState<Language>("ja");
  const [languageOpen, setLanguageOpen] = useState(false);
  const t = copy[language];
  const filmarks = t.projects.filmarks;

  // 切换语言时同步更新 html lang，减少浏览器误判页面语言。
  useEffect(() => {
    document.documentElement.lang = language === "ja" ? "ja" : "zh-CN";
  }, [language]);

  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-0 md:px-10 lg:px-14">
        {/* 顶部导航和折叠式语言切换。 */}
        <header className="sticky top-0 z-50 border-b border-[color:var(--color-border)] bg-[var(--color-nav)] backdrop-blur-md">
          <div className="mx-auto grid max-w-7xl gap-4 px-6 py-5 md:grid-cols-[1fr_auto_1fr] md:items-center md:px-10 lg:px-14">
            <nav className="flex flex-wrap justify-center gap-6 text-sm tracking-[0.08em] text-[var(--color-text-muted)] md:col-start-2 md:gap-10">
              <a className="transition hover:text-[var(--color-accent)]" href="#home">
                {t.nav.home}
              </a>
              <a
                className="transition hover:text-[var(--color-accent)]"
                href="#projects"
              >
                {t.nav.projects}
              </a>
              <a
                className="transition hover:text-[var(--color-accent)]"
                href="#filmarks-detail"
              >
                {t.nav.detail}
              </a>
              <a
                className="transition hover:text-[var(--color-accent)]"
                href="#about"
              >
                {t.nav.about}
              </a>
            </nav>

            <div className="relative flex justify-center text-xs tracking-[0.08em] text-[var(--color-text-subtle)] md:col-start-3 md:justify-end">
              <button
                type="button"
                aria-expanded={languageOpen}
                className="flex items-center gap-2 border border-[color:var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-[var(--color-text-muted)] transition hover:border-[color:var(--color-border-strong)] hover:text-[var(--color-text)] focus:outline-none focus-visible:border-[color:var(--color-accent)]"
                onClick={() => setLanguageOpen((open) => !open)}
              >
                <span>{t.languageLabel}</span>
                <span className="text-[var(--color-accent)]">
                  {t.languageNames[language]}
                </span>
                <svg
                  aria-hidden="true"
                  className={`h-3 w-3 text-[var(--color-text-subtle)] transition-transform duration-200 ${
                    languageOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M4.2 6.4L8 10.1L11.8 6.4"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {languageOpen ? (
                <div className="absolute right-auto top-full mt-2 min-w-40 border border-[color:var(--color-border)] bg-[var(--color-surface)] p-1 shadow-xl md:right-0">
                  {(["ja", "zh"] as const).map((item) => (
                    <button
                      key={item}
                      type="button"
                      className={`block w-full px-3 py-2 text-left transition focus:outline-none focus-visible:border-[color:var(--color-accent)] ${
                        language === item
                          ? "bg-[var(--color-surface-strong)] text-[var(--color-accent)]"
                          : "text-[var(--color-text-muted)] hover:bg-[var(--color-surface-strong)] hover:text-[var(--color-text)]"
                      }`}
                      onClick={() => {
                        setLanguage(item);
                        setLanguageOpen(false);
                      }}
                    >
                      {t.languageNames[item]}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </header>

        {/* Hero：个人简介、技能概览和当前关注方向。 */}
        <section
          id="home"
          className="grid min-h-[88vh] items-center gap-14 py-14 md:grid-cols-[1.15fr_0.85fr] md:py-20"
        >
          <div className="max-w-3xl animate-[fadeUp_0.9s_ease-out_forwards] opacity-0">
            <div className="mb-6 inline-block border-b border-[color:var(--color-accent)] pb-2 text-sm tracking-[0.24em] text-[var(--color-accent)]">
              {t.hero.school}
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-[0.02em] md:text-6xl">
              {t.hero.name}
            </h1>

            <div className="mt-4 text-2xl font-medium leading-tight tracking-[0.04em] text-[var(--color-text-muted)] md:text-3xl">
              {t.hero.role}
            </div>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-text-muted)] md:text-xl">
              {t.hero.description.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>

            <div className="mt-12">
              <div className="text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]">
                {t.hero.skillsLabel}
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-3" id="skills">
                {skills.map((group, idx) => (
                  <div
                    key={group.title}
                    className="border border-[color:var(--color-border)] bg-[var(--color-surface)] p-5 opacity-0 transition hover:border-[color:var(--color-border-strong)]"
                    style={{
                      animation: `fadeUp 0.8s ease-out ${
                        0.25 + idx * 0.12
                      }s forwards`,
                    }}
                  >
                    <h3 className="text-sm font-semibold tracking-[0.06em] text-[var(--color-text)]">
                      {group.title}
                    </h3>
                    <ul className="mt-4 space-y-2 text-sm leading-7 text-[var(--color-text-muted)]">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm">
              <a
                href="#projects"
                className="border-b border-[color:var(--color-text)] pb-1 tracking-[0.06em] transition hover:border-[color:var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                {t.hero.projectsLink}
              </a>
              <a
                href="#about"
                className="border-b border-[color:var(--color-border-strong)] pb-1 tracking-[0.06em] text-[var(--color-text-muted)] transition hover:border-[color:var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                {t.hero.aboutLink}
              </a>
            </div>
          </div>

          <div
            className="relative opacity-0"
            style={{ animation: "fadeUp 0.9s ease-out 0.45s forwards" }}
          >
            <div className="absolute -left-4 top-0 hidden h-32 w-32 border border-[color:var(--color-accent)] opacity-25 md:block" />
            <div className="relative border border-[color:var(--color-border)] bg-[var(--color-surface)] p-6 md:p-8">
              <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-text-subtle)]">
                {t.hero.stackLabel}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {stack.map((tag) => (
                  <span
                    key={tag}
                    className="border border-[color:var(--color-border)] bg-[var(--color-surface-strong)] px-3 py-2 text-xs tracking-[0.08em] text-[var(--color-text-muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 border-t border-[color:var(--color-border)] pt-6">
                <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-text-subtle)]">
                  {t.hero.focusLabel}
                </div>
                <div className="mt-4 space-y-4">
                  {t.hero.focus.map(([title, desc], idx) => (
                    <div
                      key={title}
                      className="border-b border-[color:var(--color-border)] pb-4 last:border-b-0 last:pb-0"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="text-base font-medium text-[var(--color-text)]">
                            {title}
                          </div>
                          <div className="mt-1 text-sm leading-7 text-[var(--color-text-subtle)]">
                            {desc}
                          </div>
                        </div>
                        <div className="text-xs tracking-[0.24em] text-[var(--color-accent)]">
                          0{idx + 1}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects：项目列表和项目亮点。 */}
        <section
          id="projects"
          className="border-t border-[color:var(--color-border)] py-16 md:py-20"
        >
          <div className="grid gap-8 md:grid-cols-[0.38fr_1fr]">
            <div>
              <div className="text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]">
                {t.projects.eyebrow}
              </div>
              <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-4xl">
                {t.projects.title[0]}
                <br />
                {t.projects.title[1]}
              </h2>
            </div>

            <div className="space-y-8">
              <article className="border border-[color:var(--color-border)] bg-[var(--color-surface)] p-6 md:p-8 transition hover:border-[color:var(--color-border-strong)]">
                <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                  <div>
                    <h3 className="text-2xl font-medium leading-tight">
                      {filmarks.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-sm leading-8 text-[var(--color-text-muted)] md:text-base">
                      {filmarks.subtitle}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-[color:var(--color-border)] bg-[var(--color-surface-strong)] px-3 py-1.5 text-xs tracking-[0.08em] text-[var(--color-text-muted)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-accent)]">
                      {t.projects.highlightsLabel}
                    </div>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-text-muted)]">
                      {filmarks.highlights.map((point) => (
                        <li
                          key={point}
                          className="border-b border-[color:var(--color-border)] pb-3 last:border-b-0 last:pb-0"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <a
                    href="#filmarks-detail"
                    className="border-b border-[color:var(--color-border-strong)] pb-1 text-sm tracking-[0.06em] text-[var(--color-text-muted)] transition hover:border-[color:var(--color-accent)] hover:text-[var(--color-accent)]"
                  >
                    {t.projects.detailLink}
                  </a>
                </div>
              </article>

              {t.projects.simple.map((project) => (
                <article
                  key={project.title}
                  className="border border-[color:var(--color-border)] bg-[var(--color-surface)] p-6 md:p-8 transition hover:border-[color:var(--color-border-strong)]"
                >
                  <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                    <div>
                      <h3 className="text-2xl font-medium leading-tight">
                        {project.title}
                      </h3>
                      <p className="mt-4 max-w-2xl text-sm leading-8 text-[var(--color-text-muted)] md:text-base">
                        {project.subtitle}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {simpleTags.map((tag) => (
                          <span
                            key={tag}
                            className="border border-[color:var(--color-border)] bg-[var(--color-surface-strong)] px-3 py-1.5 text-xs tracking-[0.08em] text-[var(--color-text-muted)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-accent)]">
                        {t.projects.highlightsLabel}
                      </div>
                      <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-text-muted)]">
                        {project.highlights.map((point) => (
                          <li
                            key={point}
                            className="border-b border-[color:var(--color-border)] pb-3 last:border-b-0 last:pb-0"
                          >
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Filmarks 详情：项目说明、数据指标和图表展示。 */}
        <section
          id="filmarks-detail"
          className="border-t border-[color:var(--color-border)] py-16 md:py-20"
        >
          <div className="grid gap-8 md:grid-cols-[0.38fr_1fr]">
            <div>
              <div className="text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]">
                {t.detail.eyebrow}
              </div>
              <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-4xl">
                {t.detail.title[0]}
                <br />
                {t.detail.title[1]}
              </h2>
            </div>

            <div className="space-y-8">
              <div className="border border-[color:var(--color-border)] bg-[var(--color-surface)] p-6 md:p-8 transition hover:border-[color:var(--color-border-strong)]">
                <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-accent)]">
                  {t.detail.overviewLabel}
                </div>
                <p className="mt-4 text-sm leading-8 text-[var(--color-text-muted)] md:text-base">
                  {filmarks.objective}
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="border border-[color:var(--color-border)] bg-[var(--color-surface)] p-6">
                  <h3 className="text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]">
                    {t.detail.datasetLabel}
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm leading-7 text-[var(--color-text-muted)]">
                    {filmarks.dataset.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="border border-[color:var(--color-border)] bg-[var(--color-surface)] p-6">
                  <h3 className="text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]">
                    {t.detail.findingsLabel}
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm leading-7 text-[var(--color-text-muted)]">
                    {filmarks.findings.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border border-[color:var(--color-border)] bg-[var(--color-surface)] p-6 md:p-8 transition hover:border-[color:var(--color-border-strong)]">
                <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-accent)]">
                  {t.detail.chartsLabel}
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  {filmarks.charts.map((chart) => (
                    <div
                      key={chart.name}
                      className="border border-[color:var(--color-border)] bg-[var(--color-surface-strong)] p-4 transition hover:border-[color:var(--color-border-strong)]"
                    >
                      <ImageLightbox src={chart.name} alt={chart.label} />
                      <div className="mt-4 text-base font-medium text-[var(--color-text)]">
                        {chart.label}
                      </div>
                      <p className="mt-2 text-sm leading-7 text-[var(--color-text-muted)]">
                        {chart.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About：个人背景和兴趣方向。 */}
        <section
          id="about"
          className="border-t border-[color:var(--color-border)] py-16 md:py-20"
        >
          <div className="grid gap-10 md:grid-cols-[0.45fr_0.55fr]">
            <div>
              <div className="text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]">
                {t.about.eyebrow}
              </div>
              <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-4xl">
                {t.about.title[0]}
                <br />
                {t.about.title[1]}
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-[var(--color-text-muted)] md:text-lg">
                {t.about.body.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {interests.map((item) => (
                  <span
                    key={item}
                    className="border border-[color:var(--color-accent)] px-3 py-2 text-sm tracking-[0.04em] text-[var(--color-text-muted)] opacity-90"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
