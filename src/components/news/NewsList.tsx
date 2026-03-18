"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NEWS_LIST, NEWS_CATEGORIES, type NewsCategory } from "@/data/news";
import { NewsCard } from "./NewsCard";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function NewsList() {
  const [activeCategory, setActiveCategory] = useState<NewsCategory | "all">(
    "all"
  );

  const featuredItem = NEWS_LIST.find((n) => n.featured);

  const showFeatured =
    activeCategory === "all" ||
    (featuredItem && featuredItem.category === activeCategory);

  const filtered = NEWS_LIST.filter((n) => {
    if (n.featured) return false;
    if (activeCategory === "all") return true;
    return n.category === activeCategory;
  });

  return (
    <div>
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {[{ id: "all" as const, label: "全部" }, ...NEWS_CATEGORIES].map(
          (cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "gradient-bg text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-primary-200 hover:text-primary-600"
              }`}
            >
              {cat.label}
            </button>
          )
        )}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {featuredItem && showFeatured && (
            <AnimateOnScroll className="mb-8">
              <NewsCard item={featuredItem} featured />
            </AnimateOnScroll>
          )}

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item, index) => (
              <AnimateOnScroll key={item.id} delay={index * 0.05}>
                <NewsCard item={item} />
              </AnimateOnScroll>
            ))}
          </div>

          {filtered.length === 0 && !showFeatured && (
            <p className="py-12 text-center text-gray-400">暂无相关内容</p>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
