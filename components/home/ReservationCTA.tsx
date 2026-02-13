import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function ReservationCTA() {
  return (
    <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <ScrollReveal>
          <p className="text-accent text-sm uppercase tracking-[0.2em] mb-2">Reserve Your Table</p>
          <h2 className="font-heading text-3xl md:text-5xl text-white mb-6">
            Join Us for an Unforgettable Evening
          </h2>
          <p className="text-white/85 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether it&apos;s a romantic dinner, family celebration, or business gathering, 
            we&apos;re here to make your experience special.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact#reservation" variant="secondary" size="lg">
              Make Reservation
            </Button>
            <Button href="tel:+15551234567" variant="outline-light" size="lg">
              Call (555) 123-4567
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
