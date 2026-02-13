import { Navigation } from '@/components/layout/Navigation';
import { Hero } from '@/components/home/Hero';
import { FeaturedDishes } from '@/components/home/FeaturedDishes';
import { About } from '@/components/home/About';
import { Testimonials } from '@/components/home/Testimonials';
import { Events } from '@/components/home/Events';
import { Newsletter } from '@/components/home/Newsletter';
import { ReservationCTA } from '@/components/home/ReservationCTA';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <Hero />
        <FeaturedDishes />
        <About />
        <Testimonials />
        <Events />
        <Newsletter />
        <ReservationCTA />
      </main>
      <Footer />
    </>
  );
}
