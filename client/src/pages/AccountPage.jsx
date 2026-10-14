import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import {
  User,
  Package,
  MapPin,
  Heart,
  Clock,
  Sparkles,
  Phone,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export const AccountPage = () => {
  const { orders, wishlist, products, addToCart, navigate, showToast } = useShop();
  const [activeAccountTab, setActiveAccountTab] = useState('orders');

  const wishlistItems = products.filter(p => wishlist.includes(p.id));

  return (
    <div className="container animate-fade-in" style={{ padding: '2rem 1rem 4rem' }}>
      {/* Profile Header */}
      <div style={{
        backgroundColor: 'var(--color-surface-white)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)',
        padding: '2rem',
        marginBottom: '2.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1.5rem',
        boxShadow: 'var(--shadow-subtle)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            overflow: 'hidden',
            backgroundColor: 'var(--color-surface-container)',
            border: '2px solid var(--color-primary)'
          }}>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzCJ2yneD_gLS6998GKJKBnJ8EcKoO8dVEZ3wUWALu7D7w3dxlU_jaafLB-q0p63PtRlIlmdQF5UHke4FiCtw3XlLT69C5J_9L61PVMbk53TU1yHT30YJnGP49my9rMzOyS_bccrAg75mWaGST9pD-W3aBCN5v_UYLCo3ySasDULhRZOobPFRJHmJuj9IuvX4SpNzSlQE6gz5KBNcBkS1KYFPH3rXc0ogg6TXrpUKC2Gi3uk1iPVoA"
              alt="Ananya Nair profile"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>
                Dr. Ananya Nair
              </h2>
              <span className="badge-gold">Privé VIP Member</span>
            </div>
            <span style={{ fontSize: '0.8rem', color: 'var(--color-secondary)' }}>
              Kochi, Kerala • Member since 2026 • 2 Heirlooms Commissioned
            </span>
          </div>
        </div>

        <button
          onClick={() => {
            showToast('Account details updated');
          }}
          className="btn-secondary"
          style={{ fontSize: '0.75rem', padding: '0.5rem 1rem' }}
        >
          Edit Profile
        </button>
      </div>

      {/* Tabs */}
      <div style={{
        display: 'flex',
        borderBottom: '1px solid var(--color-border)',
        marginBottom: '2rem',
        gap: '2rem'
      }}>
        <button
          onClick={() => setActiveAccountTab('orders')}
          style={{
            padding: '0.75rem 0',
            fontWeight: 700,
            fontSize: '0.85rem',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: activeAccountTab === 'orders' ? 'var(--color-primary-dark)' : 'var(--color-secondary)',
            borderBottom: activeAccountTab === 'orders' ? '2px solid var(--color-primary)' : '2px solid transparent',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem'
          }}
        >
          <Package size={16} /> My Orders ({orders.length})
        </button>

        <button
          onClick={() => setActiveAccountTab('wishlist')}
          style={{
            padding: '0.75rem 0',
            fontWeight: 700,
            fontSize: '0.85rem',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: activeAccountTab === 'wishlist' ? 'var(--color-primary-dark)' : 'var(--color-secondary)',
            borderBottom: activeAccountTab === 'wishlist' ? '2px solid var(--color-primary)' : '2px solid transparent',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem'
          }}
        >
          <Heart size={16} /> Saved Wishlist ({wishlist.length})
        </button>

        <button
          onClick={() => setActiveAccountTab('addresses')}
          style={{
            padding: '0.75rem 0',
            fontWeight: 700,
            fontSize: '0.85rem',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: activeAccountTab === 'addresses' ? 'var(--color-primary-dark)' : 'var(--color-secondary)',
            borderBottom: activeAccountTab === 'addresses' ? '2px solid var(--color-primary)' : '2px solid transparent',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem'
          }}
        >
          <MapPin size={16} /> Saved Addresses
        </button>
      </div>

      {/* Content */}
      {activeAccountTab === 'orders' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {orders.map(order => (
            <div
              key={order.orderId}
              style={{
                backgroundColor: 'var(--color-surface-white)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: '1.75rem',
                boxShadow: 'var(--shadow-subtle)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '1rem', fontWeight: 700, fontFamily: 'var(--font-serif)' }}>
                      Order #{order.orderId}
                    </span>
                    <span className="badge-gold">
                      {order.status}
                    </span>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-secondary)' }}>
                    Placed on {order.date} • Paid via {order.paymentMethod}
                  </span>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <strong style={{ fontSize: '1.1rem', color: 'var(--color-primary-dark)' }}>
                    ₹{order.total.toLocaleString('en-IN')}
                  </strong>
                  <span style={{ display: 'block', fontSize: '0.75rem', color: '#2e7d32' }}>
                    ✓ Express Tracked Delivery
                  </span>
                </div>
              </div>

              {/* Items List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1rem' }}>
                {order.items.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
                    <span>{item.name} <span style={{ color: 'var(--color-secondary)' }}>x{item.qty}</span></span>
                    <strong style={{ color: 'var(--color-charcoal)' }}>₹{item.price.toLocaleString('en-IN')}</strong>
                  </div>
                ))}
              </div>

              {/* Delivery Address */}
              <div style={{ fontSize: '0.8rem', color: 'var(--color-secondary)', borderTop: '1px solid var(--color-border)', paddingTop: '0.75rem' }}>
                Delivery Destination: <strong>{order.address}</strong>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeAccountTab === 'wishlist' && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.5rem'
        }} className="wishlist-grid-4">
          {wishlistItems.length === 0 ? (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem' }}>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-secondary)' }}>
                Your wishlist is empty. Tap the heart on products to save them here.
              </p>
            </div>
          ) : (
            wishlistItems.map(p => (
              <div key={p.id} className="luxury-card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div onClick={() => navigate('product', p.id)} style={{ aspectRatio: '4/5', cursor: 'pointer', overflow: 'hidden' }}>
                  <img src={p.images[0]} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '0.95rem', marginBottom: '0.25rem' }}>{p.name}</h4>
                    <strong style={{ color: 'var(--color-primary-dark)' }}>₹{p.price.toLocaleString('en-IN')}</strong>
                  </div>
                  <button onClick={() => addToCart(p, 1)} className="btn-primary" style={{ width: '100%', padding: '0.5rem', fontSize: '0.75rem', marginTop: '0.75rem' }}>
                    Add to Bag
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {activeAccountTab === 'addresses' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="address-grid">
          <div style={{ backgroundColor: 'var(--color-surface-white)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
            <span className="badge-dark" style={{ marginBottom: '0.5rem' }}>Default Home Address</span>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Dr. Ananya Nair</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-on-surface-variant)', lineHeight: 1.6 }}>
              Flat 4B, Silver Sand Vitrine, Panampilly Nagar Main Avenue, Kochi, Kerala - 682036<br />
              Phone: +91 98470 12345
            </p>
          </div>

          <div style={{ backgroundColor: 'var(--color-surface-white)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
            <span className="badge-gold" style={{ marginBottom: '0.5rem' }}>Office Address</span>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Dr. Ananya Nair</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-on-surface-variant)', lineHeight: 1.6 }}>
              Kochi Medicity, Infopark Expressway, Kakkanad, Kochi, Kerala - 682042<br />
              Phone: +91 98470 12345
            </p>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .wishlist-grid-4 {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .address-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
