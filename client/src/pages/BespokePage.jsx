import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { STORE_INFO, BESPOKE_CAPABILITIES } from '../data/mockData';
import {
  Wand2,
  Sparkles,
  Upload,
  Calendar,
  CheckCircle2,
  Phone,
  ArrowRight,
  ShieldCheck,
  HelpCircle,
  ChevronDown
} from 'lucide-react';

export const BespokePage = () => {
  const { showToast } = useShop();

  const [activeCategory, setActiveCategory] = useState('bridal');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    occasion: 'Bridal / Wedding Trousseau',
    eventDate: '',
    budgetRange: '₹15,000 - ₹35,000',
    preferredMaterials: ['Kundan', 'Moissanite'],
    message: '',
    referencePhotoName: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const selectedCapability = BESPOKE_CAPABILITIES.find(c => c.id === activeCategory) || BESPOKE_CAPABILITIES[0];

  const handleMaterialToggle = (mat) => {
    setFormData(prev => {
      const exists = prev.preferredMaterials.includes(mat);
      return {
        ...prev,
        preferredMaterials: exists
          ? prev.preferredMaterials.filter(m => m !== mat)
          : [...prev.preferredMaterials, mat]
      };
    });
  };

  const handlePhotoUploadSim = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, referencePhotoName: file.name }));
      showToast(`Uploaded reference image: ${file.name}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    showToast('Your bespoke enquiry has been sent to our master stylist ✨');
  };

  const handleWhatsAppInstant = () => {
    const text = encodeURIComponent(
      `Hello Enchantique Atelier! I would like to commission a bespoke custom jewellery piece.\n\nName: ${formData.fullName || 'Client'}\nOccasion: ${formData.occasion}\nEvent Date: ${formData.eventDate || 'Flexible'}\nBudget: ${formData.budgetRange}\nPreferred: ${formData.preferredMaterials.join(', ')}\nDetails: ${formData.message || 'Looking for recommendations.'}`
    );
    window.open(`https://wa.me/${STORE_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
      {/* 1. Atelier Hero Banner */}
      <section style={{
        position: 'relative',
        backgroundColor: 'var(--color-surface-white)',
        borderBottom: '1px solid var(--color-border)',
        padding: '3.5rem 0'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '3rem',
            alignItems: 'center'
          }} className="bespoke-hero-grid">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span className="badge-gold">
                  <Wand2 size={12} /> Enchantique Haute Atelier
                </span>
                <span style={{ fontSize: '0.75rem', fontStyle: 'italic', color: 'var(--color-primary-dark)' }}>
                  {STORE_INFO.motto}
                </span>
              </div>
              <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', lineHeight: 1.15, marginBottom: '0.75rem' }}>
                Design Something That Is Truly Yours
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-primary-dark)', fontWeight: 600, marginBottom: '0.5rem' }}>
                നിങ്ങളുടെ സ്വപ്നങ്ങളിലെ ആഭരണം ഞങ്ങൾ നിർമ്മിക്കുന്നു
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-on-surface-variant)', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: '540px' }}>
                From matching your bridal jewellery set with your wedding saree palette, to recreating vintage ancestral heirlooms in certified moissanite, freshwater pearls, and uncut Kundan.
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href="#commission-form" className="btn-primary" style={{ padding: '0.85rem 1.6rem' }}>
                  Start Bespoke Consultation
                </a>
                <button onClick={handleWhatsAppInstant} className="btn-secondary" style={{ padding: '0.85rem 1.6rem', color: '#2e7d32', borderColor: '#2e7d32' }}>
                  <Phone size={16} /> Instant WhatsApp Stylist
                </button>
              </div>
            </div>

            {/* Visual Atelier Showcase */}
            <div style={{
              position: 'relative',
              height: '360px',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-card)'
            }}>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDciBed4Vvw2Dg3NVbm8cXQmWwbFPxrNJChdTZ45E_bmAlOAM-tU0R2jSbaBnb36huuAQo8RYcobiG60QwO1Cypu_SP1ns267p7pKCtvwXtlm6trmb3RcCzrVl3wEbKG0XRi0DTKaLG-49Q8hLeb3ejyJ-tCU36srixg2omHQMB3CBCi6ASfu_OTDR40qPzatWGNPJXTpBG1GxYjrw_YMsDAdMx_MI4fpPwJx3xhAk4xmwnJRm15Gew"
                alt="Kerala artisan setting gemstones with precision loupe in Kochi atelier"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                bottom: '1rem',
                left: '1rem',
                right: '1rem',
                backgroundColor: 'rgba(18,18,18,0.85)',
                color: '#ffffff',
                backdropFilter: 'blur(8px)',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.75rem'
              }}>
                <span>Cochin Atelier No. 12 • Traditional Thattikootal & Polki Setting</span>
                <span style={{ color: 'var(--color-primary-fixed)' }}>1:1 CAD Preview</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Pill Tabs: What We Customise */}
      <section className="container">
        <div style={{ textAlign: 'center', maxWidth: '540px', margin: '0 auto 2rem' }}>
          <span className="badge-gold" style={{ marginBottom: '0.5rem' }}>Bespoke Capabilities</span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', marginBottom: '0.5rem' }}>
            What We Customise For You
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-on-surface-variant)' }}>
            Every custom commission receives 3D digital CAD renders and physical gemstone selection before handcrafting.
          </p>
        </div>

        {/* Category Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
          {BESPOKE_CAPABILITIES.map(cap => (
            <button
              key={cap.id}
              onClick={() => setActiveCategory(cap.id)}
              style={{
                padding: '0.65rem 1.25rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.8125rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                border: activeCategory === cap.id ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                backgroundColor: activeCategory === cap.id ? 'var(--color-obsidian)' : 'var(--color-surface-white)',
                color: activeCategory === cap.id ? 'var(--color-surface)' : 'var(--color-charcoal)',
                transition: 'all 0.25s'
              }}
            >
              {cap.title.split('&')[0]}
            </button>
          ))}
        </div>

        {/* Dynamic Context Card */}
        <div style={{
          backgroundColor: 'var(--color-surface-white)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--color-border)',
          padding: '2rem',
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '2rem',
          alignItems: 'center',
          boxShadow: 'var(--shadow-subtle)'
        }} className="bespoke-card-grid">
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-primary-dark)', letterSpacing: '0.1em' }}>
              Custom Category Showcase
            </span>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginTop: '0.35rem', marginBottom: '0.75rem' }}>
              {selectedCapability.title}
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-on-surface-variant)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              {selectedCapability.desc}
            </p>
            <div style={{ padding: '0.75rem 1rem', backgroundColor: 'var(--color-surface-low)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', display: 'inline-block' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-primary-dark)' }}>
                ⚡ {selectedCapability.spec}
              </span>
            </div>
          </div>

          <div style={{ height: '240px', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
            <img src={selectedCapability.image} alt={selectedCapability.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* 3. The 4-Step Bespoke Journey */}
      <section className="container">
        <div style={{ textAlign: 'center', maxWidth: '540px', margin: '0 auto 2.5rem' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', marginBottom: '0.5rem' }}>
            The 4-Step Bespoke Journey
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-on-surface-variant)' }}>
            Transparent, collaborative, and communicative at every milestone.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.5rem'
        }} className="steps-grid">
          <div style={{ backgroundColor: 'var(--color-surface-white)', padding: '1.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: 'var(--color-primary-tint)', color: 'var(--color-primary-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1rem', marginBottom: '1rem' }}>
              1
            </div>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
              Share Your Vision
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-secondary)', lineHeight: 1.5 }}>
              Upload sketches, Pinterest inspirations, or family heirloom photos along with your bridal saree palette.
            </p>
          </div>

          <div style={{ backgroundColor: 'var(--color-surface-white)', padding: '1.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: 'var(--color-primary-tint)', color: 'var(--color-primary-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1rem', marginBottom: '1rem' }}>
              2
            </div>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
              Design & Quote
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-secondary)', lineHeight: 1.5 }}>
              Receive a 3D digital CAD preview or hand-sketch with an itemized, transparent cost breakdown. Includes 1 free design revision.
            </p>
          </div>

          <div style={{ backgroundColor: 'var(--color-surface-white)', padding: '1.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: 'var(--color-primary-tint)', color: 'var(--color-primary-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1rem', marginBottom: '1rem' }}>
              3
            </div>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
              Approve & Deposit
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-secondary)', lineHeight: 1.5 }}>
              Confirm your commission with a 30% advance deposit. Master karigars begin handcrafting and stone setting in Kochi.
            </p>
          </div>

          <div style={{ backgroundColor: 'var(--color-surface-white)', padding: '1.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: 'var(--color-primary-tint)', color: 'var(--color-primary-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1rem', marginBottom: '1rem' }}>
              4
            </div>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
              Receive Your Jewel
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-secondary)', lineHeight: 1.5 }}>
              Delivered in 14-21 days in our signature royal emerald velvet gift box, fully insured pan-India.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Interactive Bespoke Commission Enquiry Form */}
      <section id="commission-form" className="container">
        <div style={{
          backgroundColor: 'var(--color-surface-white)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--color-border)',
          padding: '3rem',
          maxWidth: '820px',
          margin: '0 auto',
          boxShadow: 'var(--shadow-card)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="badge-gold" style={{ marginBottom: '0.5rem' }}>Direct Atelier Enquiry</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', marginBottom: '0.5rem' }}>
              Bespoke Commission Consultation Form
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-secondary)' }}>
              Fill in your details and requirements. Our lead jewellery designer will connect with you via WhatsApp within 4 business hours.
            </p>
          </div>

          {isSubmitted ? (
            <div style={{
              textAlign: 'center',
              padding: '3rem 1.5rem',
              backgroundColor: 'var(--color-surface-low)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)'
            }}>
              <CheckCircle2 size={54} style={{ color: '#2e7d32', margin: '0 auto 1rem' }} />
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', marginBottom: '0.5rem' }}>
                Thank you, {formData.fullName || 'Valued Client'}!
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-on-surface-variant)', maxWidth: '440px', margin: '0 auto 1.5rem', lineHeight: 1.6 }}>
                Your bespoke commission details for <strong>{formData.occasion}</strong> have been received. We will message you on WhatsApp (<strong>{formData.phone}</strong>) with initial sketch ideas and stone recommendations.
              </p>
              <button onClick={handleWhatsAppInstant} className="btn-gold">
                <Phone size={16} /> Open Immediate WhatsApp Chat
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Name & Phone */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="form-row-2">
                <div>
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anjali Menon"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="form-label">WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              {/* Email & Occasion */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="form-row-2">
                <div>
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. anjali@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="form-label">Occasion / Celebration</label>
                  <select
                    value={formData.occasion}
                    onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                    className="form-input"
                  >
                    <option value="Bridal / Wedding Trousseau">Bridal / Wedding Trousseau</option>
                    <option value="Engagement / Proposal Ring">Engagement / Proposal Ring</option>
                    <option value="Onam / Vishu Festival Edit">Onam / Vishu Festival Edit</option>
                    <option value="Anniversary / Milestone Gift">Anniversary / Milestone Gift</option>
                    <option value="Heirloom Restoration / Replica">Heirloom Restoration / Replica</option>
                  </select>
                </div>
              </div>

              {/* Event Date & Budget Range */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="form-row-2">
                <div>
                  <label className="form-label">Target Delivery / Event Date</label>
                  <input
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="form-label">Target Budget Range</label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="form-input"
                  >
                    <option value="Under ₹15,000">Under ₹15,000</option>
                    <option value="₹15,000 - ₹35,000">₹15,000 - ₹35,000 (Most Popular)</option>
                    <option value="₹35,000 - ₹75,000">₹35,000 - ₹75,000</option>
                    <option value="Above ₹75,000">Above ₹75,000 (Haute Bridal Suite)</option>
                  </select>
                </div>
              </div>

              {/* Preferred Materials Checkboxes */}
              <div>
                <label className="form-label">Preferred Materials</label>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  {['Kundan & Jadau', 'Certified Moissanite', 'Freshwater Pearls', 'Carved Gemstones', 'Antique Temple Gold'].map(mat => (
                    <label key={mat} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', cursor: 'pointer', backgroundColor: 'var(--color-surface-low)', padding: '0.4rem 0.75rem', borderRadius: 'var(--radius-sm)' }}>
                      <input
                        type="checkbox"
                        checked={formData.preferredMaterials.includes(mat)}
                        onChange={() => handleMaterialToggle(mat)}
                        style={{ accentColor: 'var(--color-primary)' }}
                      />
                      <span>{mat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Reference Photo Upload Simulation */}
              <div>
                <label className="form-label">Upload Reference Photo / Sketch (Optional)</label>
                <div style={{
                  border: '2px dashed var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.5rem',
                  textAlign: 'center',
                  backgroundColor: 'var(--color-surface-low)',
                  cursor: 'pointer'
                }}>
                  <Upload size={24} style={{ color: 'var(--color-primary)', margin: '0 auto 0.5rem' }} />
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-charcoal)', marginBottom: '0.25rem' }}>
                    {formData.referencePhotoName || 'Drag & drop your jewellery photo, Pinterest screenshot, or bridal attire swatch'}
                  </p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUploadSim}
                    style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="form-label">Specific Details / Customization Notes</label>
                <textarea
                  rows={4}
                  placeholder="Describe your desired piece, gemstone colors, length or wrist size, and any special symbolism..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="form-input"
                />
              </div>

              {/* Submit CTA */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <button type="submit" className="btn-primary" style={{ padding: '0.9rem 2rem' }}>
                  Submit Custom Commission Request <ArrowRight size={16} />
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppInstant}
                  className="btn-secondary"
                  style={{ color: '#2e7d32', borderColor: '#2e7d32' }}
                >
                  <Phone size={16} /> Fast-Track on WhatsApp
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .bespoke-hero-grid {
            grid-template-columns: 1fr !important;
          }
          .bespoke-card-grid {
            grid-template-columns: 1fr !important;
          }
          .steps-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .steps-grid {
            grid-template-columns: 1fr !important;
          }
          .form-row-2 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
