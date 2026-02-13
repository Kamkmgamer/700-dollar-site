import { Metadata } from 'next';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { AboutClient } from './AboutClient';
import { team } from '@/data';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Bella Italia\'s story, our passion for authentic Italian cuisine, and meet our talented team.',
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <section className="bg-secondary text-white py-20 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-accent text-sm uppercase tracking-[0.2em] mb-2">Since 2010</p>
            <h1 className="font-heading text-4xl md:text-5xl mb-4">Our Story</h1>
            <div className="w-16 h-0.5 bg-accent mx-auto" />
          </div>
        </section>
        <AboutClient team={team} />
      </main>
      <Footer />
    </>
  );
}
