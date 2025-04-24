import React from "react";
import type { ReactNode } from "react";
import Navbar from "./navbar"; 

type LayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      {children}
    </>
  );
}