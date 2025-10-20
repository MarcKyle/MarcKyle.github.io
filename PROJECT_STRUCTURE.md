# Project Structure Documentation

## Overview
This React portfolio application is now organized into a modular, maintainable structure with reusable components, separate pages, and centralized data management.

## Folder Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation bar with routing
│   ├── Footer.jsx      # Footer with social links
│   ├── Hero.jsx        # Hero/banner component
│   ├── SkillCard.jsx   # Individual skill display card
│   └── ProjectCard.jsx # Individual project display card
│
├── pages/              # Page components (routes)
│   ├── Home.jsx        # Landing page with previews
│   ├── About.jsx       # About me section
│   ├── Skills.jsx      # Skills showcase
│   ├── Projects.jsx    # Projects portfolio
│   ├── Education.jsx   # Education & certifications
│   └── Contact.jsx     # Contact form
│
├── data/               # Centralized data files
│   ├── skills.js       # Skills array
│   ├── projects.js     # Projects array
│   └── socialLinks.js  # Social media links
│
├── App.jsx             # Main app with routing configuration
├── main.jsx            # Entry point with BrowserRouter
└── styles.css          # Global styles
```

## Component Reusability

### Reusable Components

1. **Navbar** (`components/Navbar.jsx`)
   - Used on all pages
   - Handles mobile menu state
   - Highlights active route
   - Responsive design

2. **Footer** (`components/Footer.jsx`)
   - Used on all pages
   - Dynamically renders social links from data
   - Consistent branding

3. **Hero** (`components/Hero.jsx`)
   - Reusable hero/banner component
   - Currently used on Home page
   - Can be customized for other pages

4. **SkillCard** (`components/SkillCard.jsx`)
   - Displays individual skill
   - Used in Skills page and Home preview
   - Props: `skill` object

5. **ProjectCard** (`components/ProjectCard.jsx`)
   - Displays individual project
   - Used in Projects page and Home preview
   - Props: `project` object

### Data Files

1. **skills.js** - Array of skill objects with:
   - name
   - icon (Font Awesome class)

2. **projects.js** - Array of project objects with:
   - id
   - title
   - description
   - tags
   - image
   - link

3. **socialLinks.js** - Array of social link objects with:
   - name
   - url
   - icon
   - hoverColor

## Routing Structure

| Route        | Component       | Description                    |
|--------------|-----------------|--------------------------------|
| `/`          | Home.jsx        | Landing page with previews     |
| `/about`     | About.jsx       | About me information           |
| `/skills`    | Skills.jsx      | Complete skills showcase       |
| `/projects`  | Projects.jsx    | Projects portfolio             |
| `/education` | Education.jsx   | Education & certifications     |
| `/contact`   | Contact.jsx     | Contact form                   |

## Navigation Flow

1. **Home Page** serves as the hub with:
   - Hero section
   - Quick intro
   - Featured skills (first 4)
   - Featured projects (all 3)
   - Call-to-action buttons to other sections

2. **Individual Pages** provide detailed views:
   - About: Expanded bio, what I do, social links
   - Skills: All skills + categorized view
   - Projects: All projects + GitHub link
   - Education: Academic history + certifications
   - Contact: Contact form + contact info

## How to Extend

### Adding a New Skill
Edit `src/data/skills.js`:
```javascript
export const skills = [
  // ... existing skills
  { name: 'New Skill', icon: 'fab fa-icon-class text-color' }
]
```

### Adding a New Project
Edit `src/data/projects.js`:
```javascript
export const projects = [
  // ... existing projects
  {
    id: 4,
    title: 'New Project',
    description: 'Description here',
    tags: ['Tag1', 'Tag2'],
    image: 'https://...',
    link: '#'
  }
]
```

### Adding a New Page
1. Create `src/pages/NewPage.jsx`
2. Add route in `src/App.jsx`:
   ```javascript
   <Route path="/newpage" element={<NewPage />} />
   ```
3. Add link in `src/components/Navbar.jsx`:
   ```javascript
   { name: 'New Page', path: '/newpage' }
   ```

### Creating a New Reusable Component
1. Create file in `src/components/`
2. Accept props for customization
3. Import and use in page components

## Benefits of This Structure

**Modularity**: Each component has a single responsibility
**Reusability**: Components can be used across multiple pages
**Maintainability**: Easy to find and update specific functionality
**Scalability**: Simple to add new pages, components, or data
**DRY Principle**: Data is defined once and reused everywhere
**Navigation**: React Router enables smooth client-side routing
**Organization**: Clear separation between components, pages, and data

## Development Commands

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

## Notes

- All styling uses Tailwind CSS via CDN (same as original)
- Font Awesome icons via CDN for consistency
- React Router handles all navigation
- Smooth scrolling and animations preserved from original CSS
- Mobile-responsive design maintained throughout
