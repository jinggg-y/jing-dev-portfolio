import React from "react";
import Image from "next/image";


export default function CarouselItem({ img, imgTitle }) {
  return (
    <div className="carousel-card flex justify-center items-center w-full h-full">
      <Image src={img} alt={imgTitle} height={50} width={50}/>
    </div>
  );
}