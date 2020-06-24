import React from "react";
import { Card } from "components/Card";

export default function Dashboard() {
  return (
    <React.Fragment>
      <div class="px-12 py-8">
        <div>
          <div class="flex">
            <h4 class="text-3xl font-bold text-gray-900">Feez</h4>
            <svg
              class="h-6 w-6 fill-current text-indigo-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M11,16.755V19H9v-2.143c-1.712-0.1-3.066-0.589-4.241-1.797l1.718-1.74c0.859,0.87,2.023,1.16,3.282,1.16
	c1.565,0,2.405-0.599,2.405-1.702c0-0.483-0.133-0.889-0.42-1.16c-0.267-0.251-0.572-0.387-1.202-0.483L8.9,10.903
	c-1.164-0.174-2.022-0.541-2.634-1.141C5.618,9.105,5.293,8.216,5.293,7.055c0-2.155,1.382-3.743,3.707-4.1V1h2v1.932
	c1.382,0.145,2.465,0.62,3.415,1.551l-1.679,1.682c-0.859-0.832-1.889-0.947-2.787-0.947c-1.412,0-2.099,0.792-2.099,1.74
	c0,0.348,0.115,0.716,0.401,0.986c0.267,0.252,0.706,0.464,1.26,0.541l1.602,0.232c1.241,0.174,2.023,0.522,2.596,1.063
	c0.726,0.696,1.05,1.702,1.05,2.92C14.759,14.95,13.192,16.362,11,16.755z" />
            </svg>
          </div>

          <h1 class="text-ml font-medium text-gray-900">
            Fees for every service,
            <span class="text-indigo-500"> instantly.</span>
          </h1>
        </div>
        <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
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
      </div>
    </React.Fragment>
  );
}
