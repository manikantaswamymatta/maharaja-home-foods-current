# Vercel Deployment Guide - Maharaja Home Foods

## Project Status: Ready for Deployment ✅

Your Next.js project has been prepared for production deployment on Vercel.

---

## Prerequisites

- Vercel account (free or paid): https://vercel.com
- GitHub account with your repository
- Node.js 18.x or higher installed locally

---

## Deployment Steps

### Step 1: Push to GitHub

Ensure all changes are committed and pushed to your GitHub repository:

```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

### Step 2: Connect to Vercel

1. Go to https://vercel.com/dashboard
2. Click "Add New..." → "Project"
3. Select "Import Git Repository"
4. Choose your GitHub repository (`maharaja-home-foods-upi`)
5. Click "Import"

### Step 3: Deploy

1. Review the build settings (Vercel auto-detects Next.js)
2. Click "Deploy"
3. Wait for the build to complete (typically 2-3 minutes)

---

## Build Configuration

Your project uses these default Vercel settings:

- **Build Command:** `next build` (auto-configured)
- **Output Directory:** `.next` (auto-configured)
- **Install Command:** `npm ci` (auto-configured)
- **Node Version:** 18.x
- **Environment Variables:** None required (all values hardcoded)

---

## Project Structure

```
maharaja-home-foods-upi/
├── app/                    # Next.js App Router
│   ├── api/               # API routes (Contact form)
│   ├── about/             # About page
│   ├── cart/              # Shopping cart
│   ├── checkout/          # Checkout page
│   ├── contact/           # Contact page
│   ├── gallery/           # Gallery page
│   ├── order-success/     # Order success page
│   ├── products/          # Products page
│   ├── reviews/           # Reviews page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── src/
│   ├── components/        # React components
│   ├── context/           # React Context (Cart)
│   ├── data/             # Static data (products.json)
│   ├── styles/           # CSS files
│   └── utils/            # Utilities (WhatsApp, pricing)
├── public/                # Static assets
├── package.json           # Dependencies ✅ (newly created)
├── next.config.ts         # Next.js config ✅ (optimized)
├── tsconfig.json          # TypeScript config
├── tailwind.config.ts     # Tailwind CSS config
├── postcss.config.mjs     # PostCSS config
├── .gitignore             # Git ignore file ✅ (newly created)
└── vercel.json            # Vercel config ✅ (updated)
```

---

## Features & Technologies

- **Frontend:** React 19.2.3, Next.js 16.1.4
- **Styling:** Tailwind CSS 4.x, PostCSS
- **Icons:** React Icons 5.5.0
- **OCR:** Tesseract.js 7.0.0 (Payment verification)
- **Utilities:** html2canvas 1.4.1 (Screenshot downloads)
- **Type Safety:** TypeScript 5.x
- **Linting:** ESLint 9.x

---

## Key Files Modified for Deployment

1. **package.json** (✅ Created)
   - Added missing package definitions
   - Added build scripts for Vercel
   - Specified Node.js 18.x engine

2. **next.config.ts** (✅ Updated)
   - Removed development-only `allowedDevOrigins`
   - Kept production-optimized image configuration

3. **vercel.json** (✅ Updated)
   - Added `env` configuration for production
   - Maintained Next.js build configuration

4. **.gitignore** (✅ Created)
   - Prevents committing node_modules and build artifacts
   - Excludes environment files with sensitive data

---

## Post-Deployment Checklist

- [ ] Verify the deployment URL is working
- [ ] Test all pages load correctly
- [ ] Verify images are loading properly
- [ ] Test the contact form (WhatsApp integration)
- [ ] Test the shopping cart functionality
- [ ] Test the checkout/payment process
- [ ] Check performance metrics in Vercel Dashboard
- [ ] Set up custom domain (if applicable)
- [ ] Enable automatic deployments on push to main
- [ ] Configure DNS settings for custom domain

---

## Custom Domain Setup (Optional)

1. Go to **Project Settings → Domains**
2. Click "Add Domain"
3. Enter your domain
4. Follow DNS configuration instructions
5. Wait for DNS propagation (up to 48 hours)

---

## Monitoring & Performance

After deployment, monitor your application:

1. **Vercel Analytics:** Project → Analytics tab
2. **Error Tracking:** Project → Error Logs
3. **Deployment Status:** Project → Deployments

---

## Rollback Instructions

If you need to rollback to a previous deployment:

1. Go to **Project → Deployments**
2. Find the deployment you want to restore
3. Click the three-dot menu → "Promote to Production"

---

## Troubleshooting

### Build Fails on Vercel

**Check the build logs:**
1. Go to **Deployments** tab
2. Click on the failed deployment
3. View the build log for error messages
4. Common issues:
   - Missing dependencies (update package.json)
   - TypeScript errors (check vercel.json)

### Images Not Loading

- Ensure image paths are relative to `/public` directory
- Verify Next.js image optimization is working
- Check browser developer console for 404 errors

### API Routes Not Working

- Ensure routes are in `/app/api/[route]/route.ts`
- Check that POST/GET methods are properly exported

### Performance Issues

- Run Lighthouse audit in Vercel Analytics
- Check for slow components using React DevTools
- Optimize images using Next.js Image component

---

## Support & Resources

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS Docs:** https://tailwindcss.com/docs
- **GitHub Issues:** Add to your repository for issue tracking

---

## Quick Commands

```bash
# Local development
npm run dev              # Start development server

# Production build
npm run build            # Build for production
npm start                # Start production server

# Linting
npm run lint             # Check for linting errors

# Clean rebuild
rm -rf .next node_modules
npm install
npm run build
```

---

## Security Recommendations

1. **Keep dependencies updated:** Run `npm audit` regularly
2. **Enable Vercel Protection Rules** for main branch
3. **Set up branch protection** on GitHub
4. **Monitor security alerts** in GitHub and Vercel

---

## Notes

- This project is configured for the App Router (Next.js 13+)
- All components use TypeScript for type safety
- The project uses Tailwind CSS for styling
- Cart state is managed with React Context
- Contact form redirects to WhatsApp

---

**Deployment Date:** January 29, 2026
**Status:** ✅ Ready for Production
**Version:** 0.1.0
