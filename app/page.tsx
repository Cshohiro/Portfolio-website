import Image from "next/image";

interface ChartItem {
  name: string;
  label: string;
  description: string;
}

interface FilmarksProject {
  title: string;
  subtitle: string;
  tags: string[];
  highlights: string[];
  objective: string;
  dataset: string[];
  findings: string[];
  charts: ChartItem[];
  chartPath: string;
}

interface SimpleProject {
  title: string;
  subtitle: string;
  tags: string[];
  highlights: string[];
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

const filmarksProject: FilmarksProject = {
  title: "Filmarks映画視聴行動分析",
  subtitle:
    "Filmarksの公開データを用いて、日本ユーザーの映画視聴傾向を分析したデータ分析プロジェクト。",
  tags: ["Python", "aiohttp", "BeautifulSoup", "asyncio", "matplotlib"],
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
        "保存数 を基準に、ユーザーが『観たい』と強く反応した作品を可視化しています。",
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
  chartPath: "D:/StudyPy/py_practice/WORK/w02_movieRank/charts",
};

const simpleProjects: SimpleProject[] = [
  {
    title: "Web Scraping Automation Projects",
    subtitle:
      "動的ページを含むWebデータ取得と自動化処理を行う、実践的なスクレイピング開発群。",
    tags: ["Python", "Playwright", "JSON", "MongoDB", "Automation"],
    highlights: [
      "動的ページの取得と解析",
      "自動化フロー構築",
      "構造化保存と再利用設計",
      "実案件を意識した収集基盤",
    ],
  },
];

const interests = [
  "Scraping & Automation",
  "Data Analysis",
  "AI Tools",
  "Practical Prototyping",
];

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 2500));

  const filmarks = filmarksProject;

  return (
    <main className="min-h-screen bg-white text-[#111111]">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-0 md:px-10 lg:px-14">
        <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-5 md:px-10 lg:px-14">
            <nav className="flex gap-8 text-sm tracking-[0.08em] text-black/70 md:gap-14">
              <a className="transition hover:text-[#a48948]" href="#home">
                Home
              </a>
              <a className="transition hover:text-[#a48948]" href="#projects">
                Projects
              </a>
              <a
                className="transition hover:text-[#a48948]"
                href="#filmarks-detail"
              >
                Filmarks Detail
              </a>
              <a className="transition hover:text-[#a48948]" href="#about">
                About
              </a>
            </nav>
          </div>
        </header>

        <section
          id="home"
          className="grid min-h-[88vh] items-center gap-14 py-14 md:grid-cols-[1.15fr_0.85fr] md:py-20"
        >
          <div className="max-w-3xl animate-[fadeUp_0.9s_ease-out_forwards] opacity-0">
            <div className="mb-6 inline-block border-b border-[#a48948] pb-2 text-sm tracking-[0.24em] text-[#a48948]">
              KOGAKUIN UNIVERSITY
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-[0.02em] md:text-6xl">
              張 書浩
            </h1>

            <div className="mt-4 text-2xl font-medium leading-tight tracking-[0.04em] text-black/80 md:text-3xl">
              工学院大学 3年生
            </div>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/72 md:text-xl">
              Python・Web開発を軸に、実際に動く仕組みを作ることを重視しています。
              データ収集、分析、可視化、そしてシステム化まで一貫して実装することに関心があります。
            </p>

            <div className="mt-12">
              <div className="text-sm uppercase tracking-[0.28em] text-[#a48948]">
                スキル
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-3" id="skills">
                {skills.map((group, idx) => (
                  <div
                    key={group.title}
                    className="border border-black/10 p-5 opacity-0"
                    style={{
                      animation: `fadeUp 0.8s ease-out ${0.25 + idx * 0.12}s forwards`,
                    }}
                  >
                    <h3 className="text-sm font-semibold tracking-[0.06em] text-black/88">
                      {group.title}
                    </h3>
                    <ul className="mt-4 space-y-2 text-sm leading-7 text-black/68">
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
                className="border-b border-black pb-1 tracking-[0.06em] transition hover:border-[#a48948] hover:text-[#a48948]"
              >
                Projects →
              </a>
              <a
                href="#about"
                className="border-b border-black/30 pb-1 tracking-[0.06em] text-black/72 transition hover:border-[#a48948] hover:text-[#a48948]"
              >
                About →
              </a>
            </div>
          </div>

          <div
            className="relative opacity-0"
            style={{ animation: "fadeUp 0.9s ease-out 0.45s forwards" }}
          >
            <div className="absolute -left-4 top-0 hidden h-32 w-32 border border-[#a48948]/25 md:block" />
            <div className="relative border border-black/10 bg-[#faf9f6] p-6 md:p-8">
              <div className="text-xs uppercase tracking-[0.28em] text-black/45">
                Current Stack
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "TypeScript",
                  "React",
                  "Next.js",
                  "TailwindCSS",
                  "Python",
                  "C",
                  "C++",
                  "Unity",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="border border-black/10 px-3 py-2 text-xs tracking-[0.08em] text-black/68"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 border-t border-black/10 pt-6">
                <div className="text-xs uppercase tracking-[0.28em] text-black/45">
                  Selected Focus
                </div>
                <div className="mt-4 space-y-4">
                  {[
                    ["Data Collection", "公開Webデータの取得と整理"],
                    ["Analysis", "行動指標の設計と可視化"],
                    ["Implementation", "実際に動くシステムの構築"],
                  ].map(([title, desc], idx) => (
                    <div
                      key={title}
                      className="border-b border-black/10 pb-4 last:border-b-0 last:pb-0"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="text-base font-medium text-black/88">
                            {title}
                          </div>
                          <div className="mt-1 text-sm leading-7 text-black/62">
                            {desc}
                          </div>
                        </div>
                        <div className="text-xs tracking-[0.24em] text-[#a48948]">
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

        <section id="projects" className="border-t border-black/10 py-16 md:py-20">
          <div className="grid gap-8 md:grid-cols-[0.38fr_1fr]">
            <div>
              <div className="text-sm uppercase tracking-[0.28em] text-[#a48948]">
                Projects
              </div>
              <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-4xl">
                実装と分析を通して、
                <br />
                形にしてきたプロジェクト
              </h2>
            </div>

            <div className="space-y-8">
              <article className="border border-black/10 p-6 md:p-8">
                <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                  <div>
                    <h3 className="text-2xl font-medium leading-tight">
                      {filmarks.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-sm leading-8 text-black/68 md:text-base">
                      {filmarks.subtitle}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {filmarks.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-black/10 px-3 py-1.5 text-xs tracking-[0.08em] text-black/66"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-[0.28em] text-[#a48948]">
                      Highlights
                    </div>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-black/72">
                      {filmarks.highlights.map((point) => (
                        <li
                          key={point}
                          className="border-b border-black/10 pb-3 last:border-b-0 last:pb-0"
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
                    className="border-b border-black/30 pb-1 text-sm tracking-[0.06em] text-black/72 transition hover:border-[#a48948] hover:text-[#a48948]"
                  >
                    詳細を見る →
                  </a>
                </div>
              </article>

              {simpleProjects.map((project) => (
                <article
                  key={project.title}
                  className="border border-black/10 p-6 md:p-8"
                >
                  <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                    <div>
                      <h3 className="text-2xl font-medium leading-tight">
                        {project.title}
                      </h3>
                      <p className="mt-4 max-w-2xl text-sm leading-8 text-black/68 md:text-base">
                        {project.subtitle}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="border border-black/10 px-3 py-1.5 text-xs tracking-[0.08em] text-black/66"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-xs uppercase tracking-[0.28em] text-[#a48948]">
                        Highlights
                      </div>
                      <ul className="mt-4 space-y-3 text-sm leading-7 text-black/72">
                        {project.highlights.map((point) => (
                          <li
                            key={point}
                            className="border-b border-black/10 pb-3 last:border-b-0 last:pb-0"
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

        <section
          id="filmarks-detail"
          className="border-t border-black/10 py-16 md:py-20"
        >
          <div className="grid gap-8 md:grid-cols-[0.38fr_1fr]">
            <div>
              <div className="text-sm uppercase tracking-[0.28em] text-[#a48948]">
                Filmarks Detail
              </div>
              <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-4xl">
                収集・分析・可視化まで
                <br />
                一貫して設計したプロジェクト
              </h2>
            </div>

            <div className="space-y-8">
              <div className="border border-black/10 p-6 md:p-8">
                <div className="text-xs uppercase tracking-[0.28em] text-[#a48948]">
                  Overview
                </div>
                <p className="mt-4 text-sm leading-8 text-black/68 md:text-base">
                  {filmarks.objective}
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="border border-black/10 p-6">
                  <h3 className="text-sm uppercase tracking-[0.28em] text-[#a48948]">
                    Dataset
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm leading-7 text-black/72">
                    {filmarks.dataset.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="border border-black/10 p-6">
                  <h3 className="text-sm uppercase tracking-[0.28em] text-[#a48948]">
                    Key Findings
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm leading-7 text-black/72">
                    {filmarks.findings.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border border-black/10 p-6 md:p-8">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div className="text-xs uppercase tracking-[0.28em] text-[#a48948]">
                    Chart Images
                  </div>
                  <div className="text-sm text-black/55">
                    Path: {filmarks.chartPath}
                  </div>
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  {filmarks.charts.map((chart) => (
                    <div
                      key={chart.name}
                      className="border border-black/10 bg-[#faf9f6] p-4"
                    >
                      <div className="overflow-hidden border border-black/10 bg-white">
                        <Image
                          src={chart.name}
                          alt={chart.label}
                          width={1200}
                          height={900}
                          className="h-auto w-full object-cover transition duration-500 hover:scale-[1.02]"
                        />
                      </div>
                      <div className="mt-4 text-base font-medium text-black/88">
                        {chart.label}
                      </div>
                      <p className="mt-2 text-sm leading-7 text-black/66">
                        {chart.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-black/10 py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-[0.45fr_0.55fr]">
            <div>
              <div className="text-sm uppercase tracking-[0.28em] text-[#a48948]">
                About
              </div>
              <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-4xl">
                実際に動くものを作りながら、
                <br />
                技術を深めています。
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-black/72 md:text-lg">
                日本で情報通信分野を学びながら、Pythonを中心としたスクレイピング、データ分析、そしてWeb実装に取り組んでいます。
                単にコードを書くのではなく、課題を整理し、実行可能な形まで落とし込むプロセスを大切にしています。
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {interests.map((item) => (
                  <span
                    key={item}
                    className="border border-[#a48948]/35 px-3 py-2 text-sm tracking-[0.04em] text-black/76"
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