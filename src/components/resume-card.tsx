"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import React from "react";
import Markdown from "react-markdown";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description: string;
  location?: string;
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  location,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Card className="flex bg-background">
      <div className="flex-none">
        <Avatar className="border size-12 m-auto bg-white">
          <AvatarImage src={logoUrl} alt={altText} className="object-contain" />
          <AvatarFallback>{altText[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex-grow ml-4 items-center flex-col group">
        <CardHeader className="block cursor-pointer" onClick={handleClick}>
          <div className="flex justify-between gap-x-2 text-base flex-col sm:flex-row">
            <div>
              <h3 className="inline-flex items-center justify-center font-semibold leading-none">
                {title}
                {badges && (
                  <span className="inline-flex gap-x-1">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xs"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                <ChevronRightIcon
                  className={cn(
                    "size-4 translate-x-0 transform transition-all duration-300 ease-out group-hover:translate-x-1 flex-shrink-0",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                />
              </h3>
              <div className="flex justify-between">
                {subtitle && (
                  <div className="font-sans text-sm">{subtitle}</div>
                )}
              </div>
            </div>
            <div className="mr-0.5">
              <div className="text-xs sm:text-sm text-muted-foreground sm:text-right flex-shrink-0">
                {period}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground sm:text-right italic">
                {location}
              </div>
            </div>
          </div>
        </CardHeader>
        {description && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isExpanded ? 1 : 0,

              height: isExpanded ? "auto" : 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-2 text-xs sm:text-sm prose dark:prose-invert text-foreground"
          >
            <Markdown>{description}</Markdown>
            <a href={href} target="_blank" rel="noopener noreferrer">
              Website
            </a>
          </motion.div>
        )}
      </div>
    </Card>
  );
};
