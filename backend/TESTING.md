# Backend API Testing

## Manual Testing

### 1. Health Check
```bash
curl http://localhost:3001/health
```

Expected response:
```json
{
  "status": "ok",
  "message": "Server is running",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

### 2. Send Email (Valid)
```bash
curl -X POST http://localhost:3001/api/email/send \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Test Subject",
    "message": "This is a test message with enough characters to pass validation."
  }'
```

Expected response:
```json
{
  "success": true,
  "message": "Email sent successfully! Thank you for reaching out."
}
```

### 3. Validation Errors
```bash
# Short name (should fail)
curl -X POST http://localhost:3001/api/email/send \
  -H "Content-Type: application/json" \
  -d '{
    "name": "A",
    "email": "test@example.com",
    "message": "Valid message here"
  }'
```

Expected response:
```json
{
  "success": false,
  "error": "Validation Error",
  "message": "Name must be between 2 and 100 characters"
}
```

### 4. Rate Limiting Test
Send 6 requests quickly to the same endpoint to trigger rate limiting.

Expected response (on 6th request):
```json
{
  "message": "Too many requests from this IP, please try again later."
}
```

## PowerShell Testing

```powershell
# Health Check
Invoke-RestMethod -Uri "http://localhost:3001/health" -Method Get

# Send Email
$body = @{
    name = "Test User"
    email = "test@example.com"
    subject = "Test Subject"
    message = "This is a test message from PowerShell with sufficient length."
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:3001/api/email/send" `
    -Method Post `
    -Body $body `
    -ContentType "application/json"
```

## Automated Test Script

Run the included test script:

```bash
# Make sure backend is running first!
cd backend
npm run dev

# In another terminal:
node backend/test.js
```

## Common Test Scenarios

### ✅ Valid Submissions
- [x] All fields filled correctly
- [x] Long messages (up to 5000 chars)
- [x] Special characters in message
- [x] Optional subject field empty
- [x] Optional subject field filled

### ❌ Invalid Submissions
- [x] Name too short (< 2 chars)
- [x] Name too long (> 100 chars)
- [x] Invalid email format
- [x] Message too short (< 10 chars)
- [x] Message too long (> 5000 chars)
- [x] Missing required fields
- [x] HTML/Script injection attempts

### 🔒 Security Tests
- [x] XSS attempt: `<script>alert('xss')</script>`
- [x] HTML injection: `<h1>Hacked</h1>`
- [x] Rate limiting (> 5 requests)
- [x] CORS from unauthorized origin
- [x] Large payload (> 10KB)

## Testing Checklist

Before deploying to production:

- [ ] Backend starts without errors
- [ ] Health endpoint responds
- [ ] Valid email sends successfully
- [ ] Email received in inbox (check spam)
- [ ] Validation rejects invalid inputs
- [ ] Rate limiting works after 5 requests
- [ ] CORS blocks unauthorized origins
- [ ] XSS attempts are sanitized
- [ ] Large payloads are rejected
- [ ] Error messages don't leak sensitive info
- [ ] Frontend connects to backend successfully
- [ ] Form submission shows loading state
- [ ] Success/error messages display correctly

## Debugging Tips

### Backend won't start
```powershell
# Check if port 3001 is in use
netstat -ano | findstr :3001

# If in use, kill the process or change PORT in .env.local
```

### Emails not sending
1. Check EmailJS dashboard for errors
2. Verify credentials in `.env.local`
3. Check EmailJS template uses correct variables
4. Look at backend console for error messages
5. Check spam folder

### CORS errors
1. Add frontend URL to `ALLOWED_ORIGINS` in `.env.local`
2. Restart backend server
3. Clear browser cache

### Rate limiting triggering too quickly
Adjust in `.env.local`:
```env
RATE_LIMIT_WINDOW_MS=900000  # 15 minutes in ms
RATE_LIMIT_MAX_REQUESTS=10   # Increase limit
```

## Production Testing

After deploying to production:

```bash
# Replace with your production URLs
FRONTEND_URL="https://your-domain.com"
BACKEND_URL="https://your-backend.com"

# Health check
curl $BACKEND_URL/health

# Test from production frontend
# Use the contact form on your live site
```

## Monitoring

Watch backend logs for:
- Rate limit violations
- Validation errors
- EmailJS errors
- Unusual traffic patterns

```bash
# View logs in development
npm run dev

# View logs in production (example for PM2)
pm2 logs
```
