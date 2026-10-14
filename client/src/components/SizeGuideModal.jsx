import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { X, Ruler, HelpCircle } from 'lucide-react';

export const SizeGuideModal = () => {
  const { isSizeGuideOpen, setIsSizeGuideOpen } = useShop();
  const [activeTab, setActiveTab] = useState('bangles');

  if (!isSizeGuideOpen) return null;

  return (
    <div className="drawer-backdrop" onClick={() => setIsSizeGuideOpen(false)}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '90%',
          maxWidth: '620px',
          margin: '3rem auto',
          backgroundColor: 'var(--color-surface)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-elevated)',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '85vh'
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
            <Ruler size={20} style={{ color: 'var(--color-primary)' }} />
            <span style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.25rem',
              fontWeight: 600,
              color: 'var(--color-obsidian)'
            }}>
              Jewellery Sizing Guide
            </span>
          </div>
          <button onClick={() => setIsSizeGuideOpen(false)} style={{ color: 'var(--color-charcoal)' }}>
            <X size={20} />
          </button>
        </div>

        {/* Tab switchers */}
        <div style={{
          display: 'flex',
          borderBottom: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-surface-low)'
        }}>
          <button
            onClick={() => setActiveTab('bangles')}
            style={{
              flex: 1,
              padding: '0.75rem',
              fontWeight: 700,
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: activeTab === 'bangles' ? 'var(--color-primary-dark)' : 'var(--color-secondary)',
              borderBottom: activeTab === 'bangles' ? '2px solid var(--color-primary)' : 'none',
              backgroundColor: activeTab === 'bangles' ? 'var(--color-surface)' : 'transparent'
            }}
          >
            Bangle Sizes
          </button>
          <button
            onClick={() => setActiveTab('rings')}
            style={{
              flex: 1,
              padding: '0.75rem',
              fontWeight: 700,
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: activeTab === 'rings' ? 'var(--color-primary-dark)' : 'var(--color-secondary)',
              borderBottom: activeTab === 'rings' ? '2px solid var(--color-primary)' : 'none',
              backgroundColor: activeTab === 'rings' ? 'var(--color-surface)' : 'transparent'
            }}
          >
            Ring Sizes
          </button>
          <button
            onClick={() => setActiveTab('necklaces')}
            style={{
              flex: 1,
              padding: '0.75rem',
              fontWeight: 700,
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: activeTab === 'necklaces' ? 'var(--color-primary-dark)' : 'var(--color-secondary)',
              borderBottom: activeTab === 'necklaces' ? '2px solid var(--color-primary)' : 'none',
              backgroundColor: activeTab === 'necklaces' ? 'var(--color-surface)' : 'transparent'
            }}
          >
            Necklace Lengths
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '1.5rem', overflowY: 'auto' }}>
          {activeTab === 'bangles' && (
            <div>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', marginBottom: '0.5rem' }}>
                Traditional Indian Bangle Sizing
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-on-surface-variant)', marginBottom: '1rem' }}>
                Measure the inner diameter of a bangle that fits you well using a ruler in inches or centimeters.
              </p>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem', textAlign: 'left' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-surface-container)' }}>
                    <th style={{ padding: '0.6rem', border: '1px solid var(--color-border)' }}>Indian Size</th>
                    <th style={{ padding: '0.6rem', border: '1px solid var(--color-border)' }}>Inner Diameter (Inches)</th>
                    <th style={{ padding: '0.6rem', border: '1px solid var(--color-border)' }}>Inner Diameter (cm)</th>
                    <th style={{ padding: '0.6rem', border: '1px solid var(--color-border)' }}>Best Fit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '0.6rem', border: '1px solid var(--color-border)', fontWeight: 600 }}>2.4</td>
                    <td style={{ padding: '0.6rem', border: '1px solid var(--color-border)' }}>2.25 in</td>
                    <td style={{ padding: '0.6rem', border: '1px solid var(--color-border)' }}>5.72 cm</td>
                    <td style={{ padding: '0.6rem', border: '1px solid var(--color-border)' }}>Small / Petite wrists</td>
                  </tr>
                  <tr style={{ backgroundColor: 'var(--color-surface-low)' }}>
                    <td style={{ padding: '0.6rem', border: '1px solid var(--color-border)', fontWeight: 600 }}>2.6</td>
                    <td style={{ padding: '0.6rem', border: '1px solid var(--color-border)' }}>2.375 in</td>
                    <td style={{ padding: '0.6rem', border: '1px solid var(--color-border)' }}>6.03 cm</td>
                    <td style={{ padding: '0.6rem', border: '1px solid var(--color-border)' }}>Standard Medium (Most Popular)</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.6rem', border: '1px solid var(--color-border)', fontWeight: 600 }}>2.8</td>
                    <td style={{ padding: '0.6rem', border: '1px solid var(--color-border)' }}>2.50 in</td>
                    <td style={{ padding: '0.6rem', border: '1px solid var(--color-border)' }}>6.35 cm</td>
                    <td style={{ padding: '0.6rem', border: '1px solid var(--color-border)' }}>Large wrists</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'rings' && (
            <div>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', marginBottom: '0.5rem' }}>
                Indian & International Ring Sizes
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-on-surface-variant)', marginBottom: '1rem' }}>
                Wrap a narrow strip of paper around your finger base, mark the overlap point, and measure in millimeters.
              </p>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem', textAlign: 'left' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-surface-container)' }}>
                    <th style={{ padding: '0.6rem', border: '1px solid var(--color-border)' }}>Indian Size</th>
                    <th style={{ padding: '0.6rem', border: '1px solid var(--color-border)' }}>US Equivalent</th>
                    <th style={{ padding: '0.6rem', border: '1px solid var(--color-border)' }}>Inner Circumference (mm)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '0.6rem', border: '1px solid var(--color-border)', fontWeight: 600 }}>Size 12</td>
                    <td style={{ padding: '0.6rem', border: '1px solid var(--color-border)' }}>US 6</td>
                    <td style={{ padding: '0.6rem', border: '1px solid var(--color-border)' }}>51.8 mm</td>
                  </tr>
                  <tr style={{ backgroundColor: 'var(--color-surface-low)' }}>
                    <td style={{ padding: '0.6rem', border: '1px solid var(--color-border)', fontWeight: 600 }}>Size 14</td>
                    <td style={{ padding: '0.6rem', border: '1px solid var(--color-border)' }}>US 7</td>
                    <td style={{ padding: '0.6rem', border: '1px solid var(--color-border)' }}>54.4 mm</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.6rem', border: '1px solid var(--color-border)', fontWeight: 600 }}>Size 16</td>
                    <td style={{ padding: '0.6rem', border: '1px solid var(--color-border)' }}>US 8</td>
                    <td style={{ padding: '0.6rem', border: '1px solid var(--color-border)' }}>57.0 mm</td>
                  </tr>
                  <tr style={{ backgroundColor: 'var(--color-surface-low)' }}>
                    <td style={{ padding: '0.6rem', border: '1px solid var(--color-border)', fontWeight: 600 }}>Size 18</td>
                    <td style={{ padding: '0.6rem', border: '1px solid var(--color-border)' }}>US 9</td>
                    <td style={{ padding: '0.6rem', border: '1px solid var(--color-border)' }}>59.5 mm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'necklaces' && (
            <div>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', marginBottom: '0.5rem' }}>
                Necklace Length & Bridal Layering Map
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-on-surface-variant)', marginBottom: '1rem' }}>
                All Enchantique necklaces feature adjustable golden zari dori cords allowing you to raise or lower the necklace by 3 to 4 inches.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem' }}>
                <div style={{ padding: '0.75rem', backgroundColor: 'var(--color-surface-low)', borderRadius: 'var(--radius-sm)' }}>
                  <strong>14" - 16" (Collar / Choker):</strong> Sits close around the collarbone. Ideal for Kasavu saree boat necks and sweetheart blouses.
                </div>
                <div style={{ padding: '0.75rem', backgroundColor: 'var(--color-surface-low)', borderRadius: 'var(--radius-sm)' }}>
                  <strong>18" - 20" (Princess / Mid):</strong> Rests just below the collarbone. Perfect for peacock temple pendants.
                </div>
                <div style={{ padding: '0.75rem', backgroundColor: 'var(--color-surface-low)', borderRadius: 'var(--radius-sm)' }}>
                  <strong>24" - 30" (Matinee / Rani Haar):</strong> Falls across the center of bustline. Essential for full South Indian bridal layering.
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid var(--color-border)', backgroundColor: 'var(--color-surface-white)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--color-secondary)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <HelpCircle size={14} /> Need help? Message our stylist on WhatsApp for sizing advice.
          </span>
          <button onClick={() => setIsSizeGuideOpen(false)} className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}>
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
