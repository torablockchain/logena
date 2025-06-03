import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#features",
    label: "Características",
  },
  {
    href: "#testimonios",
    label: "Testimonios",
  },
  {
    href: "#planes",
    label: "Planes",
  },
  {
    href: "#faq",
    label: "Preguntas Frecuentes",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky border-b top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between items-center">
          {/* LOGENA Logo */}
          <NavigationMenuItem className="font-bold flex items-center">
            <a
              href="/"
              className="ml-2 text-2xl font-bold font-sora bg-gradient-to-r from-[#d9a7ff] to-[#a18cd1] text-transparent bg-clip-text"
            >
              Logena
            </a>
          </NavigationMenuItem>

          {/* Mobile Menu */}
          <div className="flex md:hidden items-center gap-2">
            <ModeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle className="text-xl font-bold">LOGENA</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-start gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-4 items-center">
            {routeList.map(({ href, label }: RouteProps) => (
              <a
                key={label}
                href={href}
                className={buttonVariants({ variant: "ghost" })}
              >
                {label}
              </a>
            ))}
            <ModeToggle />
          </nav>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
export default Navbar;