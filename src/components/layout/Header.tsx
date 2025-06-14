import { Command } from "lucide-react"
import { Link } from "react-router"
import { Button } from "../ui/Button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "../ui/NavigationMenu"

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/Sheet"

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 sm:p-5">
      {/* Desktop-Navigation */}
      <Logo />
      <DesktopNav />

      <div className="flex gap-3">
        <Button variant="secondary">Login</Button>

        {/* Mobile-Burger */}
        <div className="sm:hidden">
          <Sheet>
            <MobileBurger />
            <MobileNavSheet />
          </Sheet>
        </div>
      </div>
    </header>
  )
}

function Logo() {
  return (
    <Link
      to="/"
      className="text-primary/90 hover:text-accent-foreground focus-visible:ring-ring/50 bg-background hover:bg-accent mr-5 inline-flex items-center rounded-md px-2 text-2xl transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
    >
      <Command className="size-6" />
      <span className="mb-1.5 ml-2 font-semibold">Taxonomy</span>
    </Link>
  )
}

function DesktopNav() {
  return (
    <nav className="hidden flex-1 justify-start sm:flex">
      <NavigationMenu>
        <NavigationMenuList className="flex space-x-4">
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
  )
}

function MobileBurger() {
  return (
    <SheetTrigger asChild>
      <Button variant="ghost" size="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </Button>
    </SheetTrigger>
  )
}

function MobileNavSheet() {
  return (
    <SheetContent side="right" className="flex w-64 flex-col justify-start p-6">
      {/* Mobile-NavigationMenu in Sheet */}
      <SheetHeader className="flex items-center justify-between">
        <SheetTitle className="text-primary/80 absolute top-2.5 left-5">Pages</SheetTitle>
      </SheetHeader>

      <div className="mt-10 w-full flex-1">
        <NavigationMenu className="max-w-none">
          <NavigationMenuList className="flex flex-col space-y-2">
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/">Home</Link>
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
      </div>

      {/* Login inside sheet */}
      <Button variant="secondary" className="mt-6 w-full">
        Login
      </Button>
    </SheetContent>
  )
}
