import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { STORE_INFO, CATEGORIES } from '../data/mockData';
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  Menu,
  X,
  Globe,
  ChevronDown,
  Sparkles,
  Phone,
  ArrowRight
} from 'lucide-react';

export const Header = () => {
  const {
    activeTab,
    navigate,
    totalCartCount,
    wishlist,
    setIsCartOpen,
    setIsWishlistOpen,
    setIsSearchOpen,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    language,
    toggleLanguage,
    setCategoryFilter
  } = useShop();

  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);

  const handleCategoryClick = (filterType, value) => {
    setCategoryFilter(prev => ({
      ...prev,
      [filterType]: value
    }));
    navigate('shop');
    setIsShopDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* 1. Global Announcement Bar */}
      <div
        className="announcement-bar"
        style={{
          backgroundColor: 'var(--color-obsidian)',
          color: 'var(--color-surface)',
          fontSize: '0.75rem',
          letterSpacing: '0.08em',
          padding: '0.45rem 1rem',
          textAlign: 'center',
          borderBottom: '1px solid rgba(197, 160, 89, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          position: 'relative',
          zIndex: 50,
          overflow: 'hidden',
          maxWidth: '100vw',
          width: '100%'
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          maxWidth: '100%',
          justifyContent: 'center'
        }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', color: 'var(--color-primary-fixed)', fontWeight: 600, flexShrink: 0 }}>
            <Sparkles size={13} />
            {language === 'en' ? 'FESTIVE 2026' : 'ഉത്സവം 2026'}
          </span>
          <span style={{ opacity: 0.6 }}>•</span>
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {language === 'en'
              ? 'Free Pan-India Delivery on orders over ₹1,999 | COD Available'
              : 'കേരളത്തിൽ സൗജന്യ എക്സ്പ്രസ് ഡെലിവറി'}
          </span>
          <span style={{ opacity: 0.6 }} className="desktop-only">•</span>
          <span style={{ color: 'var(--color-primary-light)', fontWeight: 600, flexShrink: 0 }} className="desktop-only">
            Code: <u>LOVE10</u>
          </span>
        </div>
      </div>

      {/* 2. Main Luxury Header */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 40,
        backgroundColor: 'rgba(250, 249, 246, 0.95)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--color-border)',
        boxShadow: '0 2px 12px rgba(44, 34, 18, 0.04)',
        width: '100%',
        maxWidth: '100vw'
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '76px',
          width: '100%',
          maxWidth: '100%'
        }}>
          {/* Left: Mobile Menu Trigger & Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', minWidth: 0 }}>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                display: 'none',
                color: 'var(--color-charcoal)',
                padding: '0.25rem'
              }}
              className="mobile-menu-btn"
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Brand Logo & Motto */}
            <div
              onClick={() => navigate('home')}
              style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', minWidth: 0 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <span style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.35rem, 3.5vw, 1.75rem)',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  color: 'var(--color-obsidian)',
                  lineHeight: 1,
                  whiteSpace: 'nowrap'
                }}>
                  Enchantique
                </span>
                <span style={{
                  display: 'inline-block',
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-primary)',
                  flexShrink: 0
                }} />
              </div>
              <div className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '2px' }}>
                <span style={{
                  fontSize: '0.625rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--color-primary-dark)',
                  fontWeight: 600,
                  whiteSpace: 'nowrap'
                }}>
                  Regal Kerala Atelier
                </span>
                <span style={{ fontSize: '0.6rem', color: 'var(--color-secondary)' }}>•</span>
                <span style={{
                  fontSize: '0.625rem',
                  fontStyle: 'italic',
                  color: 'var(--color-primary-dark)',
                  fontFamily: 'var(--font-serif)',
                  whiteSpace: 'nowrap'
                }}>
                  {STORE_INFO.motto}
                </span>
              </div>
            </div>
          </div>

          {/* Center: Desktop Navigation Bar */}
          <nav className="desktop-nav" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            height: '100%'
          }}>
            <button
              onClick={() => navigate('home')}
              style={{
                fontSize: '0.8125rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: activeTab === 'home' ? 'var(--color-primary-dark)' : 'var(--color-charcoal)',
                position: 'relative',
                padding: '0.5rem 0'
              }}
            >
              Home
              {activeTab === 'home' && (
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  backgroundColor: 'var(--color-primary)'
                }} />
              )}
            </button>

            {/* Shop Mega-Menu Trigger */}
            <div
              style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
              onMouseEnter={() => setIsShopDropdownOpen(true)}
              onMouseLeave={() => setIsShopDropdownOpen(false)}
            >
              <button
                onClick={() => navigate('shop')}
                style={{
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: activeTab === 'shop' ? 'var(--color-primary-dark)' : 'var(--color-charcoal)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  padding: '0.5rem 0'
                }}
              >
                Shop
                <ChevronDown size={14} style={{
                  transform: isShopDropdownOpen ? 'rotate(180deg)' : 'none',
                  transition: 'transform 0.2s'
                }} />
              </button>

              {/* Shop Mega-Menu Dropdown */}
              {isShopDropdownOpen && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: '-120px',
                  width: '640px',
                  backgroundColor: 'var(--color-surface-white)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-elevated)',
                  padding: '1.5rem',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '1.5rem',
                  zIndex: 50,
                  animation: 'fadeIn 0.2s ease'
                }}>
                  {/* Col 1: By Material */}
                  <div>
                    <h4 style={{
                      fontSize: '0.6875rem',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--color-primary-dark)',
                      marginBottom: '0.75rem',
                      borderBottom: '1px solid var(--color-border)',
                      paddingBottom: '0.35rem'
                    }}>
                      By Material
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {CATEGORIES.materials.map(mat => (
                        <div
                          key={mat.id}
                          onClick={() => handleCategoryClick('material', mat.name)}
                          style={{
                            fontSize: '0.8125rem',
                            color: 'var(--color-charcoal)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '0.2rem 0',
                            transition: 'color 0.2s'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-charcoal)'}
                        >
                          <span>{mat.name}</span>
                          <span style={{ fontSize: '0.7rem', color: 'var(--color-secondary)' }}>({mat.count})</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Col 2: By Occasion */}
                  <div>
                    <h4 style={{
                      fontSize: '0.6875rem',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--color-primary-dark)',
                      marginBottom: '0.75rem',
                      borderBottom: '1px solid var(--color-border)',
                      paddingBottom: '0.35rem'
                    }}>
                      By Occasion
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {CATEGORIES.occasions.map(occ => (
                        <div
                          key={occ.id}
                          onClick={() => handleCategoryClick('occasion', occ.id)}
                          style={{
                            fontSize: '0.8125rem',
                            color: 'var(--color-charcoal)',
                            cursor: 'pointer',
                            padding: '0.2rem 0',
                            transition: 'color 0.2s'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-charcoal)'}
                        >
                          {occ.name}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Col 3: Curated Edits */}
                  <div style={{
                    backgroundColor: 'var(--color-surface-low)',
                    padding: '1rem',
                    borderRadius: 'var(--radius-sm)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}>
                    <div>
                      <span className="badge-gold" style={{ marginBottom: '0.5rem' }}>Limited Edition</span>
                      <h5 style={{ fontSize: '0.9rem', marginBottom: '0.35rem' }}>Kerala Kasavu & Temple Edit</h5>
                      <p style={{ fontSize: '0.75rem', color: 'var(--color-secondary)', lineHeight: 1.4 }}>
                        Authentic 22k gold matte polki jewellery curated for South Indian weddings.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        handleCategoryClick('occasion', 'Onam and Vishu');
                      }}
                      className="btn-primary"
                      style={{ padding: '0.5rem 0.75rem', fontSize: '0.7rem', width: '100%', marginTop: '0.75rem' }}
                    >
                      Explore The Edit <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => navigate('bespoke')}
              style={{
                fontSize: '0.8125rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: activeTab === 'bespoke' ? 'var(--color-primary-dark)' : 'var(--color-charcoal)',
                position: 'relative',
                padding: '0.5rem 0'
              }}
            >
              Custom & Bespoke
              {activeTab === 'bespoke' && (
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  backgroundColor: 'var(--color-primary)'
                }} />
              )}
            </button>

            <button
              onClick={() => navigate('story')}
              style={{
                fontSize: '0.8125rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: activeTab === 'story' ? 'var(--color-primary-dark)' : 'var(--color-charcoal)',
                position: 'relative',
                padding: '0.5rem 0'
              }}
            >
              Our Story
              {activeTab === 'story' && (
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  backgroundColor: 'var(--color-primary)'
                }} />
              )}
            </button>

            <button
              onClick={() => navigate('journal')}
              style={{
                fontSize: '0.8125rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: activeTab === 'journal' ? 'var(--color-primary-dark)' : 'var(--color-charcoal)',
                position: 'relative',
                padding: '0.5rem 0'
              }}
            >
              Journal
              {activeTab === 'journal' && (
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  backgroundColor: 'var(--color-primary)'
                }} />
              )}
            </button>

            <button
              onClick={() => navigate('help', 'care')}
              style={{
                fontSize: '0.8125rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: activeTab === 'help' ? 'var(--color-primary-dark)' : 'var(--color-charcoal)',
                position: 'relative',
                padding: '0.5rem 0'
              }}
            >
              Help & Care
              {activeTab === 'help' && (
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  backgroundColor: 'var(--color-primary)'
                }} />
              )}
            </button>
          </nav>

          {/* Right: Actions Cluster (Language, Search, Wishlist, Cart, Account) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexShrink: 0 }}>
            {/* Language Toggle Button (Desktop Only) */}
            <button
              onClick={toggleLanguage}
              title={language === 'en' ? 'മലയാളത്തിലേക്ക് മാറ്റുക' : 'Switch to English'}
              className="desktop-only"
              style={{
                alignItems: 'center',
                gap: '0.3rem',
                padding: '0.4rem 0.65rem',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--color-surface-container)',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--color-charcoal)'
              }}
            >
              <Globe size={14} style={{ color: 'var(--color-primary)' }} />
              <span>{language === 'en' ? 'മലയാളം' : 'ENG'}</span>
            </button>

            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search Catalog"
              style={{
                width: '38px',
                height: '38px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--color-charcoal)'
              }}
            >
              <Search size={20} />
            </button>

            {/* Wishlist Trigger (Desktop Only) */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              aria-label="Wishlist"
              className="desktop-only"
              style={{
                width: '40px',
                height: '40px',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--color-charcoal)',
                position: 'relative'
              }}
            >
              <Heart size={20} />
              {wishlist.length > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '6px',
                  right: '6px',
                  minWidth: '16px',
                  height: '16px',
                  padding: '0 4px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--color-primary)',
                  color: '#ffffff',
                  fontSize: '0.625rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Shopping Bag Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="Shopping Bag"
              style={{
                width: '38px',
                height: '38px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--color-charcoal)',
                position: 'relative'
              }}
            >
              <ShoppingBag size={20} />
              {totalCartCount > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '5px',
                  right: '5px',
                  minWidth: '16px',
                  height: '16px',
                  padding: '0 4px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--color-obsidian)',
                  color: 'var(--color-surface)',
                  fontSize: '0.625rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {totalCartCount}
                </span>
              )}
            </button>

            {/* Account Dashboard Link (Desktop Only) */}
            <button
              onClick={() => navigate('account')}
              aria-label="Customer Account"
              className="desktop-only"
              style={{
                width: '40px',
                height: '40px',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 'var(--radius-sm)',
                color: activeTab === 'account' ? 'var(--color-primary)' : 'var(--color-charcoal)'
              }}
            >
              <User size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* 3. Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 100,
          backgroundColor: 'rgba(18, 18, 18, 0.7)',
          backdropFilter: 'blur(6px)'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            width: '85%',
            maxWidth: '340px',
            backgroundColor: 'var(--color-surface)',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: 'var(--shadow-elevated)',
            overflowY: 'auto'
          }}>
            {/* Drawer Header */}
            <div style={{
              padding: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid var(--color-border)'
            }}>
              <div>
                <span style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.4rem',
                  fontWeight: 600,
                  color: 'var(--color-obsidian)'
                }}>
                  Enchantique
                </span>
                <span style={{ display: 'block', fontSize: '0.6875rem', color: 'var(--color-primary-dark)' }}>
                  Made with love • Kerala Atelier
                </span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ padding: '0.35rem', color: 'var(--color-charcoal)' }}
              >
                <X size={22} />
              </button>
            </div>

            {/* Drawer Navigation Links */}
            <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <button
                onClick={() => navigate('home')}
                style={{
                  textAlign: 'left',
                  padding: '0.75rem',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: activeTab === 'home' ? 'var(--color-primary)' : 'var(--color-charcoal)',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: activeTab === 'home' ? 'var(--color-primary-tint)' : 'transparent'
                }}
              >
                Home
              </button>

              <button
                onClick={() => navigate('shop')}
                style={{
                  textAlign: 'left',
                  padding: '0.75rem',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: activeTab === 'shop' ? 'var(--color-primary)' : 'var(--color-charcoal)',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: activeTab === 'shop' ? 'var(--color-primary-tint)' : 'transparent'
                }}
              >
                Shop All Jewellery
              </button>

              {/* Sub-categories */}
              <div style={{ paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--color-primary-dark)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  By Material
                </span>
                {CATEGORIES.materials.map(mat => (
                  <button
                    key={mat.id}
                    onClick={() => handleCategoryClick('material', mat.name)}
                    style={{
                      textAlign: 'left',
                      fontSize: '0.8125rem',
                      color: 'var(--color-secondary)',
                      padding: '0.3rem 0'
                    }}
                  >
                    • {mat.name} ({mat.count})
                  </button>
                ))}
              </div>

              <button
                onClick={() => navigate('bespoke')}
                style={{
                  textAlign: 'left',
                  padding: '0.75rem',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: activeTab === 'bespoke' ? 'var(--color-primary)' : 'var(--color-charcoal)',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: activeTab === 'bespoke' ? 'var(--color-primary-tint)' : 'transparent'
                }}
              >
                Custom & Bespoke Atelier
              </button>

              <button
                onClick={() => navigate('story')}
                style={{
                  textAlign: 'left',
                  padding: '0.75rem',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: activeTab === 'story' ? 'var(--color-primary)' : 'var(--color-charcoal)',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: activeTab === 'story' ? 'var(--color-primary-tint)' : 'transparent'
                }}
              >
                Our Story & The Maker
              </button>

              <button
                onClick={() => navigate('journal')}
                style={{
                  textAlign: 'left',
                  padding: '0.75rem',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: activeTab === 'journal' ? 'var(--color-primary)' : 'var(--color-charcoal)',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: activeTab === 'journal' ? 'var(--color-primary-tint)' : 'transparent'
                }}
              >
                Journal (Blog)
              </button>

              <button
                onClick={() => navigate('help', 'care')}
                style={{
                  textAlign: 'left',
                  padding: '0.75rem',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: activeTab === 'help' ? 'var(--color-primary)' : 'var(--color-charcoal)',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: activeTab === 'help' ? 'var(--color-primary-tint)' : 'transparent'
                }}
              >
                Help & Size Guide
              </button>

              <button
                onClick={() => navigate('account')}
                style={{
                  textAlign: 'left',
                  padding: '0.75rem',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: activeTab === 'account' ? 'var(--color-primary)' : 'var(--color-charcoal)',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: activeTab === 'account' ? 'var(--color-primary-tint)' : 'transparent'
                }}
              >
                My Account & Orders
              </button>
            </div>

            {/* Mobile Drawer Footer with WhatsApp Stylist ping */}
            <div style={{ marginTop: 'auto', padding: '1.25rem', borderTop: '1px solid var(--color-border)', backgroundColor: 'var(--color-surface-low)' }}>
              <a
                href={`https://wa.me/${STORE_INFO.whatsapp}?text=Hello%20Enchantique%2C%20I%20would%20like%20to%20inquire%20about%20your%20jewellery`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  backgroundColor: '#25D366',
                  color: '#ffffff',
                  padding: '0.75rem',
                  borderRadius: 'var(--radius-sm)',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  textTransform: 'uppercase'
                }}
              >
                <Phone size={16} /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Responsive CSS for Nav Toggle */}
      <style>{`
        @media (max-width: 992px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
};
