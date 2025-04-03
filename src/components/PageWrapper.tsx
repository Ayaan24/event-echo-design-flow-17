
import React from "react";
import { NavbarHighlight } from "./NavbarHighlight";
import TimelineDemo from "./TimelineDemo";

export default function PageWrapper() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarHighlight />
      <div className="flex-grow py-10">
        <TimelineDemo />
      </div>
    </div>
  );
}
