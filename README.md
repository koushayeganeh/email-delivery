# Next.js Email Delivery Service

This project provides a custom email delivery service using Nodemailer and an SMTP server. It is designed to be easily embedded in other Next.js applications.

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/nextjs-email-delivery.git
   cd nextjs-email-delivery
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the project root and set the necessary environment variables:
   ```plaintext
   SMTP_HOST=smtp.example.com
   SMTP_PORT=465
   SMTP_SECURE=true
   SMTP_USER=your_smtp_username
   SMTP_PASS=your_smtp_password
   SMTP_FROM=your_email@example.com
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

To use the email delivery service in another Next.js application, follow these steps:

1. Copy the `lib/sendEmail.js` file to your project.

2. Create an API route similar to `pages/api/sendEmail.js` in your project.

3. Ensure you have the necessary environment variables set up in your `.env.local` file.

4. Use the `sendEmail` function from `lib/sendEmail.js` to send emails from your components or pages.

### Example Component

```javascript
// pages/index.js

import { useState } from 'react';
import { sendEmail } from '../lib/sendEmail';

export default function Home() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendEmail({ to: email, subject, text: message });
      setStatus('Email sent successfully');
    } catch (error) {
      setStatus('Error sending email');
    }
  };

  return (
    <div>
      <h1>Send Email</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Recipient Email"
          required
        />
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
          required
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          required
        />
        <button type="submit">Send</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}
```

## License

This project is licensed under the MIT License.
