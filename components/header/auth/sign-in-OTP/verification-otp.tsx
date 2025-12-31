import { Button, DialogContent, DialogDescription, DialogHeader, DialogTitle, InputOTP, InputOTPGroup, InputOTPSlot, Label } from '@/components/ui'
import { SquareAsterisk } from 'lucide-react'
import { MouseEventHandler } from 'react'

export function VerificationOtp({email, otp, setOtp, handleVerification}: {
  email: string | undefined,
  otp: string | undefined,
  setOtp: ((newValue: string) => unknown) | undefined,
  handleVerification: MouseEventHandler<HTMLButtonElement> | undefined
}) {
  
  return (
    <DialogContent className="sm:max-w-[455px]">
      <DialogHeader>
        <DialogTitle>Вход</DialogTitle>
        <DialogDescription>Чтобы войти введите код отправленный по email</DialogDescription>
      </DialogHeader>
      <div className="flex items-center gap-3">
        <SquareAsterisk />
        <InputOTP maxLength={6} value={otp} onChange={setOtp}>
          <InputOTPGroup>
            <InputOTPSlot index={0} className='w-15' />
            <InputOTPSlot index={1} className='w-15' />
            <InputOTPSlot index={2} className='w-15' />
            <InputOTPSlot index={3} className='w-15' />
            <InputOTPSlot index={4} className='w-15' />
            <InputOTPSlot index={5} className='w-15' />
          </InputOTPGroup>
        </InputOTP>
      </div>
        <Button type="submit" onClick={handleVerification}>Войти</Button>
    </DialogContent>
  )
}