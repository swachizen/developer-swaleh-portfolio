"use client";

import { useEffect } from "react";

export default function ServiceWorkerProvider() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) {
      return;
    }

    const registerSW = async () => {
      try {
        const registration =
          await navigator.serviceWorker.register("/sw.js");

        console.log(
          "Service Worker registered:",
          registration.scope
        );
      } catch (error) {
        console.error(
          "Service Worker registration failed:",
          error
        );
      }
    };

    registerSW();
  }, []);

  return null;
}
