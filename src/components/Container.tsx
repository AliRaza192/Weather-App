import { cn } from '@/utils/cn'
import React, { HTMLProps } from 'react'


export default function Container(props: React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn("w-full bg-white border rounded-xl shadow-sm flex py-4",
        props.className)}
    />
  )
}