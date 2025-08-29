# Portfolio

This repository contains a modern, responsive portfolio built to showcase my Front-End development skills. The project uses a cutting-edge tech stack with a focus on performance, accessibility, and developer experience.

## Technologies

- **React & Next.js (App Router):** For building the UI and routing.
- **TypeScript:** To ensure type safety and robust code.
- **Tailwind CSS:** For fast, responsive styling.
- **Jest & React Testing Library:** For unit and integration testing.
- **Context API:** For global state management (themes and i18n).

## Architecture

The project follows the **Atomic Design**, methodology, organized as follows:

- `src/components/atoms`: Basic, reusable components (e.g., Button, Icon).
- `src/components/molecules`: Groups of atoms that work as a unit (e.g., ThemeSwitch).
- `src/components/organisms`: Groups of molecules and atoms forming sections (e.g., Header, Home).
- `src/app`: Next.js pages (equivalent to templates and pages in Atomic Design).

## Features

- **Responsive Design:** Layout optimized for mobile, tablet, and desktop.
- **Theme Switcher:** Toggle between light and dark themes; the selected theme is persisted in localStorage.
- **Internationalization (i18n):** Support for multiple languages (Portuguese and English).
- **Unit Tests:** Key components are tested with Jest and React Testing Library to ensure quality.

## How to Run:

1.  Clone the repository:
    ```bash
    git clone https://github.com/alisson-amaral-silva/portfolio-v2-1.git
    cd portfolio-v2-1
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
