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
      <section className="max-w-6xl mx-auto relative bg-gradient-to-br from-[#000000] to-[#bdbdbd] text-white rounded-2xl flex flex-col-reverse lg:flex-row items-center justify-between overflow-hidden mt-8 mb-8 gap-4">        
        {/* Character Info */}
        <div className="text-center lg:text-left lg:ml-20 max-w-xl z-10">
          <h1 className="text-4xl font-bold">MANASSANAN RATANACHAIWONG</h1>
          <p className="mt-4 text-sm">
            My name is Paint. I was born in Phayao, Thailand, on July 12, 2005. I graduated with a Bachelor's Degree in Computer Engineering from Rajamangala University of Technology Thanyaburi. I enjoy reading, gaming, and love cats and Northern Thai food. I'm passionate about technology and committed to growing in this field.          
          </p>
        </div>

        {/* Character Image */}
        <div className="mr-20 mb-0 mt-6 relative size-32 lg:w-[300px] lg:h-[300px]">
          <Image
            src="/photo/เพ้นท์.png"
            alt="เพ้นท์"
            fill
            className="object-contain z-0"
          />
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-6">
        
        {/* Artworks */}
        <div>
          <h2 className="text-lg font-semibold text-black mb-4 text-center md:text-left">Sample Works</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
            <Card className="w-full max-w-xs">
              <Image src="/photo/OOP.jpg" alt="OOP" width={400} height={400} className="rounded-xl w-full h-auto" />
              <CardContent className="p-2 text-xs text-muted-foreground text-center">ผู้ช่วยวิทยากรคอร์ส การเขียนโปรแกรมเชิงวัตถุ</CardContent>
            </Card>
            <Card className="w-full max-w-xs">
              <Image src="/photo/Hands on.jpg" alt="Hands on" width={400} height={400} className="rounded-xl w-full h-auto" />
              <CardContent className="p-2 text-xs text-muted-foreground text-center">ผู้ช่วยวิทยากรงาน Hands on</CardContent>
            </Card>
            <Card className="w-full max-w-xs">
              <Image src="/photo/Robot1.jpg" alt="Robot1" width={400} height={400} className="rounded-xl w-full h-auto" />
              <CardContent className="p-2 text-xs text-muted-foreground text-center">ผู้ช่วยวิทยากรค่าย Robot Academy 2024</CardContent>
            </Card>
            <Card className="w-full max-w-xs">
              <Image src="/photo/Robot2.jpg" alt="Robot2" width={400} height={400} className="rounded-xl w-full h-auto" />
              <CardContent className="p-2 text-xs text-muted-foreground text-center">ผู้ช่วยวิทยากรค่าย Robot Academy 2024</CardContent>
            </Card>
          </div>
        </div>


        {/* Element Info Cards */}
        <div className="space-y-4 mt-12">
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
