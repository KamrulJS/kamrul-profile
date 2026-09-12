"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import ResumeModal from "@/components/ResumeModal";

export default function NavbarWrapper() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
}
