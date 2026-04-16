# Hiro Portfolio

这是一个使用 Next.js 构建的个人作品集网站，用来展示个人简介、技术栈、项目经历，以及 Filmarks 电影观看行为分析项目的图表成果。

网站当前以日语为默认语言，并提供中文切换。整体视觉风格偏极简、克制、技术型个人作品集，同时支持系统级 dark mode。

## 主要功能

- 个人首页介绍：展示姓名、学校、关注方向和当前技术栈。
- 项目展示：展示 Filmarks 数据分析项目和 Web 爬虫自动化项目。
- 图表展示：展示已放入项目内的图表图片。
- 图片放大交互：点击图表图片后可以打开放大预览，并带有缩放动画。
- 多语言切换：右上角提供折叠式 `Language` 菜单，支持日语和中文。
- Dark mode：根据系统主题自动切换浅色 / 深色模式。
- 加载动画：进入页面时显示短暂的 Intro Loading 动画。

## 技术栈

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint

## 项目结构

```text
app/
  HomeContent.tsx    # 首页主体内容、多语言文案和页面结构
  ImageLightbox.tsx  # 图表图片点击放大组件
  IntroGate.tsx      # 首屏加载动画控制组件
  IntroLoading.tsx   # 加载动画 UI
  globals.css        # 全局样式、语义颜色变量、动画
  layout.tsx         # 页面 metadata、html lang、全局布局
  page.tsx           # 首页入口

public/
  charts/            # Filmarks 项目图表图片
```

## 本地运行

安装依赖：

```bash
npm install
```

启动开发服务器：

```bash
npm run dev
```

打开浏览器访问：

```text
http://localhost:3000
```

## 构建与检查

运行 ESLint：

```bash
npm run lint
```

生产构建：

```bash
npm run build
```

构建完成后可以运行：

```bash
npm run start
```

## 内容维护说明

### 修改页面文案

主要文案集中在 `app/HomeContent.tsx` 的 `copy` 对象中。

当前支持两套语言：

- `ja`：日语，默认语言
- `zh`：中文

如果要修改中文或日语内容，优先修改对应语言对象里的字段，不需要改 JSX 结构。

### 修改图表图片

图表图片放在：

```text
public/charts/
```

页面中的图片路径使用 `/charts/xxx.png`。如果替换图片，保持文件名一致即可；如果新增图片，需要同步修改 `app/HomeContent.tsx` 中对应项目的 `charts` 数组。

### 修改颜色和 dark mode

颜色主要通过 `app/globals.css` 中的语义变量管理，例如：

- `--color-bg`
- `--color-surface`
- `--color-text`
- `--color-text-muted`
- `--color-border`
- `--color-accent`

浅色和深色模式分别在 `:root` 与 `@media (prefers-color-scheme: dark)` 中定义。修改主题时优先调整这些变量，避免在组件里直接硬编码颜色。

## 注意事项

这个项目使用的是 Next.js 16。根据项目根目录的 `AGENTS.md` 约定，修改 Next.js 相关代码前需要先查看本地文档：

```text
node_modules/next/dist/docs/
```

避免直接套用旧版本 Next.js 的 API 或文件约定。
