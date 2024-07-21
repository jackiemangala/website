"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/Spotlight";
import Link from "next/link"
import { Button } from "./ui/moving-border";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";

function SignUp() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
      };
  return (
    <div className="h-screen overflow-hidden w-full flex items-center justify-center px-3 ">
    <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="lightblue" />
                   <Spotlight className='-top-10 left-full h-[80vh] w-[50vh]' fill="lightblue" />
                   <Spotlight className='top-90 left-80 h-[80vh] w-[50vh]' fill="lightblue" />
       <div className="max-w-md w-full mx-auto rounded-lg md:rounded-2xl p-4 md:p-8 shadow-input bg-black">
         <h2 className="font-bold text-xl text-neutral-200">
           Zephal&apos;s Sign-up Page
         </h2>
         <p className=" text-sm max-w-sm mt-2 text-neutral-300">
           
         </p>
   
         <form className="my-8" onSubmit={handleSubmit}>

           <LabelInputContainer className="mb-4">
             <Label htmlFor="email">Email Address</Label>
             <Input id="email" placeholder="support@zephal.llc" type="email" />
           </LabelInputContainer>
           <LabelInputContainer className="mb-4">
             <Label htmlFor="password">Password</Label>
             <Input id="password" placeholder="••••••••" type="password" />
           </LabelInputContainer>

   
           <button
             className="mb-5  relative group/btn   block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
             type="submit"
           >
             Sign up &rarr;
             <BottomGradient />
           </button>
           <Link href="" className="text-blue-400">Already have an account? Click Here!</Link>
   
   


         </form>
       </div>
       </div>
  )
}

const BottomGradient = () => {
    return (
      <>
        <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      </>
    );
  };
  
  const LabelInputContainer = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div className={cn("flex flex-col space-y-2 w-full", className)}>
        {children}
      </div>
    );
  };
  
export default SignUp