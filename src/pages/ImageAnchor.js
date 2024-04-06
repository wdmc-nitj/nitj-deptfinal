import React from "react";
import { useParams } from "react-router-dom";
import { departments } from "../config/server";

export default function ImageAnchor() {
    const dept = useParams()?.dept;
    
  return (
    <div className="bg-gradient-to-b from-accent to-transparent bg-cover bg-center flex flex-col w-full h-fit bottom-0 items-center justify-center p-1">
      <div className="flex text-lg text-center sm:text-2xl mx-2 mb-0 font-bold text-white">
        <span className="flex">Department of {departments[dept]}</span>
      </div>
      <h2 className="sm:text-xl mx-2 mt-1 font-bold text-white">
        NITJ<span className="mx-2 font-medium uppercase">Welcomes you</span>
      </h2>
    </div>
  );
}
