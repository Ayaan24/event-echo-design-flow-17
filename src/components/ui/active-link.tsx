
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ActiveLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function ActiveLink({ href, children, className }: ActiveLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === href || 
                  (href !== "/" && location.pathname.startsWith(href));

  return (
    <Link
      to={href}
      className={cn(
        "relative font-medium transition-colors group",
        isActive ? "text-white" : "text-gray-200 hover:text-white",
        className
      )}
    >
      {children}
      <span
        className={cn(
          "absolute -bottom-1 left-0 h-0.5 bg-[#ea384c] transition-all",
          isActive ? "w-full" : "w-0 group-hover:w-full"
        )}
      />
    </Link>
  );
}
