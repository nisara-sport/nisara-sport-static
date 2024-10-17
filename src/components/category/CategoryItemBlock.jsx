import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { countSalePercent, formatNumber } from "@/utils/formatNumber";

export default function CategoryItemBlock({ product }) {
  return (
    <div className="border border-gray-200 rounded p-4">
      <div className="relative">
        <Link href={`/product/${product.itemid}`}>
          <img
            className="lg:h-[288px] w-full object-fill rounded mb-5"
            src={`/images/${product.images[0]}.jpg`}
            alt=""
          />
        </Link>
        {product.sale_price && (
          <Badge className="absolute top-1 right-1 bg-red-600">
            {`-${countSalePercent(product.price, product.sale_price)}%`}
          </Badge>
        )}
      </div>
      <div className="space-y-2">
        <Link href={`/product/${product.itemid}`}>
          <h1 className="text-center lg:text-lg font-semibold truncate">
            {product.name}
          </h1>
        </Link>
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
          <div className="flex flex-col lg:flex-row items-center lg:items-end gap-2">
            <p className="text-lg font-semibold text-red-600">{`${formatNumber(
              product.sale_price
            )}đ`}</p>
            {product.sale_price && (
              <span className="text-sm line-through text-gray-400">{`${formatNumber(
                product.price
              )}đ`}</span>
            )}
          </div>
          <Button size="sm">
            <Link href={`/product/${product.itemid}`}>Chi tiết</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
