#!/bin/bash

PROG_NAME="VSensorLaser3DPointCloud"

# ====== 如果程序已在运行，结束旧进程 ======
if pgrep -f "$PROG_NAME" >/dev/null 2>&1; then
    echo "检测到 $PROG_NAME 已在运行，正在结束进程..."
    pkill -f "$PROG_NAME"
    
    # 循环检测直到进程完全退出
    while pgrep -f "$PROG_NAME" >/dev/null 2>&1; do
        echo "等待 $PROG_NAME 退出..."
        sleep 1
    done
fi

# ====== 确保执行权限 ======
[ -x "./$PROG_NAME" ] || chmod 777 "./$PROG_NAME"
 
# ====== 启动程序 ======
echo "正在启动 $PROG_NAME..."
nohup "./$PROG_NAME" >/dev/null 2>&1 &
echo "$PROG_NAME 已启动，PID: $(pgrep -f "$PROG_NAME")"