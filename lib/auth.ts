import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { emailOTP } from "better-auth/plugins"
import prisma from './prisma'
import VerificationOTP from '@/emails/verificationOTP'
import { sendEmail } from './send-email'
import { render } from '@react-email/render'

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    session: {
        expiresIn: 60 * 60 * 24 * 7, // 7 days
        updateAge: 60 * 60 * 24, // 1 day (every 1 day the session expiration is updated)
        freshAge: 60 * 5 // 5 minutes (the session is fresh if created within the last 5 minutes)
    },
    plugins: [
        emailOTP({
            otpLength: 6,
            expiresIn: 300,
            sendVerificationOnSignUp: true,
            overrideDefaultEmailVerification: true, 
            allowedAttempts: 3,
            storeOTP: 'hashed',
            async sendVerificationOTP({ email, otp, type }) { 
                if (type === "sign-in") {
                    const html = await render(VerificationOTP(otp))
                    await sendEmail({
                        to: email,
                        subject: '',
                        html: html
                    })
                } else if (type === "email-verification") { 
                    // Send the OTP for email verification
                } else { 
                    // Send the OTP for password reset
                } 
            }, 
        }) 
    ] 
});