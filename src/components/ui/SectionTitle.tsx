import { AnimateOnScroll } from "./AnimateOnScroll";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionTitle({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionTitleProps) {
  return (
    <AnimateOnScroll className={`mb-12 lg:mb-16 ${centered ? "text-center" : ""}`}>
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-lg ${centered ? "mx-auto" : ""} ${
            light ? "text-white/80" : "text-gray-500"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-6 h-1 w-20 rounded-full gradient-bg ${
          centered ? "mx-auto" : ""
        }`}
      />
    </AnimateOnScroll>
  );
}
