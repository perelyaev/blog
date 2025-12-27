'use client'

import { authClient } from '@/lib/auth-client'
import { Button, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, Input, Label } from './ui'
import { useState } from 'react'

export function SignIn() {
  const [email, setEmail] = useState('')

  async function handleSignIn() {
    await authClient.emailOtp.sendVerificationOtp({
      email: email,
      type: "sign-in",
    });
  }

  return (
     <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Войти</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[455px]">
          <DialogHeader>
            <DialogTitle>Войти</DialogTitle>
            <DialogDescription>
              Электронная почта будет использоваться для входа в аккаунт.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="email">Электронная почта</Label>
              <Input id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handleSignIn}>Продолжить</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}