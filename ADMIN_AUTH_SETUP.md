# Admin Panel Authentication Setup

## Overview

Your admin panel now has **production-ready server-side authentication** with the following security features:

✅ **JWT Token-Based Authentication** - Secure, encrypted tokens  
✅ **HTTP-Only Cookies** - JavaScript can't access the tokens (prevents XSS attacks)  
✅ **Server-Side Validation** - All auth checks happen on the server  
✅ **Protected API Routes** - Only authenticated users can modify data  
✅ **Automatic Session Management** - 24-hour sessions with auto-renewal  

---

## How It Works

### 1. **Login Flow**
- User enters password on `/dashboard/admin`
- Server validates password against `ADMIN_PASSWORD` environment variable
- If correct, server creates a JWT token and stores it in an HTTP-only cookie
- User is authenticated for 24 hours

### 2. **Protected Routes**
- Middleware automatically checks authentication for `/dashboard/admin/*`
- All data modification API routes (POST, PUT, DELETE) require authentication
- Unauthenticated requests receive 401 Unauthorized response

### 3. **Security Features**
- **Passwords never sent to client** - validation happens server-side only
- **HTTP-Only cookies** - client JavaScript cannot access the session token
- **Secure cookies in production** - cookies only sent over HTTPS when deployed
- **SameSite protection** - prevents CSRF attacks
- **Token expiration** - sessions expire after 24 hours

---

## Setup Instructions

### Step 1: Create Environment Variables File

Create a file named `.env.local` in your project root:

```bash
# .env.local
ADMIN_PASSWORD=your-secure-password-here
SESSION_SECRET=your-very-long-random-string-here
NODE_ENV=development
```

### Step 2: Generate a Secure Session Secret

Run this command to generate a secure random session secret:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Copy the output and use it as your `SESSION_SECRET` in `.env.local`.

### Step 3: Set Your Admin Password

Change `ADMIN_PASSWORD` in `.env.local` to your desired password.

**Example `.env.local` file:**
```bash
ADMIN_PASSWORD=MySecurePassword123!
SESSION_SECRET=8f3a9b2c7d4e5f6a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4
NODE_ENV=development
```

### Step 4: Restart Your Dev Server

After creating `.env.local`, restart your Next.js development server:

```bash
# Stop the current server (Ctrl+C)
# Then restart it
npm run dev
```

---

## Testing Authentication

1. **Navigate to:** `http://localhost:3000/dashboard/admin`
2. **You should see:** A login screen with password prompt
3. **Enter your password** from `.env.local`
4. **Success:** You'll see the admin panel dashboard
5. **Logout:** Click the "Logout" button in the top-right corner

---

## File Structure

```
src/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── check/route.ts    # Checks if user is authenticated
│   │   │   ├── login/route.ts    # Handles login requests
│   │   │   └── logout/route.ts   # Handles logout requests
│   │   ├── predictions/route.ts  # Protected with requireAuth()
│   │   └── stats/route.ts        # Protected with requireAuth()
│   └── dashboard/
│       └── admin/page.tsx        # Admin panel with login UI
├── lib/
│   └── auth.ts                   # Authentication helpers
└── middleware.ts                 # Route protection middleware
```

---

## Security Best Practices

### For Development
- Use a simple password like `crackrock2024`
- Use a basic session secret
- `.env.local` is already in `.gitignore` - never commit it!

### For Production (Vercel, etc.)

1. **Use a strong password:**
   ```bash
   ADMIN_PASSWORD=VeryStr0ng!P@ssw0rd#2024
   ```

2. **Generate a new session secret:**
   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```

3. **Set environment variables in your hosting platform:**
   - Vercel: Project Settings → Environment Variables
   - Netlify: Site Settings → Environment Variables
   - Railway: Project → Variables

4. **Never commit `.env.local` to git!**

---

## What If I Forget My Password?

1. Open `.env.local`
2. Change the `ADMIN_PASSWORD` value
3. Restart your dev server
4. Use the new password to login

---

## Troubleshooting

### "Invalid password" error
- Check your `.env.local` file exists
- Verify `ADMIN_PASSWORD` is set correctly
- Restart your dev server after changing `.env.local`

### Can't access admin panel
- Make sure your dev server is running: `npm run dev`
- Navigate to: `http://localhost:3000/dashboard/admin`
- Clear your browser cookies and try again

### "Unauthorized" errors in API calls
- You've been logged out (session expired)
- Click "Logout" then login again
- Check that your session cookie wasn't cleared

---

## Technical Details

### JWT Token Structure
```javascript
{
  "authenticated": true,
  "iat": 1234567890,  // Issued at timestamp
  "exp": 1234654290   // Expiration timestamp (24h later)
}
```

### Cookie Configuration
```javascript
{
  httpOnly: true,           // Can't be accessed by JavaScript
  secure: true,             // Only sent over HTTPS (production)
  sameSite: 'strict',       // CSRF protection
  maxAge: 86400,            // 24 hours
  path: '/'                 // Available site-wide
}
```

---

## What's Protected?

### ✅ Fully Protected
- **POST** `/api/predictions` - Creating predictions
- **PUT** `/api/predictions` - Updating predictions
- **DELETE** `/api/predictions` - Deleting predictions
- **PUT** `/api/stats` - Updating stats
- `/dashboard/admin/*` - All admin panel pages

### ✓ Public (No Auth Required)
- **GET** `/api/predictions` - Reading predictions (for public dashboard)
- **GET** `/api/stats` - Reading stats (for public dashboard)
- `/dashboard/*` - Public dashboard pages

---

## Dependencies

The authentication system uses:
- **`jose`** - JWT token creation and verification
- **Next.js built-in:** `cookies()`, middleware, API routes

Already installed via: `npm install jose`

---

## Questions?

This is a production-ready authentication system that:
- ✅ Protects your admin panel
- ✅ Secures your API routes
- ✅ Uses industry-standard practices
- ✅ Works in both development and production
- ✅ Is simple to configure and maintain

Your data is safe! 🔒

