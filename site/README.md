# Climate Knowledge Portal

A modern, responsive web application built with Next.js 15 that provides a centralized platform for climate data, research, and insights specific to Nepal.

## 🌟 Features

- **Modern Architecture**: Built with Next.js 15 App Router and TypeScript
- **Static Export**: Fully static site deployable to GitHub Pages, Netlify, or any static hosting
- **Responsive Design**: Mobile-first design using TailwindCSS
- **Interactive Data Visualization**: Charts and graphs using Recharts
- **Live API Integration**: Real-time data from Open Data Nepal API
- **Search & Filter**: Advanced dataset search and filtering capabilities
- **Modern UI Components**: Clean, accessible interface with shadcn/ui patterns

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd climate-portal
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                    # Next.js 15 App Router
│   ├── page.tsx           # Home page
│   ├── explore/           # Data exploration page
│   ├── map/               # Interactive map page
│   ├── insights/          # Research insights page
│   ├── about/             # About page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Nav.tsx           # Navigation component
│   ├── Footer.tsx        # Footer component
│   └── DatasetCard.tsx   # Dataset display card
├── data/                 # Data layer
│   └── openDataNepal.ts  # API integration
└── styles/               # Additional styles
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🌐 Deployment

### GitHub Pages

1. Build the project:
```bash
npm run build
```

2. The static files will be generated in the `out/` directory

3. Deploy the contents of the `out/` directory to GitHub Pages

### Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `out`
4. Deploy!

### Vercel

1. Connect your repository to Vercel
2. Vercel will automatically detect Next.js and configure the build
3. Deploy!

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_API_URL=https://admin.opendatanepal.com/api/3/action/package_search?fq=climate
```

### Base Path Configuration

For deployment under a subpath (e.g., `/climate-portal`), update `next.config.js`:

```javascript
const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/climate-portal' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/climate-portal/' : '',
}
```

## 📊 Data Sources

The application integrates with:

- **Open Data Nepal API**: Primary data source for climate datasets
- **Department of Hydrology and Meteorology**: Official weather data
- **Ministry of Environment**: Environmental policies and reports
- **ICIMOD**: Mountain environment research data

## 🎨 Styling

- **TailwindCSS**: Utility-first CSS framework
- **Custom CSS Variables**: For consistent theming
- **Responsive Design**: Mobile-first approach
- **Dark Mode Ready**: CSS variables support theme switching

## 🔍 Features in Detail

### Home Page
- Hero section with project introduction
- Featured datasets showcase
- Quick navigation cards
- About section

### Explore Page
- Interactive dataset browser
- Search and filter functionality
- Data visualization charts
- Real-time API data integration

### Map Page
- Interactive climate data visualization
- Regional climate indicators
- Data layer controls
- Regional comparison tables

### Insights Page
- Research articles and stories
- Category filtering
- Featured content
- Educational resources

### About Page
- Project mission and vision
- Team information
- Data sources
- Contact information

## 🚀 Performance

- **Static Generation**: All pages are pre-rendered at build time
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for optimal loading
- **Bundle Analysis**: Built-in bundle analyzer

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Open Knowledge Nepal** - Project lead and data curation
- **Open Data Nepal** - Data source and API
- **Nepal Government** - Official climate data
- **ICIMOD** - Research and insights

## 📞 Support

For support and questions:
- Email: info@oknp.org
- GitHub Issues: [Create an issue](https://github.com/okfnepal/climate-portal/issues)
- Website: [https://oknp.org](https://oknp.org)

---

**Made with ❤️ by Open Knowledge Nepal - "Liberating Knowledge for Opportunity"**
