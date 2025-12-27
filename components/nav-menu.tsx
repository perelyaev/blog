import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from './ui'

export function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink>Главная</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Категории</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Категория 1</NavigationMenuLink>
            <NavigationMenuLink>Категория 2</NavigationMenuLink>
            <NavigationMenuLink>Категория 3</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}