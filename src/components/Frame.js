import React from "react";

import { backgrounds } from "/src/styles/backgrounds";

export default function Frame({ children }) {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script src="https://cdn.tailwindcss.com" />
      <style dangerouslySetInnerHTML={{ __html: backgrounds }} />
      {children}
    </>
  );
}
