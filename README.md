# Fast Lane Dispatch Services LLC

A premium, high-performance web application built for a modern truck dispatching service. This site serves as a digital storefront to attract carriers, owner-operators, and fleets by offering professional dispatching solutions such as dedicated lanes, stepdeck, reefer, and flatbed transport management.

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Google Fonts](https://fonts.google.com/) (Inter & Outfit)

## ✨ Key Features

- **Premium Modern Design**: Built with a sleek dark theme, glassmorphism UI elements, and vibrant golden yellow accents to command trust and professionalism.
- **Dynamic Animations**: Scroll-reveal elements and micro-interactions powered by Framer Motion.
- **SEO Optimized**: Fully configured metadata with Next.js App Router for maximal search engine visibility.
- **Responsive Navigation**: Includes a mobile-friendly drawer menu and sticky, backdrop-blur global navigation.
- **Centralized Data Management**: All company details, contact information, and service definitions are statically configured in `src/lib/constants.ts` for easy updates.

## 📦 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/en/) installed (v18.x or newer is recommended).

### Installation

1. Clone the repository and navigate to the project directory:

   ```bash
   cd fastlanedispatchservicesllc.com
   ```

2. Install the necessary dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```text
├── public/                 # Static assets (images, fonts, etc.)
├── src/
│   ├── app/                # Next.js App Router root (Pages & Layout)
│   │   ├── about-us/       # About Page (/about-us)
│   │   ├── contact-us/     # Contact Page (/contact-us)
│   │   ├── services/       # Services Catalog (/services)
│   │   ├── globals.css     # Global Tailwind & Theme declarations
│   │   ├── layout.tsx      # Root Layout with Navbar/Footer
│   │   └── page.tsx        # Home Page (/)
│   ├── components/         # Reusable React Components
│   │   ├── home/           # Sections specific to the Home page
│   │   ├── layout/         # Global structural components (Navbar, Footer)
│   │   └── ui/             # Reusable UI primitives (Buttons, Titles, Cards)
│   └── lib/                # Utility functions and Data
│       ├── constants.ts    # Centralized application data
│       └── utils.ts        # Tailwind class merge utilities
└── next.config.ts          # Next.js configuration (Remote Image Patterns)
```

## 🛠️ Configuration & Editing

- **Updating Company Info**: You can quickly change the phone number, email, address, or service descriptions by editing the `src/lib/constants.ts` file.
- **Updating Colors**: The primary golden yellow and background dark themes are defined as CSS variables inside `src/app/globals.css`.

## 📜 Copyright

Copyrights © 2026. Fast Lane Dispatch Services LLC. All Rights Reserved.
