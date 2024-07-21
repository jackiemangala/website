"use client"
import Image from "next/image";
import Hero from "../components/Hero"
import React, { useState } from "react";
import { cn } from "@/utils/cn";
import { HoverBorderGradient } from "@/components/ui/MagicButton";
import { Button } from "@/components/ui/moving-border";
import Navbar from "@/components/Navbar"
import ServerData from "@/components/ServerData"
import Grid from "@/components/Grid"

import { Meteors } from "@/components/ui/meteors";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
  <main className="relative bg-[#000319] text-white flex justify-center items-center flex-col overflow-clip mx-auto px-5">
        <Meteors number={30} />

    <div className="max-w-7xl w-full">


<Navbar />

      <Hero/>
      <ServerData/>
      <Grid/>
      <Reviews/>  
    </div>
  </main>
  );
}


