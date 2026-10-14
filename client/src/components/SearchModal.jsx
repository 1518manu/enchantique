import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';

export const SearchModal = () => {
  const { isSearchOpen, setIsSearchOpen, products, navigate } = useShop();
  const [query, setQuery] = useState('');

  if (!isSearchOpen) return null;

  const filteredProducts = query.trim()
    ? products.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.material.toLowerCase().includes(query.toLowerCase()) ||
        p.occasion.toLowerCase().includes(query.toLowerCase()) ||
        p.type.toLowerCase().includes(query.toLowerCase()) ||
        p.badge.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const popularSearches = [
    'Kundan Choker',
    'Kasavu Jhumkas',
    'Moissanite Ring',
    'Temple Pendant',
    'Bridal Set',
    'Under ₹3,000'
  ];

  const handleProductSelect = (id) => {
    setIsSearchOpen(false);
    navigate('product', id);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(18, 18, 18, 0.8)',
      backdropFilter: 'blur(8px)',
      zIndex: 120,
      display: 'flex',
      flexDirection: 'column',
      padding: '1.5rem',
      animation: 'fadeIn 0.2s ease'
    }} onClick={() => setIsSearchOpen(false)}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '680px',
          margin: '2rem auto 0',
          backgroundColor: 'var(--color-surface)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-elevated)',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '80vh'
        }}
      >
        {/* Search Input Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '1.25rem 1.5rem',
          borderBottom: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-surface-white)'
        }}>
          <Search size={22} style={{ color: 'var(--color-primary)' }} />
          <input
            type="text"
            placeholder="Search by jewellery piece, material (Kundan, Pearl, Moissanite) or occasion..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            style={{
              flex: 1,
              border: 'none',
              fontSize: '1rem',
              backgroundColor: 'transparent',
              color: 'var(--color-charcoal)'
            }}
          />
          <button onClick={() => setIsSearchOpen(false)} style={{ color: 'var(--color-secondary)' }}>
            <X size={22} />
          </button>
        </div>

        {/* Popular Tags */}
        <div style={{ padding: '0.75rem 1.5rem', backgroundColor: 'var(--color-surface-low)', borderBottom: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-secondary)' }}>
            Popular:
          </span>
          {popularSearches.map(tag => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              style={{
                fontSize: '0.75rem',
                backgroundColor: 'var(--color-surface-white)',
                border: '1px solid var(--color-border)',
                padding: '0.2rem 0.6rem',
                borderRadius: 'var(--radius-full)',
                color: 'var(--color-charcoal)'
              }}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1.25rem 1.5rem' }}>
          {query.trim() === '' ? (
            <div style={{ textAlign: 'center', padding: '2rem 1rem', color: 'var(--color-secondary)' }}>
              <Sparkles size={24} style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }} />
              <p style={{ fontSize: '0.85rem' }}>
                Type to instantly search across our handcrafted catalogue.
              </p>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-secondary)' }}>
                No heirlooms found matching "<strong>{query}</strong>".
              </p>
              <button
                onClick={() => {
                  setIsSearchOpen(false);
                  navigate('shop');
                }}
                className="btn-primary"
                style={{ marginTop: '1rem' }}
              >
                View Full Catalogue
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary-dark)', textTransform: 'uppercase' }}>
                Found {filteredProducts.length} Matching Creations
              </span>
              {filteredProducts.map(p => (
                <div
                  key={p.id}
                  onClick={() => handleProductSelect(p.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.65rem',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--color-surface-white)',
                    border: '1px solid var(--color-border)',
                    cursor: 'pointer',
                    transition: 'border-color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--color-primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--color-border)'}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-xs)', overflow: 'hidden', flexShrink: 0 }}>
                      <img src={p.images[0]} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div>
                      <h5 style={{ fontFamily: 'var(--font-serif)', fontSize: '0.9rem', color: 'var(--color-charcoal)' }}>
                        {p.name}
                      </h5>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-secondary)' }}>
                        {p.material} • {p.type}
                      </span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ fontWeight: 700, color: 'var(--color-primary-dark)', fontSize: '0.9rem' }}>
                      ₹{p.price.toLocaleString('en-IN')}
                    </span>
                    <ArrowRight size={16} style={{ color: 'var(--color-outline)' }} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
