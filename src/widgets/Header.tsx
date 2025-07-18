import { Zap } from "lucide-react"
import { Link, useLocation } from "react-router"
import { Button } from "../shared/ui/Button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "../shared/ui/NavigationMenu"

import { supabase } from "@/shared/api/supabaseClient"
import { useAuth } from "@/shared/lib/useAuth"
import { cn } from "@/shared/lib/utils"
import { Description as DialogDescription } from "@radix-ui/react-dialog"
import { toast } from "sonner"
import { ModeToggle } from "../shared/ui/ModeToggle"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "../shared/ui/Sheet"

export default function Header() {
  const location = useLocation()
  const isLoginPageOpen = location?.pathname === "/login"
  const { user } = useAuth()
  async function handleLogout() {
    await supabase.auth.signOut()
    toast.success("Logout successful")
  }

  return (
    <header className="flex items-center justify-between px-4 pt-4 sm:px-5 sm:pt-5">
      {/* Desktop-Navigation */}
      <Logo />
      <DesktopNav />

      <div className="flex gap-3">
        <ModeToggle />

        {user ? (
          <Button variant="ghost" onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          // Login-Button nur anzeigen, wenn NICHT gerade /login geöffnet ist
          !isLoginPageOpen && (
            <Button asChild variant="secondary">
              <Link to="/login">Login</Link>
            </Button>
          )
        )}

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
      className="text-primary hover:text-primary-foreground/80 dark:hover:text-primary/80 focus-visible:ring-ring/50 mr-5 inline-flex items-center rounded-md px-2 text-2xl transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
      to="/"
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
  closeSheet = false
}: {
  url: string
  title: string
  closeSheet?: boolean
}) {
  const { pathname } = useLocation()
  const isActive = pathname === url

  const link = (
    <NavigationMenuLink
      asChild
      className={cn(navigationMenuTriggerStyle(), isActive && "text-accent-foreground")}
    >
      <Link className="flex flex-row" to={url}>
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
      <Button size="icon" variant="ghost">
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6h16M4 12h16M4 18h16"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </Button>
    </SheetTrigger>
  )
}

function MobileNavSheet() {
  return (
    <SheetContent className="flex w-64 flex-col p-6" side="right">
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
              <NavLinkItem {...i} key={i.url} closeSheet />
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Login inside sheet */}
      <div className="flex flex-col gap-4">
        <ModeToggle className="w-full" />
        <SheetClose asChild>
          <Link to="/login">
            <Button className="w-full" variant="secondary">
              Login
            </Button>
          </Link>
        </SheetClose>
      </div>
    </SheetContent>
  )
}
