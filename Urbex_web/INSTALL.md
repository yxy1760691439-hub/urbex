# 安装和运行指南

## 前置要求

- Node.js 18+ 
- npm 或 yarn 或 pnpm

## 安装步骤

1. **安装依赖**

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

2. **运行开发服务器**

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

3. **打开浏览器**

访问 [http://localhost:3000](http://localhost:3000)

## 项目结构说明

- `src/app/` - Next.js App Router 页面
- `src/components/` - React 组件
- `src/lib/` - 工具函数和数据类型
- `public/images/` - 静态图片资源（需要自行添加）

## 添加图片资源

在 `public/images/` 目录下创建以下子目录并添加图片：

```
public/
  images/
    cities/        # 城市封面图
    locations/     # 地点图片
    gallery/       # 画廊图片
    gear/          # 装备图片
    stories/       # 故事封面图
    hero-bg.jpg    # 首页背景图
```

## 开发建议

1. 所有图片路径使用 `/images/...` 格式
2. 使用 Next.js Image 组件优化图片加载
3. 数据目前使用静态文件，后续可接入 CMS
4. 样式使用 Tailwind CSS，参考 `STYLE_GUIDE.md`

## 构建生产版本

```bash
npm run build
npm start
```

## 常见问题

### 图片不显示
- 确保图片文件存在于 `public/images/` 目录
- 检查图片路径是否正确
- 开发环境下图片路径应为 `/images/...`

### 样式不生效
- 确保 Tailwind CSS 配置正确
- 检查 `tailwind.config.js` 中的 content 路径
- 重启开发服务器

### TypeScript 错误
- 运行 `npm run build` 检查类型错误
- 确保所有类型定义正确导入







