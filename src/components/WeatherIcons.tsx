import { cn } from '@/utils/cn'
import Image from 'next/image'
import React, { ReactHTMLElement } from 'react'

type Props = {}

export default function WeatherIcons(
  props: React.HTMLProps<HTMLDivElement> & { iconName: string }) {
  return (
    <div {...props} className={cn("relative h-20 w-20")}>
      <Image
        width={100}
        height={100}
        alt="weather icon"
        src={`https://openweathermap.org/img/wn/${props.iconName}@4x.png`} />
    </div>
  )
}