# SportsGeekScarves Website Deployment Guide

## Option 1: Vercel (Recommended)
1. Push code to GitHub repository
2. Go to vercel.com and sign up
3. Click "New Project" and import your GitHub repo
4. Vercel automatically detects Next.js and deploys
5. Your site will be live at: https://your-project.vercel.app

## Option 2: Static Export for Traditional Hosting
1. Run the build command:
   npm run build

2. This creates an 'out' folder with static files
3. Upload the 'out' folder contents to your web host's public_html directory
4. Your site will be live at your domain

## Option 3: Netlify
1. Push code to GitHub
2. Go to netlify.com and sign up
3. Click "New site from Git" and connect your repo
4. Build settings:
   - Build command: npm run build
   - Publish directory: out (if using static export)

## Domain Setup
- For custom domain (sportsgeekscarves.com):
  1. Purchase domain from registrar
  2. Point DNS to your hosting provider
  3. Configure SSL certificate (usually automatic)

## Environment Variables (for dynamic features)
- NEXT_PUBLIC_SITE_URL=https://yourdomain.com
- Add payment gateway keys when ready
- Database connection strings for user accounts/orders
