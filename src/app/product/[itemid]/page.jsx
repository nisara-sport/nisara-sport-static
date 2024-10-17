import AnotherProduct from "@/components/product-detail/AnotherProduct";
import ProductDetail from "@/components/product-detail/ProductDetail";
import { products } from "@/data/product";

export async function generateMetadata({ params }) {
  const { itemid } = params;
  const product = products.find((p) => p.itemid.toString() === itemid);

  if (!product) {
    return {
      title: "Product not found - My Store",
      description: "This product could not be found.",
    };
  }

  return {
    title: `${product.name} - NISARA | Buôn bán sỉ lẻ đồ tập, đồ thể thao`,
    description: `Get the best deals on ${product.name} for just ${product.price}!`,
    openGraph: {
      title: `${product.name} - NISARA | Buôn bán sỉ lẻ đồ tập, đồ thể thao`,
      description: `Check out ${product.name} for only ${product.price}!`,
      images: [
        {
          url: product.images[0],
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} - My Store`,
      description: `Buy ${product.name} now for only ${product.price}!`,
      images: product.images[0],
    },
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    itemid: product.itemid.toString(),
  }));
}

export default function ProductPage({ params }) {
  const { itemid } = params;
  const product = products.find((p) => p.itemid.toString() === itemid);
  const productsWithoutCurrentProduct = products.filter(
    (item) => item.itemid !== product?.itemid
  );

  // if (!product) {
  //   return notFound(); // Return 404 if product is not found
  // }

  return (
    <>
      <ProductDetail product={product} />
      <AnotherProduct products={productsWithoutCurrentProduct} />
    </>
  );
}
