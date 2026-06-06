# Akhil Nayak - Personal Portfolio

A modern, responsive personal portfolio website built with React.js, showcasing my skills, projects, education, and professional experience in Computer Science and Cybersecurity.

## Live Demo

[View Live Portfolio](https://akhil5093-k.github.io/portfolio)

## Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Sections](#sections)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contact](#contact)

## About

This portfolio website represents my journey as a Computer Science & Cybersecurity student at CVR College of Engineering, Hyderabad. It showcases my technical skills, academic achievements, professional certifications, and project work in an interactive and visually appealing format.

## Features

### Design & User Experience
- **Modern Dark Theme** - Sleek dark interface with gradient accents
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - Framer Motion powered animations and transitions
- **Interactive Elements** - Hover effects and smooth scrolling navigation
- **Clean Typography** - Professional and readable font choices

### Responsive Layout
- Mobile-first design approach
- Adaptive layouts for different screen sizes
- Touch-friendly navigation on mobile devices

### External Integrations
- **Google Drive Integration** - Direct links to certificates and resume
- **GitHub Integration** - Links to project repositories
- **Email Integration** - Direct contact via email client
- **Phone Integration** - Click-to-call functionality

## Technologies Used

### Frontend
- **React.js** - Component-based UI library
- **Framer Motion** - Animation and gesture library
- **CSS3** - Modern styling with flexbox and grid
- **JavaScript (ES6+)** - Modern JavaScript features

### Development Tools
- **Create React App** - React application boilerplate
- **npm** - Package management
- **Git** - Version control

### External Services
- **Google Drive** - Document hosting and sharing
- **GitHub** - Code repository hosting
- **Vercel/Netlify** - Deployment platform *(recommended)*

## Sections

### Home
- Professional introduction
- Role highlights: Cybersecurity Enthusiast | Computer Science Engineer | Full Stack Developer | Problem Solver
- Call-to-action buttons for resume and contact

### Education
- **CVR College of Engineering, Hyderabad** - B.Tech in Computer Science & Cyber Security (CGPA: 8.69)
- **Narayana Junior College, Hyderabad** - Intermediate (MPC) - 91.5%
- **Sai Chaitanya Model School, Hyderabad** - 10th Grade (CGPA: 10.0)

### Projects

#### 1. Hangman Game (GUI Application)
- **Technologies**: Python, Tkinter, GUI Development, Game Logic
- **Features**: Interactive GUI, dynamic word database, scoring system, customizable settings
- **Repository**: [GitHub Link](https://github.com/akhil5093-k/hangman)

#### 2. Quiz Competition Web Application (Full Stack)
- **Technologies**: React.js, Node.js, Express.js, Firebase Firestore
- **Features**: Real-time leaderboard, timer functionality, responsive design, admin panel
- **Repository**: [GitHub Link](https://github.com/akhil5093-k/cyberhunt-quiz)
- **Live Demo**: [View Application](https://deploy-teal-ten.vercel.app/)

### Skills
Interactive timeline showcasing technical skills including:
- **Programming Languages**: Python, JavaScript, Java, C
- **Web Technologies**: React.js, Node.js, HTML5, CSS3
- **Databases**: SQL, Firebase Firestore
- **Cybersecurity Tools**: Network Security, Threat Analysis
- **Development Tools**: Git, VS Code, Postman

### Certificates
Professional certifications with direct viewing links:
- **Cyber Security Virtual Internship** - EduSkills (AICTE & Palo Alto Networks)
- **Zero Trust Cloud Security Virtual Internship** - Zscaler
- **Database Programming with SQL** - Oracle Academy
- **Google Skill Boost – Gen AI Study Jams** - Google

### Contact
Multiple contact methods:
- **Email**: akhilnayak509321@gmail.com
- **Phone**: +91 75698 34897
- **GitHub**: github.com/akhil5093-k
- **Location**: Hyderabad, India

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Git

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/akhil5093-k/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## Usage

### Development
```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

### Building for Production
```bash
npm run build
```
This creates a `build` folder with optimized production files.

## Project Structure

```
portfolio/
├── public/
│   ├── certificates/          # Certificate files (local backup)
│   ├── index.html
│   ├── manifest.json
│   └── resume.pdf            # Resume file (local backup)
├── src/
│   ├── components/           # Reusable components
│   │   ├── LoadingScreen/
│   │   ├── Navbar/
│   │   └── ScrollToTop/
│   ├── pages/               # Main page components
│   │   ├── About/
│   │   ├── Certificates/
│   │   ├── Contact/
│   │   ├── Home/
│   │   ├── Projects/
│   │   └── Skills/
│   ├── App.js              # Main app component
│   ├── App.css             # Global styles
│   └── index.js            # Entry point
├── package.json
└── README.md
```

## Customization

### Personal Information
Update the following files with your information:
- `src/pages/Home/Home.js` - Name, tagline, description
- `src/pages/About/About.js` - Education details
- `src/pages/Contact/Contact.js` - Contact information
- `src/pages/Projects/Projects.js` - Project details
- `src/pages/Certificates/Certificates.js` - Certificates and achievements

### Styling
- `src/App.css` - Global styles
- Individual component CSS files for specific styling
- Color scheme can be modified in CSS custom properties

### Content
- Replace Google Drive links with your own document links
- Update project repositories and live demo links
- Modify skills and technologies based on your expertise

## Deployment

### Recommended Platforms

1. **Vercel** (Recommended)
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Netlify**
   - Connect GitHub repository
   - Auto-deploy on push

3. **GitHub Pages**
   ```bash
   npm install --save-dev gh-pages
   npm run build
   npm run deploy
   ```

### Environment Setup
- Ensure all external links (Google Drive, GitHub) are accessible
- Test all contact methods before deployment
- Verify responsive design on different devices

## Performance Features

- **Optimized Images** - Efficient loading and display
- **Code Splitting** - Lazy loading of components
- **Responsive Design** - Mobile-first approach
- **SEO Friendly** - Proper meta tags and structure
- **Fast Loading** - Optimized bundle size

## Maintenance

### Regular Updates
- Keep dependencies updated
- Update project information as you grow
- Add new certificates and achievements
- Refresh project portfolio regularly

### Monitoring
- Check external links periodically
- Ensure Google Drive links remain accessible
- Test contact form functionality
- Monitor website performance

## Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

**Akhil Nayak**
- Email: akhilnayak509321@gmail.com
- Phone: +91 75698 34897
- GitHub: [@akhil5093-k](https://github.com/akhil5093-k)
- Location: Hyderabad, India

---

Built with passion by Akhil Nayak
