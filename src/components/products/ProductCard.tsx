import {
  Cloud,
  Database,
  Brain,
  Cpu,
  Shield,
  Blocks,
} from "lucide-react";
import type { Product } from "@/data/products";
import { Button } from "@/components/ui/Button";

const iconMap: Record<string, React.ComponentType<{ size?: number | string }>> = {
  Cloud,
  Database,
  Brain,
  Cpu,
  Shield,
  Blocks,
};

export function ProductCard({ product }: { product: Product }) {
  const Icon = iconMap[product.icon];

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div
        className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${product.gradient} scale-x-0 transition-transform duration-300 group-hover:scale-x-100`}
      />

      <div
        className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${product.gradient} text-white shadow-lg`}
      >
        {Icon && <Icon size={28} />}
      </div>

      <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-500">
        {product.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {product.features.map((tag) => (
          <span
            key={tag}
            className="inline-block rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-200"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6">
        <Button href="/contact" variant="ghost" size="sm">
          了解详情 →
        </Button>
      </div>
    </div>
  );
}
