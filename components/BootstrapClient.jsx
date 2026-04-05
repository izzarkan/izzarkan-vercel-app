"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function BootstrapClient() {
  const pathname = usePathname();

  useEffect(() => {
    const bootstrap = require("bootstrap");

    const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltips.forEach((el) => new bootstrap.Tooltip(el));

    document.body.offsetHeight;
  }, [pathname]);

  return null;
}