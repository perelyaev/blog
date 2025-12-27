import nodemailer from "nodemailer"

type EmailPayload = {
  to: string
  subject: string
  html: string
}

const SMTP = {
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Boolean(process.env.SMTP_SECURE),
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
}

export const sendEmail = async (data: EmailPayload) => {
  const transporter = nodemailer.createTransport({
    ...SMTP,
  })

  return await transporter.sendMail({
    from: process.env.SMTP_USER,
    ...data,
  })
}