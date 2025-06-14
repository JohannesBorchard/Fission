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

/* import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "../ui/sheet"
 */
export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 sm:p-5">
      {/* Desktop-Navigation */}
      <nav className="hidden flex-1 justify-start sm:flex">
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-4">
            <NavigationMenuItem>
              <NavigationMenuLink asChild className="inline-flex flex-row items-center text-2xl">
                <Link to="/">
                  <Command className="text-primary/90 size-6" />
                  <span className="pb-1.5 pl-2 font-semibold">Taxonomy</span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {["Features", "Pricing", "Blog", "Documentation"].map((label) => (
              <NavigationMenuItem key={label}>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link to={`/${label.toLowerCase()}`}>{label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
      <Button variant="secondary">Login</Button>
    </header>
  )
}
