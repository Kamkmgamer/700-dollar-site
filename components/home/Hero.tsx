'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
        alt="Bella Italia restaurant interior"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 30% 20%, rgba(139, 38, 53, 0.6) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(30, 58, 95, 0.5) 0%, transparent 50%)',
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-accent text-sm md:text-base uppercase tracking-[0.3em] mb-4 font-semibold"
        >
          Authentic Italian Cuisine
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-lg"
        >
          Experience the Taste of Italy
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Fresh handmade pasta, wood-fired pizzas, and traditional recipes passed down through generations.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button href="/menu" size="lg">Explore Our Menu</Button>
          <Button href="/contact#reservation" variant="outline-light" size="lg">Make Reservation</Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
