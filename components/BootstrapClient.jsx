"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function BootstrapClient() {
  const pathname = usePathname();

  useEffect(() => {
    let isMounted = true;

    import("bootstrap").then((bootstrap) => {
      if (!isMounted) return;

      const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');

      tooltipTriggerList.forEach((el) => {
        const existing = bootstrap.Tooltip.getInstance(el);
        if (existing) {
          existing.dispose();
        }

        new bootstrap.Tooltip(el);
      });
    });

    return () => {
      isMounted = false;
    };
  }, [pathname]);

  return null;
}