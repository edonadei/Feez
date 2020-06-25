import React from "react";
import { useParams } from "react-router-dom";

export const ServiceLayout = () => {
  const { name } = useParams();

  return (
    <div class={`bg-gray-200 rounded-lg `}>
      <h1 class={`text-3xl text-center font-medium font-bold mb-2 text-orange-600`}>
        {name}
      </h1>
      <div >Voice Pricing:</div>
      <div class="mb-2" />
    </div>
  );
};
