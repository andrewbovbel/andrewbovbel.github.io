# Study Spot Images Guide

## Folder Location
Put all study spot photos in this folder: `/public/images/study-spots/`

## Naming Convention

Name your images using the spot ID from `mockData.js`:

### Format: `{spot-id}.{extension}`

### Examples:

| Spot ID | Spot Name | Image Filename |
|---------|-----------|----------------|
| 1 | Thode Library | `1.jpg` |
| 2 | Health Science Library | `2.jpg` |
| 3 | Mills Library | `3.jpg` |
| 4 | 6th Floor Mills | `4.jpg` |
| 5 | Thode Basement | `5.jpg` |
| 6 | Health Science Rooms | `6.jpg` |
| 7 | Gerald Hatch Rooms | `7.jpg` |
| 8 | Mikels | `8.jpg` |
| 9 | Starbucks | `9.jpg` |
| 10 | Williams | `10.jpg` |
| 11 | Peter George Window Room | `11.jpg` |
| 12 | Green House | `12.jpg` |
| 13 | Math Building | `13.jpg` |

## Format
- **All images must use `.jpg` extension**
- All image paths in mockData.js are configured for `.jpg` format

## How to Update mockData.js

Once you've added your images, update the `image` field in `src/data/mockData.js`:

```javascript
{
  id: '1',
  name: 'Thode Library',
  image: '/images/study-spots/1.jpg', // Use this format
  // ... rest of the data
}
```

## Path Format
Since images are in the `public` folder, you reference them starting with `/`:

- Path in public folder: `public/images/study-spots/1.jpg`
- Reference in code: `/images/study-spots/1.jpg`

## Tips
- Use consistent image sizes (recommended: 800x600px or 1200x800px)
- Optimize images for web (compress to reduce file size)
- Use descriptive alt text will be automatically added from spot name

