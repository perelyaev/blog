import { authClient } from '@/lib/auth-client'
import { Profile } from './profile'
import { SignIn } from './sign-in'

export function Auth() {
  const { data: session } = authClient.useSession()

  if (session?.user.email === undefined) {
    return <SignIn />
  }

  return <Profile />
}