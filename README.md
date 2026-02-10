# Faculty Profile UI Template

A responsive academic faculty profile webpage built with React and Tailwind CSS.

## Features

- ✅ Two-column responsive layout
- ✅ Fixed sidebar navigation (desktop) with mobile menu
- ✅ Professional academic design
- ✅ Smooth scroll navigation
- ✅ Reusable components
- ✅ Demo/placeholder content
- ✅ Easy data management via JSON

## Installation

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx          # Desktop sidebar navigation
│   │   ├── MobileMenu.jsx       # Mobile hamburger menu
│   │   ├── Header.jsx           # Top header bar
│   │   ├── PersonalDetails.jsx  # Profile info section
│   │   ├── Education.jsx        # Education section
│   │   ├── Experience.jsx       # Experience section
│   │   └── PlaceholderSection.jsx # Reusable placeholder
│   ├── data.js                  # All demo data in one place
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global styles
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Customization

### Update Content

Edit `src/data.js` to change all profile information:

```javascript
export const profileData = {
  name: "Your Name",
  title: "Your Title",
  university: "Your University",
  // ... etc
};
```

### Styling

- Sidebar color: Change `#0b2c4d` in `tailwind.config.js`
- Fonts: Update Google Fonts link in `index.html`
- Additional styles: Add to `src/index.css`

### Add New Sections

1. Create a new component in `src/components/`
2. Import and add to `App.jsx`
3. Add navigation item to `data.js`

## Technologies

- **React 18** - UI framework
- **Tailwind CSS 3** - Utility-first styling
- **Vite** - Build tool and dev server
- **Font Awesome 6** - Icons

## Demo Content

All content is placeholder/demo data. This is a **UI template** for building faculty profile systems. Replace the dummy data with real information as needed.

## Responsive Breakpoints

- Mobile: < 768px (hamburger menu)
- Desktop: ≥ 1024px (fixed sidebar)

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge) with ES6+ support.
