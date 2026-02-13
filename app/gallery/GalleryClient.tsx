'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal, StaggerChildren, fadeInUp } from '@/components/ui/ScrollReveal';
import { Modal } from '@/components/ui/Modal';

interface GalleryImage {
  id: number;
  category: string;
  title: string;
  image: string;
}

interface GalleryClientProps {
  images: GalleryImage[];
}

export function GalleryClient({ images }: GalleryClientProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const categories = ['all', 'interior', 'food', 'events', 'team'];

  const filteredImages = activeCategory === 'all'
    ? images
    : images.filter((img) => img.category === activeCategory);

  return (
    <>
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <StaggerChildren className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredImages.map((image) => (
                  <motion.button
                    key={image.id}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedImage(image)}
                    className="aspect-square relative rounded-lg overflow-hidden shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <Image
                      src={image.image}
                      alt={image.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                      <span className="text-white font-medium text-sm">{image.title}</span>
                    </div>
                  </motion.button>
                ))}
              </StaggerChildren>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <Modal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)}>
        {selectedImage && (
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            <Image
              src={selectedImage.image}
              alt={selectedImage.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 800px"
            />
          </div>
        )}
      </Modal>
    </>
  );
}
