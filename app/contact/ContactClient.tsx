'use client';

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { Notification } from '@/components/ui/Modal';

export function ContactClient() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: '',
  });
  const [reservationForm, setReservationForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    requests: '',
  });
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error'; isVisible: boolean }>({
    message: '',
    type: 'success',
    isVisible: false,
  });

  const timeSlots = [
    { value: '', label: 'Select time' },
    { value: '17:00', label: '5:00 PM' },
    { value: '17:30', label: '5:30 PM' },
    { value: '18:00', label: '6:00 PM' },
    { value: '18:30', label: '6:30 PM' },
    { value: '19:00', label: '7:00 PM' },
    { value: '19:30', label: '7:30 PM' },
    { value: '20:00', label: '8:00 PM' },
    { value: '20:30', label: '8:30 PM' },
    { value: '21:00', label: '9:00 PM' },
  ];

  const handleContactSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactForm),
      });
      setNotification({ message: 'Message sent successfully!', type: 'success', isVisible: true });
      setContactForm({ name: '', email: '', phone: '', subject: 'general', message: '' });
    } catch {
      setNotification({ message: 'Failed to send message.', type: 'error', isVisible: true });
    }
  };

  const handleReservationSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await fetch('/api/reservation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reservationForm),
      });
      setNotification({ message: 'Reservation request submitted!', type: 'success', isVisible: true });
      setReservationForm({ name: '', email: '', phone: '', date: '', time: '', guests: '2', occasion: '', requests: '' });
    } catch {
      setNotification({ message: 'Failed to submit reservation.', type: 'error', isVisible: true });
    }
  };

  return (
    <>
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <div>
                <h2 className="font-heading text-2xl text-secondary mb-6">Send Us a Message</h2>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <select
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="reservation">Reservation Question</option>
                      <option value="catering">Catering Request</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <Button type="submit">Send Message</Button>
                </form>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div>
                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                  <h3 className="font-heading text-xl text-secondary mb-4">Contact Information</h3>
                  <div className="space-y-4 text-gray-600">
                    <div>
                      <p className="font-semibold text-secondary">Address</p>
                      <p>123 Main Street</p>
                      <p>Anytown, USA 12345</p>
                    </div>
                    <div>
                      <p className="font-semibold text-secondary">Phone</p>
                      <a href="tel:+15551234567" className="hover:text-primary transition-colors">
                        (555) 123-4567
                      </a>
                    </div>
                    <div>
                      <p className="font-semibold text-secondary">Email</p>
                      <a href="mailto:info@bellaitalia.example.com" className="hover:text-primary transition-colors">
                        info@bellaitalia.example.com
                      </a>
                    </div>
                    <div>
                      <p className="font-semibold text-secondary">Hours</p>
                      <p>Mon-Thu: 11:00 AM - 9:00 PM</p>
                      <p>Fri-Sat: 11:00 AM - 10:00 PM</p>
                      <p>Sun: 12:00 PM - 8:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Map Embed</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section id="reservation" className="py-16 md:py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-8">
              <p className="text-accent text-sm uppercase tracking-[0.2em] mb-2">Book a Table</p>
              <h2 className="font-heading text-3xl text-secondary mb-4">Make a Reservation</h2>
              <div className="w-16 h-0.5 bg-primary mx-auto mb-4" />
              <p className="text-gray-600">
                Request a table and we&apos;ll confirm your reservation within 24 hours.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <form onSubmit={handleReservationSubmit} className="bg-cream p-6 md:p-8 rounded-lg space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                  <input
                    type="text"
                    required
                    value={reservationForm.name}
                    onChange={(e) => setReservationForm({ ...reservationForm, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                  <input
                    type="tel"
                    required
                    value={reservationForm.phone}
                    onChange={(e) => setReservationForm({ ...reservationForm, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  required
                  value={reservationForm.email}
                  onChange={(e) => setReservationForm({ ...reservationForm, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date *</label>
                  <input
                    type="date"
                    required
                    value={reservationForm.date}
                    onChange={(e) => setReservationForm({ ...reservationForm, date: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Time *</label>
                  <select
                    required
                    value={reservationForm.time}
                    onChange={(e) => setReservationForm({ ...reservationForm, time: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot.value} value={slot.value}>{slot.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Guests *</label>
                  <select
                    required
                    value={reservationForm.guests}
                    onChange={(e) => setReservationForm({ ...reservationForm, guests: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    {Array.from({ length: 10 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Occasion (Optional)</label>
                <select
                  value={reservationForm.occasion}
                  onChange={(e) => setReservationForm({ ...reservationForm, occasion: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select occasion</option>
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="date">Date Night</option>
                  <option value="business">Business Dinner</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Special Requests (Optional)</label>
                <textarea
                  rows={3}
                  value={reservationForm.requests}
                  onChange={(e) => setReservationForm({ ...reservationForm, requests: e.target.value })}
                  placeholder="Dietary restrictions, seating preferences, etc."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <Button type="submit" className="w-full">Request Reservation</Button>

              <p className="text-gray-500 text-xs text-center">
              </p>
            </form>
          </ScrollReveal>
        </div>
      </section>

      <Notification
        message={notification.message}
        type={notification.type}
        isVisible={notification.isVisible}
        onClose={() => setNotification({ ...notification, isVisible: false })}
      />
    </>
  );
}
