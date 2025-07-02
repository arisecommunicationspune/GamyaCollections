import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import ProductCard from "./ProductCard";
import { bestsellerProducts } from "@/data/resource";

    



const BestsalerSection = () => {
  return (
    <div className="container m-auto py-14 flex flex-col justify-center items-center h-auto px-9 md:px-8 lg:px-16 overflow-hidden gap-4">
      <h2 className="text-4xl font-serif text-amber-900 mb-3">
          Best Seller
        </h2>
        <Carousel
      opts={{
        align: "start",
      }}
      className="w-[90%] "
    >
      <CarouselContent className="pl-4  ">
        {bestsellerProducts.map((product, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 sm:basis-1/1 w-full h-auto p-0 ml-2 m-0">
            <div className="p-2">
              <ProductCard product={product} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  );
};

export default BestsalerSection;
