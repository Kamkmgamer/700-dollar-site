'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal, StaggerChildren, fadeInUp } from '@/components/ui/ScrollReveal';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  tags: string[];
  featured?: boolean;
}

interface MenuCategory {
  id: string;
  name: string;
  description?: string;
  items: MenuItem[];
}

interface MenuClientProps {
  categories: MenuCategory[];
}

export function MenuClient({ categories }: MenuClientProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = ['vegetarian', 'vegan', 'gluten-free', 'spicy'];

  const filteredItems = useMemo(() => {
    let items = activeCategory === 'all'
      ? categories.flatMap((cat) => cat.items)
      : categories.find((cat) => cat.id === activeCategory)?.items || [];

    if (searchQuery) {
      items = items.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedTags.length > 0) {
      items = items.filter((item) =>
        selectedTags.every((tag) => item.tags.includes(tag))
      );
    }

    return items;
  }, [categories, activeCategory, searchQuery, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex gap-8">
          <aside className="lg:w-64 mb-8 lg:mb-0">
            <div className="lg:sticky lg:top-24 space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Search menu..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <h3 className="font-semibold text-secondary mb-3">Categories</h3>
                <div className="space-y-1">
                  <button
                    onClick={() => setActiveCategory('all')}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      activeCategory === 'all' ? 'bg-primary text-white' : 'hover:bg-gray-100'
                    }`}
                  >
                    All Items
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        activeCategory === cat.id ? 'bg-primary text-white' : 'hover:bg-gray-100'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-secondary mb-3">Dietary</h3>
                <div className="flex flex-wrap gap-2">
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`px-3 py-1 rounded-full text-sm transition-colors ${
                        selectedTags.includes(tag)
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeCategory}-${searchQuery}-${selectedTags.join(',')}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {filteredItems.length === 0 ? (
                  <p className="text-center text-gray-500 py-12">No items found matching your criteria.</p>
                ) : (
                  <StaggerChildren className="grid gap-4">
                    {filteredItems.map((item) => (
                      <motion.div
                        key={item.id}
                        variants={fadeInUp}
                        whileHover={{ scale: 1.01 }}
                        className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="flex justify-between items-start gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-heading text-lg text-secondary">{item.name}</h3>
                              {item.featured && (
                                <span className="bg-accent text-gray-900 text-xs px-2 py-0.5 rounded font-semibold">
                                  Featured
                                </span>
                              )}
                            </div>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                            {item.tags.length > 0 && (
                              <div className="flex gap-2 mt-2">
                                {item.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                          <span className="text-primary font-semibold text-lg whitespace-nowrap">
                            ${item.price}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </StaggerChildren>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
