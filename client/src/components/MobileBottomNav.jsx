import React from 'react';
import { useShop } from '../context/ShopContext';
import { Sparkles, Grid, Wand2, BookOpen, ShoppingBag } from 'lucide-react';

export const MobileBottomNav = () => {
  const { activeTab, navigate, totalCartCount, setIsCartOpen } = useShop();

  return (
    <nav className="mobile-bottom-nav">
      <button
        onClick={() => navigate('home')}
        className={`mobile-nav-item ${activeTab === 'home' ? 'active' : ''}`}
      >
        <Sparkles size={20} />
        <span>Home</span>
      </button>

      <button
        onClick={() => navigate('shop')}
        className={`mobile-nav-item ${activeTab === 'shop' ? 'active' : ''}`}
      >
        <Grid size={20} />
        <span>Shop</span>
      </button>

      <button
        onClick={() => navigate('bespoke')}
        className={`mobile-nav-item ${activeTab === 'bespoke' ? 'active' : ''}`}
      >
        <Wand2 size={20} />
        <span>Custom</span>
      </button>

      <button
        onClick={() => navigate('journal')}
        className={`mobile-nav-item ${activeTab === 'journal' ? 'active' : ''}`}
      >
        <BookOpen size={20} />
        <span>Journal</span>
      </button>

      <button
        onClick={() => setIsCartOpen(true)}
        className="mobile-nav-item"
        style={{ position: 'relative' }}
      >
        <ShoppingBag size={20} />
        <span>Bag</span>
        {totalCartCount > 0 && (
          <span style={{
            position: 'absolute',
            top: '4px',
            right: '18px',
            minWidth: '15px',
            height: '15px',
            backgroundColor: 'var(--color-obsidian)',
            color: 'var(--color-surface)',
            fontSize: '0.6rem',
            fontWeight: 700,
            borderRadius: 'var(--radius-full)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {totalCartCount}
          </span>
        )}
      </button>
    </nav>
  );
};
