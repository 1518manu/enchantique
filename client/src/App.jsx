import React from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { WishlistModal } from './components/WishlistModal';
import { SearchModal } from './components/SearchModal';
import { SizeGuideModal } from './components/SizeGuideModal';
import { ToastNotification } from './components/ToastNotification';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileBottomNav } from './components/MobileBottomNav';

// Pages
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { BespokePage } from './pages/BespokePage';
import { OurStoryPage } from './pages/OurStoryPage';
import { JournalPage } from './pages/JournalPage';
import { HelpPage } from './pages/HelpPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { AccountPage } from './pages/AccountPage';

import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
      <ScrollToTop />

      {/* Global Header */}
      <Header />

      {/* Main Page Content with Real URL Routes */}
      <main className="main-content" style={{ flex: 1, width: '100%' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/product" element={<ProductDetailPage />} />
          <Route path="/bespoke" element={<BespokePage />} />
          <Route path="/story" element={<OurStoryPage />} />
          <Route path="/journal/:id" element={<JournalPage />} />
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/help/:tab" element={<HelpPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Overlays, Drawers & Concierge Modals */}
      <CartDrawer />
      <WishlistModal />
      <SearchModal />
      <SizeGuideModal />
      <ToastNotification />
      <FloatingWhatsApp />
      <MobileBottomNav />
    </div>
  );
}

function App() {
  return (
    <ShopProvider>
      <AppContent />
    </ShopProvider>
  );
}

export default App;
