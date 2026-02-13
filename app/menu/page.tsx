import { Metadata } from 'next';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { MenuClient } from './MenuClient';
import { menuCategories } from '@/data';

export const metadata: Metadata = {
  title: 'Menu',
  description: 'Explore our authentic Italian menu featuring fresh handmade pasta, wood-fired pizza, and classic Italian dishes.',
};

export default function MenuPage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <section className="bg-secondary text-white py-20 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-accent text-sm uppercase tracking-[0.2em] mb-2">Culinary Excellence</p>
            <h1 className="font-heading text-4xl md:text-5xl mb-4">Our Menu</h1>
            <div className="w-16 h-0.5 bg-accent mx-auto" />
          </div>
        </section>
        <MenuClient categories={menuCategories} />
      </main>
      <Footer />
    </>
  );
}
