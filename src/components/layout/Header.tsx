import { Command } from "lucide-react"
import { Link } from "react-router"
import { Button } from "../ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "../ui/navigation-menu"

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 sm:p-5">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className="text-primary inline-flex flex-row items-center px-3 text-2xl"
            >
              <Link to="/">
                <Command className="text-primary/90 size-6" />
                <span className="pb-1.5 pl-2 font-semibold">Taxonomy</span>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <div className="hidden sm:flex">
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="#">Features</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="#">Pricing</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="#">Blog</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="#">Documentation</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
      <Button variant="secondary">Login</Button>
    </header>
  )
}
