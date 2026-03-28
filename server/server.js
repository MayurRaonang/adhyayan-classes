require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');

const app = express();
const PORT = process.env.PORT || 5000;
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://adhyayan-classes-client.vercel.app',
    'https://adhyayan-classes.vercel.app/',
  ],
  methods: ['GET', 'POST'],
}));
app.use(express.json());

// ── Helper: Build HTML email ────────────────────────────────
function buildEmailHTML({ name, phone, email, batch, message }) {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8"/>
    <style>
      body { font-family: 'Segoe UI', Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 0; }
      .wrapper { max-width: 600px; margin: 30px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
      .header { background: linear-gradient(135deg, #FF6600, #DC143C); padding: 30px 36px; }
      .header h1 { color: white; margin: 0; font-size: 24px; letter-spacing: 0.5px; }
      .header p { color: rgba(255,255,255,0.85); margin: 6px 0 0; font-size: 13px; }
      .body { padding: 32px 36px; }
      .label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #FF6600; margin-bottom: 4px; }
      .value { font-size: 15px; color: #222; margin-bottom: 20px; padding: 10px 14px; background: #fafafa; border-left: 3px solid #FF6600; border-radius: 4px; }
      .message-value { font-size: 15px; color: #222; margin-bottom: 20px; padding: 12px 14px; background: #fafafa; border-left: 3px solid #DC143C; border-radius: 4px; white-space: pre-wrap; line-height: 1.6; }
      .footer { background: #111; padding: 18px 36px; text-align: center; }
      .footer p { color: #888; font-size: 12px; margin: 0; }
      .footer span { color: #FF6600; font-weight: bold; }
      .badge { display: inline-block; background: #fff3e0; color: #FF6600; border: 1px solid #FF6600; border-radius: 20px; padding: 4px 14px; font-size: 13px; font-weight: 600; margin-bottom: 24px; }
    </style>
  </head>
  <body>
    <div class="wrapper">
      <div class="header">
        <h1>📚 New Enquiry — Adhyayan Classes</h1>
        <p>A student has submitted an enquiry via the website contact form.</p>
      </div>
      <div class="body">
        <div class="badge">🎓 ${batch}</div>

        <div class="label">Student Name</div>
        <div class="value">${name}</div>

        <div class="label">Phone Number</div>
        <div class="value"><a href="tel:${phone}" style="color:#FF6600;text-decoration:none;">${phone}</a></div>

        <div class="label">Email Address</div>
        <div class="value">${email ? `<a href="mailto:${email}" style="color:#FF6600;text-decoration:none;">${email}</a>` : '<span style="color:#aaa;">Not provided</span>'}</div>

        <div class="label">Interested Batch</div>
        <div class="value">${batch}</div>

        <div class="label">Message</div>
        <div class="message-value">${message || 'No additional message provided.'}</div>
      </div>
      <div class="footer">
        <p>This enquiry was submitted via the <span>Adhyayan Classes</span> website.</p>
      </div>
    </div>
  </body>
  </html>
  `;
}

// ── Helper: Auto-reply HTML ─────────────────────────────────
function buildAutoReplyHTML({ name, batch }) {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8"/>
    <style>
      body { font-family: 'Segoe UI', Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 0; }
      .wrapper { max-width: 600px; margin: 30px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
      .header { background: linear-gradient(135deg, #FF6600, #DC143C); padding: 30px 36px; text-align: center; }
      .header h1 { color: white; margin: 0; font-size: 22px; }
      .header p { color: rgba(255,255,255,0.85); margin: 8px 0 0; font-size: 13px; }
      .body { padding: 32px 36px; color: #333; line-height: 1.7; }
      .body h2 { color: #FF6600; margin-top: 0; }
      .highlight { background: #fff3e0; border-left: 3px solid #FF6600; padding: 12px 16px; border-radius: 4px; margin: 20px 0; font-size: 14px; color: #555; }
      .contact-box { background: #111; border-radius: 8px; padding: 18px 20px; margin-top: 24px; }
      .contact-box p { color: #ccc; margin: 0; font-size: 13px; }
      .contact-box a { color: #FF9933; text-decoration: none; font-weight: 600; }
      .footer { background: #111; padding: 16px 36px; text-align: center; }
      .footer p { color: #888; font-size: 12px; margin: 0; }
      .footer span { color: #FF6600; font-weight: bold; }
    </style>
  </head>
  <body>
    <div class="wrapper">
      <div class="header">
        <h1>📚 Adhyayan Classes</h1>
        <p>Thank you for your enquiry!</p>
      </div>
      <div class="body">
        <h2>Hello ${name}! 👋</h2>
        <p>
          Thank you for reaching out to <strong>Adhyayan Classes</strong>. We have received your enquiry for the <strong>${batch}</strong> batch.
        </p>
        <p>
          Our team will review your details and get back to you within <strong>24 hours</strong>. For a faster response, you can also WhatsApp us directly!
        </p>
        <div class="highlight">
          🎓 <strong>Batch interested in:</strong> ${batch}<br/>
          ⏰ <strong>Response time:</strong> Within 24 hours
        </div>
        <p>We look forward to welcoming you to the Adhyayan family!</p>

        <div class="contact-box">
          <p>📞 Call / WhatsApp: <a href="tel:+919999999999">+91 99999 99999</a></p>
          <p style="margin-top:8px;">📧 Email: <a href="mailto:info@adhyayanclasses.in">info@adhyayanclasses.in</a></p>
        </div>
      </div>
      <div class="footer">
        <p><span>Adhyayan Classes</span> — Excellence in Education, From SSC to Degree.</p>
      </div>
    </div>
  </body>
  </html>
  `;
}

// ── POST /api/enquiry ───────────────────────────────────────
app.post('/api/enquiry', async (req, res) => {
  const { name, phone, email, batch, message } = req.body;

  if (!name || !phone || !batch) {
    return res.status(400).json({ success: false, message: 'Name, phone, and batch are required.' });
  }

  try {
    // Send enquiry to institute
    await resend.emails.send({
      from: 'Adhyayan Classes <onboarding@resend.dev>',
      to: process.env.INSTITUTE_EMAIL,
      subject: `New Enquiry: ${name} — ${batch}`,
      html: buildEmailHTML({ name, phone, email, batch, message }),
    });

    // Auto-reply to student
    if (email) {
      await resend.emails.send({
        from: 'Adhyayan Classes <onboarding@resend.dev>',
        to: email,
        subject: 'Thank you for your enquiry — Adhyayan Classes',
        html: buildAutoReplyHTML({ name, batch }),
      });
    }

    console.log(`✅ Enquiry from ${name} email ${email} (${phone}) for ${batch}`);
    return res.status(200).json({ success: true, message: 'Enquiry submitted successfully!' });

  } catch (error) {
    console.error('❌ Failed to send email:', error.message);
    return res.status(500).json({ success: false, message: 'Failed to send enquiry.' });
  }
});

app.get('/', (req, res) => {
  res.json({ status: 'Adhyayan Classes server is running ✅' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});