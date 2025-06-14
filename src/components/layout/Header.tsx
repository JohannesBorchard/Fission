import { Zap } from "lucide-react"
import { Link } from "react-router"
import { Button } from "../ui/Button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "../ui/NavigationMenu"

import { Description as DialogDescription } from "@radix-ui/react-dialog"
import { ModeToggle } from "../ui/ModeToggle"
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/Sheet"

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 sm:p-5">
      {/* Desktop-Navigation */}
      <Logo />
      <DesktopNav />

      <div className="flex gap-3">
        <ModeToggle />
        <Button asChild variant="secondary">
          <Link to="/login">Login</Link>
        </Button>

        {/* Mobile-Burger */}
        <div className="md:hidden">
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
      <Zap className="mb-0.5 size-6" />
      <span className="mb-1.5 ml-2 font-semibold">Fission</span>
    </Link>
  )
}

function DesktopNav() {
  return (
    <nav className="hidden flex-1 justify-start md:flex">
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

      <DialogDescription className="sr-only" id="mobile-menu-desc">
        Hauptnavigation für mobile Geräte mit Links zu Features, Pricing, Blog und Documentation.
      </DialogDescription>

      <div className="mt-10 w-full flex-1">
        <NavigationMenu className="max-w-none">
          <NavigationMenuList className="flex flex-col space-y-2">
            <NavigationMenuItem>
              <SheetClose asChild>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link to="/">Home</Link>
                </NavigationMenuLink>
              </SheetClose>
            </NavigationMenuItem>
            {["Features", "Pricing", "Blog", "Documentation"].map((label) => (
              <NavigationMenuItem key={label}>
                <SheetClose asChild>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link to={`/${label.toLowerCase()}`}>{label}</Link>
                  </NavigationMenuLink>
                </SheetClose>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Login inside sheet */}
      <div className="flex flex-col gap-4">
        <ModeToggle className="w-full" />
        <SheetClose asChild>
          <Link to="/login">
            <Button variant="secondary" className="w-full">
              Login
            </Button>
          </Link>
        </SheetClose>
      </div>
    </SheetContent>
  )
}
