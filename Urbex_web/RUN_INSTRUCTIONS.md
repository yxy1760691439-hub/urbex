# 🚀 运行说明

## 前置要求

您的系统需要安装 Node.js 18 或更高版本。

### 检查 Node.js 是否已安装

```bash
node --version
npm --version
```

如果命令未找到，请先安装 Node.js。

## 安装 Node.js

### macOS

**方法 1: 使用 Homebrew（推荐）**
```bash
brew install node
```

**方法 2: 使用 nvm（Node Version Manager）**
```bash
# 安装 nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# 重新加载 shell
source ~/.zshrc

# 安装 Node.js
nvm install 18
nvm use 18
```

**方法 3: 官方安装包**
访问 [nodejs.org](https://nodejs.org/) 下载 macOS 安装包

### 验证安装

安装完成后，运行：
```bash
node --version
npm --version
```

应该显示版本号，例如：
```
v18.17.0
9.6.7
```

## 安装项目依赖

在项目根目录运行：

```bash
npm install
```

或使用其他包管理器：

```bash
# 使用 yarn
yarn install

# 使用 pnpm
pnpm install
```

## 运行开发服务器

```bash
npm run dev
```

或：

```bash
yarn dev
pnpm dev
```

## 访问网站

开发服务器启动后，打开浏览器访问：

**http://localhost:3000**

## 常见问题

### 端口被占用

如果 3000 端口被占用，Next.js 会自动使用下一个可用端口（如 3001）。

### 依赖安装失败

1. 清除缓存：
```bash
npm cache clean --force
```

2. 删除 node_modules 和 package-lock.json，重新安装：
```bash
rm -rf node_modules package-lock.json
npm install
```

### 权限问题

如果遇到权限错误，可以：
- 使用 `sudo`（不推荐）
- 使用 nvm 管理 Node.js 版本（推荐）
- 修复 npm 权限：`npm config set prefix ~/.npm-global`

## 下一步

安装完成后，您可以：

1. 查看项目文档：
   - `PROJECT_ARCHITECTURE.md` - 项目架构
   - `STYLE_GUIDE.md` - 样式指南
   - `COMPONENT_SPECS.md` - 组件规范

2. 添加图片资源到 `public/images/` 目录

3. 开始开发新功能

---

**提示**: 如果 Node.js 已安装但命令仍找不到，可能需要：
- 重新打开终端
- 检查 PATH 环境变量
- 使用完整路径运行 node（如 `/usr/local/bin/node`）







