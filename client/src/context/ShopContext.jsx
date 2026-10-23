import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { MOCK_PRODUCTS, STORE_INFO } from '../data/mockData';

const ShopContext = createContext();

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};

export const ShopProvider = ({ children }) => {
  const routerNavigate = useNavigate();
  const location = useLocation();

  // Navigation & View
  const [activeTab, setActiveTab] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState('ench-001');
  const [selectedArticleId, setSelectedArticleId] = useState('post-1');
  const [helpSubTab, setHelpSubTab] = useState('care');

  // Language state: 'en' for English, 'ml' for Malayalam
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('enchantique_lang') || 'en';
  });

  // Products
  const [products] = useState(MOCK_PRODUCTS);

  // Cart state persisted in localStorage
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('enchantique_cart');
      return saved ? JSON.parse(saved) : [
        {
          cartItemId: 'init-1',
          product: MOCK_PRODUCTS[0],
          quantity: 1,
          selectedVariant: MOCK_PRODUCTS[0].colorVariants[0].name,
          selectedSize: MOCK_PRODUCTS[0].sizes[0]
        }
      ];
    } catch {
      return [];
    }
  });

  // Wishlist state persisted in localStorage
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('enchantique_wishlist');
      return saved ? JSON.parse(saved) : ['ench-001', 'ench-002'];
    } catch {
      return [];
    }
  });

  // Orders state
  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem('enchantique_orders');
      return saved ? JSON.parse(saved) : [
        {
          orderId: 'ENC-849201',
          date: '12 Oct 2026',
          status: 'Handcrafting in Kochi Atelier',
          items: [{ name: 'Aadhya Emerald Kasu Bangles', qty: 1, price: 3850 }],
          total: 3850,
          paymentMethod: 'UPI (Google Pay)',
          address: 'Panampilly Nagar, Kochi, Kerala 682036'
        }
      ];
    } catch {
      return [];
    }
  });

  // Filter & Search states
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState({
    material: 'All',
    type: 'All',
    occasion: 'All',
    tag: 'All',
    maxPrice: 10000,
    inStockOnly: false,
    sortBy: 'Bestselling'
  });

  // Drawers & Modals
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);

  // Checkout modifiers
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [giftWrap, setGiftWrap] = useState(false);
  const [giftNote, setGiftNote] = useState('');

  // Toast notification
  const [toast, setToast] = useState(null);

  useEffect(() => {
    localStorage.setItem('enchantique_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('enchantique_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('enchantique_orders', JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem('enchantique_lang', language);
  }, [language]);

  const showToast = (message, type = 'gold') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  // Sync activeTab and relevant state with URL changes (supports direct link, refresh, Back/Forward buttons)
  useEffect(() => {
    const path = location.pathname;
    if (path === '/' || path === '') {
      setActiveTab('home');
    } else if (path.startsWith('/shop')) {
      setActiveTab('shop');
    } else if (path.startsWith('/product')) {
      setActiveTab('product');
      const parts = path.split('/').filter(Boolean);
      if (parts[1]) {
        setSelectedProductId(parts[1]);
      }
    } else if (path.startsWith('/bespoke')) {
      setActiveTab('bespoke');
    } else if (path.startsWith('/story')) {
      setActiveTab('story');
    } else if (path.startsWith('/journal')) {
      setActiveTab('journal');
      const parts = path.split('/').filter(Boolean);
      if (parts[1]) {
        setSelectedArticleId(parts[1]);
      } else {
        setSelectedArticleId(null);
      }
    } else if (path.startsWith('/help')) {
      setActiveTab('help');
      const parts = path.split('/').filter(Boolean);
      if (parts[1]) {
        setHelpSubTab(parts[1]);
      }
    } else if (path.startsWith('/checkout')) {
      setActiveTab('checkout');
    } else if (path.startsWith('/account')) {
      setActiveTab('account');
    }
  }, [location.pathname]);

  const navigate = (tab, data = null) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);

    switch (tab) {
      case 'home':
        routerNavigate('/');
        break;
      case 'shop':
        routerNavigate('/shop');
        break;
      case 'product':
        if (data) {
          setSelectedProductId(data);
          routerNavigate(`/product/${data}`);
        } else {
          routerNavigate(`/product/${selectedProductId}`);
        }
        break;
      case 'bespoke':
        routerNavigate('/bespoke');
        break;
      case 'story':
        routerNavigate('/story');
        break;
      case 'journal':
        if (data) {
          setSelectedArticleId(data);
          routerNavigate(`/journal/${data}`);
        } else {
          setSelectedArticleId(null);
          routerNavigate('/journal');
        }
        break;
      case 'help':
        if (data) {
          setHelpSubTab(data);
          routerNavigate(`/help/${data}`);
        } else {
          routerNavigate('/help');
        }
        break;
      case 'checkout':
        routerNavigate('/checkout');
        break;
      case 'account':
        routerNavigate('/account');
        break;
      default:
        routerNavigate('/');
    }
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ml' : 'en');
    showToast(language === 'en' ? 'മലയാളം ഭാഷ തിരഞ്ഞെടുത്തു ✨' : 'Language switched to English');
  };

  const addToCart = (product, quantity = 1, selectedVariant = null, selectedSize = null) => {
    const variantName = selectedVariant || (product.colorVariants?.[0]?.name || 'Standard');
    const sizeName = selectedSize || (product.sizes?.[0] || 'Standard');
    const existingIndex = cart.findIndex(
      item => item.product.id === product.id &&
              item.selectedVariant === variantName &&
              item.selectedSize === sizeName
    );

    if (existingIndex > -1) {
      const updated = [...cart];
      updated[existingIndex].quantity += quantity;
      setCart(updated);
    } else {
      setCart(prev => [
        ...prev,
        {
          cartItemId: `${product.id}-${Date.now()}`,
          product,
          quantity,
          selectedVariant: variantName,
          selectedSize: sizeName
        }
      ]);
    }

    showToast(`Added "${product.name}" to your bag ✨`);
    setIsCartOpen(true);
  };

  const removeFromCart = (cartItemId) => {
    setCart(prev => prev.filter(item => item.cartItemId !== cartItemId));
    showToast('Item removed from shopping bag');
  };

  const updateCartQuantity = (cartItemId, newQty) => {
    if (newQty <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart(prev =>
      prev.map(item => item.cartItemId === cartItemId ? { ...item, quantity: newQty } : item)
    );
  };

  const toggleWishlist = (productId) => {
    const product = products.find(p => p.id === productId);
    if (wishlist.includes(productId)) {
      setWishlist(prev => prev.filter(id => id !== productId));
      showToast(`Removed from Wishlist`);
    } else {
      setWishlist(prev => [...prev, productId]);
      showToast(`Saved "${product?.name || 'Jewel'}" to your Wishlist ❤️`);
    }
  };

  const isInWishlist = (productId) => wishlist.includes(productId);

  const applyCoupon = (code) => {
    const trimmed = code.trim().toUpperCase();
    if (trimmed === STORE_INFO.festivePromoCode) {
      setAppliedCoupon({ code: trimmed, discountPercent: STORE_INFO.festiveDiscountPercent });
      showToast(`Coupon "${trimmed}" applied! 10% Royal Festive discount added.`);
      return true;
    } else if (trimmed === 'ONAM2026' || trimmed === 'ONAM500') {
      setAppliedCoupon({ code: trimmed, discountFlat: 500 });
      showToast(`Festival Coupon applied: ₹500 off!`);
      return true;
    } else {
      showToast('Invalid coupon code. Try "LOVE10" for 10% off', 'error');
      return false;
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    showToast('Promo code removed');
  };

  // Calculations
  const cartSubtotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const discountAmount = appliedCoupon
    ? appliedCoupon.discountPercent
      ? Math.round((cartSubtotal * appliedCoupon.discountPercent) / 100)
      : appliedCoupon.discountFlat || 0
    : 0;

  const giftWrapCost = giftWrap ? 150 : 0;
  const isFreeShipping = cartSubtotal >= STORE_INFO.freeShippingThreshold;
  const shippingCost = cartSubtotal > 0 && !isFreeShipping ? 149 : 0;
  const cartTotal = Math.max(0, cartSubtotal - discountAmount + giftWrapCost + shippingCost);
  const totalCartCount = cart.reduce((count, item) => count + item.quantity, 0);

  const createOrder = (orderData) => {
    const newOrder = {
      orderId: `ENC-${Math.floor(100000 + Math.random() * 900000)}`,
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      status: 'Order Placed • Handcrafted in Kochi Atelier',
      items: cart.map(i => ({
        name: i.product.name,
        qty: i.quantity,
        price: i.product.price,
        variant: i.selectedVariant,
        size: i.selectedSize,
        image: i.product.images[0]
      })),
      subtotal: cartSubtotal,
      discount: discountAmount,
      shipping: shippingCost,
      giftWrap: giftWrapCost,
      total: cartTotal,
      paymentMethod: orderData.paymentMethod || 'UPI',
      customerName: orderData.fullName,
      phone: orderData.phone,
      address: `${orderData.houseNo}, ${orderData.street}, ${orderData.city}, ${orderData.state} - ${orderData.pincode}`
    };

    setOrders(prev => [newOrder, ...prev]);
    setCart([]);
    setAppliedCoupon(null);
    setGiftWrap(false);
    return newOrder;
  };

  const selectedProduct = products.find(p => p.id === selectedProductId) || products[0];

  return (
    <ShopContext.Provider
      value={{
        activeTab,
        setActiveTab,
        navigate,
        selectedProductId,
        setSelectedProductId,
        selectedProduct,
        selectedArticleId,
        setSelectedArticleId,
        helpSubTab,
        setHelpSubTab,
        language,
        toggleLanguage,
        products,
        cart,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        wishlist,
        toggleWishlist,
        isInWishlist,
        orders,
        createOrder,
        searchQuery,
        setSearchQuery,
        categoryFilter,
        setCategoryFilter,
        isCartOpen,
        setIsCartOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        isSearchOpen,
        setIsSearchOpen,
        isMobileMenuOpen,
        setIsMobileMenuOpen,
        isSizeGuideOpen,
        setIsSizeGuideOpen,
        appliedCoupon,
        applyCoupon,
        removeCoupon,
        giftWrap,
        setGiftWrap,
        giftNote,
        setGiftNote,
        cartSubtotal,
        discountAmount,
        shippingCost,
        giftWrapCost,
        cartTotal,
        totalCartCount,
        isFreeShipping,
        toast,
        showToast
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
