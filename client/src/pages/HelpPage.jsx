import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { STORE_INFO, FAQS } from '../data/mockData';
import {
  HelpCircle,
  Ruler,
  Truck,
  RotateCcw,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  ChevronDown,
  ShieldCheck,
  Send
} from 'lucide-react';

export const HelpPage = () => {
  const { tab } = useParams();
  const { helpSubTab, setHelpSubTab, showToast, navigate } = useShop();

  useEffect(() => {
    if (tab && tab !== helpSubTab) {
      setHelpSubTab(tab);
    }
  }, [tab, helpSubTab, setHelpSubTab]);

  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [isContactSent, setIsContactSent] = useState(false);

  const [returnOrderId, setReturnOrderId] = useState('');
  const [returnReason, setReturnReason] = useState('Size does not fit');
  const [isReturnRequested, setIsReturnRequested] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactName || !contactPhone) return;
    setIsContactSent(true);
    showToast('Your message has been sent to our Kochi concierge team ✨');
  };

  const handleReturnSubmit = (e) => {
    e.preventDefault();
    if (!returnOrderId) return;
    setIsReturnRequested(true);
    showToast(`Return request initiated for Order #${returnOrderId}. Our courier partner will schedule reverse pickup.`);
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      {/* Header */}
      <section style={{
        backgroundColor: 'var(--color-surface-white)',
        borderBottom: '1px solid var(--color-border)',
        padding: '3rem 0'
      }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '640px' }}>
          <span className="badge-gold" style={{ marginBottom: '0.5rem' }}>Atelier Concierge</span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginBottom: '0.5rem' }}>
            Help, Care & Client Services
          </h1>
          <p style={{ fontSize: '0.95rem', color: 'var(--color-on-surface-variant)' }}>
            Everything you need to know about caring for your handcrafted heirlooms, sizing, shipping across India, and contacting our Kochi stylists.
          </p>
        </div>
      </section>

      {/* Main Tabs Layout */}
      <section className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '260px 1fr',
          gap: '2.5rem',
          alignItems: 'flex-start'
        }} className="help-grid">
          {/* Subtabs Sidebar */}
          <div style={{
            backgroundColor: 'var(--color-surface-white)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.35rem',
            boxShadow: 'var(--shadow-subtle)'
          }}>
            {[
              { id: 'care', label: 'Jewellery Care Guide', icon: ShieldCheck },
              { id: 'size', label: 'Ring & Bangle Sizing', icon: Ruler },
              { id: 'shipping', label: 'Shipping & Pan-India COD', icon: Truck },
              { id: 'returns', label: 'Returns & Exchanges', icon: RotateCcw },
              { id: 'faq', label: 'Frequently Asked Questions', icon: HelpCircle },
              { id: 'contact', label: 'Contact Our Concierge', icon: Phone }
            ].map(tab => {
              const Icon = tab.icon;
              const active = helpSubTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => navigate('help', tab.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    textAlign: 'left',
                    color: active ? 'var(--color-primary-dark)' : 'var(--color-charcoal)',
                    backgroundColor: active ? 'var(--color-primary-tint)' : 'transparent',
                    border: active ? '1px solid var(--color-primary-light)' : '1px solid transparent',
                    transition: 'all 0.2s'
                  }}
                >
                  <Icon size={18} style={{ color: active ? 'var(--color-primary)' : 'var(--color-secondary)' }} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Display */}
          <div style={{
            backgroundColor: 'var(--color-surface-white)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            padding: '2.5rem',
            boxShadow: 'var(--shadow-subtle)'
          }}>
            {/* 1. Care Guide */}
            {helpSubTab === 'care' && (
              <div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginBottom: '1rem' }}>
                  Jewellery Care Guide for Tropical Climates
                </h2>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-on-surface-variant)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  Handcrafted jewellery layered with 22k micron gold and pure gold foil requires gentle loving care to preserve its regal brilliance over decades.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }} className="care-grid">
                  <div style={{ padding: '1.25rem', backgroundColor: 'var(--color-surface-low)', borderRadius: 'var(--radius-sm)' }}>
                    <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--color-primary-dark)' }}>
                      Kundan & Jadau Pieces
                    </h4>
                    <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: 'var(--color-charcoal)' }}>
                      Never submerge in water. Stone foil bezels can absorb liquid and tarnish. Wrap each piece in dry muslin cloth or butter paper inside your velvet box.
                    </p>
                  </div>

                  <div style={{ padding: '1.25rem', backgroundColor: 'var(--color-surface-low)', borderRadius: 'var(--radius-sm)' }}>
                    <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--color-primary-dark)' }}>
                      Freshwater & Shell Pearls
                    </h4>
                    <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: 'var(--color-charcoal)' }}>
                      "Last on, first off." Always apply perfumes and body mists 15 minutes before putting on pearls. Wipe with dry cotton cloth after removing.
                    </p>
                  </div>

                  <div style={{ padding: '1.25rem', backgroundColor: 'var(--color-surface-low)', borderRadius: 'var(--radius-sm)' }}>
                    <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--color-primary-dark)' }}>
                      Certified Moissanite
                    </h4>
                    <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: 'var(--color-charcoal)' }}>
                      Moissanite is extremely scratch-resistant (9.25 Mohs). Soak in lukewarm soapy water for 5 minutes and brush gently with a baby toothbrush for radiant fire.
                    </p>
                  </div>

                  <div style={{ padding: '1.25rem', backgroundColor: 'var(--color-surface-low)', borderRadius: 'var(--radius-sm)' }}>
                    <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--color-primary-dark)' }}>
                      Complimentary Atelier Spa
                    </h4>
                    <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: 'var(--color-charcoal)' }}>
                      We offer lifetime stone tightening and low-cost 22k replating servicing for all Enchantique creations at our Kochi studio.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 2. Size Guide */}
            {helpSubTab === 'size' && (
              <div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginBottom: '1rem' }}>
                  Traditional Indian Bangle & Ring Size Guide
                </h2>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-on-surface-variant)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  Find your perfect fit before ordering. If you are unsure between two sizes, we recommend sizing up.
                </p>

                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                  Bangle Size Chart
                </h3>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem', marginBottom: '2rem' }}>
                  <thead>
                    <tr style={{ backgroundColor: 'var(--color-surface-container)' }}>
                      <th style={{ padding: '0.75rem', border: '1px solid var(--color-border)', textAlign: 'left' }}>Indian Size</th>
                      <th style={{ padding: '0.75rem', border: '1px solid var(--color-border)', textAlign: 'left' }}>Inner Diameter</th>
                      <th style={{ padding: '0.75rem', border: '1px solid var(--color-border)', textAlign: 'left' }}>Inner Circumference</th>
                      <th style={{ padding: '0.75rem', border: '1px solid var(--color-border)', textAlign: 'left' }}>Recommendation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: '0.75rem', border: '1px solid var(--color-border)', fontWeight: 700 }}>2.4</td>
                      <td style={{ padding: '0.75rem', border: '1px solid var(--color-border)' }}>2.25" (5.7 cm)</td>
                      <td style={{ padding: '0.75rem', border: '1px solid var(--color-border)' }}>7.06" (17.9 cm)</td>
                      <td style={{ padding: '0.75rem', border: '1px solid var(--color-border)' }}>Small / Petite wrists</td>
                    </tr>
                    <tr style={{ backgroundColor: 'var(--color-surface-low)' }}>
                      <td style={{ padding: '0.75rem', border: '1px solid var(--color-border)', fontWeight: 700 }}>2.6</td>
                      <td style={{ padding: '0.75rem', border: '1px solid var(--color-border)' }}>2.375" (6.0 cm)</td>
                      <td style={{ padding: '0.75rem', border: '1px solid var(--color-border)' }}>7.46" (18.9 cm)</td>
                      <td style={{ padding: '0.75rem', border: '1px solid var(--color-border)' }}>Medium (Most Common)</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '0.75rem', border: '1px solid var(--color-border)', fontWeight: 700 }}>2.8</td>
                      <td style={{ padding: '0.75rem', border: '1px solid var(--color-border)' }}>2.50" (6.35 cm)</td>
                      <td style={{ padding: '0.75rem', border: '1px solid var(--color-border)' }}>7.85" (19.9 cm)</td>
                      <td style={{ padding: '0.75rem', border: '1px solid var(--color-border)' }}>Large wrists</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {/* 3. Shipping & Delivery */}
            {helpSubTab === 'shipping' && (
              <div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginBottom: '1rem' }}>
                  Shipping, Transit Times & Pan-India COD
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--color-on-surface-variant)' }}>
                  <div style={{ padding: '1rem', backgroundColor: 'var(--color-primary-tint)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-primary-light)' }}>
                    <strong style={{ display: 'block', color: 'var(--color-primary-dark)', fontSize: '1rem', marginBottom: '0.25rem' }}>
                      Free Express Shipping Above ₹1,999
                    </strong>
                    All orders exceeding ₹1,999 receive automatic complimentary express shipping with tamper-evident transit seals and full insurance against loss or transit damage.
                  </div>

                  <p>
                    <strong>Kerala Express Deliveries (Kochi, Trivandrum, Calicut, Thrissur):</strong><br />
                    Ready-to-ship catalog items are dispatched within 24 hours. Delivery takes 1 to 2 business days via dedicated regional courier partners.
                  </p>

                  <p>
                    <strong>Rest of India (Bangalore, Chennai, Mumbai, Delhi, Hyderabad):</strong><br />
                    Dispatched within 24 hours via Bluedart Express or Delhivery Air. Estimated arrival is 3 to 4 business days.
                  </p>

                  <p>
                    <strong>Cash on Delivery (COD):</strong><br />
                    Available across 22,000+ Indian pincodes for orders up to ₹10,000. You may inspect the outer tamper-evident package before paying the courier associate via cash or UPI QR.
                  </p>
                </div>
              </div>
            )}

            {/* 4. Returns & Exchanges */}
            {helpSubTab === 'returns' && (
              <div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginBottom: '1rem' }}>
                  7-Day Hassle-Free Returns & Exchanges
                </h2>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-on-surface-variant)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  If you are not 100% in love with your purchase or require an exchange in size/variant, we make returns straightforward.
                </p>

                {isReturnRequested ? (
                  <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-surface-low)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                    <CheckCircle2 size={44} style={{ color: '#2e7d32', margin: '0 auto 0.75rem' }} />
                    <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', marginBottom: '0.35rem' }}>
                      Return Request Initiated
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-secondary)' }}>
                      Our reverse courier partner will contact you to pick up the parcel from your address within 48 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleReturnSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1.5rem', backgroundColor: 'var(--color-surface-low)', borderRadius: 'var(--radius-md)' }}>
                    <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem' }}>
                      Initiate a Return or Exchange
                    </h4>
                    <div>
                      <label className="form-label">Order ID (e.g. ENC-849201) *</label>
                      <input
                        type="text"
                        required
                        placeholder="ENC-XXXXXX"
                        value={returnOrderId}
                        onChange={(e) => setReturnOrderId(e.target.value)}
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="form-label">Reason for Return / Exchange</label>
                      <select
                        value={returnReason}
                        onChange={(e) => setReturnReason(e.target.value)}
                        className="form-input"
                      >
                        <option value="Size does not fit">Size does not fit (Need Exchange)</option>
                        <option value="Color differs from expectation">Color differs from expectation</option>
                        <option value="Transit package issue">Transit package issue</option>
                        <option value="Changed mind">Changed mind</option>
                      </select>
                    </div>
                    <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start', padding: '0.75rem 1.5rem' }}>
                      Submit Return Request
                    </button>
                  </form>
                )}
              </div>
            )}

            {/* 5. FAQs */}
            {helpSubTab === 'faq' && (
              <div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginBottom: '1.5rem' }}>
                  Frequently Asked Questions
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      style={{
                        padding: '1rem',
                        backgroundColor: 'var(--color-surface-low)',
                        borderRadius: 'var(--radius-sm)',
                        cursor: 'pointer'
                      }}
                    >
                      <summary style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--color-charcoal)', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
            )}

            {/* 6. Contact Form */}
            {helpSubTab === 'contact' && (
              <div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginBottom: '1rem' }}>
                  Connect with our Kochi Concierge
                </h2>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-on-surface-variant)', lineHeight: 1.7, marginBottom: '2rem' }}>
                  We are here to assist you with styling questions, order tracking, bridal customizations, or scheduling a visit to our Marine Drive atelier.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2.5rem' }} className="contact-grid">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.85rem' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <MapPin size={18} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }} />
                      <span>{STORE_INFO.location}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Phone size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                      <span>{STORE_INFO.phone} (WhatsApp Concierge)</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Mail size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                      <span>{STORE_INFO.email}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Clock size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                      <span>Mon - Sat: 10:00 AM - 7:30 PM IST</span>
                    </div>
                  </div>

                  {isContactSent ? (
                    <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-surface-low)', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
                      <CheckCircle2 size={36} style={{ color: '#2e7d32', margin: '0 auto 0.5rem' }} />
                      <strong style={{ display: 'block' }}>Message Received</strong>
                      <span style={{ fontSize: '0.8rem', color: 'var(--color-secondary)' }}>
                        Our stylist will get back to you within 2 business hours.
                      </span>
                    </div>
                  ) : (
                    <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      <input
                        type="text"
                        required
                        placeholder="Your Name *"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        className="form-input"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="WhatsApp / Phone Number *"
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        className="form-input"
                      />
                      <textarea
                        rows={3}
                        required
                        placeholder="Your inquiry or styling requirement..."
                        value={contactMessage}
                        onChange={(e) => setContactMessage(e.target.value)}
                        className="form-input"
                      />
                      <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start', padding: '0.75rem 1.5rem' }}>
                        Send Message <Send size={14} />
                      </button>
                    </form>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .help-grid {
            grid-template-columns: 1fr !important;
          }
          .care-grid {
            grid-template-columns: 1fr !important;
          }
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
