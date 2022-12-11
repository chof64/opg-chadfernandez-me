import React from "react";
import { Link } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      <div className="w-[1200px] h-[630px] bg-white">
        <div className="bg-gradient-to-r p-1 from-blue-600 to-cyan-400 w-full h-full">
          <div className="w-full h-full bg-gradient-to-r from-white via-white to-white/100 backdrop-blur-md rounded-lg">
            <div className="h-full w-full bg-clip-border bg-center bg-repeat bg-auto bg-patterns-circuit-board">
              <div className="w-full h-full mx-16 flex items-center">
                <div className="font-['Inter'] mt-56">
                  <h1 className="text-7xl font-extrabold">Chad Fernandez</h1>
                  <div className="flex space-x-2 items-center">
                    <p className="text-2xl text-neutral-700">
                      (Fullstack Developer)
                    </p>
                    <p className="text-xl text-blue-700 bg-blue-100 px-2 stroke-[3] border-2 align-middle border-blue-700 rounded-full">
                      <Link className="h-4 w-4 inline-block align-middle mb-1 mr-0.5" />
                      chadfernandez.me
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
