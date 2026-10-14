import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { CATEGORIES, FAQS } from '../data/mockData';
import {
  Filter,
  ArrowUpDown,
  Star,
  Heart,
  ShoppingBag,
  Check,
  ChevronDown,
  Sparkles,
  Info
} from 'lucide-react';

export const ShopPage = () => {
  const {
    products,
    categoryFilter,
    setCategoryFilter,
    navigate,
    addToCart,
    toggleWishlist,
    isInWishlist
  } = useShop();

  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  // Active filter values
  const { material, type, occasion, tag, maxPrice, inStockOnly, sortBy } = categoryFilter;

  // Filter products
  let filtered = products.filter(item => {
    if (material !== 'All' && item.material !== material) return false;
    if (type !== 'All' && item.type !== type) return false;
    if (occasion !== 'All' && item.occasion !== occasion) return false;
    if (tag !== 'All' && !item.tags.includes(tag)) return false;
    if (item.price > maxPrice) return false;
    if (inStockOnly && !item.inStock) return false;
    return true;
  });

  // Sorting
  if (sortBy === 'Price: Low to High') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'Price: High to Low') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'Highest Rated') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  // Active Story Block Data based on selected material
  const activeMaterialObj = CATEGORIES.materials.find(m => m.name === material) || CATEGORIES.materials[0];

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
      {/* 1. Collection Banner */}
      <section style={{
        position: 'relative',
        backgroundColor: 'var(--color-surface-low)',
        borderBottom: '1px solid var(--color-border)',
        padding: '3rem 0'
      }}>
        <div className="container">
          <div style={{ maxWidth: '720px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <span className="badge-gold">
                {material === 'All' ? 'All Heirlooms' : `${material} Collection`}
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-secondary)' }}>
                Handcrafted in Kochi Atelier
              </span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginBottom: '0.75rem' }}>
              {material === 'All' ? 'Royal Kerala Jewellery Catalogue' : `${material} & Heritage Jewels`}
            </h1>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-on-surface-variant)', lineHeight: 1.6 }}>
              {material === 'All'
                ? 'Discover masterfully handcrafted uncut Kundan polki, freshwater pearls, lab-grown certified moissanite, and carved gemstones created for Kerala brides and festive celebrations.'
                : activeMaterialObj.story.slice(0, 180) + '...'}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Interactive Filter Toolbar */}
      <section className="container">
        <div style={{
          backgroundColor: 'var(--color-surface-white)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)',
          padding: '1rem 1.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          boxShadow: 'var(--shadow-subtle)'
        }}>
          {/* Left: Material Pills */}
          <div className="filter-toolbar-pills" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-secondary)', marginRight: '0.25rem' }}>
              Material:
            </span>
            {['All', 'Kundan', 'Pearl', 'Moissanite', 'Gemstone'].map(mat => (
              <button
                key={mat}
                onClick={() => setCategoryFilter(prev => ({ ...prev, material: mat }))}
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  padding: '0.35rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  border: material === mat ? '1px solid var(--color-obsidian)' : '1px solid var(--color-border)',
                  backgroundColor: material === mat ? 'var(--color-obsidian)' : 'var(--color-surface)',
                  color: material === mat ? 'var(--color-surface)' : 'var(--color-charcoal)',
                  transition: 'all 0.2s'
                }}
              >
                {mat}
              </button>
            ))}
          </div>

          {/* Right: Sort & Filter Drawers */}
          <div className="filter-toolbar-actions" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--color-secondary)' }}>
              Showing <strong>{filtered.length}</strong> items
            </span>

            {/* Sort Dropdown */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <ArrowUpDown size={14} style={{ color: 'var(--color-secondary)' }} />
              <select
                value={sortBy}
                onChange={(e) => setCategoryFilter(prev => ({ ...prev, sortBy: e.target.value }))}
                style={{
                  padding: '0.4rem 0.75rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border)',
                  backgroundColor: 'var(--color-surface)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'var(--color-charcoal)'
                }}
              >
                <option value="Bestselling">Bestselling</option>
                <option value="Price: Low to High">Price: Low to High</option>
                <option value="Price: High to Low">Price: High to Low</option>
                <option value="Highest Rated">Highest Rated</option>
              </select>
            </div>

            {/* Mobile / Advanced Filters Trigger */}
            <button
              onClick={() => setIsFilterDrawerOpen(!isFilterDrawerOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.4rem 0.85rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-border)',
                backgroundColor: isFilterDrawerOpen ? 'var(--color-primary-tint)' : 'var(--color-surface)',
                color: isFilterDrawerOpen ? 'var(--color-primary-dark)' : 'var(--color-charcoal)',
                fontSize: '0.8rem',
                fontWeight: 600
              }}
            >
              <Filter size={14} />
              <span>Filters</span>
            </button>
          </div>
        </div>

        {/* Collapsible Filter Tray */}
        {isFilterDrawerOpen && (
          <div style={{
            marginTop: '1rem',
            padding: '1.5rem',
            backgroundColor: 'var(--color-surface-low)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--color-border)',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem',
            animation: 'slideUp 0.3s ease'
          }} className="filter-drawer-grid">
            {/* By Type */}
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-primary-dark)', display: 'block', marginBottom: '0.5rem' }}>
                Jewellery Type
              </span>
              <select
                value={type}
                onChange={(e) => setCategoryFilter(prev => ({ ...prev, type: e.target.value }))}
                style={{ width: '100%', padding: '0.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-surface-white)' }}
              >
                <option value="All">All Types</option>
                {CATEGORIES.types.map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            {/* By Occasion */}
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-primary-dark)', display: 'block', marginBottom: '0.5rem' }}>
                Occasion
              </span>
              <select
                value={occasion}
                onChange={(e) => setCategoryFilter(prev => ({ ...prev, occasion: e.target.value }))}
                style={{ width: '100%', padding: '0.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-surface-white)' }}
              >
                <option value="All">All Occasions</option>
                {CATEGORIES.occasions.map(occ => (
                  <option key={occ.id} value={occ.id}>{occ.name}</option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-primary-dark)', display: 'block', marginBottom: '0.5rem' }}>
                Max Price: ₹{maxPrice.toLocaleString('en-IN')}
              </span>
              <input
                type="range"
                min="1500"
                max="10000"
                step="500"
                value={maxPrice}
                onChange={(e) => setCategoryFilter(prev => ({ ...prev, maxPrice: Number(e.target.value) }))}
                style={{ width: '100%', accentColor: 'var(--color-primary)' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--color-secondary)' }}>
                <span>₹1,500</span>
                <span>₹10,000+</span>
              </div>
            </div>

            {/* Ready to Ship & In Stock Toggles */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', justifyContent: 'center' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setCategoryFilter(prev => ({ ...prev, inStockOnly: e.target.checked }))}
                  style={{ accentColor: 'var(--color-primary)' }}
                />
                <span>In Stock Only</span>
              </label>

              <button
                onClick={() => setCategoryFilter({
                  material: 'All',
                  type: 'All',
                  occasion: 'All',
                  tag: 'All',
                  maxPrice: 10000,
                  inStockOnly: false,
                  sortBy: 'Bestselling'
                })}
                style={{ fontSize: '0.75rem', color: 'var(--color-crimson)', textDecoration: 'underline', textAlign: 'left', marginTop: '0.25rem' }}
              >
                Reset All Filters
              </button>
            </div>
          </div>
        )}
      </section>

      {/* 3. Product Grid */}
      <section className="container">
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 1rem', backgroundColor: 'var(--color-surface-white)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
            <Info size={32} style={{ color: 'var(--color-primary)', marginBottom: '0.75rem' }} />
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: '0.5rem' }}>
              No pieces match your selected filters
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-secondary)', maxWidth: '360px', margin: '0 auto 1.5rem' }}>
              Try adjusting your price range or clearing material filters to view more creations.
            </p>
            <button
              onClick={() => setCategoryFilter({
                material: 'All',
                type: 'All',
                occasion: 'All',
                tag: 'All',
                maxPrice: 10000,
                inStockOnly: false,
                sortBy: 'Bestselling'
              })}
              className="btn-primary"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem'
          }} className="product-grid-4">
            {filtered.map(product => {
              const saved = isInWishlist(product.id);
              return (
                <div
                  key={product.id}
                  className="luxury-card"
                  style={{ display: 'flex', flexDirection: 'column' }}
                >
                  {/* Image Target */}
                  <div
                    onClick={() => navigate('product', product.id)}
                    style={{
                      position: 'relative',
                      aspectRatio: '4/5',
                      overflow: 'hidden',
                      backgroundColor: 'var(--color-surface-container)',
                      cursor: 'pointer'
                    }}
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease'
                      }}
                      onMouseEnter={(e) => {
                        if (product.images[1]) e.currentTarget.src = product.images[1];
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.src = product.images[0];
                      }}
                    />

                    {/* Badge */}
                    <div style={{ position: 'absolute', top: '10px', left: '10px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <span className="badge-dark">{product.badge}</span>
                      {product.tags.includes('Ready to Ship') && (
                        <span className="badge-gold">Ready to Ship</span>
                      )}
                    </div>

                    {/* Wishlist Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(product.id);
                      }}
                      aria-label="Save to Wishlist"
                      style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255,255,255,0.85)',
                        backdropFilter: 'blur(4px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: saved ? 'var(--color-crimson)' : 'var(--color-charcoal)',
                        boxShadow: 'var(--shadow-subtle)'
                      }}
                    >
                      <Heart size={16} fill={saved ? 'var(--color-crimson)' : 'none'} />
                    </button>
                  </div>

                  {/* Card Details */}
                  <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.35rem' }}>
                        <Star size={13} fill="var(--color-primary)" style={{ color: 'var(--color-primary)' }} />
                        <span style={{ fontSize: '0.75rem', fontWeight: 700 }}>{product.rating}</span>
                        <span style={{ fontSize: '0.75rem', color: 'var(--color-secondary)' }}>({product.reviewsCount})</span>
                      </div>

                      <h3
                        onClick={() => navigate('product', product.id)}
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '1rem',
                          lineHeight: 1.3,
                          color: 'var(--color-charcoal)',
                          cursor: 'pointer',
                          marginBottom: '0.25rem'
                        }}
                      >
                        {product.name}
                      </h3>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-on-surface-variant)', display: 'block' }}>
                        {product.plating}
                      </span>
                    </div>

                    <div style={{ marginTop: '0.85rem', paddingTop: '0.75rem', borderTop: '1px solid var(--color-border)' }}>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.75rem' }}>
                        <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-primary-dark)' }}>
                          ₹{product.price.toLocaleString('en-IN')}
                        </span>
                        {product.comparePrice && (
                          <span style={{ fontSize: '0.8rem', color: 'var(--color-secondary)', textDecoration: 'line-through' }}>
                            ₹{product.comparePrice.toLocaleString('en-IN')}
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => addToCart(product, 1)}
                        className="btn-primary"
                        style={{ width: '100%', padding: '0.65rem', fontSize: '0.75rem' }}
                      >
                        <ShoppingBag size={14} /> Add to Bag
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* 4. Collection Story Block (Below Grid) */}
      <section className="container">
        <div style={{
          backgroundColor: 'var(--color-surface-white)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--color-border)',
          padding: '2.5rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1.5fr',
          gap: '2.5rem',
          alignItems: 'center'
        }} className="story-block-grid">
          <div>
            <span className="badge-gold" style={{ marginBottom: '0.75rem' }}>Artisanal Lineage</span>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginBottom: '0.75rem' }}>
              The Craft of Kerala & Mughal Jadau
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-on-surface-variant)', lineHeight: 1.7 }}>
              {activeMaterialObj.story}
            </p>
          </div>

          <div style={{
            backgroundColor: 'var(--color-surface-low)',
            padding: '1.5rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--color-border)'
          }}>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', marginBottom: '0.75rem' }}>
              Material Care & Craft Facts
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--color-on-surface-variant)' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <span style={{ color: 'var(--color-primary-dark)', fontWeight: 700 }}>✓</span>
                <span><strong>24k Gold Foil Bed:</strong> Uncut polki glass stones are nestled in pure gold foil cups to reflect luminous natural fire.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <span style={{ color: 'var(--color-primary-dark)', fontWeight: 700 }}>✓</span>
                <span><strong>Hypoallergenic Base:</strong> Copper-brass alloys sealed with micro-lacquer to prevent tarnishing in humid tropical weather.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <span style={{ color: 'var(--color-primary-dark)', fontWeight: 700 }}>✓</span>
                <span><strong>Lifetime Servicing:</strong> Complimentary stone tightening and low-cost replating anytime at our Marine Drive Kochi studio.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Material FAQ Strip */}
      <section className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', textAlign: 'center', marginBottom: '1.5rem' }}>
            Frequently Asked Questions
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {FAQS.slice(0, 4).map((faq, idx) => (
              <details
                key={idx}
                style={{
                  backgroundColor: 'var(--color-surface-white)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '1rem 1.25rem',
                  cursor: 'pointer'
                }}
              >
                <summary style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-charcoal)', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>{faq.q}</span>
                  <ChevronDown size={16} style={{ color: 'var(--color-primary)' }} />
                </summary>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-on-surface-variant)', lineHeight: 1.6, marginTop: '0.75rem', borderTop: '1px solid var(--color-border)', paddingTop: '0.75rem' }}>
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 992px) {
          .product-grid-4 {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .filter-drawer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .story-block-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .filter-drawer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
