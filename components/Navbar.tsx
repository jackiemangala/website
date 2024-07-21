import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { Button } from "@/components/ui/moving-border";
import { cn } from "@/utils/cn";
import Link from "next/link"
function navbar() {
  return (
    <Navbar />

  )
}

export default navbar

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
      <div
        className={cn("fixed   top-10 inset-x-0 max-w-sm mx-auto z-50", className)}
      >
        <Menu setActive={setActive}>
          <div className="flex flex-row items-center justify-center gap-5">
          <MenuItem setActive={setActive} active={active} item="Home">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/#pricing">Pricing</HoveredLink>
              <HoveredLink href="/#features">Features</HoveredLink>
            </div>
          </MenuItem>
  <Link href="https://discord.gg/VfUaUBsS" target="_blank">Discord</Link>
  <Link href="/login">
  <Button
  
          className="bg-slate-900  text-white border-slate-800"
        >
          Login Page
  
        </Button>
        </Link>
        </div>
        </Menu>
        
        
      </div>
    );
  }
  