import { Button, DialogContent, DialogDescription, DialogHeader, DialogTitle, Input } from '@/components/ui'
import { Mail } from 'lucide-react'
import { ChangeEventHandler, MouseEventHandler } from 'react'

export function SendingOtp({email, setEmail, handleSending }: {
  email: string | number | readonly string[] | undefined,
  setEmail: ChangeEventHandler<HTMLInputElement> | undefined, 
  handleSending: MouseEventHandler<HTMLButtonElement> | undefined}
) { 
  return (
    <DialogContent className="sm:max-w-[455px]">
      <DialogHeader>
        <DialogTitle>Вход</DialogTitle>
        <DialogDescription>Чтобы войти введите "email" и нажмите кнопку "Продолжить"</DialogDescription>
      </DialogHeader>
      <div className='flex items-center gap-3'>
        <Mail />
        <Input 
          id="email" 
          name="email" 
          placeholder="email" 
          value={email}
          onChange={setEmail}
        />
      </div>
      <Button type="submit" onClick={handleSending} >Продолжить</Button>
    </DialogContent>
  )
}