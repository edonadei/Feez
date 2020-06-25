import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ title, serviceList, color, backgroundTone }) => {
  return (
    <div class={`bg-gray-${backgroundTone} rounded-lg text-center`}>
      <h1 class={`text-2xl font-medium font-bold mb-2 text-${color}-600`}>
        {title}
      </h1>
      {serviceList.map(service => {
        return (
          <Link to={`/service/${service}`} serviceName={service}>
            <div class="text-xl text-gray-800">
              {service}
            </div>
          </Link>
        );
      })}
      <div class="mb-2" />
    </div>
  );
};
