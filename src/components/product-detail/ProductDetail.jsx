"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { countSalePercent, formatNumber } from "@/utils/formatNumber";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { useCartStore } from "@/store/cart";

function ProductDetail({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedCarouselImage, setSelectedCarouselImage] = useState("");
  const [selectedVariant, setSelectedVariant] = useState({});

  const { toast } = useToast();
  const { addToCart } = useCartStore();

  useEffect(() => {
    if (product && product.tier_variations?.length > 0) {
      const firstVariant = product.tier_variations[0];
      const firstOption = firstVariant.options[0];

      setSelectedVariant({
        name: firstVariant.name,
        option: firstOption,
      });

      setSelectedCarouselImage(product.images[0]);
    }
  }, [product]);

  const handleVariantClick = (index, option) => {
    const tierImages = product.tier_variations[0]?.images;
    if (tierImages && tierImages[index]) {
      setSelectedCarouselImage(tierImages[index]);
    }

    setSelectedVariant({
      name: product.tier_variations[0].name,
      option,
      image: product.tier_variations[0].images[index],
    });
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
    toast({
      title: "Thêm vào giỏ hàng thành công !",
      description: `${product.name} - ${selectedVariant.option} đã được thêm với số lượng ${quantity}.`,
    });
  };

  return (
    <div className="container">
      <div className="py-5">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/" className="font-medium">
                  Trang chủ
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/" className="font-medium">
                  Sản phẩm
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  href={`/product/${product.itemid}`}
                  className="font-medium max-w-36 lg:max-w-full truncate"
                  disabled
                >
                  {product.name}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        <div>
          <div className="p-4">
            <img
              src={`/images/${selectedCarouselImage}.jpg`}
              alt="product"
              className="block mx-auto lg:h-[400px]"
            />
          </div>
          <div>
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full pt-3"
            >
              <CarouselContent>
                {product.images.map((item, index) => (
                  <CarouselItem key={index} className="basis-1/6">
                    <button
                      onClick={() => setSelectedCarouselImage(item)}
                      className="flex items-center justify-center !h-16 p-2 hover:border-2 border-gray-400 rounded-lg hover:opacity-80"
                    >
                      <img
                        className="object-cover h-12 w-24"
                        src={`/images/${item}.jpg`}
                        alt=""
                      />
                    </button>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
        <div className="lg:flex lg:flex-col lg:justify-between">
          <div>
            {product.sale_price && (
              <Badge className="bg-red-600 rounded-md mb-5">{`-${countSalePercent(
                product.price,
                product.sale_price
              )}%`}</Badge>
            )}

            <h1 className="font-bold text-3xl mb-4">{product.name}</h1>

            <p className="text-gray-400 mb-4">Mã sản phẩm : {product.itemid}</p>

            <div className="flex items-end gap-2 mb-4">
              <p className="text-2xl font-bold text-red-600">{`${formatNumber(
                product.price
              )}đ`}</p>
              <span className="text-sm line-through text-gray-400">{`${formatNumber(
                product.sale_price
              )}đ`}</span>
            </div>
          </div>

          <div>
            <p className="mb-2">Chọn {product.tier_variations[0]?.name}:</p>
            <div className="flex items-center flex-wrap gap-3 mb-4">
              {product.tier_variations[0]?.options.map((option, index) => (
                <button
                  key={index}
                  className={`border-2 rounded py-1 px-4 hover:opacity-80 transition-all ${
                    selectedVariant.option === option ? "border-black" : ""
                  }`}
                  onClick={() => handleVariantClick(index, option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 mb-4 border-b-2 border-gray-300 border-dashed pb-4">
            <p>Số lượng: </p>
            <div className="flex items-center gap-4">
              <button
                className="p-1 border border-gray-400 rounded hover:bg-slate-800 hover:text-white transition-all"
                onClick={handleDecrement}
              >
                <Minus />
              </button>
              <span className="text-lg">{quantity}</span>
              <button
                className="p-1 border border-gray-400 rounded hover:bg-slate-800 hover:text-white transition-all"
                onClick={handleIncrement}
              >
                <Plus />
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-4">
            <button
              className="py-1 flex-1 border-2 border-gray-300 rounded-lg transition-all hover:bg-gray-500 hover:text-white font-semibold"
              onClick={handleAddToCart}
            >
              Thêm vào giỏ hàng
            </button>
            <a
              href="tel:+8349258885"
              className="py-1 flex-1 flex flex-col items-center bg-black text-white rounded-lg transition-all hover:opacity-80 font-semibold"
            >
              <p>Mua số lượng lớn</p>
              <p>Gọi ngay 034 925 8885</p>
            </a>
          </div>
        </div>
      </div>

      <Tabs defaultValue="productDescription" className="mb-5">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="productDescription">Mô tả sản phẩm</TabsTrigger>
          <TabsTrigger value="deliveryPolicy">Chính sách bảo hành</TabsTrigger>
        </TabsList>
        <TabsContent value="productDescription">
          <div
            className="py-10"
            dangerouslySetInnerHTML={{
              __html: product?.description,
            }}
          />
        </TabsContent>
        <TabsContent value="deliveryPolicy">
          <p className="py-10">
            CHÍNH SÁCH BẢO HÀNH GIÀY ĐÁ BÓNG <br />- Giày được bảo hành các lỗi
            : bong keo, đứt chỉ,...
            <br />- Thời gian bảo hành: 6 tháng (Sau 6 tháng, shop vẫn nhận sửa
            với phí ưu đãi) <br />
            ĐỊA CHỈ BẢO HÀNH: <br />- Số 10, Đường Tân Triều Mới, Thanh Trì, Hà
            Nội <br />- Khách ở gần: Khách mang trực tiếp giày đến trực tiếp
            công ty hoặc đại lý gần bạn nhất <br />- Khách ở xa: Khách gửi qua
            công ty chuyển phát (bưu điện, viettelpost,...) .Công ty chịu phí
            vận chuyển chiều về, khách chịu phí vận chuyền chiều đi, tầm 30-40k.{" "}
            <br />
            TRÂN TRỌNG CẢM ƠN
          </p>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default ProductDetail;
