# Portfolio Backend API

This is the backend service for the portfolio contact form, using EmailJS for email delivery.

## Features

- ✅ EmailJS integration for reliable email delivery
- 🔒 Security features (Helmet, CORS, Rate Limiting)
- 🛡️ Input validation and sanitization
- 🚫 XSS attack prevention
- ⏱️ Rate limiting to prevent spam
- 🌍 Environment variable configuration

## Setup

1. **Install dependencies:**
   ```bash
   cd backend
   npm install
   ```

2. **Configure environment variables:**
   - Copy `.env.example` to `.env.local`
   - Fill in your EmailJS credentials from https://dashboard.emailjs.com/

3. **Start the server:**
   ```bash
   # Development mode (with auto-reload)
   npm run dev

   # Production mode
   npm start
   ```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `PORT` | Server port (default: 3001) | No |
| `NODE_ENV` | Environment (development/production) | No |
| `EMAILJS_SERVICE_ID` | Your EmailJS service ID | Yes |
| `EMAILJS_TEMPLATE_ID` | Your EmailJS template ID | Yes |
| `EMAILJS_PUBLIC_KEY` | Your EmailJS public key | Yes |
| `ALLOWED_ORIGINS` | Comma-separated CORS origins | No |
| `RATE_LIMIT_WINDOW_MS` | Rate limit window in milliseconds | No |
| `RATE_LIMIT_MAX_REQUESTS` | Max requests per window | No |

## API Endpoints

### Health Check
```
GET /health
```
Returns server status.

### Send Email
```
POST /api/email/send
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Subject (optional)",
  "message": "Your message here"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Email sent successfully! Thank you for reaching out."
}
```

**Error Response (400/500):**
```json
{
  "success": false,
  "error": "Error type",
  "message": "Error description"
}
```

## Security Features

1. **Helmet.js** - Sets security-related HTTP headers
2. **CORS** - Configured to only allow specified origins
3. **Rate Limiting** - Prevents spam (default: 5 requests per 15 minutes)
4. **Input Validation** - Validates all input fields
5. **Input Sanitization** - Removes potentially dangerous content
6. **Payload Size Limit** - Prevents large payload attacks (10kb limit)
7. **Environment Variables** - Sensitive data kept in env files

## Directory Structure

```
backend/
├── server.js              # Main server file
├── package.json           # Dependencies
├── controllers/           # Request handlers
│   └── emailController.js
├── routes/                # API routes
│   └── emailRoutes.js
├── services/              # Business logic
│   └── emailService.js
└── utils/                 # Utility functions
    ├── validation.js      # Input validation
    └── sanitization.js    # Input sanitization
```

## Development

The server will run on `http://localhost:3001` by default.

Use nodemon for development to auto-reload on file changes:
```bash
npm run dev
```

## Error Handling

The API includes comprehensive error handling:
- Input validation errors (400)
- Rate limit errors (429)
- Server errors (500)
- CORS errors (403)

All errors return JSON with descriptive messages.

## License

MIT
