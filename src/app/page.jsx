"use client";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { countSalePercent, formatNumber } from "@/utils/formatNumber";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Separator } from "@/components/ui/separator";
import { CustomMarquee } from "@/components/CustomMarquee";
import { products } from "@/data/product";

export default function Home() {
  return (
    <>
      <CarouselSlide />
      <Product products={products} />
      <AffiliateBlock />
      <CustomMarquee />
    </>
  );
}

const CarouselSlide = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  return (
    <div className={`${isDesktop && "container pt-10"}`}>
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem>
            <img
              className="block mx-auto"
              src={`/images/Banner/N01.png`}
              alt=""
            />
          </CarouselItem>
          <CarouselItem>
            <img
              className="block mx-auto"
              src={`/images/Banner/N02.png`}
              alt=""
            />
          </CarouselItem>
          <CarouselItem>
            <img
              className="block mx-auto"
              src={`/images/Banner/Tongquan.png`}
              alt=""
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

const Product = ({ products }) => {
  return (
    <div className="py-10">
      <div className="container">
        <h1 className="text-center text-2xl font-bold uppercase mb-5">
          Sản phẩm
        </h1>
        <Separator className="w-5 block mx-auto mb-10 bg-black" />
        <Carousel>
          <CarouselContent>
            {products &&
              products.map((item) => {
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
                        {item.sale_price && (
                          <Badge className="absolute top-1 right-1 bg-red-600">
                            {`-${countSalePercent(
                              item.price,
                              item.sale_price
                            )}%`}
                          </Badge>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Link href={`/product/${item.itemid}`}>
                          <h1 className="text-center lg:text-lg font-semibold truncate">
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
                            <Link href={`/product/${item.itemid}`}>
                              Chi tiết
                            </Link>
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
    </div>
  );
};

const AffiliateBlock = () => {
  return (
    <div className="py-10 mb-10 bg-black">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <h1 className="text-center font-bold uppercase text-2xl text-white">
              Dành cho đại lý
            </h1>
            <p className="text-center italic lg:text-lg mb-5 text-white">
              Tin tưởng và hợp tác
            </p>
            <Separator className="w-5 block mx-auto mb-5" />
            <p className="text-center mb-5 text-white">
              Với phương châm không ngừng đổi mới để trao tới tay người tiêu
              dùng những sản phẩm chất lượng tốt và đưa{" "}
              <span className="font-bold">Nisara</span> đến gần hơn với những
              người đam mê thể thao, chúng tôi luôn mong muốn được hợp tác và là
              đối tác tin cậy, uy tín của các cá nhân, đơn vị tiềm năng trên
              toàn quốc.
            </p>
            <Button
              variant={"outline"}
              className="block mx-auto text-white max-w-fit"
              asChild
            >
              <Link href={"/affiliate"}>Tìm hiểu thêm</Link>
            </Button>
          </div>
          <div className="hidden lg:flex flex-col items-center justify-center">
            <img
              src={`/assets/nisara-logo-white.png`}
              alt="nisara-logo"
              className="w-1/2 block mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
