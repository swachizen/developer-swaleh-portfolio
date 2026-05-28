"use client";

import { useEffect } from "react";

export default function ServiceWorkerProvider() {
  useEffect(() => {
    const registerSW = async () => {
      try {
        if (
          typeof window === "undefined" ||
          !("serviceWorker" in navigator)
        ) {
          return;
        }

        await navigator.serviceWorker.register(
          "/sw.js"
        );

        console.log("SW registered");
      } catch (error) {
        console.error("SW failed:", error);
      }
    };

    registerSW();
  }, []);

  return null;
}
