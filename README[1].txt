# QickDev Studio - Render Deployment Package

This package allows you to deploy your Shopify Embedded App (QickDev Studio) to Render easily.

## 🚀 Steps to Deploy

1. Go to https://render.com and log in.
2. Click "New + → Web Service".
3. Connect your GitHub repo or upload this ZIP manually.
4. Set:
   - Environment: Node
   - Build Command: `npm install`
   - Start Command: `npm start`
5. Add the following Environment Variables (Render dashboard → Environment tab):
   - SHOPIFY_API_KEY
   - SHOPIFY_API_SECRET
   - SCOPES
   - SESSION_SECRET
   - SUPABASE_URL
   - SUPABASE_KEY
6. Click "Deploy Web Service".

Your app will be live at: https://qickdev-studio.onrender.com (example).

✅ Confirmed working with Supabase and Shopify callback integration.
