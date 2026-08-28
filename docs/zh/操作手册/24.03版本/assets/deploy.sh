#!/usr/bin/env bash
set -euo pipefail

# 默认压缩包名，可以通过第一个参数指定
TAR_FILE="${1:-pkg-pcl-1.12.0-x64-g++-9.tar.gz}"
PREFIX="/usr/local"
LD_CONF_DIR="/etc/ld.so.conf.d"
LD_CONF_FILE="${LD_CONF_DIR}/local.conf"

# 如果不是 root，就用 sudo 重新执行自己
if [[ "${EUID:-$(id -u)}" -ne 0 ]]; then
    echo "当前不是 root，将使用 sudo 重新执行脚本..."
    exec sudo "$0" "$@"
fi

echo "使用压缩包: ${TAR_FILE}"

# 检查压缩包是否存在
if [[ ! -f "${TAR_FILE}" ]]; then
    echo "错误: 当前目录找不到压缩包文件 '${TAR_FILE}'"
    echo "请把脚本放在压缩包所在目录，或执行: $0 /path/to/pkg-pcl-1.12.0-x64-g++-9.tar.gz"
    exit 1
fi

# 解压到 /usr/local
echo "正在解压 ${TAR_FILE} 到 ${PREFIX}..."
tar -xzf "${TAR_FILE}" -C "${PREFIX}"

# 确保 ld.so 配置目录存在
mkdir -p "${LD_CONF_DIR}"

# 如果 /usr/local/lib 不在配置文件中，则追加
if [[ -f "${LD_CONF_FILE}" ]] && grep -qx "/usr/local/lib" "${LD_CONF_FILE}"; then
    echo "${LD_CONF_FILE} 中已存在 /usr/local/lib，跳过追加。"
else
    echo "将 /usr/local/lib 写入 ${LD_CONF_FILE}..."
    echo "/usr/local/lib" >> "${LD_CONF_FILE}"
fi

# 刷新动态链接库缓存
echo "正在执行 ldconfig 刷新动态链接库缓存..."
ldconfig

echo "PCL 安装/更新完成。"