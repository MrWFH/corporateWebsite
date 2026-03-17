"use client";

import { useState } from "react";
import { Landmark, ShoppingBag, Factory, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { SOLUTION_TABS, SOLUTIONS } from "@/data/solutions";
import { SolutionCard } from "./SolutionCard";

const iconMap: Record<string, React.ComponentType<{ size?: number | string }>> = {
  Landmark,
  ShoppingBag,
  Factory,
  Building2,
};

export function IndustryTabs() {
  const [activeTab, setActiveTab] = useState<string>(SOLUTION_TABS[0].id);
  const activeSolution = SOLUTIONS.find((s) => s.id === activeTab);

  return (
    <div>
      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {SOLUTION_TABS.map((tab) => {
          const Icon = iconMap[tab.icon];
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? "text-white shadow-lg"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-primary-200 hover:text-primary-600"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 rounded-xl gradient-bg"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative flex items-center gap-2">
                {Icon && <Icon size={18} />}
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>

      {activeSolution && (
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <SolutionCard solution={activeSolution} />
        </motion.div>
      )}
    </div>
  );
}
