# Marc Kyle Jimena Portfolio

A modern, modular React portfolio website built with Vite, featuring proper component organization, reusable modules, and client-side routing.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server will start at `http://localhost:5173/`

## 📁 Project Structure

This project follows a modular architecture with clear separation of concerns:

```
src/
├── components/      # Reusable UI components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── SkillCard.jsx
│   └── ProjectCard.jsx
│
├── pages/          # Page components (routes)
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Education.jsx
│   └── Contact.jsx
│
├── data/           # Centralized data management
│   ├── skills.js
│   ├── projects.js
│   └── socialLinks.js
│
├── App.jsx         # Router configuration
├── main.jsx        # App entry point
└── styles.css      # Global styles
```

## 🎨 Features

- ✅ **Modular Architecture**: Organized into reusable components, pages, and data
- ✅ **React Router**: Smooth client-side navigation between sections
- ✅ **Responsive Design**: Mobile-first approach with Tailwind CSS
- ✅ **Reusable Components**: DRY principle with shared UI elements
- ✅ **Data-Driven**: Centralized data files for easy content management
- ✅ **Modern Stack**: React 18 + Vite for fast development

## 📄 Pages

| Route        | Description                              |
|--------------|------------------------------------------|
| `/`          | Landing page with featured content       |
| `/about`     | About me, bio, and social links          |
| `/skills`    | Technical skills showcase                |
| `/projects`  | Portfolio of projects                    |
| `/education` | Education history and certifications     |
| `/contact`   | Contact form and information             |

## 🔧 Technologies

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router 6** - Client-side routing
- **Tailwind CSS** (CDN) - Utility-first styling
- **Font Awesome** (CDN) - Icons

## 📝 Documentation

- **[PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)** - Detailed folder structure and extension guide
- **[COMPONENT_ARCHITECTURE.md](./COMPONENT_ARCHITECTURE.md)** - Component hierarchy and data flow

## 🚀 Deployment to GitHub Pages

### Option A (Recommended)
1. Build the project: `npm run build`
2. Configure GitHub Pages to serve the `dist/` folder from repository settings

### Option B
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json:
   ```json
   "scripts": {
     "deploy": "vite build && gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

**Note:** The `CNAME` file is preserved for custom domain support.

## 🎯 Adding New Content

### Add a Skill
Edit `src/data/skills.js`:
```javascript
{ name: 'New Skill', icon: 'fab fa-icon-class text-color' }
```

### Add a Project
Edit `src/data/projects.js`:
```javascript
{
  id: 4,
  title: 'Project Name',
  description: 'Description',
  tags: ['Tag1', 'Tag2'],
  image: 'https://...',
  link: '#'
}
```

### Add a Page
1. Create `src/pages/NewPage.jsx`
2. Add route in `src/App.jsx`
3. Add navigation link in `src/components/Navbar.jsx`

## 📦 Benefits of This Structure

- **Maintainability**: Easy to locate and update specific features
- **Scalability**: Simple to add new components, pages, or data
- **Reusability**: Components can be used across multiple pages
- **Organization**: Clear separation between UI, pages, and data
- **Performance**: Vite provides fast HMR and optimized builds

## 📄 License

See [LICENSE](./LICENSE) file for details.

## 👤 Contact

Marc Kyle Jimena - Computer Science Undergraduate & Future Software Engineer

- GitHub: [@MarcKyle](https://github.com/MarcKyle)
- Steam: [_MonDY_](https://steamcommunity.com/id/_MonDY_/)
- Discord: [MarcKyle#0000](https://discordapp.com/users/447286089716072448)
