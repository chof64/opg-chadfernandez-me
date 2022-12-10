import React from "react";

export default function Home() {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script src="https://cdn.tailwindcss.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      <div className="w-[1200px] h-[630px] bg-white">
        <div className="bg-gradient-to-r p-2 from-blue-600 to-cyan-400 w-full h-full">
          <div className="w-full h-full bg-gradient-to-r from-white via-white to-white/80 backdrop-blur-md rounded-lg">
            <div className="w-full h-full mx-16 flex items-center">
              <div className="font-['Inter'] mt-52">
                <h1 className="text-7xl font-extrabold">Chad Fernandez</h1>
                <p className="text-2xl text-neutral-500 font-light">
                  (Fullstack Developer)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
