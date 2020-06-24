import React from "react";

export const Card = ({ title, serviceList, color, backgroundTone }) => {
  return (
    <div class={`bg-gray-${backgroundTone} rounded-lg text-center`}>
      <h1 class={`text-2xl font-medium font-bold mb-2 text-${color}-600`}>
        {title}
      </h1>
      {serviceList.map(service => {
        return (
          <div class="text-xl text-gray-800">
            {service}
          </div>
        );
      })}
      <div class="mb-2" />
    </div>
  );
};
