"use client"
import {
  IconCornerDownRight,
  IconX,
} from "@tabler/icons-react";
import React, { useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { Meteors } from '@/components/ui/meteors';
import Navbar from "@/components/Navbar"
import { Spotlight } from '@/components/ui/Spotlight';
import Link from "next/link"
import Particles from "@/components/magicui/particles";


export default function Page() {
    const [color] = useState("#FFC0CB");
  
  return (
    <main className="relative bg-[#000319] h-screen w-full  flex-col overflow-hidden mx-auto px-5">
<Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white" />
                <Spotlight className='-top-10 left-full h-[80vh] w-[50vh]' fill="blue" />
                <Spotlight className='top-90 left-80 h-[80vh] w-[50vh]' fill="purple" />
                <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      /><BlurFade delay={0.25} inView>

      <div className='max-w-md mx-auto text-center flex flex-col gap-5 items-center justify-center h-screen w-full'>
      <Link href="/"><IconX  className="text-white  absolute top-5 left-0"/></Link>
        <h1 className='text-2xl font-semibold text-white'>Welcome to <span>Zephal</span></h1>
        <p className="text-sm text-neutral-500">If you gained access to Zephal, you can enter your email or login with your Google account.</p>
        <div className="relative w-full flex items-center p-3 border rounded-full rounded-full bg-[#20252F] border-[#31353E]">
          <input required type="email" className='bg-transparent w-[350px] focus-none outline-none ' placeholder="account email"/>
          
          <button className="absolute right-5"><IconCornerDownRight className="w-8 bg-[#20252F]  p-1 h-8 border rounded-full "/></button>
          </div>      <Link href="" className="flex flex-row gap-2 text-white mt-5 font-semibold items-center justify-center"><svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.72 8.15908C14.72 7.66272 14.6755 7.18545 14.5927 6.72726H8V9.43499H11.7673C11.605 10.31 11.1118 11.0514 10.3705 11.5477V13.3041H12.6327C13.9564 12.0854 14.72 10.2909 14.72 8.15908Z" fill="#4285F4"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.9996 15C9.8896 15 11.4741 14.3732 12.6323 13.3041L10.37 11.5477C9.74323 11.9677 8.94141 12.2159 7.9996 12.2159C6.17641 12.2159 4.63323 10.9845 4.08278 9.33H1.74414V11.1436C2.89596 13.4314 5.26323 15 7.9996 15Z" fill="#34A853"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.08318 9.32999C3.94318 8.90999 3.86364 8.46135 3.86364 7.99999C3.86364 7.53863 3.94318 7.08999 4.08318 6.66999V4.85635H1.74455C1.27045 5.80135 1 6.87044 1 7.99999C1 9.12954 1.27045 10.1986 1.74455 11.1436L4.08318 9.32999Z" fill="#FBBC05"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.9996 3.78409C9.02732 3.78409 9.95005 4.13727 10.6755 4.83091L12.6832 2.82318C11.471 1.69364 9.88641 1 7.9996 1C5.26323 1 2.89596 2.56864 1.74414 4.85636L4.08278 6.67C4.63323 5.01545 6.17641 3.78409 7.9996 3.78409Z" fill="#EA4335"></path></svg>Sign in with Google</Link>
      </div>
      <div className='bottom-5 absolute text-center left-0 right-0'>
      <Link className="text-neutral-500 font-medium" href="/signup">Don&apos;t have an account yet? <span className='text-white'>Sign up.</span></Link>
      </div>
      </BlurFade>

</main>
)
}
