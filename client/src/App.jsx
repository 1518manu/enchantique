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

function AppContent() {
  const { activeTab } = useShop();

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage />;
      case 'shop':
        return <ShopPage />;
      case 'product':
        return <ProductDetailPage />;
      case 'bespoke':
        return <BespokePage />;
      case 'story':
        return <OurStoryPage />;
      case 'journal':
        return <JournalPage />;
      case 'help':
        return <HelpPage />;
      case 'checkout':
        return <CheckoutPage />;
      case 'account':
        return <AccountPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
      {/* Global Header */}
      <Header />

      {/* Main Page Content */}
      <main className="main-content" style={{ flex: 1, width: '100%' }}>
        {renderActiveTab()}
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
