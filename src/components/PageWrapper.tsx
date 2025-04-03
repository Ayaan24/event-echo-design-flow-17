
import React from "react";
import { NavbarHighlight } from "./NavbarHighlight";
import TimelineDemo from "./TimelineDemo";

export default function PageWrapper() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden max-w-[100vw]">
      <NavbarHighlight />
      <div className="flex-grow py-6 md:py-10 px-4 md:px-6 overflow-x-hidden">
        <div className="max-w-6xl mx-auto w-full overflow-hidden">
          <TimelineDemo />
        </div>
      </div>
    </div>
  );
}
