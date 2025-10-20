# Component Architecture

## Component Hierarchy

```
App (Router Configuration)
├── Navbar (on all pages)
├── Main Content (React Router Routes)
│   ├── Home
│   │   ├── Hero
│   │   ├── SkillCard (x4 preview)
│   │   └── ProjectCard (x3 preview)
│   │
│   ├── About
│   │   └── (uses socialLinks data)
│   │
│   ├── Skills
│   │   └── SkillCard (x8 all skills)
│   │
│   ├── Projects
│   │   └── ProjectCard (x3 all projects)
│   │
│   ├── Education
│   │   └── (education data inline)
│   │
│   └── Contact
│       └── (contact form)
│
└── Footer (on all pages)
```

## Data Flow

```
Data Files (src/data/)
├── skills.js ────────┬─────> Skills Page (all)
│                     └─────> Home Page (preview)
│
├── projects.js ──────┬─────> Projects Page (all)
│                     └─────> Home Page (preview)
│
└── socialLinks.js ───┬─────> Footer (all pages)
                      ├─────> About Page
                      └─────> Contact Page
```

## Reusable Component Usage

### SkillCard Component
```
Props: { skill: { name, icon } }

Used in:
- Home.jsx (first 4 skills)
- Skills.jsx (all 8 skills)
```

### ProjectCard Component
```
Props: { project: { id, title, description, tags, image, link } }

Used in:
- Home.jsx (all 3 projects)
- Projects.jsx (all 3 projects)
```

### Navbar Component
```
Props: none (uses React Router's useLocation hook)

Used in:
- App.jsx (rendered on all routes)

Features:
- Active route highlighting
- Mobile menu toggle
- Responsive navigation
```

### Footer Component
```
Props: none (imports socialLinks data)

Used in:
- App.jsx (rendered on all routes)

Features:
- Dynamic social links
- Copyright info
```

### Hero Component
```
Props: none (static content)

Used in:
- Home.jsx

Note: Can be made reusable by accepting props for:
- title, subtitle, image, ctaText, ctaLink
```

## Page Responsibilities

| Page      | Purpose                                    | Data Sources          |
|-----------|--------------------------------------------|-----------------------|
| Home      | Landing, previews, CTAs                    | skills, projects      |
| About     | Bio, what I do, social                     | socialLinks           |
| Skills    | Complete skills showcase + categories      | skills                |
| Projects  | Full project portfolio                     | projects              |
| Education | Academic background + certifications       | inline data           |
| Contact   | Contact form + info                        | socialLinks           |

## Styling Architecture

```
Global Styles (styles.css)
├── HTML smooth scrolling
├── .skill-icon (hover animation)
├── .project-card (hover animation)
├── .custom-button (button effects)
└── .nav-link (link underline animation)

Tailwind Classes (via CDN)
├── Layout (flex, grid, container)
├── Spacing (p-, m-, gap-)
├── Colors (bg-, text-)
├── Responsive (md:, lg:)
└── Effects (hover:, transition)
```

## Navigation State Management

```
React Router
├── BrowserRouter (wraps App in main.jsx)
├── Routes + Route (defined in App.jsx)
├── Link (used in Navbar, page CTAs)
└── useLocation (for active route detection)

Local State
├── Navbar: menuOpen (mobile menu toggle)
└── Contact: form (form field values)
```

## Best Practices Implemented

Single Responsibility Principle
   - Each component does one thing well

DRY (Don't Repeat Yourself)
   - Data centralized in data/ folder
   - Reusable components reduce duplication

Component Composition
   - Small components compose into larger pages

Props-driven Design
   - Components accept props for customization

Separation of Concerns
   - Components (UI) separate from Data
   - Pages compose components

Consistent File Organization
   - components/ - reusable UI
   - pages/ - route components
   - data/ - source data

## Future Enhancement Ideas

1. **Extract Education Data**
   - Create `src/data/education.js`
   - Make education items reusable

2. **Create More Reusable Components**
   - SectionHeading (h2 with styling)
   - Card (generic card wrapper)
   - Button (consistent button styles)
   - ContactInfo (contact detail item)

3. **Add Context/State Management**
   - Theme toggle (light/dark mode)
   - Global loading state
   - Form submission state

4. **Add Animations**
   - Framer Motion for page transitions
   - Scroll animations (AOS, Intersection Observer)

5. **Add TypeScript**
   - Type safety for props
   - Better IDE support
   - Catch errors at compile time

6. **Integrate Backend**
   - Real contact form submission
   - CMS for project/skill management
   - Analytics tracking
