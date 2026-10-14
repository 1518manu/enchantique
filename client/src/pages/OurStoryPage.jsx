import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { STORE_INFO } from '../data/mockData';
import {
  Sparkles,
  Heart,
  Award,
  ShieldCheck,
  MapPin,
  ArrowRight,
  Globe,
  CheckCircle2
} from 'lucide-react';

export const OurStoryPage = () => {
  const { navigate } = useShop();
  const [showMalayalam, setShowMalayalam] = useState(false);

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
      {/* 1. Story Hero Banner */}
      <section style={{
        position: 'relative',
        backgroundColor: 'var(--color-surface-white)',
        borderBottom: '1px solid var(--color-border)',
        padding: '3.5rem 0'
      }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
          <span className="badge-gold" style={{ marginBottom: '0.75rem' }}>The Maker & The Heritage</span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', lineHeight: 1.2, marginBottom: '1rem' }}>
            Handcrafted With Love in God's Own Country
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--color-primary-dark)', fontStyle: 'italic', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>
            "{STORE_INFO.mottoMalayalam}"
          </p>
          <p style={{ fontSize: '0.95rem', color: 'var(--color-on-surface-variant)', lineHeight: 1.8 }}>
            Born from a deep reverence for Kerala's timeless temple arts and the intimate emotion of bridal celebrations, Enchantique bridges ancestral South Indian craftsmanship with contemporary regal luxury.
          </p>
        </div>
      </section>

      {/* 2. Founder's Opening Letter with Bilingual Toggle */}
      <section className="container">
        <div style={{
          backgroundColor: 'var(--color-surface-low)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--color-border)',
          padding: '3rem',
          maxWidth: '860px',
          margin: '0 auto',
          boxShadow: 'var(--shadow-subtle)',
          position: 'relative'
        }}>
          {/* Language Toggle for Founder Letter */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
            <button
              onClick={() => setShowMalayalam(!showMalayalam)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--color-primary-dark)',
                backgroundColor: 'var(--color-surface-white)',
                padding: '0.35rem 0.75rem',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--color-border)'
              }}
            >
              <Globe size={13} />
              <span>{showMalayalam ? 'Read in English' : 'മലയാളത്തിൽ വായിക്കുക'}</span>
            </button>
          </div>

          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--color-charcoal)' }}>
            {showMalayalam ? 'സ്ഥാപകന്റെ കുറിപ്പ്: സ്നേഹത്തിന്റെ കരകൗശലം' : 'A Note from the Founder: Jewellery Made With Love'}
          </h2>

          {showMalayalam ? (
            <div style={{ fontSize: '0.95rem', color: 'var(--color-charcoal)', lineHeight: 1.9, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p>
                എന്റെ ബാല്യകാല ഓർമ്മകളിൽ ഏറ്റവും മനോഹരമായത്, എന്റെ മുത്തശ്ശി കസവു സാരിയുടുത്ത് ക്ഷേത്രത്തിലേക്ക് പോകുമ്പോൾ അണിഞ്ഞിരുന്ന പരമ്പരാഗത കുന്ദൻ, പാലയ്ക്കാമാല ആഭരണങ്ങളാണ്. കാലം മാറിയെങ്കിലും, ആ കൈവേലയുടെ ഗാംഭീര്യവും സ്നേഹവും ഇന്നും എന്നെ പ്രചോദിപ്പിക്കുന്നു.
              </p>
              <p>
                ഇന്നത്തെ കാലത്ത് ഫാക്ടറികളിൽ നിർമ്മിക്കുന്ന യന്ത്രനിർമ്മിത ആഭരണങ്ങളിൽ ആ ജീവനും സ്നേഹവും നഷ്ടപ്പെടുന്നു എന്ന് ഞാൻ തിരിച്ചറിഞ്ഞു. അങ്ങനെയാണ് കേരളത്തിലെ പാരമ്പര്യ തട്ടാന്മാരെയും കരകൗശല വിദഗ്ദ്ധരെയും ഒന്നിപ്പിച്ച് 'എൻചാന്റിക്ക്' എന്ന സംരംഭത്തിന് ഞങ്ങൾ കൊച്ചിയിൽ തുടക്കം കുറിച്ചത്.
              </p>
              <p>
                ഓരോ ആഭരണവും ഞങ്ങളുടെ സ്വന്തം കുടുംബത്തിലെ വധുവിന് വേണ്ടി നിർമ്മിക്കുന്നത് പോലെ ഹൃദയത്തിൽ തൊട്ടാണ് ഞങ്ങൾ തീർക്കുന്നത്. സ്നേഹത്തോടെ നിർമ്മിച്ച ഈ തിളക്കം നിങ്ങളുടെ ഓരോ ആഘോഷത്തിലും നിറഞ്ഞുനിൽക്കട്ടെ.
              </p>
            </div>
          ) : (
            <div style={{ fontSize: '0.95rem', color: 'var(--color-on-surface-variant)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p>
                Growing up in Kerala, some of my most luminous memories were watching my grandmother open her dark velvet jewellery box before temple festivals. The glow of antique 22k gold foil Kundan and natural pearls held more than beauty—they held generations of whispered prayers, love, and heirloom dignity.
              </p>
              <p>
                In an era dominated by cold, mass-produced machine jewellery, we founded <strong>Enchantique</strong> with a single devotion: to revive the soul of artisanal handmade jewellery in God's Own Country. Every piece is shaped by hereditary karigars in our Marine Drive Kochi atelier using skin-safe hypoallergenic alloys, 24k gold foiling, and certified gemstones.
              </p>
              <p>
                When you wear Enchantique, you aren't just wearing an ornament—you are wearing days of quiet patience, hereditary skill, and our atelier's promise: <em>Made with love</em>.
              </p>
            </div>
          )}

          <div style={{ marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <strong style={{ display: 'block', fontSize: '1rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)' }}>
                Devika R. Nambiar
              </strong>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-secondary)' }}>
                Founder & Creative Director • Enchantique Atelier
              </span>
            </div>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--color-primary-dark)' }}>
              Devika
            </span>
          </div>
        </div>
      </section>

      {/* 3. The Maker & Artisan Bio */}
      <section className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'center'
        }} className="maker-grid">
          <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '380px', boxShadow: 'var(--shadow-card)' }}>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBawogeuDN24LUSYiwnyun3rSPm-utVl138ng8PWtKKDqENCsgw6yf4WET42YRM1DkotLjkorWVvGpCeI6hwfr8syD6vlNlt86MX6z-l1LxEEJS5P2Y4LVmGfV7Ry-MzgAZQ7XZU6Cxn0rqAXp8oklciqq_PnxjH8BpFkmT-BNAOQnbSHny1c3FKjjmKS6OqrbhQwIM9Er0eiYNoVsqLbWthrbOlHNHVw2KqEf4pjm0ev1cQdGAxnOu"
              alt="Artisan Karigar at work in Enchantique Kochi workshop"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div>
            <span className="badge-gold" style={{ marginBottom: '0.5rem' }}>Master Karigars</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', marginBottom: '1rem' }}>
              The Hands Behind The Radiance
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-on-surface-variant)', lineHeight: 1.7, marginBottom: '1rem' }}>
              Meet <strong>Achary Kesavan</strong> and his team of 14 hereditary goldsmith karigars in Kochi. With techniques passed down over three generations, each piece undergoes traditional Jadau stone placement, micro-polki bezel crimping, and hand-strung pearl weaving.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-on-surface-variant)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              We ensure our artisans receive fair living wages, healthcare, safe well-ventilated workshops, and full creative credit for their artistry.
            </p>
            <div className="maker-stats-row" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <div>
                <strong style={{ display: 'block', fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-primary-dark)' }}>
                  38+ Years
                </strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-secondary)' }}>Master Artisan Experience</span>
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-primary-dark)' }}>
                  14 Artisans
                </strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-secondary)' }}>Full-Time in Kochi Studio</span>
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-primary-dark)' }}>
                  10,000+
                </strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-secondary)' }}>Heirlooms Handcrafted</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our 5-Step Process */}
      <section className="container">
        <div style={{ textAlign: 'center', maxWidth: '540px', margin: '0 auto 2.5rem' }}>
          <span className="badge-gold" style={{ marginBottom: '0.5rem' }}>Behind The Vitrine</span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', marginBottom: '0.5rem' }}>
            Our 5-Stage Handcrafting Journey
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '1rem'
        }} className="process-grid">
          {[
            { step: '01', title: 'Editorial Design', desc: 'Inspired by South Indian temple archives and Kerala bridal aesthetics.' },
            { step: '02', title: 'Ethical Sourcing', desc: 'Lab-certified Moissanite, natural freshwater pearls, and nickel-free brass.' },
            { step: '03', title: 'Jadau Setting', desc: 'Uncut polki gems encased in pure 24k gold foil cups with wooden tweezers.' },
            { step: '04', title: 'Nano-Lacquer QC', desc: '12-point inspection and anti-tarnish micro-lacquer sealing against humidity.' },
            { step: '05', title: 'Royal Vitrine Pack', desc: 'Emerald green velvet box, gold wax seal, and authenticity warranty card.' }
          ].map(p => (
            <div key={p.step} style={{ backgroundColor: 'var(--color-surface-white)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
              <span style={{ fontSize: '1.4rem', fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'var(--color-primary-dark)', display: 'block', marginBottom: '0.5rem' }}>
                {p.step}
              </span>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', marginBottom: '0.35rem' }}>
                {p.title}
              </h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-secondary)', lineHeight: 1.5 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Studio Visit & Kochi Roots */}
      <section className="container">
        <div style={{
          backgroundColor: 'var(--color-surface-highest)',
          borderRadius: 'var(--radius-lg)',
          padding: '3rem',
          border: '1px solid var(--color-border)',
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '2.5rem',
          alignItems: 'center'
        }} className="studio-visit-grid">
          <div>
            <span className="badge-gold" style={{ marginBottom: '0.75rem' }}>Visit Our Studio</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', marginBottom: '1rem' }}>
              Experience The Atelier in Marine Drive, Kochi
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-on-surface-variant)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Whether you are curating your full bridal trousseau or looking for bespoke custom consultation, we welcome brides and jewellery lovers to our private consultation lounge overlooking the Kochi backwaters.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={16} style={{ color: 'var(--color-primary)' }} />
                <span>Enchantique Atelier, Marine Drive, Kochi, Kerala 682031</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Sparkles size={16} style={{ color: 'var(--color-primary)' }} />
                <span>Mon - Sat: 10:00 AM - 7:30 PM (By Prior Appointment)</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button onClick={() => navigate('bespoke')} className="btn-primary">
                Book Consultation Appointment
              </button>
              <button onClick={() => navigate('shop')} className="btn-secondary">
                Shop Catalogue
              </button>
            </div>
          </div>

          <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', height: '280px', boxShadow: 'var(--shadow-card)' }}>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAm1VBZ4vrNQUL2JQc5kl036nPhDQbC19x3NbXwc7EewpRTb9K9pGe8g7w2kh4gWMgKTn34Fc7Ks4Tq4xdTvhEz_ULZktnIpWji1v_RQV4DVq73TjS1UZ_BdVo1wVtJeE51tmqyLDbioId8Q2dQAdbfHFt_QCaJnR6WYDK-MyxEet6HEQ4cnlNfSyI4KajiUGgVNkDMC4WGxlO0TSpgqzhKxf-O3hvZkCnYFZvPeBK1aw_SxtfiU8Yw"
              alt="Enchantique private bridal jewellery consultation lounge"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .maker-grid {
            grid-template-columns: 1fr !important;
          }
          .process-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .studio-visit-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .process-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
