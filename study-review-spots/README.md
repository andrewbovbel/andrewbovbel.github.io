# Study Review Spots

A React application built with Vite for discovering and reviewing study spots on campus.

## Features

- **Home Page**: Search interface with featured study spots and "How It Works" guide
- **Search/Browse Page**: Filter study spots by type, noise level, and amenities
- **Spot Detail Page**: View comprehensive information, reviews, and ratings for each study spot

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

## Project Structure

- `/src/components` - Reusable components (Navbar)
- `/src/pages` - Main page components (Home, Search, SpotDetail)
- `/src/data` - Mock data for study spots
- `/DESIGN_DOCUMENT.txt` - Complete design documentation

## Deployment to GitHub Pages

This app is configured to deploy to `https://andrewbovbel.github.io` (root domain).

### Option 1: GitHub Actions (Recommended)

1. Push your code to GitHub
2. Go to your repository settings → Pages
3. Under "Source", select "GitHub Actions"
4. The workflow will automatically deploy when you push to `main` or `master` branch

### Option 2: Manual Deployment

```bash
npm run deploy
```

This will build the app and deploy it to the `gh-pages` branch.

### Important Notes

- The repository should be named `andrewbovbel.github.io` to deploy to the root domain
- Or use GitHub Actions workflow which works with any repository name
- Make sure GitHub Pages is enabled in your repository settings

## Design Document

See `DESIGN_DOCUMENT.txt` for detailed information about:
- User groups and characteristics
- Additional tasks and functions
- Task mapping to interface screens
- Design justifications
