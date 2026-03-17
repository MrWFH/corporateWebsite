"use client";

import { PRODUCTS } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function ProductList() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {PRODUCTS.map((product, index) => (
        <AnimateOnScroll key={product.id} delay={index * 0.1}>
          <ProductCard product={product} />
        </AnimateOnScroll>
      ))}
    </div>
  );
}
