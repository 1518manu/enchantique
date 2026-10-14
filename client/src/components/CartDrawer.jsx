import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { STORE_INFO } from '../data/mockData';
import {
  X,
  Plus,
  Minus,
  Trash2,
  Gift,
  Tag,
  ShoppingBag,
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const CartDrawer = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    removeFromCart,
    updateCartQuantity,
    cartSubtotal,
    discountAmount,
    shippingCost,
    giftWrapCost,
    cartTotal,
    isFreeShipping,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    giftWrap,
    setGiftWrap,
    giftNote,
    setGiftNote,
    navigate
  } = useShop();

  const [couponInput, setCouponInput] = useState('');

  if (!isCartOpen) return null;

  const freeShippingRemainder = Math.max(0, STORE_INFO.freeShippingThreshold - cartSubtotal);
  const freeShippingProgress = Math.min(100, Math.round((cartSubtotal / STORE_INFO.freeShippingThreshold) * 100));

  const handleCheckoutClick = () => {
    setIsCartOpen(false);
    navigate('checkout');
  };

  return (
    <div className="drawer-backdrop" onClick={() => setIsCartOpen(false)}>
      <div
        className="drawer-panel"
        onClick={(e) => e.stopPropagation()}
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        {/* Header */}
        <div style={{
          padding: '1.25rem 1.5rem',
          borderBottom: '1px solid var(--color-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'var(--color-surface-white)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ShoppingBag size={20} style={{ color: 'var(--color-primary)' }} />
            <span style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.25rem',
              fontWeight: 600,
              color: 'var(--color-obsidian)'
            }}>
              Your Shopping Bag
            </span>
            <span style={{
              fontSize: '0.75rem',
              backgroundColor: 'var(--color-primary-tint)',
              color: 'var(--color-primary-dark)',
              padding: '0.15rem 0.5rem',
              borderRadius: 'var(--radius-full)',
              fontWeight: 700
            }}>
              {cart.reduce((s, i) => s + i.quantity, 0)}
            </span>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            style={{
              padding: '0.35rem',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--color-charcoal)'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: 'var(--color-primary-tint)',
          borderBottom: '1px solid var(--color-border)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem', fontSize: '0.75rem' }}>
            <span style={{ color: 'var(--color-primary-dark)', fontWeight: 600 }}>
              {isFreeShipping
                ? '✨ You have unlocked FREE Express Delivery!'
                : `Add ₹${freeShippingRemainder.toLocaleString('en-IN')} more for FREE Express Delivery!`}
            </span>
            <span style={{ fontWeight: 700, color: 'var(--color-primary-dark)' }}>{freeShippingProgress}%</span>
          </div>
          <div style={{
            width: '100%',
            height: '5px',
            backgroundColor: 'rgba(197, 160, 89, 0.25)',
            borderRadius: 'var(--radius-full)',
            overflow: 'hidden'
          }}>
            <div style={{
              height: '100%',
              width: `${freeShippingProgress}%`,
              backgroundColor: 'var(--color-primary)',
              borderRadius: 'var(--radius-full)',
              transition: 'width 0.4s ease'
            }} />
          </div>
        </div>

        {/* Cart Items List */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          {cart.length === 0 ? (
            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '3rem 1rem'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-surface-container)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-primary-dark)',
                marginBottom: '1rem'
              }}>
                <ShoppingBag size={28} />
              </div>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                Your bag is empty
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-secondary)', maxWidth: '240px', marginBottom: '1.5rem' }}>
                Discover handcrafted heirlooms made with love in our Kochi atelier.
              </p>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  navigate('shop');
                }}
                className="btn-primary"
              >
                Explore Catalogue
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.cartItemId}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid var(--color-border)',
                  position: 'relative'
                }}
              >
                {/* Thumbnail */}
                <div style={{
                  width: '80px',
                  height: '96px',
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  backgroundColor: 'var(--color-surface-container)',
                  flexShrink: 0
                }}>
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                {/* Details */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <h4 style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '0.95rem',
                        lineHeight: 1.25,
                        color: 'var(--color-charcoal)'
                      }}>
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.cartItemId)}
                        style={{ color: 'var(--color-secondary)', padding: '2px' }}
                        title="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    <div style={{ fontSize: '0.75rem', color: 'var(--color-on-surface-variant)', marginTop: '0.25rem' }}>
                      {item.selectedVariant} {item.selectedSize !== 'One Size' && `• ${item.selectedSize}`}
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.5rem' }}>
                    {/* Quantity controls */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-xs)',
                      backgroundColor: 'var(--color-surface-white)'
                    }}>
                      <button
                        onClick={() => updateCartQuantity(item.cartItemId, item.quantity - 1)}
                        style={{ padding: '0.3rem 0.5rem', color: 'var(--color-charcoal)' }}
                      >
                        <Minus size={13} />
                      </button>
                      <span style={{ fontSize: '0.8rem', fontWeight: 600, padding: '0 0.4rem', minWidth: '20px', textAlign: 'center' }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateCartQuantity(item.cartItemId, item.quantity + 1)}
                        style={{ padding: '0.3rem 0.5rem', color: 'var(--color-charcoal)' }}
                      >
                        <Plus size={13} />
                      </button>
                    </div>

                    {/* Price */}
                    <div style={{ textAlign: 'right' }}>
                      <span style={{
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        color: 'var(--color-primary-dark)'
                      }}>
                        ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                      </span>
                      {item.product.comparePrice && (
                        <span style={{
                          display: 'block',
                          fontSize: '0.75rem',
                          color: 'var(--color-secondary)',
                          textDecoration: 'line-through'
                        }}>
                          ₹{(item.product.comparePrice * item.quantity).toLocaleString('en-IN')}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer & Checkout Breakdown (if items in cart) */}
        {cart.length > 0 && (
          <div style={{
            padding: '1.25rem 1.5rem',
            borderTop: '1px solid var(--color-border)',
            backgroundColor: 'var(--color-surface-white)',
            boxShadow: '0 -4px 16px rgba(44, 34, 18, 0.05)'
          }}>
            {/* Gift Wrap Toggle */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '0.75rem',
              padding: '0.5rem 0.75rem',
              backgroundColor: 'var(--color-surface-low)',
              borderRadius: 'var(--radius-sm)'
            }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.8rem', color: 'var(--color-charcoal)' }}>
                <input
                  type="checkbox"
                  checked={giftWrap}
                  onChange={(e) => setGiftWrap(e.target.checked)}
                  style={{ accentColor: 'var(--color-primary)' }}
                />
                <Gift size={16} style={{ color: 'var(--color-primary)' }} />
                <span>Royal Velvet Gift Packaging (+₹150)</span>
              </label>
            </div>

            {/* Coupon Code Input */}
            <div style={{ marginBottom: '1rem' }}>
              {appliedCoupon ? (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.45rem 0.75rem',
                  backgroundColor: 'rgba(46, 125, 50, 0.08)',
                  border: '1px solid rgba(46, 125, 50, 0.3)',
                  borderRadius: 'var(--radius-xs)',
                  fontSize: '0.8rem',
                  color: '#2e7d32'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Tag size={14} />
                    <span>Coupon <strong>{appliedCoupon.code}</strong> applied (-₹{discountAmount})</span>
                  </div>
                  <button onClick={removeCoupon} style={{ color: 'var(--color-crimson)', fontSize: '0.75rem', fontWeight: 700 }}>
                    Remove
                  </button>
                </div>
              ) : (
                <div style={{ display: 'flex', gap: '0.4rem' }}>
                  <input
                    type="text"
                    placeholder="Enter coupon (e.g. LOVE10)"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    style={{
                      flex: 1,
                      padding: '0.45rem 0.75rem',
                      fontSize: '0.8rem',
                      borderRadius: 'var(--radius-xs)',
                      border: '1px solid var(--color-border)',
                      textTransform: 'uppercase'
                    }}
                  />
                  <button
                    onClick={() => {
                      if (couponInput) {
                        applyCoupon(couponInput);
                        setCouponInput('');
                      }
                    }}
                    style={{
                      padding: '0.45rem 0.85rem',
                      backgroundColor: 'var(--color-surface-container)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-xs)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}
                  >
                    Apply
                  </button>
                </div>
              )}
            </div>

            {/* Price Calculations */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.85rem', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-secondary)' }}>
                <span>Subtotal</span>
                <span>₹{cartSubtotal.toLocaleString('en-IN')}</span>
              </div>

              {discountAmount > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#2e7d32' }}>
                  <span>Festive Discount</span>
                  <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                </div>
              )}

              {giftWrap && (
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-secondary)' }}>
                  <span>Velvet Gift Box</span>
                  <span>+₹150</span>
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-secondary)' }}>
                <span>Express Pan-India Shipping</span>
                <span>{shippingCost === 0 ? <strong style={{ color: '#2e7d32' }}>FREE</strong> : `₹${shippingCost}`}</span>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: 'var(--color-charcoal)',
                paddingTop: '0.5rem',
                borderTop: '1px solid var(--color-border)',
                marginTop: '0.25rem'
              }}>
                <span>Total Amount</span>
                <span style={{ color: 'var(--color-primary-dark)' }}>
                  ₹{cartTotal.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* Direct Checkout CTA */}
            <button
              onClick={handleCheckoutClick}
              className="btn-primary"
              style={{ width: '100%', padding: '0.9rem', fontSize: '0.875rem' }}
            >
              Proceed to Checkout • ₹{cartTotal.toLocaleString('en-IN')} <ArrowRight size={16} />
            </button>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              marginTop: '0.75rem',
              fontSize: '0.7rem',
              color: 'var(--color-secondary)'
            }}>
              <ShieldCheck size={14} style={{ color: 'var(--color-primary)' }} />
              <span>Safe 256-bit Encrypted Checkout • COD Available</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
