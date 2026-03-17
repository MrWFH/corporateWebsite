import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: string;
}

export function Card({
  children,
  className = "",
  hover = true,
  gradient,
}: CardProps) {
  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl bg-white p-6
        border border-gray-100
        ${hover ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-200/50" : ""}
        ${className}
      `}
    >
      {gradient && (
        <div
          className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${gradient}`}
        />
      )}
      {children}
    </div>
  );
}
