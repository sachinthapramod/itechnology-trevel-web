# Vercel Deployment Guide

This guide will help you deploy your React travel website to Vercel.

## ✅ Pre-Deployment Checklist

The following files have been configured for Vercel deployment:

- ✅ `vercel.json` - Vercel configuration file
- ✅ `public/_redirects` - SPA routing support
- ✅ Firebase config updated to use environment variables
- ✅ `.gitignore` updated to exclude `.env` files

## 🚀 Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Import Project to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "Add New Project"
   - Import your repository
   - Vercel will auto-detect it's a Create React App project

3. **Configure Environment Variables**
   - In the Vercel project settings, go to "Environment Variables"
   - Add the following variables:
     ```
     REACT_APP_FIREBASE_API_KEY=your_api_key_here
     REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
     REACT_APP_FIREBASE_PROJECT_ID=your_project_id_here
     REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
     REACT_APP_FIREBASE_APP_ID=your_app_id_here
     REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id_here
     ```
   - Make sure to add them for **Production**, **Preview**, and **Development** environments

4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete
   - Your site will be live at `https://your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   - Follow the prompts
   - For production deployment, use: `vercel --prod`

4. **Set Environment Variables**
   ```bash
   vercel env add REACT_APP_FIREBASE_API_KEY
   vercel env add REACT_APP_FIREBASE_AUTH_DOMAIN
   vercel env add REACT_APP_FIREBASE_PROJECT_ID
   vercel env add REACT_APP_FIREBASE_STORAGE_BUCKET
   vercel env add REACT_APP_FIREBASE_MESSAGING_SENDER_ID
   vercel env add REACT_APP_FIREBASE_APP_ID
   vercel env add REACT_APP_FIREBASE_MEASUREMENT_ID
   ```

## 📋 Configuration Details

### vercel.json
The `vercel.json` file configures:
- Build command: `npm run build`
- Output directory: `build`
- Framework: `create-react-app`
- SPA routing: All routes redirect to `/index.html`

### Environment Variables
Firebase configuration now uses environment variables for security. The app will:
- Use environment variables if available
- Fall back to default values if not set (for local development)

## 🔧 Build Configuration

Vercel will automatically:
- Install dependencies: `npm install`
- Build the project: `npm run build`
- Serve from the `build` directory

## 🌐 Custom Domain (Optional)

1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## 🔍 Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Ensure Node.js version is compatible (Vercel uses Node 18.x by default)
- Review build logs in Vercel dashboard

### Routing Issues
- The `vercel.json` and `_redirects` file should handle SPA routing
- If routes don't work, verify the rewrite rules in `vercel.json`

### Firebase Connection Issues
- Verify all environment variables are set correctly in Vercel
- Check Firebase console for API restrictions
- Ensure Firebase project allows requests from your Vercel domain

### Environment Variables Not Working
- Make sure variable names start with `REACT_APP_`
- Redeploy after adding environment variables
- Check that variables are set for the correct environment (Production/Preview/Development)

## 📝 Post-Deployment

After successful deployment:
1. Test all routes to ensure SPA routing works
2. Verify Firebase connection
3. Test authentication features
4. Check that all images and assets load correctly
5. Monitor Vercel analytics for performance

## 🔄 Continuous Deployment

Vercel automatically deploys:
- **Production**: On push to `main` branch
- **Preview**: On push to other branches or pull requests

Each deployment gets a unique URL for testing before merging to production.

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Create React App Deployment](https://create-react-app.dev/docs/deployment/)
- [Firebase Setup Guide](./FIREBASE_SETUP.md)

---

**Ready to deploy?** Push your code to GitHub and import it to Vercel!

