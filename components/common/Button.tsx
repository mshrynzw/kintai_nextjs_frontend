"use client"

import React from "react"
import { useFeature} from "@/context/FeatureContext"

const Button =()=>{
  const { handleFeature } = useFeature()

  return (
    <button
      className="w-full bg-teal-500 text-white rounded-lg py-3 px-4 font-medium hover:bg-teal-600 transition-colors shadow-sm cursor-pointer"
      onClick={() => handleFeature("stamp")}
    >
      打刻
    </button>
  );
}

export default Button;
