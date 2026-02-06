# 🧩 组件设计规范

## 通用 UI 组件

### Button 按钮

```tsx
// 变体
- primary: 主要按钮（霓虹青色边框）
- secondary: 次要按钮（灰色边框）
- danger: 危险按钮（红色边框）
- ghost: 幽灵按钮（无边框，悬停显示）

// 尺寸
- sm: 小按钮
- md: 中按钮（默认）
- lg: 大按钮

// 状态
- default
- hover: 霓虹光效
- active: 轻微缩放
- disabled: 降低透明度
```

### Card 卡片

```tsx
// 基础卡片
<div className="bg-dark-700 border border-dark-600 rounded-lg p-6">
  {/* 内容 */}
</div>

// 悬停卡片
<div className="card-hover bg-dark-700 border border-dark-600 rounded-lg p-6">
  {/* 内容 */}
</div>

// 霓虹边框卡片
<div className="bg-dark-700 border border-neon-cyan rounded-lg p-6 shadow-glow-cyan">
  {/* 内容 */}
</div>
```

### Badge 徽章

```tsx
// 难度等级徽章
<DifficultyBadge level={1-5} />

// 标签徽章
<Tag text="废弃工厂" color="cyan" />
```

### Modal 模态框

```tsx
// 全屏模态框（用于图片查看器）
<Modal isOpen={isOpen} onClose={onClose}>
  {/* 内容 */}
</Modal>
```

---

## 布局组件

### Header 头部导航

```tsx
结构:
- Logo（左侧）
- 导航菜单（中间）
  - 城市档案
  - 地点索引
  - 装备专区
  - 探险指南
  - 画廊
  - 故事
  - 关于
- 搜索图标（右侧，可选）

样式:
- 背景: bg-dark-800/80 backdrop-blur
- 固定顶部: fixed top-0
- 边框: border-b border-dark-600
```

### Footer 底部

```tsx
结构:
- 网站信息
- 链接列表
- 版权声明
- 特别声明（安全提示）

样式:
- 背景: bg-dark-900
- 文字: text-gray-500
- 边框: border-t border-dark-600
```

---

## 页面专用组件

### Hero 组件（通用）

```tsx
<Hero
  backgroundImage="/images/hero-bg.jpg"
  title="主标题"
  subtitle="副标题"
  height="100vh" // 或 "60vh"
/>
```

### LocationCard 地点卡片

```tsx
<LocationCard
  image="/images/location-1.jpg"
  title="地点名称"
  city="城市名"
  difficulty={3}
  tags={["废弃工厂", "工业"]}
  onClick={() => {}}
/>

样式:
- 图片: 16:9 比例，object-cover
- 悬停: 上移 + 阴影 + 边框霓虹
- 信息叠加: 底部渐变遮罩
```

### GalleryGrid 画廊网格

```tsx
<GalleryGrid
  images={imageArray}
  columns={3} // 响应式: 1 (mobile) → 2 (tablet) → 3 (desktop)
  gap={4}
/>

样式:
- 网格布局: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- 图片: 懒加载，悬停显示标题
```

### FilterBar 筛选栏

```tsx
<FilterBar
  filters={[
    { type: 'province', options: [...] },
    { type: 'difficulty', options: [1,2,3,4,5] },
    { type: 'tags', options: [...] }
  ]}
  onFilterChange={(filters) => {}}
/>

样式:
- 背景: bg-dark-800
- 下拉菜单: 深色背景 + 霓虹边框
```

---

## 数据展示组件

### CityMap 城市地图

```tsx
<CityMap
  city="北京"
  locations={locationsArray}
  center={[116.3974, 39.9093]}
/>

// 初期使用静态图片，后续可接入地图 API
```

### ImageViewer 图片查看器

```tsx
<ImageViewer
  images={imageArray}
  currentIndex={0}
  onClose={() => {}}
  onNext={() => {}}
  onPrev={() => {}}
/>

功能:
- 全屏显示
- 缩放（滚轮）
- 左右箭头切换
- ESC 关闭
- 键盘导航
```

---

## 内容组件

### DangerAlert 危险提示

```tsx
<DangerAlert
  title="⚠️ 危险警告"
  message="该地点存在结构安全隐患，请勿进入。"
  level="high" // high / medium / low
/>

样式:
- 背景: bg-red-900/20
- 边框: border border-red-500
- 文字: text-red-400
- 图标: 闪烁动画
```

### StoryContent 故事内容

```tsx
<StoryContent
  content={markdownContent}
  images={imageArray}
/>

// 支持 Markdown 渲染
// 图片自动插入到内容中
```

---

## 加载状态组件

### Loading 加载动画

```tsx
<Loading size="sm" | "md" | "lg" />

// 霓虹色旋转动画
```

### Skeleton 骨架屏

```tsx
<SkeletonCard />
<SkeletonImage />
<SkeletonText lines={3} />
```

---

## 响应式断点

```css
sm: 640px   // 小屏设备
md: 768px   // 平板
lg: 1024px  // 桌面
xl: 1280px  // 大桌面
2xl: 1536px // 超大桌面
```

---

## 组件命名规范

- **组件文件**: PascalCase (如 `LocationCard.tsx`)
- **组件函数**: PascalCase (如 `export default function LocationCard`)
- **Props 接口**: `ComponentNameProps` (如 `LocationCardProps`)
- **样式类**: kebab-case (如 `location-card`)

---

## 组件开发原则

1. **单一职责**: 每个组件只做一件事
2. **可复用**: 通用组件放在 `components/ui/`
3. **类型安全**: 使用 TypeScript
4. **性能优化**: 使用 `React.memo` 优化重渲染
5. **可访问性**: 添加 ARIA 标签和键盘支持







