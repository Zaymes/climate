# Deployment Guide

This guide covers how to deploy the Climate Knowledge Portal to various static hosting platforms.

## 🚀 GitHub Pages Deployment

### Method 1: GitHub Actions (Recommended)

1. **Create GitHub Actions Workflow**:
   Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

2. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: GitHub Actions
   - Save

3. **Push to main branch**:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

### Method 2: Manual Deployment

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Initialize git in out directory**:
   ```bash
   cd out
   git init
   git add .
   git commit -m "Deploy to GitHub Pages"
   ```

3. **Push to gh-pages branch**:
   ```bash
   git branch -M gh-pages
   git remote add origin https://github.com/username/repository.git
   git push -u origin gh-pages
   ```

4. **Configure GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)

## 🌐 Netlify Deployment

### Method 1: Git Integration (Recommended)

1. **Connect Repository**:
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Configure Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `out`
   - Node version: 18

3. **Deploy**:
   - Click "Deploy site"
   - Netlify will automatically build and deploy

### Method 2: Manual Deploy

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Drag and drop**:
   - Go to [Netlify](https://netlify.com)
   - Drag the `out` folder to the deploy area

## ⚡ Vercel Deployment

1. **Connect Repository**:
   - Go to [Vercel](https://vercel.com)
   - Import your GitHub repository

2. **Configure Project**:
   - Framework Preset: Next.js
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `out`

3. **Deploy**:
   - Click "Deploy"
   - Vercel will automatically build and deploy

## 🔧 Environment Configuration

### Production Environment Variables

Create environment variables in your hosting platform:

```env
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://admin.opendatanepal.com/api/3/action/package_search?fq=climate
```

### Base Path Configuration

For deployment under a subpath (e.g., `/climate-portal`):

1. **Update next.config.js**:
   ```javascript
   const nextConfig = {
     basePath: '/climate-portal',
     assetPrefix: '/climate-portal/',
     // ... other config
   }
   ```

2. **Update package.json scripts**:
   ```json
   {
     "scripts": {
       "build": "NODE_ENV=production next build",
       "export": "next export"
     }
   }
   ```

## 🚀 Custom Domain Setup

### GitHub Pages

1. **Add CNAME file**:
   Create `public/CNAME` with your domain:
   ```
   your-domain.com
   ```

2. **Configure DNS**:
   - Add CNAME record: `www` → `username.github.io`
   - Add A records for apex domain:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

### Netlify

1. **Add Custom Domain**:
   - Go to Site Settings → Domain Management
   - Add your custom domain

2. **Configure DNS**:
   - Point your domain to Netlify's nameservers
   - Or add CNAME record: `www` → `your-site.netlify.app`

### Vercel

1. **Add Domain**:
   - Go to Project Settings → Domains
   - Add your custom domain

2. **Configure DNS**:
   - Add CNAME record: `www` → `cname.vercel-dns.com`
   - Add A record for apex domain: `76.76.19.61`

## 🔍 Troubleshooting

### Common Issues

1. **Build Fails**:
   - Check Node.js version (18+)
   - Clear node_modules and reinstall
   - Check for TypeScript errors

2. **Static Export Issues**:
   - Ensure `output: 'export'` in next.config.js
   - Remove any server-side code
   - Check for dynamic routes

3. **Images Not Loading**:
   - Ensure images are in `public/` directory
   - Check `images.unoptimized: true` in config
   - Verify image paths are correct

4. **API Calls Failing**:
   - Check CORS settings
   - Verify API endpoints are accessible
   - Use HTTPS for production

### Performance Optimization

1. **Bundle Analysis**:
   ```bash
   npm install -g @next/bundle-analyzer
   ANALYZE=true npm run build
   ```

2. **Image Optimization**:
   - Use Next.js Image component
   - Optimize image sizes
   - Use appropriate formats (WebP, AVIF)

3. **Code Splitting**:
   - Use dynamic imports for large components
   - Implement lazy loading
   - Optimize bundle size

## 📊 Monitoring

### Analytics Setup

1. **Google Analytics**:
   ```javascript
   // Add to layout.tsx
   <Script
     src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
     strategy="afterInteractive"
   />
   ```

2. **Vercel Analytics**:
   ```bash
   npm install @vercel/analytics
   ```

### Error Monitoring

1. **Sentry**:
   ```bash
   npm install @sentry/nextjs
   ```

2. **LogRocket**:
   ```bash
   npm install logrocket
   ```

## 🔄 CI/CD Pipeline

### GitHub Actions Example

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npm run type-check
      - run: npm run build

  deploy:
    if: github.ref == 'refs/heads/main'
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

## 📝 Deployment Checklist

- [ ] Build passes locally
- [ ] All tests pass
- [ ] Environment variables configured
- [ ] Domain/DNS configured
- [ ] SSL certificate active
- [ ] Analytics tracking setup
- [ ] Error monitoring configured
- [ ] Performance monitoring active
- [ ] Backup strategy in place
- [ ] Documentation updated

---

For more help, check the [Next.js deployment documentation](https://nextjs.org/docs/deployment) or open an issue in the repository.
