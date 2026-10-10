

import ProductCategory from "./ProductCategory";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

interface Category {
  id: string | number;
  slug: string;
  nameBn: string;
  icon: string;
}

interface Product {
  id: number;
  slug: string;
  nameBn: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  change: {
    dir: "up" | "down" | "same";
    pct: number;
  };
}

const Page = async ({ params }: PageProps) => {
  const { id } = await params;

  const categoryRes = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories"
  );

  if (!categoryRes.ok) {
    throw new Error("Category load failed");
  }

  const categories: Category[] = await categoryRes.json();

  const category = categories.find(
    (c) => String(c.id) === id
  );

  if (!category) {
    return <div className="p-5">Category পাওয়া যায়নি!</div>;
  }

  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${category.slug}`
  );

  if (!res.ok) {
    throw new Error("Products load failed");
  }

  const products: Product[] = await res.json();

  return (
    <ProductCategory
      category={category}
      products={products}
    />
  );
};

export default Page;