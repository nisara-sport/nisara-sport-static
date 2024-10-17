"use client";

import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { countSalePercent, formatNumber } from "@/utils/formatNumber";
import Link from "next/link";
import { Button } from "../ui/button";
import Autoplay from "embla-carousel-autoplay";

function AnotherProduct({ products }) {
  return (
    <div className="container py-10">
      <h1 className="text-center text-2xl font-bold uppercase mb-5">
        Các sản phẩm khác
      </h1>
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {products.map((item) => {
            return (
              <CarouselItem
                className="basis-full lg:basis-1/4"
                key={item.itemid}
              >
                <div className="border border-gray-200 rounded p-4">
                  <div className="relative">
                    <Link href={`/product/${item.itemid}`}>
                      <img
                        className="lg:h-[288px] w-full object-fill rounded mb-5"
                        src={`/images/${item.images[0]}.jpg`}
                        alt=""
                      />
                    </Link>
                    {/* {item.attributes.salePrice && (
                          <Badge className="absolute top-1 right-1 bg-red-600">
                            {`-${countSalePercent(
                              item.attributes.price,
                              item.attributes.salePrice
                            )}%`}
                          </Badge>
                        )} */}
                  </div>
                  <div className="space-y-2">
                    <Link href={`/product/${item.itemid}`}>
                      <h1 className="text-center text-lg font-semibold truncate">
                        {item.name}
                      </h1>
                    </Link>
                    <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
                      <div className="flex flex-col lg:flex-row items-center lg:items-end gap-2">
                        <p className="text-lg font-semibold text-red-600">{`${formatNumber(
                          item.sale_price
                        )}đ`}</p>
                        {item.sale_price && (
                          <span className="text-sm line-through text-gray-400">{`${formatNumber(
                            item.price
                          )}đ`}</span>
                        )}
                      </div>
                      <Button size="sm">
                        <Link href={`/product/${item.itemid}`}>Chi tiết</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default AnotherProduct;
