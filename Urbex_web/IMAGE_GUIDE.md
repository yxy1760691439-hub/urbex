# 📸 图片存放指南

## 目录结构

所有图片文件应放在 `public/images/` 目录下，按以下结构组织：

```
public/
  images/
    onsite/          # On-site 页面的地点封面图
    gallery/         # Gallery 页面的图片
    about/           # About 页面的头像/照片
    stories/         # Stories 页面的配图（可选）
```

## 具体说明

### 1. On-site 图片 (`public/images/onsite/`)

用于 On-site 页面的地点封面图。

**文件命名建议**:
- `factory-1.jpg` - 工厂相关
- `school-1.jpg` - 学校相关
- `residential-1.jpg` - 住宅相关
- `hospital-1.jpg` - 医院相关
- `other-1.jpg` - 其他类型

**在代码中的路径**:
```typescript
// src/lib/data/onsite.ts
coverImage: '/images/onsite/factory-1.jpg'
```

**使用方式**:
- 在 Next.js 中，`public` 目录下的文件可以直接通过 `/` 开头的路径访问
- 例如：`/images/onsite/factory-1.jpg` 对应 `public/images/onsite/factory-1.jpg`

---

### 2. Gallery 图片 (`public/images/gallery/`)

用于 Gallery 页面的所有图片。

**文件命名建议**:
- `img-1.jpg`, `img-2.jpg`, `img-3.jpg` ...
- 或使用描述性名称：`factory-interior-1.jpg`, `hospital-corridor-1.jpg`

**在代码中的路径**:
```typescript
// src/lib/data/gallery.ts
src: '/images/gallery/img-1.jpg'
```

**使用方式**:
- Gallery 页面使用瀑布流布局
- 点击图片可进入 Lightbox 全屏查看
- 支持键盘导航（左右箭头切换）

---

### 3. About 图片 (`public/images/about/`)

用于 About 页面的头像或个人照片。

**文件命名建议**:
- `avatar.jpg` 或 `profile.jpg`
- `photo-1.jpg`, `photo-2.jpg` (如果有多个照片)

**使用方式**:
- 在 About 页面中显示
- 建议尺寸：正方形，如 300x300px 或 400x400px

---

### 4. Stories 图片 (`public/images/stories/`)

用于 Stories 页面的配图（可选）。

**文件命名建议**:
- `gear-1.jpg` - 装备相关
- `thoughts-1.jpg` - 感想相关
- `behind-scenes-1.jpg` - 幕后相关

**使用方式**:
- Stories 页面以文本为主，图片为辅助
- 可在文章内容中插入图片

---

## 图片格式建议

- **格式**: JPG, PNG, WebP
- **大小**: 
  - 封面图：建议宽度 1200-2000px
  - Gallery 图片：建议宽度 1500-3000px
  - 头像：建议 300-500px
- **优化**: 使用图片压缩工具优化文件大小
- **命名**: 使用小写字母、数字、连字符，避免空格和特殊字符

## 在代码中使用图片

### 方式 1: 直接使用路径（当前方式）

```tsx
// 在组件中
<div className="bg-gray-100">
  <img src="/images/onsite/factory-1.jpg" alt="Factory" />
</div>
```

### 方式 2: 使用 Next.js Image 组件（推荐）

```tsx
import Image from 'next/image'

<Image
  src="/images/onsite/factory-1.jpg"
  alt="Factory"
  width={800}
  height={600}
  className="object-cover"
/>
```

**Next.js Image 的优势**:
- 自动优化图片
- 懒加载
- 响应式图片
- 更好的性能

## 更新数据文件

添加图片后，需要在对应的数据文件中更新路径：

1. **On-site 图片**: 更新 `src/lib/data/onsite.ts`
2. **Gallery 图片**: 更新 `src/lib/data/gallery.ts`
3. **Stories 图片**: 在 `src/lib/data/stories.ts` 中添加（如需要）

## 示例

假设你有一张工厂图片 `factory-zone-a.jpg`，应该：

1. **放置文件**:
   ```
   public/images/onsite/factory-zone-a.jpg
   ```

2. **更新数据文件** (`src/lib/data/onsite.ts`):
   ```typescript
   {
     id: '1',
     name: 'Abandoned Factory Zone A',
     coverImage: '/images/onsite/factory-zone-a.jpg', // 更新这里
     // ...
   }
   ```

3. **在组件中使用**:
   ```tsx
   <img src={location.coverImage} alt={location.name} />
   ```

## 注意事项

- ✅ 所有路径以 `/` 开头（相对于 `public` 目录）
- ✅ 使用相对路径，不要使用绝对路径
- ✅ 文件名使用小写和连字符
- ✅ 保持目录结构清晰
- ❌ 不要直接在 `src` 目录下存放图片
- ❌ 不要使用中文文件名（可能导致问题）

## 当前占位符

目前所有图片都显示为占位符，你可以：

1. 直接添加图片文件到对应目录
2. 更新数据文件中的路径
3. 刷新浏览器查看效果

---

**提示**: 如果图片很多，建议使用图片 CDN 或 Next.js 的图片优化功能。
