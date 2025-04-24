import * as React from "react";
import Image from "next/image";
import { Taviraj } from "next/font/google";
import { Search, Plus, ArrowLeft, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const taviraj = Taviraj({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-taviraj",
  weight: ['100','200','300','400','500','600','700','800','900']
});

export default function HomePage() {
  return (
    <div className={`${taviraj.variable} font-taviraj bg-gray-100 py-10 px-4`}>
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto relative bg-gradient-to-br from-[#9AA374] to-[#7F867B] text-white rounded-2xl p-6 flex flex-col-reverse lg:flex-row items-center justify-between overflow-hidden mt-8 mb-8 gap-4">        
        {/* Character Info */}
        <div className="text-center lg:text-left lg:ml-20 max-w-xl z-10">
          <h1 className="text-4xl font-bold">Lin Qing / 林青</h1>
          <p className="mt-4 text-sm">
            Lin Qing grew up in a secret village in the middle of the forest, studying the science of plants and life force. He traveled to find a legendary plant that was believed to be able to cure all diseases.
          </p>
          <Button className="mt-6 bg-white text-emerald-800 hover:bg-gray-200 transition-all">
            Read More
          </Button>
        </div>

        {/* Character Image */}
        <div className="mr-10 relative w-48 h-48 lg:w-[250px] lg:h-[250px]">
          <Image
            src="/photo/LinQing01banner.png"
            alt="Lin Qing"
            fill
            className="object-contain z-0"
          />
        </div>

        {/* Arrows */}
        <ArrowLeft className="hidden lg:block absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 cursor-pointer text-white" />
        <ArrowRight className="hidden lg:block absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 cursor-pointer text-white" />
      </section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-6">
        
        {/* Artworks */}
        <div>
          <h2 className="text-lg font-semibold text-emerald-800 mb-4 text-center md:text-left">Artworks</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
            <Card className="w-full max-w-xs">
              <Image src="/photo/Lin Qing02.png" alt="林青" width={400} height={400} className="rounded-xl w-full h-auto" />
              <CardContent className="p-2 text-xs text-muted-foreground text-center">by @MANASSANAN</CardContent>
            </Card>
            <Card className="w-full max-w-xs">
              <Image src="/photo/Lin Qing03.png" alt="林青" width={400} height={400} className="rounded-xl w-full h-auto" />
              <CardContent className="p-2 text-xs text-muted-foreground text-center">by @MANASSANAN</CardContent>
            </Card>
          </div>

          <div className="flex justify-center mt-4">
            <Button variant="outline" className="w-full max-w-xs">View More</Button>
          </div>
        </div>


        {/* Element Info Cards */}
        <div className="space-y-4 mt-2">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold text-emerald-800">WEAPON : Bow</h3>
              <p className="text-sm text-muted-foreground">
                A bamboo bow decorated with glowing leaves that shoots arrows that burst out into pollen that heals or stuns enemies.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold text-emerald-800">Elemental Skill / Burst</h3>
              <p className="text-sm text-muted-foreground">
                Elemental Skill: "Binding Vine Power"  Fires a special arrow that summons vines to wrap around enemies, slowing them.
              </p>
              <p className="text-sm text-muted-foreground">
                Elemental Burst: "Forest Oath"  Creates a force field that heals teammates and attacks enemies with sacred pollen.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold text-emerald-800">HISTORY BEHIND</h3>
              <p className="text-sm text-muted-foreground">
                Lin Qing grew up in a secret village in the middle of the forest, studying the science of plants and life force. He traveled to find a legendary plant that was believed to be able to cure all diseases.
              </p>
            </CardContent>
          </Card>
        </div>

      </section>
    </div>
  );
}
