import React from "react";
import { FiDroplet } from "react-icons/fi";
import { ImMeter } from "react-icons/im";
import { LuEye, LuSunrise, LuSunset } from "react-icons/lu";
import { MdAir } from "react-icons/md";

// type Props = {}

export interface WeatherDetialProps {
  visability: string;
  humidity: string;
  windSpeed: string;
  airPressure: string;
  sunrise: string;
  sunset: string
}

export default function WeatherDetial(props: WeatherDetialProps) {
  const {
    visability = "25km",
    humidity = "61%",
    windSpeed = "7 km/h",
    airPressure = "1012 hpa",
    sunrise = "6.20",
    sunset = "18.48"
  } = props;

  return (
    <>
      <SingleWeatherDetial
        icon={<LuEye />}
        information="Visibility"
        value={visability}
      />

      <SingleWeatherDetial
        icon={<FiDroplet />}
        information="Humidity"
        value={humidity}
      />

      <SingleWeatherDetial
        icon={<MdAir />}
        information="WindSpeed"
        value={windSpeed}
      />
      <SingleWeatherDetial
        icon={<ImMeter />}
        information="Air Pressure"
        value={airPressure}
      />
      <SingleWeatherDetial
        icon={<LuSunrise />}
        information="Sunrise"
        value={sunrise}
      />
      <SingleWeatherDetial
        icon={<LuSunset />}
        information="Sunset"
        value={sunset}
      />
    </>
  );
}

export interface SingleWeatherDetialProps {
  information: string;
  icon: React.ReactNode;
  value: string;
}

function SingleWeatherDetial(props: SingleWeatherDetialProps) {
  return (
    <div
      className="flex flex-col justify-between gap-2 items-center text-sm font-semibold
        text-black/80"
    >
      <p className="whitespace-nowrap">{props.information}</p>
      <p className="text-3xl">{props.icon}</p>
      <p>{props.value}</p>
    </div>
  );
}
