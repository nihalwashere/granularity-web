"use client";

import React, { useEffect } from "react";

const UserDetailsForm = () => {
  useEffect(() => {
    const loadGranularity = () =>
      new Promise((resolve) => {
        const existingScript = document.getElementById("granularity-embed-lib");

        if (!existingScript) {
          const script = document.createElement("script");

          script.src = process.env.NEXT_PUBLIC_EMBED_SCRIPT_URL;
          script.id = "granularity-embed-lib";

          document.body.appendChild(script);

          script.onload = () => {
            resolve();
          };
        }

        if (existingScript) resolve();
      });

    loadGranularity().then(() => {
      // eslint-disable-next-line
      Granularity.Container({
        containerId: "granularity-container",
        formId: process.env.NEXT_PUBLIC_USER_DETAILS_FORM_REF,
      });
    });
  }, []);

  return (
    <div id="granularity-container" style={{ width: "100%", height: "100%" }} />
  );
};

export default UserDetailsForm;
