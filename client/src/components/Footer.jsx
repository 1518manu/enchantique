import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { STORE_INFO } from '../data/mockData';
import { Instagram, Facebook, Youtube } from './SocialIcons';
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const Footer = () => {
  const { navigate, showToast } = useShop();
  const [newsletterInput, setNewsletterInput] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterInput) return;
    setIsSubscribed(true);
    showToast('Welcome to Enchantique Privé ✨ Your 10% welcome code is LOVE10');
  };

  return (
    <footer style={{
      backgroundColor: 'var(--color-surface-low)',
      borderTop: '1px solid var(--color-border)',
      color: 'var(--color-charcoal)',
      paddingTop: '4rem',
      paddingBottom: '5rem',
      marginTop: '4rem',
      position: 'relative'
    }}>
      <div className="container">
        {/* Top Newsletter / VIP Privé Banner */}
        <div style={{
          backgroundColor: 'var(--color-obsidian)',
          color: 'var(--color-surface)',
          borderRadius: 'var(--radius-lg)',
          padding: '2.5rem 2rem',
          marginBottom: '3.5rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          alignItems: 'center',
          border: '1px solid rgba(197, 160, 89, 0.3)',
          boxShadow: 'var(--shadow-elevated)'
        }} className="newsletter-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <span className="badge-gold" style={{ backgroundColor: 'rgba(197, 160, 89, 0.2)', color: 'var(--color-primary-fixed)' }}>
                <Sparkles size={12} /> Enchantique Privé
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-primary-light)', fontStyle: 'italic' }}>
                Made with love
              </span>
            </div>
            <h3 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.75rem',
              color: 'var(--color-surface)',
              marginBottom: '0.5rem',
              lineHeight: 1.2
            }}>
              Receive 10% Off Your First Festive Order
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'rgba(250, 249, 246, 0.75)', maxWidth: '420px' }}>
              Join our royal inner circle for priority access to limited artisan drops, private bridal previews, and custom care guides.
            </p>
          </div>

          <div>
            {isSubscribed ? (
              <div style={{
                backgroundColor: 'rgba(46, 125, 50, 0.15)',
                border: '1px solid #2e7d32',
                padding: '1rem',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                color: '#81c784'
              }}>
                <CheckCircle2 size={24} />
                <div>
                  <strong style={{ display: 'block', fontSize: '0.9rem' }}>Welcome to the Privé Circle!</strong>
                  <span style={{ fontSize: '0.8rem' }}>Use code <strong>LOVE10</strong> at checkout for 10% off.</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="newsletter-form" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <input
                  type="text"
                  placeholder="Enter email or WhatsApp number"
                  value={newsletterInput}
                  onChange={(e) => setNewsletterInput(e.target.value)}
                  required
                  style={{
                    flex: '1 1 240px',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-outline)',
                    backgroundColor: 'var(--color-surface)',
                    color: 'var(--color-charcoal)',
                    fontSize: '0.875rem'
                  }}
                />
                <button
                  type="submit"
                  className="btn-gold"
                  style={{ flexShrink: 0, padding: '0.85rem 1.4rem' }}
                >
                  Join Privé <ArrowRight size={14} />
                </button>
              </form>
            )}
            <span style={{ display: 'block', fontSize: '0.7rem', color: 'rgba(250, 249, 246, 0.5)', marginTop: '0.5rem' }}>
              Zero spam guarantee. Opt out anytime.
            </span>
          </div>
        </div>

        {/* Main Footer Links Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1.5fr',
          gap: '2.5rem',
          paddingBottom: '3rem',
          borderBottom: '1px solid var(--color-border)'
        }} className="footer-links-grid">
          {/* Brand Info & Motto */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.5rem' }}>
              <span style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.75rem',
                fontWeight: 600,
                color: 'var(--color-obsidian)'
              }}>
                Enchantique
              </span>
              <span style={{
                display: 'inline-block',
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-primary)'
              }} />
            </div>
            <p style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: 'var(--color-primary-dark)',
              marginBottom: '0.75rem'
            }}>
              Kerala Heirloom Jewellery Atelier
            </p>
            <p style={{
              fontSize: '0.875rem',
              color: 'var(--color-on-surface-variant)',
              lineHeight: 1.6,
              marginBottom: '1rem',
              maxWidth: '320px'
            }}>
              Handcrafted jewellery celebrating Kerala's timeless royal heritage. Meticulously shaped with love by hereditary master karigars in Kochi.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '1rem' }}>
              <a
                href={STORE_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                title="Follow Enchantique on Instagram"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--color-surface-white)',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-charcoal)',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-surface-white)';
                  e.currentTarget.style.color = 'var(--color-charcoal)';
                }}
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--color-surface-white)',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-charcoal)'
                }}
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--color-surface-white)',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-charcoal)'
                }}
              >
                <Youtube size={18} />
              </a>
              <a
                href={`https://wa.me/${STORE_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp Stylist"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: '#25D366',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-primary-dark)',
              marginBottom: '1rem'
            }}>
              Curated Collections
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem' }}>
              <li>
                <button onClick={() => navigate('shop')} style={{ color: 'var(--color-on-surface-variant)', textAlign: 'left' }}>
                  All Creations
                </button>
              </li>
              <li>
                <button onClick={() => navigate('shop')} style={{ color: 'var(--color-on-surface-variant)', textAlign: 'left' }}>
                  Kundan & Jadau
                </button>
              </li>
              <li>
                <button onClick={() => navigate('shop')} style={{ color: 'var(--color-on-surface-variant)', textAlign: 'left' }}>
                  Freshwater Pearls
                </button>
              </li>
              <li>
                <button onClick={() => navigate('shop')} style={{ color: 'var(--color-on-surface-variant)', textAlign: 'left' }}>
                  Certified Moissanite
                </button>
              </li>
              <li>
                <button onClick={() => navigate('shop')} style={{ color: 'var(--color-on-surface-variant)', textAlign: 'left' }}>
                  Kasavu Bridal Sets
                </button>
              </li>
              <li>
                <button onClick={() => navigate('bespoke')} style={{ color: 'var(--color-on-surface-variant)', textAlign: 'left' }}>
                  Custom Bespoke
                </button>
              </li>
            </ul>
          </div>

          {/* Help & Policies */}
          <div>
            <h4 style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-primary-dark)',
              marginBottom: '1rem'
            }}>
              Atelier Support
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem' }}>
              <li>
                <button onClick={() => navigate('help', 'care')} style={{ color: 'var(--color-on-surface-variant)', textAlign: 'left' }}>
                  Jewellery Care Guide
                </button>
              </li>
              <li>
                <button onClick={() => navigate('help', 'size')} style={{ color: 'var(--color-on-surface-variant)', textAlign: 'left' }}>
                  Ring & Bangle Size Guide
                </button>
              </li>
              <li>
                <button onClick={() => navigate('help', 'shipping')} style={{ color: 'var(--color-on-surface-variant)', textAlign: 'left' }}>
                  Shipping & Delivery
                </button>
              </li>
              <li>
                <button onClick={() => navigate('help', 'returns')} style={{ color: 'var(--color-on-surface-variant)', textAlign: 'left' }}>
                  Returns & Exchanges
                </button>
              </li>
              <li>
                <button onClick={() => navigate('help', 'faq')} style={{ color: 'var(--color-on-surface-variant)', textAlign: 'left' }}>
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button onClick={() => navigate('help', 'contact')} style={{ color: 'var(--color-on-surface-variant)', textAlign: 'left' }}>
                  Contact Our Stylists
                </button>
              </li>
            </ul>
          </div>

          {/* Studio Location & Contacts */}
          <div>
            <h4 style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-primary-dark)',
              marginBottom: '1rem'
            }}>
              Heritage Atelier
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem', color: 'var(--color-on-surface-variant)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <MapPin size={16} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '3px' }} />
                <span>{STORE_INFO.location}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={16} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                <span>{STORE_INFO.phone}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={16} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                <span>{STORE_INFO.email}</span>
              </div>
              <div style={{
                marginTop: '0.5rem',
                padding: '0.75rem',
                backgroundColor: 'var(--color-surface-white)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <ShieldCheck size={20} style={{ color: 'var(--color-primary)' }} />
                <span style={{ fontSize: '0.75rem', lineHeight: 1.3 }}>
                  <strong>Certified Quality Guarantee:</strong> Lab hallmarked stones, 100% skin-safe alloys.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Payment icons & Copyright */}
        <div style={{
          paddingTop: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem',
          fontSize: '0.75rem',
          color: 'var(--color-secondary)'
        }}>
          <div>
            © 2026 Enchantique Jewellers Pvt. Ltd. Handcrafted in Kerala with love.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span style={{
              fontSize: '0.7rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--color-outline)'
            }}>
              Royal Checkouts:
            </span>
            <span style={{ padding: '0.2rem 0.5rem', backgroundColor: 'var(--color-surface-white)', borderRadius: 'var(--radius-xs)', border: '1px solid var(--color-border)', fontWeight: 700 }}>
              UPI (GPay / PhonePe)
            </span>
            <span style={{ padding: '0.2rem 0.5rem', backgroundColor: 'var(--color-surface-white)', borderRadius: 'var(--radius-xs)', border: '1px solid var(--color-border)', fontWeight: 700 }}>
              RuPay
            </span>
            <span style={{ padding: '0.2rem 0.5rem', backgroundColor: 'var(--color-surface-white)', borderRadius: 'var(--radius-xs)', border: '1px solid var(--color-border)', fontWeight: 700 }}>
              Visa & Mastercard
            </span>
            <span style={{ padding: '0.2rem 0.5rem', backgroundColor: 'var(--color-surface-white)', borderRadius: 'var(--radius-xs)', border: '1px solid var(--color-border)', fontWeight: 700 }}>
              Cash on Delivery (COD)
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .newsletter-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .footer-links-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .footer-links-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
};
