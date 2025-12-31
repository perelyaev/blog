import { authClient } from '@/lib/auth-client'
import { Profile } from './profile'
import { SignIn } from './sign-in-OTP'
import { Button, Dialog, DialogTrigger } from '@/components/ui'

export function Auth() {
  const { data: session } = authClient.useSession()

  if (session?.user.email === undefined) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Войти</Button>
        </DialogTrigger>
        <SignIn />
      </Dialog> 
    )
  }

  return <Profile />
}