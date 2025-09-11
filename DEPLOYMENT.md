# Deployment Guide - Whitecliffe Student Hub

## 📋 Overview

The Whitecliffe Student Hub is a static web application designed to be deployed easily and efficiently. This guide covers the recommended deployment methods and setup instructions.

## 🚀 Recommended Deployment Method: GitHub Pages

### Why GitHub Pages?

✅ **Free hosting** for static websites  
✅ **Automatic deployment** from GitHub repository  
✅ **HTTPS by default** with security  
✅ **Custom domain support**  
✅ **Perfect for student projects** - easy to fork and customize  
✅ **No external dependencies** or service complexity  
✅ **Integrated with GitHub workflow**  

### Setup Instructions

#### 1. Repository Configuration

1. **Fork this repository** (if you haven't already)
2. **Clone your fork** to your local machine
3. **Make any customizations** to courses, assignments, or styling

#### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in left sidebar)
3. Under **Source**, select **"GitHub Actions"**
4. The deployment workflow is already configured in `.github/workflows/deploy.yml`

#### 3. Automatic Deployment

The included GitHub Actions workflow will automatically:
- Deploy on every push to `main` or `master` branch
- Build and publish your site to GitHub Pages
- Provide the deployment URL in the Actions tab

#### 4. Access Your Site

After deployment, your site will be available at:
```
https://[your-username].github.io/whitecliffe-student-hub
```

### Custom Domain (Optional)

1. **Purchase a domain** (e.g., from Namecheap, Google Domains)
2. **Add CNAME file** to repository root with your domain
3. **Configure DNS** to point to GitHub Pages
4. **Enable custom domain** in repository Settings → Pages

## 🔄 Alternative Deployment Options

### Option 2: Netlify

**Pros:** Better performance, form handling, edge functions  
**Cons:** More complex for simple static sites  

1. **Connect to Netlify:**
   - Sign up at [netlify.com](https://netlify.com)
   - Connect your GitHub repository
   - Deploy automatically on every push

2. **Configuration:**
   ```toml
   # netlify.toml
   [build]
     publish = "."
   
   [[headers]]
     for = "/*"
     [headers.values]
       X-Frame-Options = "DENY"
       X-XSS-Protection = "1; mode=block"
   ```

### Option 3: Vercel

**Pros:** Excellent performance, serverless functions  
**Cons:** Overkill for static content  

1. **Deploy to Vercel:**
   - Sign up at [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy with zero configuration

### Option 4: Cloudflare Pages

**Pros:** Global CDN, excellent performance  
**Cons:** Additional complexity  

1. **Deploy to Cloudflare Pages:**
   - Sign up at [pages.cloudflare.com](https://pages.cloudflare.com)
   - Connect your GitHub repository
   - Deploy automatically

## 📱 Progressive Web App (PWA) Features

The app includes PWA capabilities:

- **Install on mobile/desktop** as a native app
- **Offline functionality** (with service worker)
- **App shortcuts** for quick access to features
- **Theme color** matching for mobile browsers

### Testing PWA Features

1. Open site in mobile browser
2. Look for "Add to Home Screen" option
3. Install as app for native-like experience

## 🛠️ Local Development

### Prerequisites
- Web browser (Chrome, Firefox, Safari, Edge)
- Code editor (VS Code, Atom, Sublime Text)
- Optional: Local web server for testing

### Quick Start
```bash
# Clone repository
git clone https://github.com/your-username/whitecliffe-student-hub.git

# Open in browser
open index.html

# Or serve with Python (optional)
python -m http.server 8000
# Access at http://localhost:8000
```

### File Structure
```
whitecliffe-student-hub/
├── index.html          # Main application page
├── app.js              # JavaScript application logic
├── style.css           # Styling and responsive design
├── manifest.json       # PWA manifest for mobile installation
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions deployment
├── icons/              # PWA icons (to be created)
└── README.md          # Project documentation
```

## 🔧 Customization for Other Students

### Personal Customization

1. **Fork the repository** to your GitHub account
2. **Edit assignments** in `app.js`:
   ```javascript
   this.assignments = [
       {
           title: "Your Assignment Title",
           course: "Your Course Code", 
           dueDate: "2025-MM-DD",
           // ... other properties
       }
   ];
   ```

3. **Update course codes** to match your enrollment
4. **Customize colors** in `style.css` to your preference
5. **Deploy to your GitHub Pages** following the setup instructions

### Institution Customization

For other educational institutions:

1. **Update branding** in HTML/CSS
2. **Modify quick links** to your institution's systems
3. **Adjust course structure** to match your programs
4. **Update motivational content** for your student body

## 🔒 Security Considerations

- **No sensitive data** stored in repository
- **Client-side only** - all data stays in browser
- **HTTPS enforced** through GitHub Pages
- **No server-side processing** - reduced attack surface

## 📊 Performance Optimization

The application is optimized for:
- **Fast loading** (< 2 seconds)
- **Mobile-first design**
- **Minimal dependencies** (vanilla JavaScript)
- **Efficient caching** with PWA features
- **Progressive enhancement**

## 🐛 Troubleshooting

### Common Issues

**GitHub Pages not updating:**
- Check Actions tab for deployment status
- Ensure workflow has proper permissions
- Verify branch name matches workflow trigger

**PWA not installing:**
- Ensure HTTPS is enabled
- Check manifest.json syntax
- Test on supported browsers (Chrome, Edge, Safari)

**Local development issues:**
- Use local web server instead of file:// protocol
- Check browser console for JavaScript errors
- Ensure all file paths are correct

## 📞 Support

- **Issues:** Open an issue on GitHub
- **Questions:** Check existing issues or start a discussion
- **Contributing:** Fork, modify, and submit pull requests

## 📄 License

MIT License - Feel free to use, modify, and distribute!

---

**Built with ❤️ for the Whitecliffe student community**