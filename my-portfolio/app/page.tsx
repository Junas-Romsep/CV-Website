"use client";

import ComputerModel from "@/components/computer-model";

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-10">
      <h1 className="text-4xl font-bold mb-4 text-center">Welcome to My Portfolio</h1>
      <div className="w-full h-[500px] md:h-[600px] flex justify-center">
        <ComputerModel />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        <div className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">My Skills</h2>
          <p>I specialize in developing innovative technologies and crafting engaging interactive web experiences.</p>
          <button
            className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
            onClick={() => window.location.href = "/experience"}
          >
           Experience
          </button>
        </div>
        <div className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Recent Work</h2>
          <p>Check out my projects section to see my latest work and the technologies I've been using.</p>
          <button
            className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
            onClick={() => window.location.href = "/projects"}
          >
            View Projects
          </button>
        </div>
      </div>
    </div>
  );
}