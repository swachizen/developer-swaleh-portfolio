"use client";

import { useEffect } from "react";

export default function ServiceWorkerProvider() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) {
      return;
    }

    async function init() {
      try {
        const swUrl = "/sw.js";

        const response = await fetch(swUrl);

        if (!response.ok) {
          throw new Error(
            `SW file missing: ${response.status}`
          );
        }

        const registration =
          await navigator.serviceWorker.register(swUrl);

        console.log(
          "SW registered:",
          registration.scope
        );
      } catch (error) {
        console.error(error);
      }
    }

    init();
  }, []);

  return null;
}
