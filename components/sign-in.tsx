import { Button, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, Input, Label } from './ui'

export function SignIn() {
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
              <Input id="email" name="email" />
            </div>
          </div>
          <DialogFooter>
            {/* <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose> */}
            <Button type="submit">Продолжить</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}