import { Metadata } from 'next';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { ContactClient } from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Bella Italia for reservations, inquiries, or feedback. Find our location, hours, and contact information.',
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <section className="bg-secondary text-white py-20 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-accent text-sm uppercase tracking-[0.2em] mb-2">Get in Touch</p>
            <h1 className="font-heading text-4xl md:text-5xl mb-4">Contact Us</h1>
            <div className="w-16 h-0.5 bg-accent mx-auto" />
          </div>
        </section>
        <ContactClient />
      </main>
      <Footer />
    </>
  );
}
