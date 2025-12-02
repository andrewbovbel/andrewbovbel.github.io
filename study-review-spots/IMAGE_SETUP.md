# Image Setup Guide

## Quick Start

1. **Folder Location**: Put all photos in `/public/images/study-spots/`

2. **Naming**: Name files using the spot ID:
   - Thode Library (ID: 1) → `1.jpg`
   - Health Science Library (ID: 2) → `2.jpg`
   - Mills Library (ID: 3) → `3.jpg`
   - etc.

3. **Update mockData.js**: Change the `image` field from empty string to:
   ```javascript
   image: '/images/study-spots/1.jpg'
   ```

## Complete Mapping

Here's the complete list of spots and their image file names:

```
public/images/study-spots/
├── 1.jpg  → Thode Library
├── 2.jpg  → Health Science Library
├── 3.jpg  → Mills Library
├── 4.jpg  → 6th Floor Mills
├── 5.jpg  → Thode Basement
├── 6.jpg  → Health Science Rooms
├── 7.jpg  → Gerald Hatch Rooms
├── 8.jpg  → Mikels
├── 9.jpg  → Starbucks
├── 10.jpg → Williams
├── 11.jpg → Peter George Window Room
├── 12.jpg → Green House
└── 13.jpg → Math Building
```

## Example Update in mockData.js

Before:
```javascript
{
  id: '1',
  name: 'Thode Library',
  image: '', // User will add picture
  // ...
}
```

After (once you've added the image):
```javascript
{
  id: '1',
  name: 'Thode Library',
  image: '/images/study-spots/1.jpg',
  // ...
}
```

## Image Requirements

- **Format**: JPG (`.jpg` extension) - **All images must use .jpg format**
- **Recommended Size**: 800x600px to 1200x800px
- **File Size**: Keep under 500KB for fast loading
- **Aspect Ratio**: 4:3 or 16:9 works best

## Notes

- Images in the `public` folder are served from the root `/` path
- The path `/images/study-spots/1.jpg` maps to `public/images/study-spots/1.jpg`
- **All image paths in mockData.js are already configured for `.jpg` format**
- Use `.jpg` extension for all images to match the configured paths

