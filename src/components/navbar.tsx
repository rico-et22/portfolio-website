"use client";

import { Dock, DockIcon } from "@/components/magicui/dock";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import useMediaQuery from "@/lib/useMediaQuery";
import { cn } from "@/lib/utils";
import { FileText } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const mobile = useMediaQuery("(max-width: 639.98px)");

  const emailData = DATA.contact.social.email;
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
      <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
      <Dock className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-3 bg-gradient-to-r from-[#006696] to-[#043e88] [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] gap-2">
        {/* {DATA.navbar.map((item) => (
          <DockIcon key={item.href}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12"
                  )}
                >
                  <item.icon className="size-6" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation="vertical" className="h-full" /> */}
        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-8 sm:size-12"
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="size-4 sm:size-6" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        <Separator orientation="vertical" className="h-full py-2 bg-gray-100" />
        {/* <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <ModeToggle />
            </TooltipTrigger>
            <TooltipContent>
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon> */}
        <DockIcon
          magnificationWidth={mobile ? 60 : 130}
          width={mobile ? 50 : 110}
        >
          <Link
            href={emailData.url}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "flex gap-2 bg-yellow-300 text-gray-900 rounded-full sm:rounded-sm p-3 sm:px-4 sm:py-2 h-auto"
            )}
          >
            <emailData.icon className="size-4 sm:size-6" />
            <span className="hidden sm:block">Email</span>
          </Link>
        </DockIcon>
        <DockIcon
          magnificationWidth={mobile ? 60 : 130}
          width={mobile ? 40 : 115}
        >
          <Link
            href="./resume.pdf"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "flex gap-2 rounded-full sm:rounded-sm p-3 sm:px-4 sm:py-2 h-auto"
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileText className="size-4 sm:size-6" />
            <span className="hidden sm:block">Resume</span>
          </Link>
        </DockIcon>
      </Dock>
    </div>
  );
}
