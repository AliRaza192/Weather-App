import React from "react";
import Container from "./Container";
import WeatherIcons from "./WeatherIcons";
import WeatherDetial, { WeatherDetialProps } from "./WeatherDetial";
import { convertKelvinToCelsius } from "@/utils/convertKelvinToCelsius";

type Props = {};

export interface ForecastWeatherDetialProps extends WeatherDetialProps {
  weatherIcon: string;
  date: string;
  day: string;
  temp: number;
  feel_like: number;
  temp_min: number;
  temp_max: number;
  description: string;
}



export default function ForecastWeatherDetial(props: ForecastWeatherDetialProps) {

  const {
    weatherIcon = "02d",
    date = "19.09",
    day = "Thursday",
    temp,
    feel_like,
    temp_min,
    temp_max,
    description,
  } = props

  return (

    <Container className=" gap-4">
      {/* left */}
      <section className="flex gap-4 items-center px-4">
        <div className="flex flex-col gap-1 items-center">
          <WeatherIcons iconName={weatherIcon} />
          <p>{date}</p>
          <p className="text-sm">{day}</p>
        </div>

      {/*  */}

      <div className="flex flex-col px-4">
        <span className="text-5xl">{convertKelvinToCelsius(temp ?? 0)}°</span>
        <p className="text-sm space-x-1 whitespace-nowrap">
          <span>Feels like</span>
          <span>{convertKelvinToCelsius(feel_like ?? 0 )}°</span>
        </p>
        <p className="capitalize">{description}</p>
      </div>
      </section>

      {/* right */}

      <section className="overflow-auto flex justify-between gap-4 px-4 w-full pr-10">
        <WeatherDetial {...props}/>

      </section>


    </Container>
  )
}
