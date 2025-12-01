# Railway Deployment Guide

## Overview
This guide explains how to deploy the DevOps homepage on Railway with Telegram integration.

## Architecture
- **Frontend**: Static React app (Vite build)
- **Backend**: Node.js Express server for Telegram API

## Backend Deployment (Railway)

### 1. Create New Project
1. Go to [Railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your `devopsTELD` repository

### 2. Configure Backend Service
1. Railway will auto-detect Node.js
2. Add a `start` script to `package.json` if not present:
   ```json
   "scripts": {
     "start": "node server.js"
   }
   ```

### 3. Set Environment Variables
In Railway project settings → Variables, add:
- `TELEGRAM_BOT_TOKEN` = `8264530543:AAF3BKKum5EpguNUP1PEAy3cJpOQ91qm0qI`
- `TELEGRAM_CHAT_ID` = `6979345480`
- `PORT` = `3001` (or leave empty, Railway will assign)

### 4. Get Backend URL
After deployment, Railway will provide a URL like:
`https://your-backend.up.railway.app`

## Frontend Deployment (Railway or Vercel)

### Option A: Railway (Static Site)
1. Create another service in the same project
2. Set build command: `npm run build`
3. Set start command: `npx serve -s dist -p $PORT`
4. Add environment variable:
   - `VITE_API_URL` = `https://your-backend.up.railway.app`

### Option B: Vercel (Recommended for Frontend)
1. Go to [Vercel](https://vercel.com)
2. Import your GitHub repository
3. Framework Preset: Vite
4. Add environment variable:
   - `VITE_API_URL` = `https://your-backend.up.railway.app`
5. Deploy

## Troubleshooting

### Form shows error "An error occurred"
1. **Check backend logs** in Railway dashboard
2. **Verify environment variables** are set correctly
3. **Check CORS**: Make sure your backend allows requests from your frontend domain
4. **Browser console**: Open DevTools (F12) → Console to see exact error

### CORS Issues
If you see CORS errors, the backend already has `cors()` middleware enabled, which allows all origins. If you need to restrict:
```javascript
app.use(cors({
  origin: 'https://your-frontend-domain.vercel.app'
}));
```

### Environment Variables Not Working
- For Vite variables, they must start with `VITE_`
- Rebuild the frontend after adding variables
- Backend variables don't need prefix

## Testing
1. Visit your deployed frontend URL
2. Fill out the contact form
3. Check your Telegram bot for the message
4. Check Railway logs if issues occur

## Local Development
- Frontend: `npm run dev` (port 5173)
- Backend: `node server.js` (port 3001)
- No environment variables needed locally (uses defaults)
