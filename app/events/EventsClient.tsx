'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal, StaggerChildren, fadeInUp } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  endTime: string;
  price: number;
  capacity: number;
  image: string;
}

interface EventsClientProps {
  events: Event[];
}

export function EventsClient({ events }: EventsClientProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const formatEventDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return {
      day: date.getDate(),
      month: date.toLocaleString('default', { month: 'long' }),
      year: date.getFullYear(),
      time: date.toLocaleTimeString('default', { hour: 'numeric', minute: '2-digit' }),
    };
  };

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end mb-8 gap-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-primary text-white' : 'bg-white'}`}
            aria-label="Grid view"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-primary text-white' : 'bg-white'}`}
            aria-label="List view"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
          </button>
        </div>

        <AnimatePresence mode="wait">
          {viewMode === 'grid' ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => {
                  const { day, month, year, time } = formatEventDate(event.date);
                  return (
                    <motion.div
                      key={event.id}
                      variants={fadeInUp}
                      whileHover={{ y: -8 }}
                      className="bg-white rounded-lg overflow-hidden shadow-md group"
                    >
                      <div className="h-48 relative overflow-hidden">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute top-4 left-4 bg-white rounded-lg p-3 text-center shadow-md">
                          <span className="block text-2xl font-bold text-primary">{day}</span>
                          <span className="block text-xs text-gray-500 uppercase">{month}</span>
                          <span className="block text-xs text-gray-400">{year}</span>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="font-heading text-xl text-secondary mb-2">{event.title}</h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-sm text-gray-600">{time}</span>
                          <span className="text-xs text-gray-500">{event.capacity} seats available</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-primary font-semibold text-xl">${event.price}</span>
                          <Button size="sm">Reserve Spot</Button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </StaggerChildren>
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              {events.map((event, index) => {
                const { day, month, year, time } = formatEventDate(event.date);
                return (
                  <ScrollReveal key={event.id} delay={index * 0.1}>
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      className="bg-white p-6 rounded-lg shadow-sm flex flex-col md:flex-row gap-6 items-start md:items-center"
                    >
                      <div className="w-20 h-20 rounded-lg relative overflow-hidden flex-shrink-0">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading text-xl text-secondary mb-1">{event.title}</h3>
                        <p className="text-gray-600 text-sm mb-2">{event.description}</p>
                        <div className="flex gap-4 text-sm text-gray-500">
                          <span>{time}</span>
                          <span>{event.capacity} seats</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-primary font-semibold text-xl">${event.price}</span>
                        <Button size="sm">Reserve</Button>
                      </div>
                    </motion.div>
                  </ScrollReveal>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
