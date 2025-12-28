'use client'

import { authClient } from '@/lib/auth-client'
import { useState } from 'react'
import { Button, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, Input, InputOTP, InputOTPGroup, InputOTPSlot, Label } from './ui'
import { toast } from "sonner"

export function SignIn() {
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')

  async function handleSending() {
    await authClient.emailOtp.sendVerificationOtp({
      email: email,
      type: "sign-in",
    })
    toast.success("Код подтверждения отправлен на электронную почту")
  }

  async function handleVerification() {
    await authClient.signIn.emailOtp({
      email: email,
      otp: otp
    });
    toast.success("Вы успешно авторизованы")
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Войти</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[455px]">
        <DialogHeader>
          <DialogTitle className='text-center'>Авторизация</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="email">Электронная почта</Label>
            <Input id="email" name="email" placeholder="demo@mail.ru" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Button type="submit" onClick={handleSending} >Отправить код подтверждения</Button>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-3">
            <Label>Код подтверждения</Label>
            <InputOTP maxLength={6} >
              <InputOTPGroup>
                <InputOTPSlot index={0} className='w-17' />
                <InputOTPSlot index={1} className='w-17' />
                <InputOTPSlot index={2} className='w-17' />
                <InputOTPSlot index={3} className='w-17' />
                <InputOTPSlot index={4} className='w-17' />
                <InputOTPSlot index={5} className='w-17' />
              </InputOTPGroup>
            </InputOTP>
            <Button type="submit" onClick={handleVerification}>Войти</Button>
          </div>
        </div>
        <DialogFooter>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}