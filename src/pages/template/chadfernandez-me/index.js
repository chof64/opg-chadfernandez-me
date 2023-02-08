import React from "react";
import Layout from "@/components/layout/Layout";

export default function index() {
  return (
    <Layout>
      <div className="w-[1200px] h-[630px] shadow-lg p-4 bg-white">
        <div className="h-full bg-patterns-circuit-board bg-center bg-clip-border bg-repeat bg-auto">
          <div className="py-32 pt-80 px-20">
            <h1 className="text-6xl font-bold text-neutral-800">
              Chad Fernandez
            </h1>
            <p className="text-2xl text-slate-600">
              A web developer and a student from the Philippines.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
