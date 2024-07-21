import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { HoverBorderGradient }  from './ui/MagicButton'

const Hero = () => {
    return (
        <div className='pb-20 pt-36 '>
            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white" />
                <Spotlight className='-top-10 left-full h-[80vh] w-[50vh]' fill="blue" />
                <Spotlight className='top-90 left-80 h-[80vh] w-[50vh]' fill="purple" />


                </div>


                <div className="absolute top-0 left-0 h-screen w-full bg-[#000319]  bg-grid-black/[0.03]  flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#000319]  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

    </div>  
    <div className='flex text-center justify-center relative my-20 z-10 '>
<div className='max-w-[89vw] md:max-w-2xl lg:max-w-[80vh] flex flex-col items-center justify-center'>
    <h2 className='uppercase tracking-widest text-xs text-center text-white '>#1 Best Roblox Serverside</h2>
    <TextGenerateEffect className='text-center text-[25px] md:text-4xl lg:text-3xl' words="Discover the Power of Zephal: Leading the Scripting Revolution"/>
   <p className='text-zinc-500 text-xs md:mb-0 mb-5'>Zephal is a community-driven organization that aims to provide the best scripting experience.</p>
   <div className='flex md:flex-row flex-col gap-5'>
   <div className="  mt-5 flex flex-row justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-lg border-black"
        as="button"
        className="bg-[#000319]  text-white flex items-center space-x-2"
      >
        <span>Purchase Key</span>
        <AceternityLogo />

      </HoverBorderGradient>
    </div>
</div>
</div>
    </div>
                </div>
    )
}

const AceternityLogo = () => {
    return (
<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-key"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0z" /><path d="M15 9h.01" /></svg>
    )
}
export default Hero