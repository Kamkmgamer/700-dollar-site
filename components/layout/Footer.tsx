'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: 'FB' },
    { name: 'Instagram', href: '#', icon: 'IG' },
    { name: 'Twitter', href: '#', icon: 'TW' },
  ];

  return (
    <footer className="bg-[#0f0f0f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-2xl mb-4 text-white">Bella Italia</h3>
            <p className="text-gray-300 leading-relaxed">
              Authentic Italian cuisine since 2010. Experience the taste of Italy in every bite.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1, backgroundColor: 'var(--primary-700)' }}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors"
                  aria-label={social.name}
                >
                  <span className="text-sm">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-heading text-lg mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/menu', label: 'Menu' },
                { href: '/about', label: 'About Us' },
                { href: '/events', label: 'Events' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-heading text-lg mb-4 text-white">Hours</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Monday - Thursday</li>
              <li className="text-white font-medium">11:00 AM - 9:00 PM</li>
              <li className="mt-2">Friday - Saturday</li>
              <li className="text-white font-medium">11:00 AM - 10:00 PM</li>
              <li className="mt-2">Sunday</li>
              <li className="text-white font-medium">12:00 PM - 8:00 PM</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-heading text-lg mb-4 text-white">Newsletter</h4>
            <p className="text-gray-300 mb-4 text-sm">
              Subscribe for special offers and event updates.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-4 py-2 bg-accent text-gray-900 rounded-lg font-semibold"
              >
                Join
              </motion.button>
            </form>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 py-6 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Bella Italia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
