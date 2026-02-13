'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ScrollReveal, StaggerChildren, fadeInUp } from '@/components/ui/ScrollReveal';
import { menuCategories } from '@/data';

export function FeaturedDishes() {
  const featuredItems = menuCategories
    .flatMap((cat) => cat.items.filter((item) => item.featured))
    .slice(0, 4);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-accent text-sm uppercase tracking-[0.2em] mb-2">Our Specialties</p>
            <h2 className="font-heading text-3xl md:text-4xl text-secondary mb-4">Featured Dishes</h2>
            <div className="w-16 h-0.5 bg-primary mx-auto" />
          </div>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="bg-cream rounded-lg overflow-hidden shadow-md group cursor-pointer"
            >
              <div className="h-48 relative overflow-hidden">
                <Image
                  src={item.image || ''}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <motion.div
                  className="absolute inset-0 bg-black/20"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                {item.featured && (
                  <span className="absolute top-3 right-3 bg-accent text-gray-900 text-xs font-semibold px-2 py-1 rounded">
                    Featured
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-heading text-lg text-secondary mb-1">{item.name}</h3>
                <p className="text-gray-700 text-sm mb-2 line-clamp-2">{item.description}</p>
                <div className="flex justify-between items-center">
                  <p className="text-primary font-semibold">${item.price}</p>
                  {item.tags.length > 0 && (
                    <span className="text-xs text-gray-600">{item.tags[0]}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>

        <ScrollReveal delay={0.4}>
          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="inline-flex items-center border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              View Full Menu
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
