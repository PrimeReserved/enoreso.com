import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !phone || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400 }
      );
    }

    // Email to site owner
    const emailToOwner = resend.emails.send({
      from: 'Contact Form <noreply@enoreso.com>',
      to: 'info@enoreso.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // Confirmation email to user
    const emailToUser = resend.emails.send({
      from: 'Enovate Resources Limited <noreply@enoreso.com>',
      to: email,
      subject: 'Thanks for getting in touch!',
      html: `
        <h2>Thank You for Contacting Us</h2>
        <p>Hi ${name},</p>
        <p>Thank you for contacting us. We received your message and will get back to you soon.</p>
        <p>Best regards,<br/>
        <strong>Enovate Resources Limited</strong></p>
      `,
    });

    // Send both emails in parallel
    await Promise.all([emailToOwner, emailToUser]);

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
