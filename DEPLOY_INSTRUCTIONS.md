# Deployment Instructions - Complete These Steps

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

## Step 2: Deploy Frontend to Vercel (FREE)

1. Go to https://vercel.com and sign in with GitHub
2. Click "Add New..." → "Project"
3. Import your `AuraDownloader` repository
4. Configure:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
5. Click "Deploy"

**Note**: Vercel's free tier doesn't include yt-dlp. For YouTube downloads, deploy the backend to Railway.

---

## Step 3: Deploy Backend to Railway (FREE)

1. Go to https://railway.app and sign up with GitHub
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your `AuraDownloader` repository
4. Railway will automatically:
   - Detect Python
   - Install yt-dlp from ` - Start the API on portrequirements.txt`
   8080
5. Note your backend URL (e.g., `https://auradownloader-api.up.railway.app`)

---

## Step 4: Connect Frontend to Backend

1. In Vercel dashboard, go to Settings → Environment Variables
2. Add:
   - Variable name: `VITE_API_URL`
   - Value: Your Railway backend URL (from Step 3)
3. Redeploy Vercel to apply changes

---

## Step 5: Your URLs

After deployment, you'll have:
- **Frontend**: `https://auradownloader.vercel.app` (or your custom domain)
- **Backend API**: `https://auradownloader-api.up.railway.app`

---

## Troubleshooting

### Vercel Build Fails
```
Error: spawn python yt_dlp ENOENT
```
This is expected - Vercel free tier doesn't support Python/yt-dlp. Use Railway for the backend.

### GitHub Push Failed
```bash
# Reset remote and push again
git remote set-url origin https://github.com/YOUR_USERNAME/AuraDownloader.git
git push -u origin main --force
```

### Railway Build Fails
```
Error: /bin/bash: line 1: python: command not found
```
Make sure `pyproject.toml` is in the root directory with:
```toml
[project]
name = "auradownloader-api"
requires-python = ">=3.10"
dependencies = [
    "yt-dlp>=2024.1.1",
]
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

# View Vercel logs
vercel logs --prod

# View Railway logs (via Railway dashboard)
```

---

## Files Created for Deployment

| File | Purpose |
|------|---------|
| `vercel.json` | Vercel configuration |
| `railway.json` | Railway configuration |
| `pyproject.toml` | Python project configuration (for Railway) |
| `requirements.txt` | Python dependencies (yt-dlp) |
| `api/main.py` | Python backend API |
| `guide.md` | Full deployment guide |
| `DEPLOY_INSTRUCTIONS.md` | Quick deployment steps |

---

## Total Cost: $0/month

- Vercel Frontend: FREE (100GB bandwidth, 100 hours serverless)
- Railway Backend: FREE (500 hours compute)
- GitHub: FREE (public repository)
- Custom Domain: FREE (via Vercel/Railway)
