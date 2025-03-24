import React from "react";
import "./autoplaycarousel.css";
import { cardDetails } from "./carousel-config";
import CarouselItem from "./CarouselItem"; 

export default function AutoplayCarousel() {
  return (
        <div className="carousel-track flex justify-center items-center gap-8 w-[200%] h-full">
        {Object.keys(cardDetails).map((detailKey) => {
        return (
            <CarouselItem
                key={`first-${detailKey}`}
                img={cardDetails[detailKey].img}
                imgTitle={cardDetails[detailKey].title}
            ></CarouselItem>
        );
        })}
        {Object.keys(cardDetails).map((detailKey) => {
        return (
            <CarouselItem
                key={`second-${detailKey}`}  
                img={cardDetails[detailKey].img}
                imgTitle={cardDetails[detailKey].title}
            ></CarouselItem>
        );
        })}
    </div>
  );
}