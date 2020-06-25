import React from "react";
import { Card } from "components/Card";

export const ListOfCards = () => {
  return (
    <div class="mt-4 ml-4 mr-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
      <Card
        title="API"
        serviceList={["Twilio", "Stripe", "Paypal"]}
        color="purple"
        backgroundTone="300"
      />
      <Card
        title="Cloud providers"
        serviceList={["AWS", "GCP", "Azure"]}
        color="orange"
        backgroundTone="200"
      />
      <Card
        title="SaaS"
        serviceList={["Zoom"]}
        color="blue"
        backgroundTone="300"
      />
      <Card
        title="Finance"
        serviceList={["Robinhood", "Binance", "Bitkraken"]}
        color="green"
        backgroundTone="200"
      />
    </div>
  );
};
