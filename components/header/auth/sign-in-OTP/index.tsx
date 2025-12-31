'use client'

import { authClient } from '@/lib/auth-client'
import { useState } from 'react'
import { toast } from "sonner"
import { Button, Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, Input, InputOTP, InputOTPGroup, InputOTPSlot, Label } from '../../../ui'
import { VerificationOtp } from './verification-otp'
import { SendingOtp } from './sendeing-otp'
import { redirect } from 'next/navigation'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [send, setSend] = useState(false)

  async function handleSending() {
    const { data, error } = await authClient.emailOtp.sendVerificationOtp({
      email: email,
      type: "sign-in",
    })

    if (error) {
      toast.error(error.message)
    }

    if (data?.success) {
      setSend(true)
      toast.success("Код подтверждения отправлен на электронную почту")
    }
  }

  async function handleVerification() {
    const { data, error } = await authClient.signIn.emailOtp({
      email: email,
      otp: otp
    })

    if (error) {
      toast.error(error.message)
    }

    if (data) {
      redirect('/')
      toast.success("Вы успешно авторизованы")
    }
  }
    
  if (!send) {
    return (
      <SendingOtp 
        email={email} 
        setEmail={(e) => {setEmail(e.target.value)}} 
        handleSending={handleSending}
      />
    )
  }

  return (
    <VerificationOtp 
      email={email}
      otp={otp}
      setOtp={(e) => {setOtp(e)}}
      handleVerification={handleVerification}
    />
  )
}