# SyllabiSync Site

🚀 **SyllabiSync** - Advanced workflow automation for the Whitecliffe Student Hub

## 🌐 Live Demo

**Figma Make Site:** [SyllabiSync Public URL](https://example-figma-make-url.com)

*Note: Replace the above URL with the actual Figma Make public URL*

## 📋 Overview

SyllabiSync integrates with the Whitecliffe Student Hub to provide enhanced assignment tracking and course management through Figma Make workflow automation.

## 🚀 Deployment

This project is deployed via **Vercel** with **Supabase** backend integration.

### Environment Variables

The following environment variables are required for deployment:

```bash
# Supabase Configuration
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key

# Optional Analytics
GA_ID=your_google_analytics_id
```

### Deployment Steps

1. **Fork/Clone** this repository
2. **Connect to Vercel** - Import your GitHub repository
3. **Set Environment Variables** in Vercel dashboard:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
   - `GA_ID` (optional)
4. **Deploy** - Vercel will automatically build and deploy

### Vercel Configuration

The project includes a `vercel.json` configuration file with:
- Static framework support
- Clean URLs enabled
- Redirect configuration for Figma Make integration

## 🛠️ Technical Stack

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Backend:** Supabase (PostgreSQL)
- **Deployment:** Vercel
- **Automation:** Figma Make
- **CI/CD:** GitHub Actions

## 🔗 Integration

This SyllabiSync site integrates with:
- **Whitecliffe Student Hub** - Main application
- **Figma Make** - Workflow automation
- **Supabase** - Database and authentication
- **Vercel** - Hosting and deployment

## 📚 Features

- ⚡ **Real-time Updates** - Live data synchronization
- 🔄 **Automated Workflows** - Figma Make integration
- 📊 **Progress Tracking** - Enhanced assignment monitoring
- 🔐 **Secure Backend** - Supabase authentication
- 🌐 **Fast Deployment** - Vercel hosting

## 🤝 Contributing

Contributions are welcome! Please check the main repository for contribution guidelines.

---

**Built with ❤️ for the Whitecliffe student community**
