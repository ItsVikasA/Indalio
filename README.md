# Indalio - Premium Workspace Accessories

A modern Next.js website for Indalio, a leading manufacturer of premium gas-spring monitor arms and cable management solutions based in Ludhiana, Punjab.

## 🚀 About Indalio

Indalio specializes in manufacturing high-quality ergonomic workspace accessories:
- **Gas Spring Monitor Arms** - Smooth, adjustable monitor positioning
- **Wall-Mounted Solutions** - Space-saving mounting systems
- **Cable Management Systems** - Organized and clutter-free workspaces

### Target Markets
- Corporate Offices & Workplaces
- IT Companies & Tech Startups
- Stock Market Traders
- Furniture Manufacturers & Dealers
- E-Commerce & Home Office Users
- Gaming Setup Enthusiasts

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.4
- **React**: 18
- **Styling**: 
  - Bootstrap 5
  - Custom SCSS
  - CSS Animations
- **UI Components**: 
  - Swiper.js for sliders
  - WOW.js for scroll animations
  - Font Awesome icons
- **Features**:
  - Responsive design
  - Interactive forms with client-side validation
  - Scrolling audience sections
  - FAQ accordion
  - Contact form with multiple inquiry types

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AbhiramBharadwaj/Indalio.git
   cd Indalio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🗂️ Project Structure

```
├── app/                    # Next.js app directory
│   ├── page.js            # Home page
│   ├── about/             # About page
│   ├── contact/           # Contact page with working form
│   ├── layout.js          # Root layout with metadata
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── AudienceScroller.js   # Horizontal scrolling sections
│   ├── Faq.js                # FAQ accordion
│   ├── Cta.js                # Call-to-action sections
│   └── ...
├── layouts/               # Layout components
│   ├── Header.js          # Navigation header
│   ├── Footer.js          # Footer with company info
│   └── Preloader.js       # Loading screen with logo
├── public/                # Static assets
│   └── assets/
│       ├── img/           # Images and logo
│       ├── css/           # Stylesheets
│       └── fonts/         # Icon fonts
└── utility/               # Utility functions
```

## ✨ Key Features

### 🎯 Home Page
- Hero section with company branding
- Service showcase with monitor arms and cable management
- About section highlighting Ludhiana manufacturing
- Primary & Secondary Target Audiences (with horizontal scrolling)
- Team section
- Testimonials
- FAQ accordion

### 📞 Contact Page
- Working contact form with form validation
- Multiple inquiry types (Bulk Orders, OEM Partnership, Dealer, etc.)
- Quick action cards for different user types
- Contact information with clickable phone numbers
- Embedded Google Maps

### 🎨 Design Features
- Responsive across all devices
- Custom scrolling animations for audience sections
- Smooth transitions and hover effects
- Professional color scheme (Orange theme #FF6600)
- Optimized logo display (90px home, 70px other pages)

## 🔧 Configuration

### Metadata
The site includes comprehensive metadata in `app/layout.js`:
- SEO-optimized titles and descriptions
- Open Graph tags for social media sharing
- Twitter Card support
- Custom favicon and app icons

### Branding
- Company logo: `/public/assets/img/logo/logo.png`
- Preloader displays "INDALIO" with company logo
- Favicon set to company logo

## 📱 Contact Information

- **Sales & Bulk Orders**: +91 9988092664 / 7517500024
- **Dealer & Distributor**: +91 7317300024 (Namanpreet Kaur)
- **Website**: www.indalio.com

## 🚀 Deployment

### Build for production
```bash
npm run build
```

### Start production server
```bash
npm start
```

### Deploy to Vercel
This project is optimized for Vercel deployment:
```bash
vercel
```

## 📄 Scripts

```json
{
  "dev": "next dev",           // Development server
  "build": "next build",       // Production build
  "start": "next start",       // Production server
  "lint": "next lint"          // Linting
}
```

## 🌟 Highlights

- **Fully Functional Contact Form** - Client-side form handling with validation
- **Scrolling Audience Sections** - Smooth horizontal scrolling animations
- **Responsive FAQ** - Bootstrap accordion with 12 questions
- **Optimized Performance** - Fast loading with Next.js optimization
- **SEO Ready** - Comprehensive metadata and semantic HTML
- **Mobile First** - Fully responsive design

## 📝 License

All rights reserved © Indalio - Premium Workspace Accessories

## 🤝 Contributing

For any inquiries or suggestions, please contact the development team.

---

**Built with ❤️ for Indalio | Engineered in Ludhiana, Punjab**
