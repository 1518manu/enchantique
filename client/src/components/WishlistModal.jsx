import React from 'react';
import { useShop } from '../context/ShopContext';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';

export const WishlistModal = () => {
  const {
    isWishlistOpen,
    setIsWishlistOpen,
    wishlist,
    products,
    toggleWishlist,
    addToCart,
    navigate
  } = useShop();

  if (!isWishlistOpen) return null;

  const wishlistProducts = products.filter(p => wishlist.includes(p.id));

  return (
    <div className="drawer-backdrop" onClick={() => setIsWishlistOpen(false)}>
      <div
        className="drawer-panel"
        onClick={(e) => e.stopPropagation()}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <div style={{
          padding: '1.25rem 1.5rem',
          borderBottom: '1px solid var(--color-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'var(--color-surface-white)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Heart size={20} style={{ color: 'var(--color-primary)', fill: 'var(--color-primary)' }} />
            <span style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.25rem',
              fontWeight: 600,
              color: 'var(--color-obsidian)'
            }}>
              Your Saved Heirlooms
            </span>
            <span style={{
              fontSize: '0.75rem',
              backgroundColor: 'var(--color-primary-tint)',
              color: 'var(--color-primary-dark)',
              padding: '0.15rem 0.5rem',
              borderRadius: 'var(--radius-full)',
              fontWeight: 700
            }}>
              {wishlist.length}
            </span>
          </div>
          <button onClick={() => setIsWishlistOpen(false)} style={{ padding: '0.35rem', color: 'var(--color-charcoal)' }}>
            <X size={20} />
          </button>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '1.25rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {wishlistProducts.length === 0 ? (
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '3rem 1rem' }}>
              <Heart size={36} style={{ color: 'var(--color-border)', marginBottom: '1rem' }} />
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                No saved items yet
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-secondary)', maxWidth: '240px', marginBottom: '1.5rem' }}>
                Tap the heart on any jewel to curate your royal bridal wishlist.
              </p>
              <button
                onClick={() => {
                  setIsWishlistOpen(false);
                  navigate('shop');
                }}
                className="btn-primary"
              >
                Browse Catalog
              </button>
            </div>
          ) : (
            wishlistProducts.map(product => (
              <div
                key={product.id}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid var(--color-border)'
                }}
              >
                <div
                  onClick={() => {
                    setIsWishlistOpen(false);
                    navigate('product', product.id);
                  }}
                  style={{
                    width: '80px',
                    height: '96px',
                    borderRadius: 'var(--radius-sm)',
                    overflow: 'hidden',
                    backgroundColor: 'var(--color-surface-container)',
                    flexShrink: 0,
                    cursor: 'pointer'
                  }}
                >
                  <img src={product.images[0]} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <h4
                        onClick={() => {
                          setIsWishlistOpen(false);
                          navigate('product', product.id);
                        }}
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '0.95rem',
                          cursor: 'pointer',
                          color: 'var(--color-charcoal)'
                        }}
                      >
                        {product.name}
                      </h4>
                      <button onClick={() => toggleWishlist(product.id)} style={{ color: 'var(--color-secondary)' }}>
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-primary-dark)', display: 'block', marginTop: '2px' }}>
                      {product.material} • {product.badge}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.5rem' }}>
                    <span style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-charcoal)' }}>
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    <button
                      onClick={() => addToCart(product, 1)}
                      className="btn-primary"
                      style={{ padding: '0.45rem 0.85rem', fontSize: '0.75rem' }}
                    >
                      <ShoppingBag size={14} /> Add to Bag
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
