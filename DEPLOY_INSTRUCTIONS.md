# Deployment Instructions - Complete These Steps

## Architecture Overview

The application uses a two-part architecture:
1. **Frontend**: Vercel (React/Vite) - Serves the UI
2. **Backend**: Railway (Python/yt-dlp) - Handles video processing

The Vercel API route (`api/fetch.ts`) now acts as a **proxy** to the Railway backend, eliminating the need for Python on Vercel.

---

## Step 1: Push to GitHub

1. **Restart your terminal** (close and reopen VS Code terminal)
2. **Login to GitHub**:
   ```bash
   gh auth login
   ```
   - Choose: GitHub.com
   - Choose: HTTPS
   - Choose: Authenticate with GitHub credentials
   - Login with your browser

3. **Create and push to GitHub**:
   ```bash
   cd c:/Users/lenovo/Documents/AuraDownloader
   gh repo create AuraDownloader --public --source=. --push
   ```

**Alternative - Manual GitHub**:
1. Go to https://github.com/new
2. Repository name: `AuraDownloader`
3. Make it Public
4. Click "Create repository"
5. Run these commands:
   ```bash
   cd c:/Users/lenovo/Documents/AuraDownloader
   git remote add origin https://github.com/YOUR_USERNAME/AuraDownloader.git
   git branch -M main
   git push -u origin main
   ```

---

## Step 2: Deploy Backend to Railway (REQUIRED)

**IMPORTANT**: The Railway backend is REQUIRED for video downloads. Vercel cannot run yt-dlp.

1. Go to https://railway.app and sign up with GitHub
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your `AuraDownloader` repository
4. Railway will automatically:
   - Detect Python from `pyproject.toml`
   - Install yt-dlp
   - Start the API on port 8080
5. Note your backend URL (e.g., `https://cobalt-production-4e75.up.railway.app`)

**Railway Configuration Files** (already included):
- `pyproject.toml` - Python project configuration
- `requirements.txt` - Python dependencies
- `api/main.py` - Python backend API

---

## Step 3: Deploy Frontend to Vercel

1. Go to https://vercel.com and sign in with GitHub
2. Click "Add New..." → "Project"
3. Import your `AuraDownloader` repository
4. Configure:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
5. **IMPORTANT**: Add Environment Variable:
   - Variable name: `BACKEND_URL`
   - Value: Your Railway backend URL (from Step 2)
6. Click "Deploy"

---

## Step 4: Connect Frontend to Backend (ALTERNATIVE)

If you prefer to use Vercel environment variables instead of the default:

1. In Vercel dashboard, go to Settings → Environment Variables
2. Add:
   - Variable name: `BACKEND_URL`
   - Value: Your Railway backend URL (e.g., `https://your-api.up.railway.app`)
3. Redeploy Vercel to apply changes

---

## Your URLs After Deployment

- **Frontend**: `https://auradownloader.vercel.app` (or your custom domain)
- **Backend API**: `https://your-api.up.railway.app`

---

## Troubleshooting

### CORS Errors
```
Access to fetch at 'https://corsproxy.io/?...' from origin 'https://...' has been blocked by CORS policy
```
**Solution**: 
1. Ensure your Railway backend has CORS headers configured (already included in `api/main.py`)
2. The Vercel proxy (`api/fetch.ts`) now handles CORS automatically

### 500 Server Errors
```
Failed to load resource: the server responded with a status of 500 ()
```
**Solution**:
1. Check Railway backend logs for errors
2. Ensure Railway backend is running and not rate-limited
3. Verify the `BACKEND_URL` environment variable is correct in Vercel

### CSS MIME Type Error
```
Refused to apply style from '...' because its MIME type ('text/plain') is not a supported stylesheet MIME type
```
**Solution**: This has been fixed in `vercel.json` with proper cache headers for assets.

### Backend Proxy Failed
```
Backend proxy failed, attempting client-side fallback
```
**Solution**:
1. Check Railway backend is running
2. Verify CORS headers are set correctly
3. The frontend now has fallback mechanisms using multiple CORS proxies

### Vercel Build Fails
```
Error: spawn python yt_dlp ENOENT
```
**FIXED**: The Vercel API route (`api/fetch.ts`) now works as a proxy and does NOT require Python. Video processing is done entirely on Railway.

### GitHub Push Failed
```bash
# Reset remote and push again
git remote set-url origin https://github.com/YOUR_USERNAME/AuraDownloader.git
git push -u origin main --force
```

---

## Quick Commands Reference

```bash
# Check Git status
git status

# Pull latest changes
git pull origin main

# Make changes and push
git add .
git commit -m "Your message"
git push origin main

# View Vercel logs (install vercel CLI first)
npm i -g vercel
vercel login
vercel logs --prod

# View Railway logs (via Railway dashboard)
```

---

## Files Created for Deployment

| File | Purpose |
|------|---------|
| `vercel.json` | Vercel configuration with proper MIME types |
| `railway.json` | Railway configuration |
| `pyproject.toml` | Python project configuration (for Railway) |
| `requirements.txt` | Python dependencies (yt-dlp) |
| `api/main.py` | Python backend API (runs on Railway) |
| `api/fetch.ts` | Vercel proxy (no Python required) |
| `.env.local` | Environment variables template |
| `guide.md` | Full deployment guide |
| `DEPLOY_INSTRUCTIONS.md` | Quick deployment steps |

---

## Total Cost: $0/month

- Vercel Frontend: FREE (100GB bandwidth, 100 hours serverless)
- Railway Backend: FREE (500 hours compute, 1GB storage)
- GitHub: FREE (public repository)
- Custom Domain: FREE (via Vercel/Railway)
