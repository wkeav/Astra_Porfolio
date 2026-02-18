# Assets Folder Organization

This folder contains all media assets for the portfolio website.

## Folder Structure:

### 📹 `/videos/`
- Background animation videos
- Video content for portfolio
- Demo videos
- Supported formats: .mp4, .webm, .mov

### 🖼️ `/images/`
- Profile pictures
- UI icons and graphics
- Background images
- Supported formats: .jpg, .png, .svg, .gif

### 🎨 `/animations/`
- GIF animations
- Lottie files (.json)
- CSS animation assets
- Interactive animation files

### 💼 `/portfolio/`
- Work samples and screenshots
- Project thumbnails
- Case study images
- Client work examples

## Usage Examples:

### Background Video:
```html
<source src="assets/videos/background-animation.mp4" type="video/mp4">
```

### Profile Image:
```html
<img src="assets/images/profile-picture.jpg" alt="Astra Profile">
```

### Portfolio Thumbnail:
```html
<img src="assets/portfolio/project-thumbnail.png" alt="Project Name">
```

## File Naming Convention:
- Use lowercase with hyphens: `background-animation.mp4`
- Be descriptive: `profile-picture-2024.jpg`
- Include dimensions for images: `hero-banner-1920x1080.jpg`
- Use version numbers if needed: `logo-v2.svg`

## Optimization Tips:
- Compress videos for web (H.264 codec recommended)
- Optimize images (use WebP format when possible)
- Keep file sizes reasonable for fast loading
- Consider multiple formats for browser compatibility