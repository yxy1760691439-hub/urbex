# 📸 图片库使用指南

## 图片库已建立完成 ✅

所有图片相关组件已更新为使用 Next.js Image 组件，支持：
- ✅ 自动图片优化
- ✅ 懒加载
- ✅ 响应式图片
- ✅ 更好的性能

## 目录结构

```
public/
  images/
    onsite/          # On-site 地点封面图
    gallery/         # Gallery 图库图片
    about/           # About 页面图片
    stories/         # Stories 配图（可选）
```

## 如何添加图片

### 1. Gallery 图片

**步骤：**
1. 将图片放入 `public/images/gallery/` 目录
2. 在 `src/lib/data/gallery.ts` 中添加或更新图片信息：

```typescript
{
  id: '7',
  src: '/images/gallery/your-image.jpg',  // 图片路径
  title: 'Your Image Title',              // 标题
  location: 'Location Name',              // 地点（可选）
  city: '',                               // 城市（可选）
  tags: ['tag1', 'tag2'],                 // 标签（可选）
}
```

**示例：**
```typescript
{
  id: '7',
  src: '/images/gallery/factory-interior-1.jpg',
  title: 'Factory Interior Detail',
  location: 'Factory Zone A',
  city: '',
  tags: ['industrial', 'interior'],
}
```

### 2. On-site 地点封面图

**步骤：**
1. 将图片放入 `public/images/onsite/` 目录
2. 在 `src/lib/data/onsite.ts` 中更新 `coverImage` 路径：

```typescript
{
  id: '1',
  name: 'Abandoned Factory Zone A',
  coverImage: '/images/onsite/factory-1.jpg',  // 更新这里
  // ...
}
```

### 3. About 页面图片

**步骤：**
1. 将图片放入 `public/images/about/` 目录
2. 在 `src/app/about/page.tsx` 中更新图片路径：

```tsx
<Image
  src="/images/about/avatar.jpg"  // 更新这里
  alt="Profile"
  width={128}
  height={128}
  className="rounded-full"
/>
```

## 图片格式建议

- **格式**: JPG, PNG, WebP
- **大小**: 
  - Gallery: 建议宽度 1500-3000px
  - On-site 封面: 建议宽度 1200-2000px
  - About 头像: 建议 300-500px 正方形
- **优化**: 使用图片压缩工具优化文件大小
- **命名**: 使用小写字母、数字、连字符，避免空格

## 图片命名规范

### Gallery 图片
- `img-1.jpg`, `img-2.jpg` (简单编号)
- `factory-interior-1.jpg` (描述性名称)
- `hospital-corridor-2024.jpg` (带日期)

### On-site 图片
- `factory-1.jpg`
- `school-1.jpg`
- `residential-1.jpg`
- `hospital-1.jpg`
- `other-1.jpg`

### About 图片
- `avatar.jpg`
- `profile.jpg`
- `photo-1.jpg`

## 已更新的组件

以下组件已支持图片显示：

1. **Gallery 页面** (`src/app/gallery/page.tsx`)
   - 瀑布流布局
   - 点击图片进入全屏 Lightbox
   - 支持键盘导航

2. **ImageModal** (`src/components/gallery/ImageModal.tsx`)
   - 全屏图片查看
   - 左右箭头切换
   - ESC 关闭

3. **On-site 页面** (`src/app/onsite/page.tsx`)
   - 地点列表封面图
   - 悬停缩放效果

4. **On-site 详情页** (`src/app/onsite/[id]/page.tsx`)
   - 大图封面显示

5. **首页预览** (`src/components/home/OnSitePreview.tsx`, `GalleryPreview.tsx`)
   - 预览图片
   - 悬停效果

## 图片加载特性

### 自动优化
- Next.js Image 组件自动优化图片
- 根据设备自动选择合适尺寸
- 支持 WebP 格式（如果浏览器支持）

### 懒加载
- 图片在进入视口时自动加载
- 提升页面加载速度
- 使用 `loading="lazy"` 属性

### 响应式
- 根据屏幕尺寸自动调整
- 使用 `sizes` 属性优化
- 移动端、平板、桌面自适应

## 快速添加图片示例

### 添加一张 Gallery 图片

1. **放置文件**:
   ```
   public/images/gallery/my-photo.jpg
   ```

2. **更新数据文件** (`src/lib/data/gallery.ts`):
   ```typescript
   export const galleryImages: GalleryImage[] = [
     // ... 现有图片
     {
       id: '7',
       src: '/images/gallery/my-photo.jpg',
       title: 'My Photo Title',
       location: 'Location Name',
       city: '',
       tags: [],
     },
   ]
   ```

3. **刷新浏览器** - 图片会自动显示！

## 批量添加图片

如果需要批量添加图片：

1. 将所有图片放入对应目录
2. 在数据文件中批量添加条目
3. 确保 ID 唯一
4. 刷新页面查看效果

## 图片优化工具推荐

- **在线工具**: TinyPNG, Squoosh
- **命令行**: ImageMagick, Sharp
- **Mac 应用**: ImageOptim

## 注意事项

- ✅ 所有路径以 `/` 开头（相对于 `public` 目录）
- ✅ 使用相对路径，不要使用绝对路径
- ✅ 文件名使用小写和连字符
- ✅ 保持目录结构清晰
- ❌ 不要直接在 `src` 目录下存放图片
- ❌ 不要使用中文文件名（可能导致问题）
- ❌ 不要使用过大的图片文件（建议压缩）

## 故障排除

### 图片不显示
1. 检查文件路径是否正确
2. 确认文件存在于 `public/images/` 目录
3. 检查浏览器控制台是否有错误
4. 确认图片格式支持（JPG, PNG, WebP）

### 图片加载慢
1. 压缩图片文件大小
2. 使用合适的图片尺寸
3. 考虑使用 WebP 格式

### 图片变形
1. 检查 `aspect-ratio` 设置
2. 确认 `object-cover` 或 `object-contain` 设置
3. 调整图片原始尺寸比例

---

**提示**: 添加图片后，Next.js 会自动优化并在开发/生产环境中正确显示。






