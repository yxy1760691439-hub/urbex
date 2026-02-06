#!/bin/bash

# 清理旧进程
echo "清理旧进程..."
pkill -9 -f "next dev" 2>/dev/null
sleep 2

# 进入项目目录
cd "$(dirname "$0")"

# 检查 node_modules
if [ ! -d "node_modules" ]; then
  echo "安装依赖..."
  npm install
fi

# 启动开发服务器
echo "启动开发服务器..."
echo "访问地址: http://localhost:3000"
echo ""
npm run dev

