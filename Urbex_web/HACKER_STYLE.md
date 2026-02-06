# 🖥️ 黑客风格视觉更新

## 已添加的黑客/终端风格元素

### 1. 颜色系统更新

#### 终端绿色系列
- `terminal-green`: `#39ff14` - 经典黑客绿
- `terminal-green-dim`: `#00ff41` - 暗绿
- `terminal-green-bright`: `#00ff00` - 亮绿

#### 背景色调整
- 更深的背景色，类似终端黑屏
- `dark-800`: `#0d1117` (类似 GitHub Dark)
- `dark-700`: `#161b22` (代码块背景)

### 2. 字体系统

- **等宽字体优先**: 全局使用 `JetBrains Mono` 作为主要字体
- **终端字体**: `font-terminal` 类使用经典等宽字体
- **代码风格**: 所有文本现在都有代码/终端感

### 3. 新增样式类

#### 文字效果
- `.text-terminal-green` - 终端绿色文字（带光晕）
- `.text-terminal-bright` - 亮绿色文字（更强光晕）

#### 卡片样式
- `.card-terminal` - 终端风格卡片（绿色边框 + 内发光）
- 悬停时增强光效

#### 边框效果
- `.border-terminal` - 终端风格边框（绿色 + 内外发光）

#### 视觉效果
- `.scanlines` - 扫描线效果（模拟 CRT 显示器）
- `.terminal-cursor` - 闪烁光标动画
- `.terminal-prompt` - 终端提示符（自动添加 `$ `）
- `.code-block` - 代码块风格容器
- `.data-stream` - 数据流动画效果

### 4. 组件更新

#### Header (导航栏)
- 使用终端绿色
- 添加终端提示符 `$`
- 扫描线效果背景
- 等宽字体导航

#### Hero (首页大图)
- 终端命令风格标题：`$ ./explore --city=china`
- 终端绿色主标题
- `[INFO]` 标签风格
- 闪烁光标动画
- 扫描线效果

#### Card 组件
- 新增 `terminal` 属性
- 终端风格边框和光效

#### Button 组件
- 新增 `terminal` 变体
- 终端绿色边框和文字

#### TerminalBlock 组件（新增）
- 终端风格代码块
- 支持标题和提示符
- 数据流动画

### 5. 滚动条样式

- 终端绿色滚动条
- 悬停时发光效果
- 细窄设计（8px）

### 6. 动画效果

#### 打字机效果
- `.typewriter` - 打字机动画
- 闪烁光标配合

#### 数据流
- `.data-stream` - 垂直数据流动画

#### 扫描线
- 模拟 CRT 显示器的扫描线效果

## 使用示例

### 终端风格文字
```tsx
<span className="text-terminal-green">Hello World</span>
<span className="text-terminal-bright font-mono">BRIGHT TEXT</span>
```

### 终端风格卡片
```tsx
<Card terminal hover>
  <p className="font-mono text-terminal-green">Terminal content</p>
</Card>
```

### 终端风格按钮
```tsx
<Button variant="terminal">Execute</Button>
```

### 终端代码块
```tsx
<TerminalBlock title="explore.sh" prompt="$">
  cd /cities/china
  ls -la
</TerminalBlock>
```

### 扫描线效果
```tsx
<div className="scanlines">
  {/* 内容 */}
</div>
```

### 终端提示符
```tsx
<span className="terminal-prompt">Command</span>
// 自动显示为: $ Command
```

## 视觉特点

1. **经典黑客绿** - `#39ff14` 作为主要强调色
2. **等宽字体** - 所有文本使用等宽字体，增强代码感
3. **发光效果** - 文字和边框都有光晕效果
4. **扫描线** - 模拟 CRT 显示器的复古感
5. **终端提示符** - `$` 符号增强命令感
6. **闪烁光标** - 动画光标增强交互感
7. **深色背景** - 更深的黑色背景，类似终端

## 设计理念

- **沉浸感**: 让用户感觉在使用终端/命令行
- **科技感**: 通过发光和动画增强未来感
- **神秘感**: 深色 + 绿色，营造黑客氛围
- **极简**: 保持简洁，不过度装饰

## 后续建议

1. 添加更多终端命令风格的交互
2. 实现打字机效果的文本组件
3. 添加矩阵雨背景（可选）
4. 更多终端风格的动画效果

---

**注意**: 所有终端风格元素都保持克制，不会影响可读性和用户体验。






