# Solafide Services

A React-based company website for Solafide Services, a professional masonry/stone/concrete company in Florida.

## Tech Stack

- **Framework**: React 18.3.1 (Create React App / react-scripts 5)
- **Styling**: Bootstrap 4, SASS, custom themes (BLK Design System Pro), Tailwind (for Repairs.tsx)
- **Routing**: React Router DOM v7
- **SEO**: react-helmet-async (HelmetProvider once at root in src/index.js; all pages use `<Helmet>`)
- **3D/WebGL**: Three.js (Solafide3DWalkthrough.tsx, Repairs.tsx — with graceful fallback when WebGL unavailable)
- **Charts**: Chart.js, react-chartjs-2
- **Animations**: GSAP
- **Icons**: FontAwesome, Nucleo Icons
- **UI Components**: reactstrap ^9.2.3

## Project Structure

```
src/
  index.js          # App entry point with routes
  views/
    Index.js        # Home page
    examples/       # All page components (AboutUs, Blog, Gallery, etc.)
    SectionsSections/ # Reusable section components
  components/       # Shared UI components (ColorNavbar, DemoFooter, Solafide3DWalkthrough, Repairs, SEO, etc.)
  assets/           # CSS, SCSS, images, fonts
public/             # Static assets, manifest, favicon
```

## Routes

- `/` → Redirects to `/index`
- `/index` → 3D Immersive Intro Walkthrough (Solafide3DWalkthrough) → navigates to `/home`
- `/home` → Main Homepage (Home.js with IndexHeader, Repairs, testimonials, blog cards)
- `/about-us` → About Us page (professional paragraph + Request a Repair form)
- `/commercial` → Commercial Gallery page (BlogPost.js)
- `/residential` → Residential page (BlogPosts.js)
- `/contact-us` → Contact page
- `/gallery` → Gallery (LandingPage.js)
- `/clean-seal` → Clean & Seal (Ecommerce.js)
- `/blog` → Blog index (Blog.tsx with SEO)
- `/blog/:postId` → Individual blog post (BlogPost.tsx)
- `/privacy-policy` → Privacy Policy (Privacy.js)

## Development

- Runs on port 5000 via `npm start`
- HOST=0.0.0.0 and DANGEROUSLY_DISABLE_HOST_CHECK=true set for Replit proxy compatibility

## Deployment

Configured as a static site deployment:
- Build command: `npm run build`
- Public dir: `build`

## Key Customizations

- **3D Intro** (`src/components/Solafide3DWalkthrough.tsx`): Full-screen 3D walkthrough with parallax scroll; "SKIP INTRO →" frosted-glass button top-right; completes by navigating to `/home`
- **3D immersive styles** in `src/assets/demo/demo.css`: `.card-3d`, `.card-immersive`, `.card-lift`, `.contact-widget`, `.section-tag`
- **Home page** (`src/views/Home.js`): Main landing page with ColorNavbar, IndexHeader hero, Repairs (WebGL house selector w/ fallback), testimonials, 3D service cards, blog section
- **About Us** (`src/views/examples/AboutUs.js`): Edgar image removed; professional paragraph; "Request a Home Repair" glass-panel contact form (postmail.invotes.com); SEO Helmet block
- **Blog/BlogPost** (`src/views/examples/Blog.tsx`, `src/views/examples/BlogPost.tsx`): ColorNavbar + DemoFooter for consistent site navigation; structured data SEO
- **Repairs** (`src/components/Repairs.tsx`): 3D interactive house selector via Three.js; graceful fallback contact form when WebGL is unavailable
- **SEO**: Domain `solafide-services.com` used throughout Helmet blocks; structured data in blog components

## Notes

- HelmetProvider is mounted once at root in `src/index.js`; all pages use only `<Helmet>` (never HelmetProvider in components)
- Contact form endpoint: `https://postmail.invotes.com/send` (access_token: u3i8mym4hhvek1bb4z1p5qqv — stored in AboutUs.js)
- Repairs.tsx Three.js useEffect has intentional missing-deps lint warning (by design to avoid re-init loop)
- Home.js has some unused reactstrap imports (Form/FormGroup/Input are actually used in contact section; LazyLoad import is unused but harmless)
- GitHub remote: `xxbattousaixx/solafide3` (public); upstream files applied via GitHub contents API
- Tailwind is configured alongside the existing SASS/Bootstrap stack (postcss.config.js + tailwind.config.js)
