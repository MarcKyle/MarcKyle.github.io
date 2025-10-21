# Backend Deployment to Render

This guide focuses on deploying the backend to Render.com (recommended free option).

## 🚀 Quick Render Deployment

### Step 1: Prepare Your Repository

1. Make sure all backend files are in the `backend/` folder
2. Ensure `.env.local` is in `.gitignore` (it is!)
3. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Prepare backend for deployment"
   git push origin main
   ```

### Step 2: Create Render Account

1. Go to [render.com](https://render.com)
2. Sign up using your GitHub account (easiest option)
3. Authorize Render to access your repositories

### Step 3: Create New Web Service

1. Click **"New +"** button → **"Web Service"**
2. Select your repository: `MarcKyle.github.io`
3. Configure the service:

   **Basic Settings:**
   - **Name**: `portfolio-backend` (or your preferred name)
   - **Region**: Choose closest to your users
   - **Branch**: `main`
   - **Root Directory**: `backend`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

   **Instance Type:**
   - Select **"Free"** (for starting)

### Step 4: Add Environment Variables

In the **Environment** section, add these variables:

```bash
# Click "Add Environment Variable" for each:

EMAILJS_SERVICE_ID          = service_xxxxxxx        # Get from EmailJS dashboard
EMAILJS_TEMPLATE_ID         = template_xxxxxxx       # Get from EmailJS dashboard
EMAILJS_PUBLIC_KEY          = xxxxxxxxxxxxxxxxxxxx   # Get from EmailJS dashboard
EMAILJS_PRIVATE_KEY         = xxxxxxxxxxxxxxxxxxxx   # Get from EmailJS dashboard (Account → API Keys)
NODE_ENV                    = production
ALLOWED_ORIGINS             = https://jimenamarckyle.me,https://www.jimenamarckyle.me
RATE_LIMIT_WINDOW_MS        = 900000
RATE_LIMIT_MAX_REQUESTS     = 5
```

**Important Notes:**
- PORT is automatically set by Render (no need to add)
- Make sure there are NO spaces around the `=` signs
- ALLOWED_ORIGINS should include your actual domain

### Step 5: Deploy

1. Click **"Create Web Service"**
2. Render will:
   - Clone your repository
   - Install dependencies
   - Start your server
   - Assign a URL like: `https://portfolio-backend.onrender.com`

3. Wait for deployment (usually 2-5 minutes)
4. Status will show "Live" when ready ✅

### Step 6: Test Your Backend

```bash
# Test health check endpoint
curl https://portfolio-backend.onrender.com/health

# Or visit in browser:
https://portfolio-backend.onrender.com/health
```

Expected response:
```json
{
  "status": "ok",
  "message": "Server is running",
  "timestamp": "2025-10-21T..."
}
```

### Step 7: Update Frontend

1. Copy your Render backend URL
2. Update your frontend environment variable:

   **For GitHub Actions (Recommended):**
   - Go to your GitHub repository
   - Settings → Secrets and variables → Actions
   - Add secret: `VITE_API_URL` = `https://portfolio-backend.onrender.com`

   **For local testing:**
   ```bash
   # Create/update .env.production.local
   VITE_API_URL=https://portfolio-backend.onrender.com
   ```

3. Rebuild and redeploy frontend:
   ```bash
   npm run build
   # Frontend will automatically redeploy via GitHub Actions
   ```

---

## 📊 Render Free Tier Limits

- ✅ 750 hours/month (enough for always-on service)
- ✅ Automatic HTTPS
- ✅ Automatic deployments from GitHub
- ⚠️ Spins down after 15 minutes of inactivity
- ⚠️ Cold start takes 30-60 seconds

**Note:** First request after inactivity may be slow. Consider upgrading to paid plan ($7/month) for always-on service if needed.

---

## 🔍 Monitoring Your Backend

### View Logs

1. Go to Render Dashboard
2. Click on your service
3. Navigate to **"Logs"** tab
4. View real-time logs

### Check Service Health

- **Metrics**: Render dashboard shows CPU, memory, response times
- **Health Check**: Visit `/health` endpoint
- **Email Test**: Use your contact form

### Manual Redeploy

If you need to manually redeploy:
1. Go to Render Dashboard
2. Click your service
3. Click **"Manual Deploy"** → **"Deploy latest commit"**

---

## 🔄 Automatic Deployments

Render automatically deploys when you push to GitHub:

```bash
# Make changes to backend
cd backend
# ... edit files ...

# Commit and push
git add .
git commit -m "Update backend"
git push origin main

# Render automatically detects and deploys! 🎉
```

---

## 🐛 Troubleshooting

### Service Won't Start

**Check logs for errors:**
- Missing environment variables?
- Syntax errors in code?
- Dependencies not installed?

**Common fixes:**
```bash
# Ensure package.json has correct start script
"scripts": {
  "start": "node server.js"
}
```

### Environment Variables Not Loading

1. Verify all variables are added in Render dashboard
2. Check for typos in variable names
3. Restart service after adding variables

### CORS Errors

1. Check `ALLOWED_ORIGINS` includes your domain
2. Ensure no trailing slashes in domain
3. Include both www and non-www versions
4. Redeploy after updating

### EmailJS Not Working

1. Verify all 4 EmailJS variables are set correctly
2. Check EmailJS dashboard for API limits
3. Test EmailJS credentials directly in EmailJS playground
4. Check backend logs for specific error messages

---

## 💡 Alternative: Railway.app

If you prefer Railway over Render:

1. Go to [railway.app](https://railway.app)
2. "New Project" → "Deploy from GitHub repo"
3. Select repository and branch
4. Add service variables:
   - Click "Variables" tab
   - Add same environment variables as Render
5. Deploy!

Railway URL will be: `https://your-service.up.railway.app`

---

## 🎯 Production Checklist

Before going live:

- [ ] Backend deployed to Render
- [ ] Health check returns 200 OK
- [ ] All environment variables configured
- [ ] CORS allows production domain
- [ ] Frontend updated with backend URL
- [ ] Contact form tested and working
- [ ] Email arrives in inbox
- [ ] Rate limiting works (test 6 submissions)
- [ ] No errors in browser console
- [ ] No errors in Render logs

---

## 📞 Need Help?

**Render Issues:**
- [Render Documentation](https://render.com/docs)
- [Render Community](https://community.render.com/)

**EmailJS Issues:**
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- Check EmailJS dashboard for error logs

**Backend Issues:**
- Check Render logs
- Test locally first
- Verify environment variables

---

## 🎉 You're Done!

Your backend is now live and ready to handle contact form submissions securely!

**Your Backend URL:**
```
https://portfolio-backend.onrender.com
```

**Next Steps:**
1. ✅ Test the health endpoint
2. ✅ Update frontend with backend URL
3. ✅ Test contact form on live site
4. 🎉 Celebrate!
