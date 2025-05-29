import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !phone || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400 }
      );
    }

    // Create reusable transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      host: process.env.HOSTINGER_SMTP_HOST,
      port: Number(process.env.HOSTINGER_SMTP_PORT),
      secure: Number(process.env.HOSTINGER_SMTP_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.HOSTINGER_SMTP_USER,
        pass: process.env.HOSTINGER_SMTP_PASS,
      },
    });

    // Email content for site owner
    const mailToOwner = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission from ${name}`,
      text: `You received a new message:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage:\n${message}`,
      html: `<p>You received a new message:</p>
       <p><strong>Name:</strong> ${name}</p>
       <p><strong>Email:</strong> ${email}</p>
       <p><strong>Phone:</strong> ${phone}</p>
       <p><strong>Message:</strong><br/>${message}</p>`,
    };

    // Email content for user confirmation
    const mailToUser = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'Thanks for getting in touch!',
      text: `Hi ${name},\n\nThank you for contacting us. We received your message and will get back to you soon.\n\nBest regards,\nEnovate Resources Limited`,
      html: `<p>Hi ${name},</p>
             <p>Thank you for contacting us. We received your message and will get back to you soon.</p>
             <p>Best regards,<br/>Enovate Resources Limited</p>`,
    };

    // Send emails in parallel
    await Promise.all([
      transporter.sendMail(mailToOwner),
      transporter.sendMail(mailToUser),
    ]);

    return new Response(
      JSON.stringify({ message: 'Message sent successfully' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Failed to send message' }), {
      status: 500,
    });
  }
}
