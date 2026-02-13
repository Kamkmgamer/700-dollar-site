import { Metadata } from 'next';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { EventsClient } from './EventsClient';
import { events } from '@/data';

export const metadata: Metadata = {
  title: 'Events',
  description: 'Discover upcoming events at Bella Italia - wine tastings, cooking classes, and special dining experiences.',
};

export default function EventsPage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <section className="bg-secondary text-white py-20 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-accent text-sm uppercase tracking-[0.2em] mb-2">Special Experiences</p>
            <h1 className="font-heading text-4xl md:text-5xl mb-4">Events & Classes</h1>
            <div className="w-16 h-0.5 bg-accent mx-auto" />
          </div>
        </section>
        <EventsClient events={events} />
      </main>
      <Footer />
    </>
  );
}
