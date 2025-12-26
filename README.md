# AmiTCore Website

Professional website for AmiTCore - A multi-cloud infrastructure and DevOps solutions company.

## Tech Stack

- **Framework:** Next.js 15 (App Router) with TypeScript
- **Styling:** Tailwind CSS
- **Internationalization:** next-intl (English, Chinese, French)
- **Icons:** React Icons (Feather Icons)
- **Deployment:** GitHub Pages + Cloudflare
- **Build:** Static Export

## Features

- 🌍 Multi-language support (English, Chinese, French)
- 📱 Fully responsive design
- ⚡ Static site generation for optimal performance
- 🎨 Modern UI with Tailwind CSS
- 🔍 SEO optimized
- ♿ Accessible design
- 🚀 Automated deployment via GitHub Actions

## Pages

- **Home:** Hero section, services overview, why choose us
- **Services:** Detailed cloud providers and DevOps services
  - AWS, GCP, Azure, Alibaba Cloud, Oracle Cloud
  - CI/CD, IaC, Containers, Monitoring, Security, Configuration Management
- **About:** Company mission, expertise, values, certifications
- **Contact:** Contact information with mailto link

## Development

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
# Build for production
npm run build

# The static files will be in the `out/` directory
```

### Lint

```bash
npm run lint
```

## Deployment

### GitHub Pages Setup

1. **Enable GitHub Pages**
   - Go to your repository Settings → Pages
   - Source: GitHub Actions
   - The workflow in `.github/workflows/deploy.yml` will handle deployment

2. **Push to Main Branch**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **Automatic Deployment**
   - The GitHub Actions workflow will automatically build and deploy on every push to `main`
   - Check the Actions tab to monitor deployment progress

### Custom Domain (amitcore.com)

#### Cloudflare Setup

1. **Add Site to Cloudflare**
   - Add `amitcore.com` to your Cloudflare account
   - Copy the Cloudflare nameservers

2. **Update Namecheap DNS**
   - Go to Namecheap domain management
   - Change nameservers to Cloudflare's nameservers
   - Wait for DNS propagation (up to 24 hours)

3. **Configure Cloudflare DNS**
   ```
   Type: CNAME
   Name: @
   Target: yourusername.github.io
   Proxy status: Proxied (orange cloud)

   Type: CNAME
   Name: www
   Target: yourusername.github.io
   Proxy status: Proxied (orange cloud)
   ```

4. **Cloudflare SSL/TLS Settings**
   - SSL/TLS encryption mode: **Full**
   - Always Use HTTPS: **ON**
   - Automatic HTTPS Rewrites: **ON**

5. **Cloudflare Performance Settings**
   - Auto Minify: Enable JavaScript, CSS, HTML
   - Brotli: **ON**
   - HTTP/2 to Origin: **ON**

#### GitHub Pages Custom Domain

1. Go to repository Settings → Pages
2. Custom domain: `amitcore.com`
3. Enforce HTTPS: **ON**
4. Wait for DNS check to complete

## Project Structure

```
/
├── .github/workflows/    # GitHub Actions deployment workflow
├── public/              # Static assets
│   ├── CNAME           # Custom domain configuration
│   ├── robots.txt      # Search engine directives
│   └── images/         # Image assets
├── src/
│   ├── app/
│   │   └── [locale]/   # Internationalized routes
│   │       ├── layout.tsx
│   │       ├── page.tsx (Home)
│   │       ├── services/
│   │       ├── about/
│   │       └── contact/
│   ├── components/
│   │   ├── layout/    # Header, Footer, Navigation
│   │   ├── home/      # Homepage components
│   │   └── services/  # Services page components
│   ├── i18n/          # Internationalization config
│   ├── messages/      # Translation files (en, zh, fr)
│   └── styles/        # Global CSS
├── next.config.js     # Next.js configuration
├── tailwind.config.ts # Tailwind CSS configuration
└── tsconfig.json      # TypeScript configuration
```

## Internationalization

The website supports three languages:

- **English (en)** - Default
- **Chinese (zh)** - 中文
- **French (fr)** - Français

Translation files are located in `src/messages/`:
- `en.json` - English translations
- `zh.json` - Chinese translations
- `fr.json` - French translations

To add or modify translations, edit the respective JSON files.

## Customization

### Update Company Information

Edit translation files in `src/messages/` to update:
- Company name
- Contact information
- Service descriptions
- About page content

### Modify Colors

Edit `tailwind.config.ts` to change the color scheme:
- `primary`: Main brand color (blue by default)
- `secondary`: Secondary color (indigo by default)

### Add New Pages

1. Create a new page in `src/app/[locale]/your-page/page.tsx`
2. Add translations to all language files
3. Update navigation in `src/components/layout/Header.tsx`

## Performance

- ✅ Lighthouse Score: 90+ (Performance, Accessibility, SEO)
- ✅ Static export for fast loading
- ✅ Cloudflare CDN for global distribution
- ✅ Optimized images and assets
- ✅ Code splitting and tree shaking

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2025 AmiTCore. All rights reserved.

## Support

For issues or questions:
- Email: info@amitcore.com
- GitHub Issues: [Repository Issues](https://github.com/yourusername/site/issues)
