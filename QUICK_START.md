# 🚀 快速启动指南

## 方法 1: 使用启动脚本（最简单）

在终端中运行：

```bash
cd /Users/yuxinyuan/Desktop/Project/Urbex_web
./start.sh
```

## 方法 2: 手动启动

```bash
# 1. 进入项目目录
cd /Users/yuxinyuan/Desktop/Project/Urbex_web

# 2. 启动服务器
npm run dev
```

## 访问网站

启动成功后，在浏览器中访问：

**http://localhost:3000**

## 如果网站打不开

### 1. 检查服务器是否运行

在终端中运行：
```bash
lsof -ti:3000
```

如果有输出，说明服务器在运行。

### 2. 检查端口是否被占用

如果 3000 端口被占用，Next.js 会自动使用下一个可用端口（如 3001）。

查看终端输出，找到实际使用的端口。

### 3. 强制重启

```bash
# 停止所有 Next.js 进程
pkill -9 -f "next dev"

# 等待 2 秒
sleep 2

# 重新启动
cd /Users/yuxinyuan/Desktop/Project/Urbex_web
npm run dev
```

### 4. 清除缓存重新编译

```bash
cd /Users/yuxinyuan/Desktop/Project/Urbex_web
rm -rf .next
npm run dev
```

## 常见问题

### 问题：端口被占用

**解决方案**：
- 查看终端输出，找到 Next.js 使用的实际端口
- 或者手动指定端口：`PORT=3001 npm run dev`

### 问题：编译错误

**解决方案**：
1. 查看终端中的错误信息
2. 确保所有依赖已安装：`npm install`
3. 检查代码是否有语法错误

### 问题：网站显示空白

**解决方案**：
1. 硬刷新浏览器：`Cmd + Shift + R` (Mac) 或 `Ctrl + Shift + R` (Windows)
2. 清除浏览器缓存
3. 检查浏览器控制台是否有错误（按 F12）

## 停止服务器

在运行 `npm run dev` 的终端中按：
- `Ctrl + C` (Mac/Linux)
- `Cmd + C` (Mac)

---

**提示**：如果自动启动失败，请手动在终端运行 `npm run dev`，并查看终端输出中的错误信息。
