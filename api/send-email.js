// Vercel Serverless Function for sending emails via Resend
// Set RESEND_API_KEY in your Vercel project environment variables

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, email, company, message } = req.body

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY

    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY environment variable is not set')
      return res.status(500).json({ error: 'Server configuration error' })
    }

    // Send email via Resend API
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'BuildStack Contact Form <onboarding@resend.dev>', // Change to your verified domain
        to: ['hello@buildstack.dev'], // Change to your email
        reply_to: email,
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #0A1628 0%, #1a2942 100%); padding: 30px; border-radius: 8px 8px 0 0;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            </div>
            <div style="background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                    <strong style="color: #0A1628;">Name:</strong>
                  </td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #475569;">
                    ${name}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                    <strong style="color: #0A1628;">Email:</strong>
                  </td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                    <a href="mailto:${email}" style="color: #2563eb;">${email}</a>
                  </td>
                </tr>
                ${company ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                    <strong style="color: #0A1628;">Company:</strong>
                  </td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #475569;">
                    ${company}
                  </td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 12px 0; vertical-align: top;">
                    <strong style="color: #0A1628;">Message:</strong>
                  </td>
                  <td style="padding: 12px 0; color: #475569; white-space: pre-wrap;">
                    ${message}
                  </td>
                </tr>
              </table>
              <div style="margin-top: 24px; padding: 16px; background: #2563eb; border-radius: 6px;">
                <p style="color: #ffffff; margin: 0; font-size: 14px;">
                   Remember to respond within 24 hours!
                </p>
              </div>
            </div>
          </div>
        `,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Resend API error:', errorData)
      return res.status(500).json({ error: 'Failed to send email' })
    }

    const data = await response.json()

    return res.status(200).json({
      success: true,
      message: 'Email sent successfully',
      id: data.id,
    })
  } catch (error) {
    console.error('Error sending email:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}

