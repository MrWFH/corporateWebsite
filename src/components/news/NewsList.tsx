"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NEWS_LIST, NEWS_CATEGORIES, type NewsCategory } from "@/data/news";
import { NewsCard } from "./NewsCard";

export function NewsList() {
  const [activeCategory, setActiveCategory] = useState<NewsCategory | "all">(
    "all"
  );

  const featuredItem = NEWS_LIST.find((n) => n.featured);
  const filtered =
    activeCategory === "all"
      ? NEWS_LIST.filter((n) => !n.featured)
      : NEWS_LIST.filter(
          (n) => n.category === activeCategory && !n.featured
        );

  return (
    <div>
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setActiveCategory("all")}
          className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
            activeCategory === "all"
              ? "gradient-bg text-white shadow-md"
              : "bg-white text-gray-600 border border-gray-200 hover:border-primary-200 hover:text-primary-600"
          }`}
        >
          全部
        </button>
        {NEWS_CATEGORIES.map((cat) => (
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
        ))}
      </div>

      {featuredItem && activeCategory === "all" && (
        <div className="mb-8">
          <NewsCard item={featuredItem} featured />
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-gray-400">暂无相关内容</p>
      )}
    </div>
  );
}
