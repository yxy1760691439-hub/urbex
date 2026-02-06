# 🎨 样式快速参考指南

## 颜色使用

### 背景色

```tsx
// 页面背景
bg-dark-900        // 主背景（最深）
bg-dark-800        // 卡片背景
bg-dark-700        // 悬停状态

// 示例
<div className="min-h-screen bg-dark-900">
  <div className="bg-dark-800 rounded-lg p-6">
    {/* 内容 */}
  </div>
</div>
```

### 文字颜色

```tsx
// 主要文字
text-gray-100      // 标题
text-gray-300      // 正文
text-gray-500      // 次要文字
text-gray-600      // 禁用文字

// 霓虹文字
text-neon-cyan     // 主要强调
text-neon-purple   // 次要强调
text-neon-orange   // 警告
```

### 边框颜色

```tsx
border-dark-600    // 默认边框
border-neon-cyan   // 霓虹边框（强调）
border-red-500     // 危险边框
```

---

## 间距系统

```tsx
// 内边距
p-2    // 8px
p-4    // 16px
p-6    // 24px
p-8    // 32px

// 外边距
m-4    // 16px
m-6    // 24px
m-8    // 32px

// 间距组合
space-y-4    // 垂直间距 16px
space-x-6    // 水平间距 24px
gap-4        // Grid/Flex 间距 16px
```

---

## 字体系统

```tsx
// 字体族
font-sans      // Inter（正文）
font-display   // Space Grotesk（标题）
font-mono      // JetBrains Mono（代码）

// 字号
text-xs        // 12px
text-sm        // 14px
text-base      // 16px
text-lg        // 18px
text-xl        // 20px
text-2xl       // 24px
text-3xl       // 30px
text-4xl       // 36px
text-5xl       // 48px

// 字重
font-light     // 300
font-normal    // 400
font-medium    // 500
font-semibold  // 600
font-bold      // 700
```

---

## 常用样式组合

### 卡片样式

```tsx
className="bg-dark-800 border border-dark-600 rounded-lg p-6 
          transition-all duration-200 
          hover:border-neon-cyan hover:shadow-glow-cyan 
          hover:-translate-y-1"
```

### 按钮样式

```tsx
// 主要按钮
className="px-6 py-3 bg-transparent border border-neon-cyan 
          text-neon-cyan rounded-lg 
          transition-all duration-200 
          hover:bg-neon-cyan/10 hover:shadow-glow-cyan 
          active:scale-95"

// 次要按钮
className="px-6 py-3 bg-dark-700 border border-dark-600 
          text-gray-300 rounded-lg 
          transition-all duration-200 
          hover:border-gray-500 hover:text-gray-100"
```

### 输入框样式

```tsx
className="w-full px-4 py-2 bg-dark-800 border border-dark-600 
          text-gray-300 rounded-lg 
          focus:outline-none focus:border-neon-cyan 
          focus:ring-1 focus:ring-neon-cyan 
          placeholder:text-gray-600"
```

### 图片容器样式

```tsx
className="relative w-full aspect-video overflow-hidden rounded-lg 
          bg-dark-800"
```

---

## 布局模式

### 容器宽度

```tsx
// 全宽
w-full

// 最大宽度容器
max-w-7xl mx-auto px-4 sm:px-6 lg:px-8

// 响应式宽度
w-full md:w-1/2 lg:w-1/3
```

### Grid 布局

```tsx
// 响应式网格
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6

// 瀑布流（使用 CSS columns 或第三方库）
columns-1 md:columns-2 lg:columns-3 gap-6
```

### Flex 布局

```tsx
// 水平居中
flex items-center justify-center

// 垂直居中
flex flex-col items-center justify-center

// 空间分布
flex items-center justify-between
```

---

## 效果类

### 阴影

```tsx
shadow-sm        // 小阴影
shadow-md        // 中阴影
shadow-lg        // 大阴影
shadow-glow-cyan // 霓虹光效（自定义）
```

### 模糊

```tsx
backdrop-blur-sm   // 背景模糊
backdrop-blur-md
backdrop-blur-lg
```

### 渐变

```tsx
// 文字渐变
bg-gradient-to-r from-neon-cyan to-neon-purple 
bg-clip-text text-transparent

// 背景渐变
bg-gradient-to-b from-dark-900 to-dark-800
```

---

## 动画类

```tsx
// 过渡
transition-all duration-200 ease-out

// 悬停效果
hover:scale-105
hover:-translate-y-1
hover:opacity-80

// 动画
animate-pulse      // 脉冲动画
animate-spin       // 旋转动画
```

---

## 响应式设计模式

```tsx
// 移动端优先
<div className="
  text-sm md:text-base lg:text-lg
  p-4 md:p-6 lg:p-8
  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
">
```

---

## 常用工具类组合

### 文本截断

```tsx
truncate              // 单行截断
line-clamp-2          // 多行截断（2行）
line-clamp-3          // 多行截断（3行）
```

### 图片遮罩

```tsx
// 底部渐变遮罩
absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent
```

### 居中定位

```tsx
// 绝对居中
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
```

---

## 暗色模式

所有样式默认使用暗色模式，无需切换：

```tsx
// 全局背景
<body className="bg-dark-900 text-gray-300">
```

---

## 无障碍性

```tsx
// 焦点可见
focus:outline-none focus:ring-2 focus:ring-neon-cyan

// 屏幕阅读器
sr-only              // 仅屏幕阅读器可见
aria-label="描述"     // 标签
```

---

## 性能优化

```tsx
// 图片懒加载
loading="lazy"

// 图片优化（Next.js Image）
<Image
  src="/image.jpg"
  alt="描述"
  width={800}
  height={600}
  loading="lazy"
  placeholder="blur"
/>
```







