# AuraDownloader - Free Deployment Guide

This guide explains how to deploy AuraDownloader completely free using Vercel.

## Overview

AuraDownloader is a YouTube video/playlist downloader built with:
- **Frontend**: React + TypeScript + Vite
- **Backend**: Vercel Serverless Functions + yt-dlp (Python)

## Deployment Options

### Option 1: Vercel (Recommended - 100% Free)

Vercel offers a generous free tier that includes:
- **100GB bandwidth/month** - More than enough for personal use
- **100 hours serverless function execution/month** - Sufficient for moderate usage
- **Custom domains with free SSL**
- **Global CDN** for fast frontend delivery

#### Step-by-Step Vercel Deployment

##### Prerequisites
1. Create a free account at [vercel.com](https://vercel.com)
2. Install Vercel CLI: `npm i -g vercel`
3. Install Git if not already installed

##### Deployment Steps

**Method A: Using Vercel CLI (Recommended)**

```bash
# Login to Vercel
vercel login

# Navigate to your project
cd c:/Users/lenovo/Documents/AuraDownloader

# Deploy to Vercel
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your username
# - Link to existing project? No
# - Project name? auradownloader (or your preferred name)
# - Directory? ./
# - Want to modify settings? Yes
```

**Method B: Using Vercel Dashboard**

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New..." → "Project"
3. Import your GitHub repository (push to GitHub first)
4. Configure project:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
5. Click "Deploy"

##### Critical Configuration for yt-dlp

Vercel needs to install yt-dlp during the build process. Create a `requirements.txt` file:

```txt
yt-dlp>=2024.1.1
```

**Important**: You also need to modify `api/fetch.ts` to work with Vercel's Python runtime. The current code uses `spawn` which works, but you need to ensure yt-dlp is available.

Create a `vercel.json` file in the project root:

```json
{
  "buildCommand": "pip install -t .pip_packages -r requirements.txt && npm run build",
  "installCommand": "pip install yt-dlp && npm install",
  "framework": "vite",
  "regions": ["iad1"],
  "functions": {
    "api/**/*.ts": {
      "maxDuration": 30
    }
  }
}
```

**Alternative: Use Vercel Python Runtime**

Since Vercel supports Python directly, you can convert the API to use Python. Create `api/fetch.py`:

```python
#!/usr/bin/env python3
import json
import subprocess
import sys
from urllib.parse import parse_qs, urlparse

def handler(request):
    import os
    
    # CORS headers
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
    }
    
    if request.method == 'OPTIONS':
        return {'statusCode': 200, 'headers': headers, 'body': ''}
    
    if request.method != 'POST':
        return {
            'statusCode': 405,
            'headers': headers,
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    try:
        data = json.loads(request.body)
        url = data.get('url')
        
        if not url:
            return {
                'statusCode': 400,
                'headers': headers,
                'body': json.dumps({'error': 'URL required'})
            }
        
        # Run yt-dlp to get metadata
        result = subprocess.run(
            ['python', '-m', 'yt_dlp', '-j', '--no-warnings', url],
            capture_output=True,
            text=True,
            timeout=30
        )
        
        if result.returncode != 0:
            return {
                'statusCode': 500,
                'headers': headers,
                'body': json.dumps({'error': result.stderr})
            }
        
        metadata = json.loads(result.stdout)
        
        # Build response
        response = {
            'status': 'success',
            'title': metadata.get('title'),
            'thumbnail': metadata.get('thumbnail'),
            'duration': metadata.get('duration_string'),
            'author': metadata.get('uploader'),
            'platform': metadata.get('extractor'),
            'options': []
        }
        
        # Add format options
        formats = metadata.get('formats', [])
        for f in formats:
            if f.get('vcodec') != 'none' and f.get('acodec') != 'none':
                response['options'].append({
                    'id': f.get('format_id'),
                    'label': f'{f.get("height")}p' if f.get('height') else 'Video',
                    'format': f.get('ext', 'mp4').upper(),
                    'size': f'{f.get("filesize", 0) // (1024*1024)} MB' if f.get('filesize') else 'Unknown',
                    'formatId': f.get('format_id')
                })
        
        return {
            'statusCode': 200,
            'headers': headers,
            'body': json.dumps(response)
        }
        
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': headers,
            'body': json.dumps({'error': str(e)})
        }

if __name__ == '__main__':
    import json
    handler()
```

### Option 2: Cloudflare Pages (Free Alternative)

Cloudflare Pages offers:
- **Unlimited bandwidth** (actually free)
- **500 builds/month**
- **Custom domains with SSL**

#### Deployment Steps

1. Push your code to GitHub
2. Go to [dash.cloudflare.com](https://dash.cloudflare.com) → Pages → Create a project
3. Connect your GitHub repository
4. Configure:
   - Framework preset: **None (Static)**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `/`
5. Click "Deploy"

**Note**: Cloudflare Pages doesn't support Python serverless functions natively. You'll need to use a separate service (like Railway/Render) for the yt-dlp API.

### Option 3: Railway/Render (For Backend API)

Since yt-dlp requires Python, you can deploy just the API to Railway/Render for free:

**Railway (Recommended)**

1. Go to [railway.app](https://railway.app) and sign up
2. Create a new project with "Deploy from GitHub repo"
3. Select this repository
4. Set environment variables:
   - `PYTHON_VERSION`: `3.11`
5. Railway will automatically detect and install Python dependencies

**Create `railway.json`**:

```json
{
  "$schema": "https://railway.app/schema.json",
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "startCommand": "python api/fetch.py",
    "healthcheckPath": "/health"
  }
}
```

## Frontend + Backend Architecture

For truly free deployment with both frontend and backend, use this architecture:

```
┌─────────────────────────────────────────────────────────┐
│                    GitHub Repository                     │
├─────────────────────────────────────────────────────────┤
│                                                           │
│   ┌──────────────┐    ┌──────────────┐                   │
│   │  Frontend    │    │   Backend    │                   │
│   │  (Vercel)    │───▶│  (Railway)   │                   │
│   │  Static      │    │  Python/yt-dlp│                   │
│   └──────────────┘    └──────────────┘                   │
│         │                   │                            │
│         │                   │                           │
│         ▼                   ▼                           │
│   ┌──────────────┐    ┌──────────────┐                   │
│   │  Vercel CDN  │    │   Your API   │                   │
│   │  (Free)      │    │  (Free Tier) │                   │
│   └──────────────┘    └──────────────┘                   │
│                                                           │
└─────────────────────────────────────────────────────────┘
```

### Connecting Frontend to Backend

In `api/fetch.ts`, update the API URL to point to your backend service:

```typescript
// For Vercel deployment (same domain)
const API_URL = '/api/fetch';

// For separate backend (Railway/Render)
const API_URL = 'https://your-backend.railway.app/api/fetch';
```

## Step-by-Step Complete Deployment

### Step 1: Prepare Your Repository

1. Create a GitHub repository
2. Push your code:

```bash
git init
git add .
git commit -m "Initial commit"
gh repo create auradownloader --public --source=. --push
```

### Step 2: Deploy Backend (Railway - Free)

1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Railway will auto-detect Python and install yt-dlp from `requirements.txt`
6. Note your API URL (e.g., `https://auradownloader-api.up.railway.app`)

### Step 3: Deploy Frontend (Vercel - Free)

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "Add New..." → "Project"
4. Import your GitHub repository
5. Configure:
   - Framework: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Add environment variable if using separate backend:
   - `VITE_API_URL`: Your Railway backend URL
7. Click "Deploy"

### Step 4: Update Frontend API Calls

Modify `api/fetch.ts` to use your backend URL:

```typescript
// Replace the handler to call your Railway backend instead
export default async function handler(req: VercelRequest, res: VercelResponse) {
  const BACKEND_URL = process.env.BACKEND_URL || 'https://your-api.railway.app';
  
  // Forward request to Python backend
  const response = await fetch(`${BACKEND_URL}/api/fetch`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(req.body)
  });
  
  const data = await response.json();
  return res.status(response.status).json(data);
}
```

## Troubleshooting

### Issue: yt-dlp not found
```
Error: spawn python yt_dlp ENOENT
```
**Solution**: Ensure yt-dlp is installed in requirements.txt:
```txt
yt-dlp>=2024.1.1
```

### Issue: Vercel build fails
```
Build command failed
```
**Solution**: Create a `vercel_build.sh` script:
```bash
#!/bin/bash
pip install yt-dlp
npm install
npm run build
```

### Issue: Timeout on large downloads
```
Function timeout after 30s
```
**Solution**: Increase timeout in `vercel.json`:
```json
{
  "functions": {
    "api/**/*.ts": {
      "maxDuration": 60
    }
  }
}
```

### Issue: CORS errors
```
Access to fetch blocked by CORS policy
```
**Solution**: Add CORS headers to your API response:
```python
headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
}
```

## Free Tier Limits

| Platform   | Limit                          | Notes                                   |
|------------|--------------------------------|-----------------------------------------|
| Vercel     | 100GB bandwidth/month         | More than enough for personal use       |
| Vercel     | 100 hours serverless/month    | May need upgrade for heavy usage       |
| Railway    | 500 hours compute/month        | Free tier sufficient for light use     |
| GitHub     | Unlimited repositories         | Public repos are free                  |

## Recommended Configuration for Maximum Free Usage

1. **Use Vercel for frontend** - Great free tier, fast CDN
2. **Use Railway for backend** - Generous Python support
3. **Set up GitHub webhooks** - Auto-deploy on push

## Quick Deploy Commands

```bash
# Install dependencies locally
npm install

# Test locally
npm run dev

# Build for production
npm run build

# Deploy to Vercel
vercel --prod

# Check logs
vercel logs --prod
```

## Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [yt-dlp Documentation](https://github.com/yt-dlp/yt-dlp)
- [Railway Documentation](https://docs.railway.app)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

---

**Last Updated**: February 2025
**Compatible with**: Vite 6.x, React 19.x, yt-dlp 2024.x
