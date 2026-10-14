import React from 'react';
import { useShop } from '../context/ShopContext';
import { JOURNAL_POSTS, STORE_INFO } from '../data/mockData';
import {
  Clock,
  Calendar,
  ArrowRight,
  ArrowLeft,
  Share2,
  Sparkles,
  Bookmark
} from 'lucide-react';

export const JournalPage = () => {
  const { selectedArticleId, setSelectedArticleId, navigate, showToast } = useShop();

  const currentArticle = JOURNAL_POSTS.find(p => p.id === selectedArticleId);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: currentArticle?.title || 'Enchantique Heritage Journal',
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast('Article link copied to clipboard ✨');
    }
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      {/* If Viewing Specific Article */}
      {selectedArticleId && currentArticle ? (
        <article className="container" style={{ maxWidth: '840px', margin: '0 auto', paddingTop: '1.5rem' }}>
          {/* Back button */}
          <button
            onClick={() => setSelectedArticleId(null)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.8125rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--color-primary-dark)',
              marginBottom: '1.5rem'
            }}
          >
            <ArrowLeft size={16} /> Back to All Articles
          </button>

          {/* Article Header */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', fontSize: '0.75rem' }}>
              <span className="badge-gold">{currentArticle.category}</span>
              <span style={{ color: 'var(--color-secondary)' }}>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--color-secondary)' }}>
                <Clock size={13} /> {currentArticle.readTime}
              </span>
              <span style={{ color: 'var(--color-secondary)' }}>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--color-secondary)' }}>
                <Calendar size={13} /> {currentArticle.date}
              </span>
            </div>

            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 2.8rem)', lineHeight: 1.25, color: 'var(--color-charcoal)', marginBottom: '1rem' }}>
              {currentArticle.title}
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border)', paddingBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-charcoal)', fontWeight: 600 }}>
                  By Devika R. Nambiar • Master Stylist, Enchantique
                </span>
              </div>
              <button onClick={handleShare} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', color: 'var(--color-primary-dark)', fontWeight: 600 }}>
                <Share2 size={16} /> Share
              </button>
            </div>
          </div>

          {/* Cover Image */}
          <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '420px', marginBottom: '2.5rem', boxShadow: 'var(--shadow-card)' }}>
            <img src={currentArticle.image} alt={currentArticle.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          {/* Body Content */}
          <div style={{ fontSize: '1.05rem', color: 'var(--color-on-surface-variant)', lineHeight: 1.85, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {currentArticle.content.split('\n\n').map((paragraph, idx) => {
              const trimmed = paragraph.trim();
              if (trimmed.startsWith('### ')) {
                return (
                  <h3 key={idx} style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--color-charcoal)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
                    {trimmed.replace('### ', '')}
                  </h3>
                );
              }
              return (
                <p key={idx}>
                  {trimmed}
                </p>
              );
            })}
          </div>

          {/* In-Article Atelier Product Recommendation */}
          <div style={{
            marginTop: '3rem',
            padding: '2rem',
            backgroundColor: 'var(--color-surface-low)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem'
          }}>
            <div>
              <span className="badge-gold" style={{ marginBottom: '0.35rem' }}>Featured in This Guide</span>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', marginBottom: '0.25rem' }}>
                Padmavathi Grand Kundan & Pearl Choker Set
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-secondary)' }}>
                Handcrafted with 24k gold foil and natural freshwater pearls.
              </p>
            </div>
            <button onClick={() => navigate('product', 'ench-001')} className="btn-primary" style={{ padding: '0.75rem 1.4rem', fontSize: '0.8rem' }}>
              Shop This Creation <ArrowRight size={14} />
            </button>
          </div>
        </article>
      ) : (
        /* Blog Index Listing View */
        <>
          <section style={{
            position: 'relative',
            backgroundColor: 'var(--color-surface-white)',
            borderBottom: '1px solid var(--color-border)',
            padding: '3rem 0'
          }}>
            <div className="container" style={{ textAlign: 'center', maxWidth: '640px' }}>
              <span className="badge-gold" style={{ marginBottom: '0.5rem' }}>The Atelier Journal</span>
              <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.6rem', marginBottom: '0.75rem' }}>
                Stories, Care Guides & Styling
              </h1>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-on-surface-variant)', lineHeight: 1.6 }}>
                Expert advice on caring for Kundan in tropical weather, Moissanite certification guides, and traditional Kerala bridal jewellery checklists.
              </p>
            </div>
          </section>

          <section className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2rem'
            }} className="journal-grid">
              {JOURNAL_POSTS.map(post => (
                <article
                  key={post.id}
                  onClick={() => setSelectedArticleId(post.id)}
                  className="luxury-card"
                  style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
                >
                  <div style={{ height: '220px', overflow: 'hidden', backgroundColor: 'var(--color-surface-container)' }}>
                    <img
                      src={post.image}
                      alt={post.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                  </div>

                  <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.75rem', color: 'var(--color-primary-dark)' }}>
                        <span style={{ fontWeight: 700, textTransform: 'uppercase' }}>{post.category}</span>
                        <span>•</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--color-secondary)' }}>
                          <Clock size={12} /> {post.readTime}
                        </span>
                      </div>

                      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', lineHeight: 1.35, marginBottom: '0.75rem' }}>
                        {post.title}
                      </h3>

                      <p style={{ fontSize: '0.85rem', color: 'var(--color-on-surface-variant)', lineHeight: 1.6 }}>
                        {post.excerpt}
                      </p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '1.25rem', color: 'var(--color-primary-dark)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' }}>
                      <span>Read Full Guide</span> <ArrowRight size={13} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </>
      )}

      <style>{`
        @media (max-width: 900px) {
          .journal-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
