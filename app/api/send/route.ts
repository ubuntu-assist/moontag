import { EmailTemplate } from '@/components/email/email-template'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      firstName = 'there',
      email = 'moontag33@gmail.com',
      subject = 'Welcome to Moontag',
      messageType = 'welcome',
    } = body

    const { data, error } = await resend.emails.send({
      from: 'Moontag <hello@gmail.com>',
      to: [email],
      subject: subject,
      react: EmailTemplate({
        firstName,
        subject,
        messageType,
      }),
    })

    if (error) {
      console.error('Email sending error:', error)
      return Response.json({ error: error.message }, { status: 500 })
    }

    return Response.json({
      success: true,
      data,
      message: `Email sent successfully to ${email}`,
    })
  } catch (error) {
    console.error('API route error:', error)
    return Response.json(
      {
        error: 'Failed to send email',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
