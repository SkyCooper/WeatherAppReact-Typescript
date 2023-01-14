import React from "react";
import { forecastType } from "../types";
import Sunrise from "./Icons/Sunrise";
import { getSunTime } from "../helpers";
import Sunset from "./Icons/Sunset";

type Props = {
  data: forecastType;
  setForecast: React.Dispatch<
    React.SetStateAction<forecastType | null | undefined>
  >;
};
const Forecast = ({ data, setForecast }: Props) => {
  const today = data.list[0];
  console.log(data);
  return (
    <div className="anaDiv">
      <div className="w-[300px]">
        <section className="text-center">
          <h2 className="text-2xl font-black">
            {data.name} <span className="font-thin ml-2">{data.country}</span>
          </h2>
          <h1 className="text-3xl font-semibold">
            {Math.round(today.main.temp)} <sup>o</sup>
          </h1>
          <p>
            {today.weather[0].main} {today.weather[0].description}
          </p>
          <p className="text-lg">
            H: {Math.ceil(today.main.temp_max)}
            <sup>o</sup> L:
            {Math.floor(today.main.temp_min)} <sup>o</sup>
          </p>
        </section>

        <section className="flex overflow-x-scroll mt-4 pb-2 mb-4">
          {data.list.map((item, index) => (
            <div
              key={index}
              className="text-center w-[50px] inline-block flex-shrink-0">
              <p>{index === 0 ? "Now" : new Date(item.dt * 1000).getHours()}</p>
              <img
                alt="icon"
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              />
              <p className="font-bold">
                {Math.round(item.main.temp)}
                <sup>o</sup>
              </p>
            </div>
          ))}
        </section>

        <section className="flex flex-wrap justify-between">
          <div>
            <Sunrise /> <span>{getSunTime(data.sunrise)}</span>
          </div>
          <div>
            <Sunset /> <span>{getSunTime(data.sunset)}</span>
          </div>
        </section>
      </div>
      <div className="text-center">
        <button onClick={() => setForecast(null)}>Go Back</button>
      </div>
    </div>
  );
};

export default Forecast;
