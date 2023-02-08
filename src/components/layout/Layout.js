import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <div className="min-h-[100vh] flex items-center justify-center min-w-[100vw] bg-cyan-100">
        {children}
      </div>
    </>
  );
}
