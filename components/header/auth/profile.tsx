import { authClient } from '@/lib/auth-client'
import { toast } from 'sonner'
import { Avatar, AvatarFallback, Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from '../../ui'

export function Profile() {
  const { data: session } = authClient.useSession()

  async function signOut() {
    const { data, error } = await authClient.signOut()

    if (error) {
      toast.error(error.message)
    }

    if (data?.success) {
      toast.success("Вы успешно вышли")
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost'>
          <Avatar>
            <AvatarFallback className='bg-black text-amber-50'>{session?.user.email[0].toUpperCase()}</AvatarFallback>
          </Avatar>
          {session?.user.email}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>
          Настройки
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={signOut}>
          Выйти
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}