import * as React from "react";
import { Taviraj } from "next/font/google";
import { Menu, Search } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const taviraj = Taviraj({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-taviraj",
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export default function HomePage() {
  return (
    <div className={`${taviraj.variable} font-taviraj`}>
      <nav className="w-full border-b bg-white shadow-sm relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-3 grid grid-cols-3 items-center">

          {/*Left: Desktop Left Menu (hidden on mobile) */}
          <div className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-900">
            <Link href="/">HOME</Link>
            <Link href="/about">ABOUT ME</Link>
          </div>

          {/*Mobile Hamburger */}
          <div className="sm:hidden flex items-center">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 w-6 text-gray-950 cursor-pointer" />
              </SheetTrigger>
              <SheetContent side="left" className="w-[240px] bg-white text-black">
                <div className="ml-4 flex flex-col gap-4 mt-10 text-base font-medium text-black">
                  <Link href="/">HOME</Link>
                  <Link href="/about">ABOUT ME</Link>
                  <Link href="/contact">ALBUM</Link>
                  <Link href="/login">LOGIN</Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/*Center: MANASSANAN */}
          <div className="flex justify-center">
            <h1 className="text-2xl sm:text-3xl text-gray-950 font-semibold">
              MANASSANAN
            </h1>
          </div>

          {/*Right: Desktop Right Menu (hidden on mobile) */}
          <div className="hidden sm:flex items-center gap-6 justify-end text-sm font-medium text-gray-900">
            <Link href="/album">ALBUM</Link>
            <Link href="/login">LOGIN</Link>
            <Search className="h-5 w-5 cursor-pointer hover:text-gray-500 mt-1" />
          </div>
        </div>
      </nav>
    </div>
  );
}
