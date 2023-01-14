import { ChangeEvent, useEffect, useState } from "react";
import { optionCityType, forecastType } from "../types";

const useForecast = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;

  const [term, setTerm] = useState<string>("");
  const [options, setOptions] = useState<[]>([]);
  const [city, setCity] = useState<optionCityType | null>();
  const [forecast, setForecast] = useState<forecastType | null>();

  const getSearch = (value: string) => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setOptions(data));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setTerm(value);
    if (value === "") return;
    getSearch(value);
  };

  const handleSubmit = () => {
    if (!city) return;

    getWeatherData(city);
  };

  const getWeatherData = (city: optionCityType) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        const forecastData = {
          ...data.city,
          list: data.list.slice(0, 16),
        };
        setForecast(forecastData);
        setTerm("");
      });
  };

  useEffect(() => {
    if (city) {
      setTerm(city.name);
      setOptions([]);
    }
  }, [city]);

  return {
    term,
    options,
    forecast,
    handleChange,
    handleSubmit,
    setCity,
    setForecast,
  };
};

export default useForecast;
