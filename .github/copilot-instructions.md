# Copilot Agent Instructions for Hexora2 Frontend

## Project Overview
- This is a React frontend using Vite for fast builds and HMR.
- Main entry: `src/main.jsx`, root component: `src/App.jsx`.
- Pages are organized under `src/components/pages/`, with subfolders for each feature (e.g., `training`, `challenge`, `dashboard`).
- Layout components are under `src/components/layout/`.

## Key Patterns & Conventions
- **Page Components:** Each feature (e.g., Training, Challenge) has its own folder with a main `.jsx` file and a `.css` file for styles.
- **Shared Styles:** Common filter styles are in `src/components/shared/sharedFilterStyle.css`.
- **Navigation:** Uses React Router (`useNavigate`, `useOutletContext`).
- **State:** Local state via `useState`. User context is often mocked directly in components.
- **Difficulty/Level Logic:** Training and Challenge sections use level requirements for access. See `Training.jsx` and `Challenge.jsx` for logic.
- **Button Locking:** Buttons are disabled and styled as secondary when locked (see `Training.jsx` and `Challenge.jsx`).

## Developer Workflows
- **Build/Dev:** Use `npm run dev` for local development (Vite).
- **Lint:** Use `npm run lint` (ESLint config in `eslint.config.js`).
- **Deploy:** Vercel config in `vercel.json`.

## Integration Points
- **Vite Plugins:** Uses `@vitejs/plugin-react` or `@vitejs/plugin-react-swc`.
- **External Assets:** Images/icons in `public/icons/` and referenced in components.

## Examples
- **Training Module Lock:**
  ```jsx
  // src/components/pages/training/Training.jsx
  <button disabled={isLocked}>...</button>
  ```
- **Challenge Entry Level Check:**
  ```jsx
  // src/components/pages/challenge/Challenge.jsx
  const canEnter = user.level >= requiredLevel;
  <button disabled={!canEnter}>...</button>
  ```

## File References
- `src/components/pages/training/Training.jsx` — module lock logic
- `src/components/pages/challenge/Challenge.jsx` — challenge entry logic
- `src/components/layout/header/Header.jsx` — header layout
- `src/App.jsx` — app root

## Special Notes
- User context is currently mocked; update to use real auth/user data for production.
- Follow folder structure for new features: create a folder under `pages` with `.jsx` and `.css` files.

---

If any section is unclear or missing, please provide feedback for improvement.
