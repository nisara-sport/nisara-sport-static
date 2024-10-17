import { products } from "@/data/product";
import { category as categories } from "@/data/category";
import ProductDetail from "@/components/product-detail/ProductDetail";
import { notFound } from "next/navigation"; // Import notFound for 404 handling
import CategoryItemBlock from "@/components/category/CategoryItemBlock";
import { Separator } from "@/components/ui/separator";

export async function generateMetadata({ params }) {
  const { category } = params;
  const currentCategory = categories.find((cat) => cat.category === category);

  if (!currentCategory) {
    return {
      title: "Category not found - My Store",
      description: "This category could not be found.",
    };
  }

  return {
    title: `${currentCategory.name} | NISARA | Buôn bán sỉ lẻ đồ tập, đồ thể thao`,
    description: `Browse products in the ${category} category!`,
  };
}

export async function generateStaticParams() {
  return categories.map((cat) => ({
    category: cat.category,
  }));
}

export default function CategoryPage({ params }) {
  const { category } = params;

  // Find the category based on the URL param
  const currentCategory = categories.find((cat) => cat.category === category);

  if (!currentCategory) {
    return notFound();
  }

  // Find products whose itemid matches any in the category's items array
  const categoryProducts = products.filter((product) =>
    currentCategory.items.includes(product.itemid.toString())
  );

  if (categoryProducts.length === 0) {
    return (
      <div className="container py-10">
        <h1 className="text-xl lg:text-2xl font-bold text-center mb-5">{`${currentCategory.name}`}</h1>
        <Separator className="w-5 block mx-auto mb-10 bg-black" />
        <p className="text-center text-base">
          Danh mục này không có sản phẩm. Vui lòng xem danh mục khác.
        </p>
      </div>
    );
  }

  return (
    <div className="container py-10">
      <h1 className="text-xl lg:text-2xl font-bold text-center mb-5">{`${currentCategory.name}`}</h1>
      <Separator className="w-5 block mx-auto mb-10 bg-black" />
      <div className="flex justify-end">
        Đang hiện: {categoryProducts.length} sản phẩm.
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {categoryProducts.map((item) => {
          return <CategoryItemBlock key={item.itemid} product={item} />;
        })}
      </div>
    </div>
  );
}
