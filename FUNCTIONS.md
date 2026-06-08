# Contact Form — EmailJS Integration

A client-side contact form that sends messages via EmailJS API without a backend server.

## Files Modified

| File | Change |
|------|--------|
| `src/index.html` | Added EmailJS SDK script + contact form (name, email, message fields) |
| `src/style.css` | Added form input, textarea, submit button, and status styles with dark mode |
| `.env` | Stores EmailJS credentials (ignored by git) |
| `.env.example` | Template for other developers to copy |
| `.gitignore` | Excludes `.env` from version control |
| `components/script.js` | Added EmailJS init + form submission handler |

## How It Works

1. User fills in **Name**, **Email**, and **Message** on the contact form
2. On submit, the form calls `emailjs.send()` with the form data
3. EmailJS forwards the message to the configured recipient email address
4. A success/error status message is shown to the user

## Setup Instructions

### 1. Create an EmailJS Account

Sign up at [emailjs.com](https://www.emailjs.com/)

### 2. Create an Email Service

- Go to **Email Services** → **Add New Service**
- Choose a provider (Gmail, Outlook, SMTP, etc.)
- Connect your email account
- Copy the **Service ID**

### 3. Create an Email Template

- Go to **Email Templates** → **Create New Template**
- Add these template variables:

| Variable | Content |
|----------|---------|
| `{{from_name}}` | Sender's name |
| `{{from_email}}` | Sender's email |
| `{{message}}` | The message body |

- Design the template as you like (e.g. *"You received a message from {{from_name}} ({{from_email}}): {{message}}"*)
- Copy the **Template ID**

### 4. Get Your Public Key

- Go to **Account** → **API Keys**
- Copy your **Public Key**

### 5. Set Credentials

Credentials are stored in `.env` (ignored by git) and referenced in `components/script.js`.

> Current credentials are active — the contact form is fully operational.

## Form Fields

| Field | HTML ID | EmailJS Variable | Validation |
|-------|---------|-----------------|------------|
| Name | `form-name` | `from_name` | Required |
| Email | `form-email` | `from_email` | Required, email format |
| Message | `form-message` | `message` | Required |

## States

| State | Visual | Behavior |
|-------|--------|----------|
| Idle | — | Form ready for input |
| Submitting | Button shows "Sending..." | Form disabled, button loading |
| Success | Green "Message sent successfully!" | Form resets |
| Error | Red "Something went wrong..." | Form keeps input for retry |
| Not configured | Red "EmailJS is not configured" | Shown if credentials are placeholders (no longer applicable — keys are set) |

## Dependencies

- EmailJS SDK v4 loaded from CDN: `https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js`
- No npm packages or build tools required
