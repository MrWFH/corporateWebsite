import { CheckCircle2, AlertTriangle } from "lucide-react";
import type { Solution } from "@/data/solutions";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function SolutionCard({ solution }: { solution: Solution }) {
  return (
    <AnimateOnScroll>
      <div className="space-y-8">
        <div className="rounded-2xl bg-white border border-gray-100 p-6 lg:p-8">
          <h3 className="text-2xl font-bold text-gray-900">
            {solution.title}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-gray-500">
            {solution.description}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white border border-gray-100 p-6">
            <h4 className="flex items-center gap-2 text-lg font-bold text-gray-900">
              <AlertTriangle size={20} className="text-amber-500" />
              行业痛点
            </h4>
            <div className="mt-4 space-y-4">
              {solution.painPoints.map((point) => (
                <div key={point.title}>
                  <h5 className="text-sm font-semibold text-gray-800">
                    {point.title}
                  </h5>
                  <p className="mt-1 text-sm text-gray-500">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white border border-gray-100 p-6">
            <h4 className="flex items-center gap-2 text-lg font-bold text-gray-900">
              <CheckCircle2 size={20} className="text-emerald-500" />
              客户价值
            </h4>
            <div className="mt-4 space-y-3">
              {solution.values.map((value) => (
                <div
                  key={value}
                  className="flex items-center gap-3 rounded-xl bg-emerald-50 px-4 py-3"
                >
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-sm font-medium text-emerald-800">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  );
}
