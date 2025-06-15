import { Zap } from "lucide-react"
import { Link, useLocation } from "react-router"
import { Button } from "../ui/Button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "../ui/NavigationMenu"

import { cn } from "@/lib/utils"
import { Description as DialogDescription } from "@radix-ui/react-dialog"
import { ModeToggle } from "../ui/ModeToggle"
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/Sheet"

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 pt-4 sm:px-5 sm:pt-5">
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
      className="text-primary hover:text-primary-foreground/80 dark:hover:text-primary/80 focus-visible:ring-ring/50 mr-5 inline-flex items-center rounded-md px-2 text-2xl transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
    >
      <Zap className="mb-1 size-6" />
      <span className="mb-1.5 ml-2 font-semibold">Fission</span>
    </Link>
  )
}

interface MenuItem {
  title: string
  url: string
  done?: boolean
}

const menuItems: MenuItem[] = [
  {
    title: "Home",
    url: "/",
    done: true
  },
  {
    title: "Feed",
    url: "/feed",
    done: false
  },
  {
    title: "Premium",
    url: "/premium",
    done: false
  }
]

function NavLinkItem({
  url,
  title,
  closeSheet = false,
  done = false
}: {
  url: string
  title: string
  closeSheet?: boolean
  done?: boolean
}) {
  const { pathname } = useLocation()
  const isActive = pathname === url

  const link = (
    <NavigationMenuLink
      asChild
      className={cn(navigationMenuTriggerStyle(), isActive && "text-accent-foreground")}
    >
      <Link to={url} className="flex flex-row">
        {title}
        {/* !done && <Badge variant="outline">Todo</Badge> */}
      </Link>
    </NavigationMenuLink>
  )

  return (
    <NavigationMenuItem key={url}>
      {closeSheet ? <SheetClose asChild>{link}</SheetClose> : link}
    </NavigationMenuItem>
  )
}

function DesktopNav() {
  return (
    <nav className="hidden flex-1 justify-start md:flex">
      <NavigationMenu>
        <NavigationMenuList className="flex space-x-4">
          {menuItems.map((i) => (
            <NavLinkItem {...i} key={i.url} />
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
    <SheetContent side="right" className="flex w-64 flex-col p-6">
      <SheetHeader className="flex items-center justify-between">
        <SheetTitle className="text-foreground/80 absolute top-2.5 left-5">Pages</SheetTitle>
      </SheetHeader>

      <DialogDescription className="sr-only" id="mobile-menu-desc">
        Hauptnavigation für mobile Geräte mit Links zu Features, Pricing, Blog und Documentation.
      </DialogDescription>

      <div className="mt-10 flex-1">
        <NavigationMenu className="max-w-none">
          <NavigationMenuList className="flex flex-col space-y-2">
            {menuItems.map((i) => (
              <NavLinkItem {...i} closeSheet key={i.url} />
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
