import { IconMenu } from "@/components/Icons/IconMenu";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Nav from "../Nav";
import ResumeLink from "../ResumeLink";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [isIconMenuActive, setIsIconMenuActive] = useState(false);

  useEffect(() => {
    if (isIconMenuActive) {
      setTimeout(() => {
        setIsIconMenuActive(false);
      }, 400);
    }
  }, [isIconMenuActive]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const closeDrawerOnDesktop = () => setOpen(false);
    media.addEventListener("change", closeDrawerOnDesktop);

    return () => {
      media.removeEventListener("change", closeDrawerOnDesktop);
    };
  }, []);

  return (
    <Drawer open={open} onOpenChange={setOpen} direction="right">
      <DrawerTrigger onClick={() => setOpen(true)}>
        <IconMenu
          className={cn(isIconMenuActive && "animate-[spin--360_400ms_ease]")}
        />
      </DrawerTrigger>
      <DrawerContent className="bg-surface rounded-none! border-current">
        <DrawerHeader>
          <DrawerClose asChild>
            <Button
              variant="ghost"
              size="icon-lg"
              className="text-brand relative top-3 right-1 ml-auto animate-[spin_350ms_linear] text-2xl duration-1000"
              onClick={() => setIsIconMenuActive(true)}
            >
              X
            </Button>
          </DrawerClose>
        </DrawerHeader>
        <Nav />
        <ResumeLink />
      </DrawerContent>
    </Drawer>
  );
}
