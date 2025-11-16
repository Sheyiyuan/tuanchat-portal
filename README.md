# 团剧共创发布页

## 项目简介

团剧共创发布页，使用VitePress构建。

## 构建项目

### 系统要求

- Node.js v16.0.0 或更高版本
- pnpm 包管理器

### 构建步骤

1. 克隆仓库

```bash
git clone https://your-repo-url/tuancaht-portal.git
cd tuancaht-portal
```

2. 安装依赖

```bash
# 使用 npm
npm install

# 或使用 yarn
yarn install

# 或使用 pnpm
pnpm install
```

3. 构建生产版本

```bash
# 使用 npm
npm run docs:build

# 或使用 yarn
yarn docs:build

# 或使用 pnpm
pnpm docs:build
```

构建后的文件将输出到 `docs/.vitepress/dist` 目录。

## 部署方法

### Nginx 配置

1. 安装 Nginx

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install nginx

# CentOS/RHEL
sudo yum install epel-release
sudo yum install nginx
```

2. 创建配置文件

```bash
sudo nano /etc/nginx/sites-available/tuanchat-docs
```

3. 复制以下配置到文件中

```text
server {
    listen 80;
    server_name docs.tuanchat.internal;  # 替换为您的内部域名
  
    root /path/to/tuancaht-portal/docs/.vitepress/dist;  # 替换为实际的构建输出路径
    index index.html;
  
    # 配置 404 页面
    error_page 404 /404.html;
  
    # 防止直接访问 .html 文件扩展名
    rewrite ^/(.*)\.html$ /$1 permanent;
  
    # 缓存静态资源
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|woff|woff2|ttf|svg)$ {
        expires 30d;
        add_header Cache-Control "public, max-age=2592000";
    }
  
    # 代理路由处理
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

4. 创建软链接并测试配置

```bash
sudo ln -s /etc/nginx/sites-available/tuanchat-docs /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### Caddy 配置

1. 安装 Caddy

```bash
# Debian/Ubuntu
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https
sudo curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
sudo curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update
sudo apt install caddy
```

2. 编辑 Caddy 配置文件

```bash
sudo nano /etc/caddy/Caddyfile
```

3. 添加以下配置

```text
docs.tuanchat.internal {  # 替换为您的内部域名
    root * /path/to/tuancaht-portal/docs/.vitepress/dist  # 替换为实际的构建输出路径
    file_server
  
    # 配置 SPA 路由
    try_files {path} {path}/ /index.html
  
    # 404 页面配置
    handle_errors {
        respond /404.html {http.error.status_code}
    }
  
    # 缓存控制
    @static { 
        file 
        path *.jpg *.jpeg *.png *.gif *.ico *.css *.js *.woff *.woff2 *.ttf *.svg
    }
    header @static Cache-Control "max-age=2592000, public"
}
```

4. 重启 Caddy 服务

```bash
sudo systemctl reload caddy
```

## 部署检查清单

- [ ] 构建完成后检查 `docs/.vitepress/dist` 目录内容
- [ ] 确认服务器上已安装必要的 Web 服务器 (Nginx 或 Caddy)
- [ ] 更新配置文件中的路径和域名
- [ ] 测试配置文件语法是否正确
- [ ] 重启 Web 服务器
- [ ] 通过浏览器访问文档站点确认部署成功

## 注意事项

1. 确保构建环境与生产环境的 Node.js 版本兼容
2. 如需配置 HTTPS，请在相应的 Web 服务器配置中添加 SSL 证书相关设置
3. 对于高流量场景，建议配置适当的缓存策略和 CDN
4. 定期从 Git 仓库获取最新文档并重新构建部署

## 故障排除

### 常见问题及解决方案

1. **页面显示 404 错误**

   - 检查构建输出路径是否正确
   - 确认 Nginx/Caddy 配置中的 root 路径正确
   - 验证 SPA 路由配置是否正确（`try_files` 配置）
2. **静态资源加载失败**

   - 检查文件权限设置
   - 确认缓存配置是否合理
   - 检查路径引用是否正确
3. **服务无法启动**

   - 检查配置文件语法
   - 确认端口未被占用
   - 查看服务日志获取详细错误信息
