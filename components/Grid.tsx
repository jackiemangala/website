"use client";
import React, { useEffect, useState } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/layout-grid";
import {
  IconCode,
  IconStar,
  IconBrandHipchat,
  IconUserStar,
  IconSignature,
  IconDownload,
  
} from "@tabler/icons-react";
import { cn } from "@/utils/cn";
import { animate, motion } from "framer-motion";


import Image from "next/image";

export function Grid() {
  return (
    <section className="py-16">
    <BentoGrid className=" relative mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
    </section>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex  flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2]  flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-white/[0.2] p-2  items-center space-x-2 bg-[#2B2541]"
      >
        <Image
          src="/capo.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-6 w-6"
        />        <div className="w-full h-4 rounded-full bg-purple-700/25" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-[#2B2541]"
      >
        <div className="w-full h-4 rounded-full bg-purple-700/25" />
        <Image
          src="/jackie.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-6 w-6"
        />      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-white/[0.2] p-2 items-center space-x-2 bg-[#2B2541]"
      >
        <Image
          src="/capo.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-6 w-6"
        />        <div className="w-full h-4 rounded-full bg-purple-700/25">
        
        </div>
      </motion.div>
    </motion.div>
  );
};
const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2]  flex-col space-y-2"
    >
      {arr.map((_, i) => (
        <motion.div
          key={"skelenton-two" + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + "%",
          }}
          className="flex flex-row rounded-full border border-white/[0.2] p-2  items-center space-x-2 bg-[#2B2541]/35 w-full h-4"
        ></motion.div>
      ))}
    </motion.div>
  );
};
const SkeletonThree = () => {
    const scale = [1, 1.1, 1];
    const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
    const sequence = [
      [
        ".circle-1",
        {
          scale,
          transform,
        },
        { duration: 0.8 },
      ],
      [
        ".circle-2",
        {
          scale,
          transform,
        },
        { duration: 0.8 },
      ],
      [
        ".circle-3",
        {
          scale,
          transform,
        },
        { duration: 0.8 },
      ],
      [
        ".circle-4",
        {
          scale,
          transform,
        },
        { duration: 0.8 },
      ],
      [
        ".circle-5",
        {
          scale,
          transform,
        },
        { duration: 0.8 },
      ],
    ];
   
    useEffect(() => {
      // @ts-ignore
      animate(sequence, {
        repeat: Infinity,
        repeatDelay: 1,
      });
    }, []);
  return (
    
    <div className="p-8 overflow-hidden bg-dot-white/[0.2] h-full relative flex items-center justify-center">
    <div className="flex flex-row flex-shrink-0 justify-center items-center gap-2">
      <Container className="h-8 w-8 circle-1">
        <IconUserStar className="h-4 w-4 " />
      </Container>
      <Container className="h-12 w-12 circle-2">
        <IconStar className="h-6 w-6 text-white" />
      </Container>
      <Container className="circle-3">
        <IconCode className="h-8 w-8 text-white" />
      </Container>
      <Container className="h-12 w-12 circle-4">
        <IconDownload className="h-6 w-6 " />
      </Container>
      <Container className="h-8 w-8 circle-5">
        <IconBrandHipchat className="h-4 w-4 " />
      </Container>
    </div>


  </div>
);
};
const Sparkles = () => {
const randomMove = () => Math.random() * 2 - 1;
const randomOpacity = () => Math.random();
const random = () => Math.random();
return (
  <div className="absolute inset-0">
    {[...Array(12)].map((_, i) => (
      <motion.span
        key={`star-${i}`}
        animate={{
          top: `calc(${random() * 100}% + ${randomMove()}px)`,
          left: `calc(${random() * 100}% + ${randomMove()}px)`,
          opacity: randomOpacity(),
          scale: [1, 1.2, 0],
        }}
        transition={{
          duration: random() * 2 + 4,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          top: `${random() * 100}%`,
          left: `${random() * 100}%`,
          width: `2px`,
          height: `2px`,
          borderRadius: "50%",
          zIndex: 1,
        }}
        className="inline-block bg-white"
      ></motion.span>
    ))}
  </div>
);
};

export const Card = ({
className,
children,
}: {
className?: string;
children: React.ReactNode;
}) => {
return (
  <div
    className={cn(
      "max-w-sm w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] bg-[rgba(40,40,40,0.70)]  shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
      className
    )}
  >
    {children}
  </div>
  );
};
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2]  flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/2 rounded-2xl  p-4 bg-[#2B2541] border-white/[0.1] border  flex flex-col items-center justify-center"
      >
        <Image
          src="/capo.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-white mt-4">
          developercapo
        </p>
        <p className="border border-red-500 bg-red-900/20 text-white text-xs rounded-full px-2 py-0.5 mt-4">
          Backend Developer
        </p>
      </motion.div>
      <motion.div variants={second} className="h-full relative z-20 w-1/2 rounded-2xl p-4 bg-[#2B2541] border-white/[0.1] border  flex flex-col items-center justify-center">
        
        <Image
          src="/jackie.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-white mt-4">
          jackiee_m
        </p>
        <p className="border border-green-500 bg-green-900/20 text-white text-xs rounded-full px-2 py-0.5 mt-4">
          Frontend Developer
        </p>
      </motion.div>

    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2]  flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-white/[0.2] p-2  items-start space-x-2 bg-[#2B2541]"
      >
        <Image
          src="/frostryx.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-white">
        Zephal is a serverside that allows you to execute in infected games within admin power and etc.       
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-[#2B2541]"
      >
        <p className="text-xs text-white">Thank you so much for explaining.</p>
        <Image
          src="/jackie.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />      </motion.div>
    </motion.div>
  );
};
const items = [
  {
    title: "96% Customer Satisfaction Rate.",
    description: (
      <span className="text-sm">
         We usually get good customer rates from people who have bought Zephal serverside.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Why We Are Number #1",
    description: (
      <span className="text-sm">
        We provide the best service, within customer support, unique ui and games.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconStar className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Continuously updating",
    description: (
      <span className="text-sm">
                Capo and Jackie always fixes bugs nonstop to ensure the people who has bought Zephal will be satisfied.

      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconDownload className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Our very own cool duo developers",
    description: (
      <span className="text-sm">
        We will update everytime if there&apos;s a bug or will need a new update.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconDownload className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "24/7 Support",
    description: (
      <span className="text-sm">
        We will have staffs 24/7 online supporting with the problems you need help with.


      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBrandHipchat className="h-4 w-4 text-neutral-500" />,
  },
];

const Container = ({
    className,
    children,
  }: {
    className?: string;
    children: React.ReactNode;
  }) => {
    return (
      <div
        className={cn(
          `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
      shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
      `,
          className
        )}
      >
        {children}
      </div>
    );
  };

export default Grid