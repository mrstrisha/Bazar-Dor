"use client";

import { useState } from "react";
import Link from "next/link";

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

interface Props {
  category: Category;
  products: Product[];
}

const ProductCategory = ({ category, products }: Props) => {
  const [sort, setSort] = useState("default");

  const sortedProducts = [...products];

  if (sort === "low") {
    sortedProducts.sort((a, b) => a.today - b.today);
  }

  if (sort === "high") {
    sortedProducts.sort((a, b) => b.today - a.today);
  }

  return (
    <main className="min-h-screen bg-[#f0f5f0] px-4 py-5">
      <div className="mx-auto max-w-6xl space-y-3">

        {/* Category Header */}
        <section className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white/80 p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-2xl">
            {category.icon}
          </div>

          <div>
            <h1 className="font-bold text-gray-800">
              {category.nameBn}
            </h1>

            <p className="text-xs text-gray-500">
              এই ক্যাটাগরির সব পণ্যের দাম ও পরিবর্তন
            </p>
          </div>
        </section>

        {/* Sorting */}
        <section className="flex justify-end rounded-xl border border-gray-200 bg-white/80 p-3">
          <div className="flex items-center gap-2">
            <label
              htmlFor="sort"
              className="text-xs text-gray-500"
            >
              সাজান
            </label>

            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-lg border border-gray-200 bg-white px-2 py-1.5 text-xs outline-none"
            >
              <option value="default">ডিফল্ট</option>
              <option value="low">কম দাম আগে</option>
              <option value="high">বেশি দাম আগে</option>
            </select>
          </div>
        </section>

        <p className="text-xs text-gray-500">
          মোট {sortedProducts.length}টি পণ্য পাওয়া গেছে
        </p>

        {/* Product Cards */}
        <section className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {sortedProducts.map((p) => (
            <Link
              key={p.id}
              href={`/productDetail/${p.id}`}
              className="rounded-xl border border-gray-200 bg-white/80 p-3 transition hover:shadow-md"
            >
              <div className="flex items-start gap-2">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 text-lg">
                  {p.image || p.categoryIcon}
                </div>

                <div className="min-w-0 flex-1">
                  <h2 className="text-sm font-bold text-gray-800">
                    {p.nameBn}
                  </h2>

                  <p className="text-xs text-gray-500">
                    {p.categoryNameBn}
                  </p>
                </div>
              </div>

              <div className="mt-3 flex items-end justify-between gap-2">
                <div>
                  <p className="text-xs text-gray-500">
                    বাজারদর
                  </p>

                  <p className="text-sm font-bold text-gray-800">
                    {p.today.toLocaleString("bn-BD")} টাকা
                    <span className="ml-1 text-xs font-normal">
                      / {p.unit === "kg" ? "কেজি" : p.unit}
                    </span>
                  </p>
                </div>

                <span
                  className={`rounded-full px-2 py-1 text-[10px] font-bold ${
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
                  {p.change.pct.toLocaleString("bn-BD")}%
                </span>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
};

export default ProductCategory;