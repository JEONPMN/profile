import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-gray-200 to-gray-50 px-4">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row w-full max-w-5xl">
        
        {/* Top on mobile / Left on desktop: Illustration */}
        <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-4 md:p-0">
          <div className="relative w-full max-w-xs aspect-[3/4] md:h-[500px] md:aspect-auto">
            <Image
              src="/photo/LinQingLogin.png"
              alt="LinQing"
              fill
              className="object-contain md:object-cover object-left"
              priority
            />
          </div>
        </div>

        {/* Bottom on mobile / Right on desktop: Form */}
        <div className="flex flex-col justify-center items-center px-6 py-10 md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Log in</h1>
          <p className="text-sm text-gray-500 mb-6 text-center">
            Please sign in to access.
          </p>

          <div className="space-y-4 w-full max-w-sm ">
            <Input type="email" placeholder="Email" className="text-emerald-800 rounded-full px-5 py-3 bg-gray-100" />
            <Input type="password" placeholder="Password" className="text-emerald-800 rounded-full px-5 py-3 bg-gray-100" />
            <Button className="w-full rounded-full bg-green-700 hover:bg-green-800 text-white py-3">
              Let&apos;s start!
            </Button>
          </div>

          <div className="mt-6 flex gap-6 justify-center">
            <button>
              <Image src="/photo/facebook.png" alt="Facebook" width={50} height={50} />
            </button>
            <button>
              <Image src="/photo/google.png" alt="Google" width={50} height={50} />
            </button>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Do not have an account?{" "}
            <a href="#" className="text-green-700 font-semibold hover:underline">Sign up</a>
          </p>
        </div>

      </div>
    </div>
  );
} 