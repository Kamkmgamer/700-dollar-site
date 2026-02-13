'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { events } from '@/data';

export function Events() {
  const upcomingEvents = events.slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-accent text-sm uppercase tracking-[0.2em] mb-2">Upcoming Events</p>
            <h2 className="font-heading text-3xl md:text-4xl text-secondary mb-4">Join Us for Special Experiences</h2>
            <div className="w-16 h-0.5 bg-primary mx-auto" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingEvents.map((event, index) => {
            const eventDate = new Date(event.date);
            const day = eventDate.getDate();
            const month = eventDate.toLocaleString('default', { month: 'short' });

            return (
              <ScrollReveal key={event.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-lg overflow-hidden shadow-md group"
                >
                  <div className={`h-48 bg-gradient-to-br ${event.color} relative`}>
                    <div className="absolute top-4 left-4 bg-white rounded-lg p-2 text-center shadow-md">
                      <span className="block text-2xl font-bold text-primary">{day}</span>
                      <span className="block text-xs text-gray-500 uppercase">{month}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading text-lg text-secondary mb-2">{event.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{event.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-primary font-semibold">${event.price}</span>
                      <span className="text-xs text-gray-500">
                        {event.capacity} seats
                      </span>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="text-center mt-12">
            <Link
              href="/events"
              className="inline-flex items-center border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              View All Events
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
