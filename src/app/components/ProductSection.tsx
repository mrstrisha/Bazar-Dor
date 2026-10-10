


import Link from "next/link";

interface Product {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: {
    dir: "up" | "down" | "same";
    pct: number;
  };
}

const ProductSections = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products"
  );

  if (!res.ok) {
    throw new Error("পণ্যের তথ্য লোড করা যায়নি");
  }

  const products: Product[] = await res.json();

  console.log("First product:", products[0]);
  console.log("First product ID:", products[0]?.id);

  const increasedProducts = products.filter(
    (p) => p.change.dir === "up"
  );

  const decreasedProducts = products.filter(
    (p) => p.change.dir === "down"
  );

  const formatPrice = (price: number) =>
    price.toLocaleString("bn-BD");

  const ProductCard = ({ p }: { p: Product }) => (
    <Link href={`/productDetail/${p.id}`}>
      <div className="rounded-lg border border-gray-100 bg-white p-3 shadow-sm transition hover:shadow-md">
        <p className="text-[11px] text-gray-500">
          {p.categoryIcon} {p.categoryNameBn}
        </p>

        <h3 className="mt-1 text-sm font-bold text-gray-800">
          {p.nameBn}
        </h3>

        <div className="mt-3 flex items-center justify-between gap-2">
          <p className="text-xs font-semibold text-gray-700">
            {formatPrice(p.today)} টাকা /{" "}
            {p.unit === "kg"
              ? "কেজি"
              : p.unit === "liter"
                ? "লিটার"
                : p.unit === "piece"
                  ? "টি"
                  : p.unit}
          </p>

          <span
            className={`shrink-0 rounded px-1.5 py-0.5 text-[10px] font-bold ${
              p.change.dir === "up"
                ? "bg-red-50 text-red-500"
                : p.change.dir === "down"
                  ? "bg-green-50 text-green-600"
                  : "bg-gray-100 text-gray-500"
            }`}
          >
            {p.change.dir === "up"
              ? "▲"
              : p.change.dir === "down"
                ? "▼"
                : "—"}{" "}
            {formatPrice(p.change.pct)}%
          </span>
        </div>
      </div>
    </Link>
  );

  return (
    <div className="mx-auto max-w-6xl space-y-7 px-4 py-5">
      {/* আজ দাম বেড়েছে */}
      <section>
        <h2 className="mb-3 border-l-4 border-red-500 pl-2 text-base font-bold text-gray-800">
          🔺 আজ দাম বেড়েছে
        </h2>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {increasedProducts.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </section>

      {/* আজ দাম কমেছে */}
      <section>
        <h2 className="mb-3 border-l-4 border-green-500 pl-2 text-base font-bold text-gray-800">
          🟢 আজ দাম কমেছে
        </h2>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {decreasedProducts.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </section>

      {/* সব পণ্য */}
      <section>
        <h2 className="mb-3 border-l-4 border-gray-500 pl-2 text-base font-bold text-gray-800">
          সব পণ্য
          <span className="ml-2 text-xs font-normal text-gray-500">
            ({formatPrice(products.length)}টি)
          </span>
        </h2>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductSections;