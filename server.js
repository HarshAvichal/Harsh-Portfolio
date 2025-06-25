// Simple Express server for sending emails with Nodemailer
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors({
  origin: 'https://harsh-portfolio-ashy.vercel.app/',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}));
app.use(bodyParser.json());

// POST /send endpoint
app.post('/send', async (req, res) => {
  const { from_email, from_name, subject, message } = req.body;

  // Configure your transporter (replace with your Gmail and App Password)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS, 
    },
  });

  const mailOptions = {
    from: from_email,
    to: process.env.GMAIL_USER, // Set in .env
    subject: subject,
    text: `Name: ${from_name}\nEmail: ${from_email}\n\n${message}`,
    html: `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; background: #f8f9fb; padding: 32px; border-radius: 12px; max-width: 480px; margin: auto; box-shadow: 0 2px 16px rgba(0,0,0,0.07);">
        <h2 style="color: #5B21B6; margin-bottom: 12px;">New Contact Form Submission</h2>
        <div style="margin-bottom: 18px;">
          <strong>Name:</strong> <span style="color: #222;">${from_name}</span><br/>
          <strong>Email:</strong> <span style="color: #222;">${from_email}</span><br/>
          <strong>Subject:</strong> <span style="color: #222;">${subject}</span>
        </div>
        <div style="background: #fff; border-radius: 8px; padding: 18px; border: 1px solid #eee;">
          <strong style="color: #5B21B6;">Message:</strong>
          <p style="color: #333; margin-top: 8px;">${message.replace(/\n/g, '<br/>')}</p>
        </div>
      </div>
    `,
  };

  const autoReplyOptions = {
    from: process.env.GMAIL_USER,
    to: from_email,
    subject: `Thank you for contacting Harsh Avichal!`,
    text: `Hi ${from_name},\n\nThank you for reaching out! I have received your message and will get back to you as soon as possible.\n\nBest regards,\nHarsh Avichal`,
    html: `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; background: #f8f9fb; padding: 32px; border-radius: 12px; max-width: 480px; margin: auto; box-shadow: 0 2px 16px rgba(0,0,0,0.07);">
        <h2 style="color: #5B21B6; margin-bottom: 12px;">Thank you for reaching out!</h2>
        <p style="color: #333; font-size: 17px;">Hi <strong>${from_name}</strong>,</p>
        <p style="color: #333; font-size: 16px;">I appreciate you contacting me. Your message has been received and I will get back to you as soon as possible.<br/><br/>In the meantime, feel free to connect with me on <a href="https://www.linkedin.com/in/harshavichal0614/" style="color: #5B21B6; text-decoration: underline;">LinkedIn</a> or check out my <a href="https://github.com/harshavichal" style="color: #5B21B6; text-decoration: underline;">GitHub</a>.</p>
        <div style="margin-top: 28px; color: #888; font-size: 15px;">Best regards,<br/><span style="color: #5B21B6; font-weight: 600;">Harsh Avichal</span></div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(autoReplyOptions);
    res.status(200).json({ message: 'Email and auto-reply sent successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send email or auto-reply.', error });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 