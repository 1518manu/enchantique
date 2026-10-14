import React from 'react';
import { useShop } from '../context/ShopContext';
import { STORE_INFO, CATEGORIES, REVIEWS, JOURNAL_POSTS } from '../data/mockData';
import { Instagram } from '../components/SocialIcons';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  RotateCcw,
  Truck,
  Heart,
  ShoppingBag,
  Star,
  Check,
  Clock,
  ChevronRight,
  Award,
  Layers,
  Wand2
} from 'lucide-react';

export const HomePage = () => {
  const {
    products,
    navigate,
    addToCart,
    toggleWishlist,
    isInWishlist,
    language,
    setCategoryFilter
  } = useShop();

  const handleMaterialClick = (materialName) => {
    setCategoryFilter(prev => ({ ...prev, material: materialName }));
    navigate('shop');
  };

  const handleOccasionClick = (occasionId) => {
    setCategoryFilter(prev => ({ ...prev, occasion: occasionId }));
    navigate('shop');
  };

  const bestSellers = products.slice(0, 4);
  const newArrivals = products.slice(4, 8);

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
      {/* 1. Hero Banner: Editorial Haute Joaillerie */}
      <section style={{
        position: 'relative',
        width: '100%',
        minHeight: '560px',
        backgroundColor: 'var(--color-obsidian)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end',
        color: '#ffffff'
      }}>
        {/* Background Kasavu Bride Model Image */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBUC9NLw4P7oIoyFG9bd2rriX68hffTmb3iDYm5ZAPu3vg40ax_meYtMHgN3kdmI-G4rWFL8v6sNN2qoXOlHxLn1ptWJsVzpMPdYEvKUAjxsZUW39WxQmqPKa4pMJpGV7f1ARSQTzGdFuFr1DmAEhU8B1z_JvcDx0tCigbASaHWBEG6x1fDy3sf4_dKFHorxkr8tXWvXV5dJbVCsbjy9pTqXRjsQrnafjsTltYZIuxXmlYRKDLLDN2c')`,
          backgroundPosition: 'center 25%',
          backgroundSize: 'cover',
          transform: 'scale(1.02)'
        }} />

        {/* Gradient Scrim for Contrast & Editorial Readability */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(18,18,18,0.92) 0%, rgba(18,18,18,0.55) 50%, rgba(18,18,18,0.2) 100%)'
        }} />

        {/* Content Box */}
        <div className="container" style={{ position: 'relative', zIndex: 10, paddingBottom: '3.5rem', paddingTop: '5rem' }}>
          <div style={{ maxWidth: '640px' }}>
            {/* Atelier Crest Subtitle */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <span style={{ display: 'inline-block', width: '28px', height: '1px', backgroundColor: 'var(--color-primary-fixed)' }} />
              <span style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--color-primary-fixed)'
              }}>
                Enchantique Atelier • Kochi
              </span>
              <span style={{
                display: 'inline-block',
                width: '5px',
                height: '5px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-primary)'
              }} />
              <span style={{
                fontSize: '0.75rem',
                fontStyle: 'italic',
                fontFamily: 'var(--font-serif)',
                color: 'var(--color-primary-fixed)'
              }}>
                {STORE_INFO.motto}
              </span>
            </div>

            {/* Main Headline */}
            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              fontWeight: 400,
              lineHeight: 1.15,
              color: '#ffffff',
              marginBottom: '0.75rem',
              letterSpacing: '-0.02em'
            }}>
              Handmade Jewellery for Every Celebration
            </h1>

            {/* Bilingual Malayalam Tagline */}
            <p style={{
              fontSize: '1rem',
              color: 'var(--color-primary-fixed)',
              fontWeight: 500,
              marginBottom: '0.75rem',
              letterSpacing: '0.01em'
            }}>
              {STORE_INFO.mottoMalayalam}
            </p>

            <p style={{
              fontSize: '0.95rem',
              color: 'rgba(250, 249, 246, 0.85)',
              lineHeight: 1.6,
              marginBottom: '2rem',
              maxWidth: '520px'
            }}>
              Heirloom Kundan, freshwater pearls, certified moissanite, and carved gemstones handcrafted by Kerala's master karigars for your unforgettable moments.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => navigate('shop')}
                className="btn-gold"
                style={{ padding: '0.95rem 1.8rem', fontSize: '0.85rem' }}
              >
                Shop New Arrivals <ArrowRight size={16} />
              </button>

              <button
                onClick={() => navigate('bespoke')}
                className="btn-secondary"
                style={{
                  padding: '0.95rem 1.8rem',
                  fontSize: '0.85rem',
                  color: '#ffffff',
                  borderColor: 'rgba(255,255,255,0.6)',
                  background: 'rgba(255,255,255,0.15)'
                }}
              >
                <Sparkles size={16} style={{ color: 'var(--color-primary-fixed)' }} />
                Book Bridal Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Strip */}
      <section style={{ backgroundColor: 'var(--color-surface-low)', borderBottom: '1px solid var(--color-border)', padding: '1.25rem 0' }}>
        <div className="container trust-strip-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--color-primary-tint)',
              border: '1px solid var(--color-primary-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-primary-dark)',
              flexShrink: 0
            }}>
              <Award size={20} />
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-charcoal)' }}>
                Kerala Master Artisans
              </strong>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-secondary)' }}>
                100% Handcrafted with Love
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--color-primary-tint)',
              border: '1px solid var(--color-primary-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-primary-dark)',
              flexShrink: 0
            }}>
              <ShieldCheck size={20} />
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-charcoal)' }}>
                Certified Moissanite
              </strong>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-secondary)' }}>
                GRA Lab Hallmarked Cards
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--color-primary-tint)',
              border: '1px solid var(--color-primary-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-primary-dark)',
              flexShrink: 0
            }}>
              <RotateCcw size={20} />
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-charcoal)' }}>
                Easy 7-Day Returns
              </strong>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-secondary)' }}>
                Hassle-free guarantee
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--color-primary-tint)',
              border: '1px solid var(--color-primary-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-primary-dark)',
              flexShrink: 0
            }}>
              <Truck size={20} />
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-charcoal)' }}>
                Pan-India Express
              </strong>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-secondary)' }}>
                COD & Kerala 24h delivery
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Shop by Material: 4 Signature Tiles */}
      <section className="container">
        <div style={{ textAlign: 'center', maxWidth: '540px', margin: '0 auto 2.5rem' }}>
          <span style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            color: 'var(--color-primary-dark)',
            display: 'block',
            marginBottom: '0.35rem'
          }}>
            Treasured Elements
          </span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', marginBottom: '0.5rem' }}>
            Shop by Material
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-on-surface-variant)' }}>
            Master-crafted in our Kochi atelier with ethically sourced gemstones, pure gold foils, and freshwater pearls.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.5rem'
        }} className="material-tiles-grid">
          {CATEGORIES.materials.map(mat => (
            <div
              key={mat.id}
              onClick={() => handleMaterialClick(mat.name)}
              className="luxury-card"
              style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{
                height: '240px',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: 'var(--color-surface-container)'
              }}>
                <img
                  src={mat.image}
                  alt={mat.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <span style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  backgroundColor: 'rgba(18,18,18,0.75)',
                  backdropFilter: 'blur(4px)',
                  color: '#ffffff',
                  fontSize: '0.6875rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  padding: '0.25rem 0.6rem',
                  borderRadius: 'var(--radius-xs)'
                }}>
                  {mat.name}
                </span>
              </div>

              <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', marginBottom: '0.35rem' }}>
                    {mat.name}
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-secondary)', lineHeight: 1.4 }}>
                    {mat.subtitle}
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--color-border)' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-primary-dark)' }}>
                    Explore {mat.count} Designs
                  </span>
                  <ArrowRight size={14} style={{ color: 'var(--color-primary-dark)' }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Shop by Occasion: Curated Capsule Horizontal Row */}
      <section className="container">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              color: 'var(--color-primary-dark)',
              display: 'block',
              marginBottom: '0.35rem'
            }}>
              Celebrate in Style
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem' }}>
              Shop by Occasion
            </h2>
          </div>
          <button onClick={() => navigate('shop')} className="btn-ghost">
            View All Occasions <ChevronRight size={14} />
          </button>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.25rem'
        }} className="occasion-grid">
          {CATEGORIES.occasions.map(occ => (
            <div
              key={occ.id}
              onClick={() => handleOccasionClick(occ.id)}
              style={{
                position: 'relative',
                height: '280px',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-subtle)'
              }}
              className="occasion-card"
            >
              <img
                src={occ.image}
                alt={occ.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(18,18,18,0.85) 0%, rgba(18,18,18,0.2) 60%, transparent 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '1.25rem',
                color: '#ffffff'
              }}>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.2rem' }}>
                  {occ.name}
                </h4>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-primary-fixed)', letterSpacing: '0.05em' }}>
                  {occ.tagline}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Best Sellers Section */}
      <section className="container">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              color: 'var(--color-primary-dark)',
              display: 'block',
              marginBottom: '0.35rem'
            }}>
              Atelier Favourites
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem' }}>
              Most Loved Heirlooms
            </h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary-dark)' }}>
            <div style={{ display: 'flex', color: 'var(--color-primary)' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="var(--color-primary)" />
              ))}
            </div>
            <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>4.9/5 Rating (850+ Kerala Brides)</span>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.5rem'
        }} className="product-grid-4">
          {bestSellers.map(product => {
            const saved = isInWishlist(product.id);
            return (
              <div
                key={product.id}
                className="luxury-card"
                style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}
              >
                {/* Image Container */}
                <div
                  onClick={() => navigate('product', product.id)}
                  style={{
                    position: 'relative',
                    aspectRatio: '4/5',
                    overflow: 'hidden',
                    backgroundColor: 'var(--color-surface-container)',
                    cursor: 'pointer'
                  }}
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => {
                      if (product.images[1]) e.currentTarget.src = product.images[1];
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.src = product.images[0];
                    }}
                  />

                  {/* Badges */}
                  <div style={{ position: 'absolute', top: '10px', left: '10px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <span className="badge-dark">{product.badge}</span>
                    {product.comparePrice && (
                      <span className="badge-sale">
                        {Math.round(((product.comparePrice - product.price) / product.comparePrice) * 100)}% OFF
                      </span>
                    )}
                  </div>

                  {/* Wishlist Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(product.id);
                    }}
                    aria-label="Save to Wishlist"
                    style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255,255,255,0.85)',
                      backdropFilter: 'blur(4px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: saved ? 'var(--color-crimson)' : 'var(--color-charcoal)',
                      boxShadow: 'var(--shadow-subtle)'
                    }}
                  >
                    <Heart size={16} fill={saved ? 'var(--color-crimson)' : 'none'} />
                  </button>
                </div>

                {/* Details */}
                <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.35rem' }}>
                      <Star size={13} fill="var(--color-primary)" style={{ color: 'var(--color-primary)' }} />
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-charcoal)' }}>
                        {product.rating}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-secondary)' }}>
                        ({product.reviewsCount})
                      </span>
                    </div>

                    <h3
                      onClick={() => navigate('product', product.id)}
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1rem',
                        lineHeight: 1.3,
                        color: 'var(--color-charcoal)',
                        cursor: 'pointer',
                        marginBottom: '0.25rem'
                      }}
                    >
                      {product.name}
                    </h3>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-on-surface-variant)', display: 'block' }}>
                      {product.stoneType.split('&')[0]}
                    </span>
                  </div>

                  <div style={{ marginTop: '0.85rem', paddingTop: '0.75rem', borderTop: '1px solid var(--color-border)' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.75rem' }}>
                      <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-primary-dark)' }}>
                        ₹{product.price.toLocaleString('en-IN')}
                      </span>
                      {product.comparePrice && (
                        <span style={{ fontSize: '0.8rem', color: 'var(--color-secondary)', textDecoration: 'line-through' }}>
                          ₹{product.comparePrice.toLocaleString('en-IN')}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => addToCart(product, 1)}
                      className="btn-primary"
                      style={{ width: '100%', padding: '0.65rem', fontSize: '0.75rem' }}
                    >
                      <ShoppingBag size={14} /> Quick Add
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. Featured Festive Edit Banner */}
      <section className="container">
        <div style={{
          position: 'relative',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          minHeight: '380px',
          backgroundColor: 'var(--color-obsidian)',
          display: 'flex',
          alignItems: 'center',
          boxShadow: 'var(--shadow-card)'
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAUo2OgL9-6Oi0OAzQ8sTtapx5Pvy7a7aRDWN2gvN6zNNuroLmrgxaKvDzoHcOKvuRF2YM2FrlzVPnRKeT9LuG4-vLNV1WzituaJ8IBpSsAiQTDNUZaWC5sxR6dfGj1I52VlaWMjIFaeek4qaQZ8iBSQm2i5bihCb5I1evMM_dhicPCN7s6Oq-tLgu5alEfHv1VX9tFjrX7YXCsr4iaRepnPgWPcXa8JwEFx0c6skwqQplYKEkl6eD_')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }} />

          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(18,18,18,0.95) 0%, rgba(18,18,18,0.7) 50%, rgba(18,18,18,0.3) 100%)'
          }} />

          <div className="festive-edit-box" style={{ position: 'relative', zIndex: 10, padding: '3rem', maxWidth: '580px', color: '#ffffff' }}>
            <span className="badge-gold" style={{ marginBottom: '1rem', backgroundColor: 'rgba(197, 160, 89, 0.25)', color: 'var(--color-primary-fixed)' }}>
              The Festive Edit 2026
            </span>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              color: '#ffffff',
              lineHeight: 1.2,
              marginBottom: '1rem'
            }}>
              The Kerala Kasavu & Temple Edit
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'rgba(250, 249, 246, 0.85)', lineHeight: 1.6, marginBottom: '1.75rem' }}>
              Celebrate South Indian weddings, Onam, and temple festivities with regal 22k antique matte gold finishes and hand-strung freshwater pearls created for generations to cherish.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => {
                  setCategoryFilter(prev => ({ ...prev, occasion: 'Festive and Temple Wear' }));
                  navigate('shop');
                }}
                className="btn-gold"
              >
                Explore The Edit <ArrowRight size={16} />
              </button>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-primary-fixed)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>
                • Limited Artisan Runs
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Why Handmade / The Maker Story Block */}
      <section className="container">
        <div style={{
          backgroundColor: 'var(--color-surface-low)',
          borderRadius: 'var(--radius-lg)',
          padding: '3rem',
          border: '1px solid var(--color-border)',
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '3rem',
          alignItems: 'center'
        }} className="why-handmade-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <span className="badge-gold">Artisanal Promise</span>
              <span style={{ fontSize: '0.75rem', fontStyle: 'italic', color: 'var(--color-primary-dark)' }}>
                {STORE_INFO.motto}
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', marginBottom: '1rem' }}>
              Made With Love & Precision in Kochi
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-on-surface-variant)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Unlike mass factory-molded jewellery, every Enchantique creation is painstakingly shaped by hereditary master karigars in Kerala. Built upon a 100% skin-safe, hypoallergenic brass & copper core, layered with durable 22k micron antique gold plating and finished with an invisible protective nano-lacquer.
            </p>

            <div className="why-features-grid">
              <div style={{ backgroundColor: 'var(--color-surface-white)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
                <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-charcoal)', marginBottom: '0.25rem' }}>
                  🌱 100% Skin-Safe & Hypoallergenic
                </strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-secondary)' }}>
                  Completely free of Nickel, Lead, and Cadmium. Zero allergic irritation.
                </span>
              </div>
              <div style={{ backgroundColor: 'var(--color-surface-white)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
                <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-charcoal)', marginBottom: '0.25rem' }}>
                  ✨ Lifetime Re-Plating Care
                </strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-secondary)' }}>
                  Complimentary inspection and low-cost atelier replating for family heirlooms.
                </span>
              </div>
            </div>

            <button onClick={() => navigate('story')} className="btn-secondary">
              Read Our Heritage Story <ArrowRight size={14} />
            </button>
          </div>

          <div style={{ position: 'relative', borderRadius: 'var(--radius-md)', overflow: 'hidden', minHeight: '340px', boxShadow: 'var(--shadow-card)' }}>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBawogeuDN24LUSYiwnyun3rSPm-utVl138ng8PWtKKDqENCsgw6yf4WET42YRM1DkotLjkorWVvGpCeI6hwfr8syD6vlNlt86MX6z-l1LxEEJS5P2Y4LVmGfV7Ry-MzgAZQ7XZU6Cxn0rqAXp8oklciqq_PnxjH8BpFkmT-BNAOQnbSHny1c3FKjjmKS6OqrbhQwIM9Er0eiYNoVsqLbWthrbOlHNHVw2KqEf4pjm0ev1cQdGAxnOu"
              alt="Elderly master Kerala goldsmith setting Kundan stones in Kochi atelier"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute',
              bottom: '1rem',
              left: '1rem',
              right: '1rem',
              backgroundColor: 'rgba(250, 249, 246, 0.92)',
              backdropFilter: 'blur(8px)',
              padding: '0.75rem 1rem',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '0.75rem',
              fontWeight: 600
            }}>
              <span>Marine Drive Atelier • Kochi, Kerala</span>
              <span style={{ color: 'var(--color-primary-dark)', fontWeight: 700 }}>Est. Heritage</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Custom & Bespoke CTA Banner */}
      <section className="container">
        <div className="bespoke-cta-banner" style={{
          backgroundColor: 'var(--color-surface-highest)',
          borderRadius: 'var(--radius-lg)',
          padding: '3rem',
          position: 'relative',
          overflow: 'hidden',
          border: '1px solid var(--color-border)'
        }}>
          <div style={{ maxWidth: '600px' }}>
            <span className="badge-gold" style={{ marginBottom: '0.75rem' }}>
              <Wand2 size={12} /> Custom Commission
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', marginBottom: '0.75rem', lineHeight: 1.2 }}>
              Create Something Meant Only For You
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-on-surface-variant)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Have an ancestral family heirloom to recreate or envisioning an exclusive bridal trousseau match for your wedding silk saree? Our master jewellery designer collaborates 1-on-1 with you to craft bespoke treasures.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.75rem', fontSize: '0.85rem', color: 'var(--color-charcoal)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700 }}>1</span>
                <span>Share your vision, Pinterest sketches or wedding saree palette</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700 }}>2</span>
                <span>Receive 3D CAD visualization & unbundled transparent quote</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700 }}>3</span>
                <span>Handcrafted in 14-18 days & insured delivery to your doorstep</span>
              </div>
            </div>

            <button
              onClick={() => navigate('bespoke')}
              className="btn-primary"
              style={{ padding: '0.9rem 1.8rem' }}
            >
              Explore Bespoke Service <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 9. Verified Customer Reviews: Brides of Enchantique */}
      <section className="container">
        <div style={{ textAlign: 'center', maxWidth: '540px', margin: '0 auto 2.5rem' }}>
          <span style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            color: 'var(--color-primary-dark)',
            display: 'block',
            marginBottom: '0.35rem'
          }}>
            Love Notes
          </span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', marginBottom: '0.5rem' }}>
            Brides of Enchantique
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-on-surface-variant)' }}>
            Cherished by brides and festive jewellery collectors across Kerala, Bengaluru, Mumbai, and Dubai.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem'
        }} className="reviews-grid">
          {REVIEWS.map(rev => (
            <div
              key={rev.id}
              className="luxury-card"
              style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div>
                <div style={{ display: 'flex', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="var(--color-primary)" />
                  ))}
                </div>
                <p style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '0.95rem',
                  fontStyle: 'italic',
                  lineHeight: 1.6,
                  color: 'var(--color-charcoal)',
                  marginBottom: '1rem'
                }}>
                  "{rev.text}"
                </p>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--color-border)'
              }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  flexShrink: 0,
                  backgroundColor: 'var(--color-surface-container)'
                }}>
                  <img src={rev.image} alt={rev.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-charcoal)' }}>
                    {rev.name}
                  </strong>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-secondary)' }}>
                    {rev.location} • <span style={{ color: 'var(--color-primary-dark)', fontWeight: 600 }}>{rev.badge}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. Journal Highlights */}
      <section className="container">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              color: 'var(--color-primary-dark)',
              display: 'block',
              marginBottom: '0.35rem'
            }}>
              From The Atelier
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem' }}>
              The Heritage Journal
            </h2>
          </div>
          <button onClick={() => navigate('journal')} className="btn-ghost">
            View All Articles <ChevronRight size={14} />
          </button>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem'
        }} className="journal-grid">
          {JOURNAL_POSTS.slice(0, 3).map(post => (
            <article
              key={post.id}
              onClick={() => navigate('journal', post.id)}
              className="luxury-card"
              style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ height: '200px', overflow: 'hidden', backgroundColor: 'var(--color-surface-container)' }}>
                <img
                  src={post.image}
                  alt={post.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.75rem', color: 'var(--color-primary-dark)' }}>
                    <span style={{ fontWeight: 700, textTransform: 'uppercase' }}>{post.category}</span>
                    <span>•</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--color-secondary)' }}>
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', lineHeight: 1.35, marginBottom: '0.5rem' }}>
                    {post.title}
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-on-surface-variant)', lineHeight: 1.5 }}>
                    {post.excerpt}
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '1rem', color: 'var(--color-primary-dark)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' }}>
                  <span>Read Article</span> <ArrowRight size={12} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 1024px) {
          .material-tiles-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .trust-strip-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .product-grid-4 {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .why-handmade-grid {
            grid-template-columns: 1fr !important;
          }
          .reviews-grid {
            grid-template-columns: 1fr !important;
          }
          .journal-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .trust-strip-grid {
            grid-template-columns: 1fr !important;
          }
          .occasion-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </div>
  );
};
