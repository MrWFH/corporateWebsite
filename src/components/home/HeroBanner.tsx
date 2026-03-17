"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function HeroBanner() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-400/10" />

      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary-400/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-accent-400/10 blur-3xl" />
      <div className="absolute top-1/3 right-1/4 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />

      <motion.div
        className="absolute top-32 right-20 hidden lg:block"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-primary-400 to-accent-400 opacity-20 rotate-12" />
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-20 hidden lg:block"
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 opacity-20" />
      </motion.div>
      <motion.div
        className="absolute top-1/2 left-1/3 hidden lg:block"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="h-12 w-12 rounded-lg border-2 border-primary-200 opacity-30" />
      </motion.div>

      <div className="container-wide relative z-10 px-4 pt-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-2 text-sm font-medium text-primary-600 ring-1 ring-primary-100"
          >
            <Sparkles size={16} />
            <span>AI 驱动的企业数字化转型专家</span>
          </motion.div>

          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-7xl">
            以技术驱动创新
            <br />
            <span className="gradient-text">用智慧连接未来</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-500 sm:text-xl">
            专注于人工智能、云计算和大数据技术，为企业提供全方位的数字化转型解决方案，助力业务持续增长
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Button href="/products" size="lg">
              探索产品
              <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              预约演示
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
