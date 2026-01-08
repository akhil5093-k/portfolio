# Akhil Nayak - Personal Portfolio Website

A modern, animated personal portfolio website built with React.js, featuring a dark theme with neon accents, smooth animations, and professional design.

## 🚀 Features

### ✨ Design & UI
- **Modern Dark Theme**: Professional dark background with neon green/blue accents
- **Smooth Animations**: Powered by Framer Motion for professional transitions
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Interactive Elements**: Hover effects, button animations, and scroll indicators

### 🧭 Navigation
- **Sticky Navbar**: Always accessible navigation with smooth scroll
- **Active Section Highlighting**: Dynamic underline animation for current section
- **Mobile-Friendly**: Hamburger menu for mobile devices

### 📄 Sections
1. **Home**: Animated intro with call-to-action buttons
2. **About**: Personal information with animated statistics
3. **Skills**: Interactive skill bars with proficiency levels
4. **Projects**: Showcase of featured projects with hover effects
5. **Resume**: Direct PDF download functionality
6. **Certificates**: Clickable certificate cards that open PDFs
7. **Contact**: Multiple contact methods with click-to-action buttons

### 🔧 Technical Features
- **React Functional Components**: Modern React with hooks
- **Framer Motion**: Professional animations and transitions
- **CSS Modules**: Organized styling with component-specific CSS
- **SEO Optimized**: Meta tags and semantic HTML structure
- **Loading Screen**: Animated loading experience
- **Scroll to Top**: Convenient navigation button

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation Steps

1. **Clone or download the project files**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   - Navigate to `http://localhost:3000`
   - The website will automatically reload when you make changes

### Build for Production
```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/           # Reusable components
│   ├── Navbar/          # Navigation component
│   ├── LoadingScreen/   # Loading animation
│   └── ScrollToTop/     # Scroll to top button
├── pages/               # Main page sections
│   ├── Home/           # Landing section
│   ├── About/          # About me section
│   ├── Skills/         # Skills showcase
│   ├── Projects/       # Projects portfolio
│   ├── Certificates/   # Certificates display
│   └── Contact/        # Contact information
├── assets/             # Static assets (if needed)
├── App.js              # Main application component
├── App.css             # Global styles
├── index.js            # Application entry point
└── index.css           # Base CSS styles

public/
├── resume.pdf          # Resume file
├── certificates/       # Certificate files
│   └── sample-certificate.pdf
├── index.html          # HTML template
└── manifest.json       # PWA manifest
```

## 🎨 Customization

### Personal Information
Update the following files with your information:

1. **src/pages/Home/Home.js**: Update name and title
2. **src/pages/About/About.js**: Update personal description and stats
3. **src/pages/Skills/Skills.js**: Update skills and proficiency levels
4. **src/pages/Projects/Projects.js**: Update project information
5. **src/pages/Certificates/Certificates.js**: Update certificates data
6. **src/pages/Contact/Contact.js**: Update contact information

### Resume & Certificates
1. Replace `public/resume.pdf` with your actual resume
2. Add certificate files to `public/certificates/`
3. Update certificate file paths in `src/pages/Certificates/Certificates.js`

### Styling
- Colors and themes can be modified in individual CSS files
- Global styles are in `src/index.css` and `src/App.css`
- Component-specific styles are in their respective CSS files

## 📧 Contact Integration

The contact section includes:
- **Email**: Opens default mail client with `mailto:` link
- **LinkedIn**: Opens LinkedIn profile in new tab
- **GitHub**: Opens GitHub profile in new tab
- **Phone**: Initiates phone call on mobile devices

Update the contact information in `src/pages/Contact/Contact.js`:
```javascript
const contactMethods = [
  {
    title: "Email",
    action: "mailto:your-email@example.com",
    label: "your-email@example.com",
    // ... other properties
  },
  // ... other contact methods
];
```

## 🚀 Deployment

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/your-repo-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Mobile Optimization

- Responsive grid layouts
- Touch-friendly navigation
- Optimized font sizes
- Mobile-specific animations
- Hamburger menu for small screens

## 🔧 Performance Features

- Lazy loading for sections
- Optimized animations
- Compressed assets
- Efficient re-renders
- Smooth scroll behavior

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, pull requests are welcome!

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out through the contact methods provided in the website.

---

**Built with ❤️ using React.js and Framer Motion**