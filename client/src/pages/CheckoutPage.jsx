import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { STORE_INFO } from '../data/mockData';
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  Truck,
  CreditCard,
  QrCode,
  Gift,
  Phone,
  Sparkles
} from 'lucide-react';

export const CheckoutPage = () => {
  const {
    cart,
    cartSubtotal,
    discountAmount,
    shippingCost,
    giftWrapCost,
    cartTotal,
    appliedCoupon,
    createOrder,
    navigate,
    showToast
  } = useShop();

  const [formData, setFormData] = useState({
    fullName: 'Ananya Nair',
    email: 'ananya.nair@example.com',
    phone: '9847012345',
    houseNo: 'Flat 4B, Silver Sand Vitrine',
    street: 'Panampilly Nagar Main Avenue',
    city: 'Kochi',
    state: 'Kerala',
    pincode: '682036',
    paymentMethod: 'UPI'
  });

  const [completedOrder, setCompletedOrder] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      showToast('Your bag is empty', 'error');
      return;
    }
    setIsProcessing(true);
    setTimeout(() => {
      const order = createOrder(formData);
      setCompletedOrder(order);
      setIsProcessing(false);
      showToast(`Order #${order.orderId} placed successfully! ✨`);
    }, 800);
  };

  const handleWhatsAppShare = () => {
    if (!completedOrder) return;
    const text = encodeURIComponent(
      `Hello Enchantique Atelier! I just placed Order #${completedOrder.orderId} for ₹${completedOrder.total.toLocaleString('en-IN')}.\n\nItems: ${completedOrder.items.map(i => `${i.name} (x${i.qty})`).join(', ')}\nDelivery to: ${completedOrder.customerName}, ${completedOrder.address}.\n\nPlease send me updates on this WhatsApp number!`
    );
    window.open(`https://wa.me/${STORE_INFO.whatsapp}?text=${text}`, '_blank');
  };

  // If order is completed, show the Royal Confirmation Screen!
  if (completedOrder) {
    return (
      <div className="container animate-fade-in" style={{ maxWidth: '680px', margin: '3rem auto' }}>
        <div style={{
          backgroundColor: 'var(--color-surface-white)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--color-border)',
          padding: '3rem 2rem',
          textAlign: 'center',
          boxShadow: 'var(--shadow-card)'
        }}>
          <div style={{
            width: '68px',
            height: '68px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-primary-tint)',
            border: '2px solid var(--color-primary)',
            color: 'var(--color-primary-dark)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.25rem'
          }}>
            <Sparkles size={32} />
          </div>

          <span className="badge-gold" style={{ marginBottom: '0.5rem' }}>
            Handcrafted With Love
          </span>

          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: 'var(--color-charcoal)', marginBottom: '0.5rem' }}>
            Thank You, {completedOrder.customerName}!
          </h1>

          <p style={{ fontSize: '1rem', color: 'var(--color-primary-dark)', fontWeight: 600, marginBottom: '0.5rem' }}>
            നിങ്ങളുടെ ഓർഡർ സ്വീകരിച്ചു • Order Confirmed
          </p>

          <p style={{ fontSize: '0.9rem', color: 'var(--color-on-surface-variant)', lineHeight: 1.6, marginBottom: '2rem' }}>
            Your order <strong>#{completedOrder.orderId}</strong> has been logged with our master karigars in Kochi. We will inspect, safely pack in our emerald velvet vitrine, and dispatch within 24 hours.
          </p>

          {/* Order Summary Receipt Box */}
          <div style={{
            backgroundColor: 'var(--color-surface-low)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--color-border)',
            padding: '1.5rem',
            textAlign: 'left',
            marginBottom: '2rem'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.75rem', marginBottom: '0.75rem' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--color-secondary)' }}>Order Reference</span>
              <strong style={{ fontSize: '0.95rem' }}>{completedOrder.orderId}</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.75rem', marginBottom: '0.75rem' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--color-secondary)' }}>Estimated Delivery</span>
              <strong style={{ fontSize: '0.9rem', color: '#2e7d32' }}>
                {completedOrder.address.includes('Kerala') ? 'Kerala Express (24 - 48 Hours)' : 'Pan-India Express (3 - 4 Days)'}
              </strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.75rem', marginBottom: '0.75rem' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--color-secondary)' }}>Delivery Address</span>
              <span style={{ fontSize: '0.85rem', maxWidth: '320px', textAlign: 'right' }}>{completedOrder.address}</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '0.25rem' }}>
              <span style={{ fontSize: '1rem', fontWeight: 700 }}>Total Paid / COD Amount</span>
              <strong style={{ fontSize: '1.15rem', color: 'var(--color-primary-dark)' }}>
                ₹{completedOrder.total.toLocaleString('en-IN')}
              </strong>
            </div>
          </div>

          {/* Action CTAs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <button
              onClick={handleWhatsAppShare}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                backgroundColor: '#25D366',
                color: '#ffffff',
                padding: '0.85rem',
                borderRadius: 'var(--radius-sm)',
                fontWeight: 700,
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              <Phone size={18} /> Confirm & Track on WhatsApp
            </button>

            <button
              onClick={() => navigate('account')}
              className="btn-secondary"
              style={{ width: '100%', padding: '0.85rem' }}
            >
              View Order History
            </button>

            <button
              onClick={() => navigate('home')}
              className="btn-primary"
              style={{ width: '100%', padding: '0.85rem' }}
            >
              Continue Exploring Heirlooms
            </button>
          </div>
        </div>
      </div>
    );
  }

  // If bag is empty and no completed order, show empty prompt
  if (cart.length === 0) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '5rem 1rem' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '0.5rem' }}>
          Your Shopping Bag is Empty
        </h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--color-secondary)', marginBottom: '1.5rem' }}>
          Please add a handcrafted jewel before proceeding to checkout.
        </p>
        <button onClick={() => navigate('shop')} className="btn-primary">
          Explore Catalogue
        </button>
      </div>
    );
  }

  return (
    <div className="animate-fade-in" style={{ padding: '2rem 0 4rem' }}>
      <div className="container">
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', marginBottom: '1.5rem' }}>
          Secure Royal Checkout
        </h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.3fr 1fr',
          gap: '3rem',
          alignItems: 'flex-start'
        }} className="checkout-grid">
          {/* Form Column */}
          <form onSubmit={handlePlaceOrder} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Step 1: Customer Contact */}
            <div style={{
              backgroundColor: 'var(--color-surface-white)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)',
              padding: '1.75rem'
            }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'var(--color-obsidian)', color: '#fff', fontSize: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>1</span>
                Contact Information
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row-2">
                <div>
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="form-label">WhatsApp / Mobile *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              <div style={{ marginTop: '1rem' }}>
                <label className="form-label">Email Address for Invoice & Tracking</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-input"
                />
              </div>
            </div>

            {/* Step 2: Shipping Address */}
            <div style={{
              backgroundColor: 'var(--color-surface-white)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)',
              padding: '1.75rem'
            }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'var(--color-obsidian)', color: '#fff', fontSize: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>2</span>
                Shipping Address
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label className="form-label">House / Flat / Building Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.houseNo}
                    onChange={(e) => setFormData({ ...formData, houseNo: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="form-label">Street / Area / Landmark *</label>
                  <input
                    type="text"
                    required
                    value={formData.street}
                    onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem' }} className="form-row-3">
                  <div>
                    <label className="form-label">City *</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="form-label">State *</label>
                    <input
                      type="text"
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="form-label">PIN Code *</label>
                    <input
                      type="text"
                      maxLength={6}
                      required
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value.replace(/\D/g, '') })}
                      className="form-input"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Payment Method */}
            <div style={{
              backgroundColor: 'var(--color-surface-white)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)',
              padding: '1.75rem'
            }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'var(--color-obsidian)', color: '#fff', fontSize: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>3</span>
                Payment Method
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '1rem',
                  borderRadius: 'var(--radius-sm)',
                  border: formData.paymentMethod === 'UPI' ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                  backgroundColor: formData.paymentMethod === 'UPI' ? 'var(--color-primary-tint)' : 'var(--color-surface)',
                  cursor: 'pointer'
                }}>
                  <input
                    type="radio"
                    name="payment"
                    value="UPI"
                    checked={formData.paymentMethod === 'UPI'}
                    onChange={() => setFormData({ ...formData, paymentMethod: 'UPI' })}
                    style={{ accentColor: 'var(--color-primary)' }}
                  />
                  <QrCode size={20} style={{ color: 'var(--color-primary-dark)' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.9rem' }}>UPI Instant Payment (Google Pay / PhonePe / Paytm / QR)</strong>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-secondary)' }}>Fastest checkout with instant order confirmation.</span>
                  </div>
                </label>

                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '1rem',
                  borderRadius: 'var(--radius-sm)',
                  border: formData.paymentMethod === 'Card' ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                  backgroundColor: formData.paymentMethod === 'Card' ? 'var(--color-primary-tint)' : 'var(--color-surface)',
                  cursor: 'pointer'
                }}>
                  <input
                    type="radio"
                    name="payment"
                    value="Card"
                    checked={formData.paymentMethod === 'Card'}
                    onChange={() => setFormData({ ...formData, paymentMethod: 'Card' })}
                    style={{ accentColor: 'var(--color-primary)' }}
                  />
                  <CreditCard size={20} style={{ color: 'var(--color-primary-dark)' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.9rem' }}>Credit / Debit Card (Visa, RuPay, Mastercard)</strong>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-secondary)' }}>Secured by Razorpay 256-bit AES encryption.</span>
                  </div>
                </label>

                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '1rem',
                  borderRadius: 'var(--radius-sm)',
                  border: formData.paymentMethod === 'COD' ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                  backgroundColor: formData.paymentMethod === 'COD' ? 'var(--color-primary-tint)' : 'var(--color-surface)',
                  cursor: 'pointer'
                }}>
                  <input
                    type="radio"
                    name="payment"
                    value="COD"
                    checked={formData.paymentMethod === 'COD'}
                    onChange={() => setFormData({ ...formData, paymentMethod: 'COD' })}
                    style={{ accentColor: 'var(--color-primary)' }}
                  />
                  <Truck size={20} style={{ color: 'var(--color-primary-dark)' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.9rem' }}>Cash on Delivery (COD)</strong>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-secondary)' }}>Pay cash or UPI to courier upon inspection.</span>
                  </div>
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={isProcessing}
              className="btn-primary"
              style={{ padding: '1rem', fontSize: '1rem' }}
            >
              {isProcessing ? 'Handcrafting Order Entry...' : `Place Order • ₹${cartTotal.toLocaleString('en-IN')}`}
            </button>
          </form>

          {/* Order Summary Column */}
          <div style={{
            backgroundColor: 'var(--color-surface-white)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--color-border)',
            padding: '1.75rem',
            boxShadow: 'var(--shadow-subtle)',
            position: 'sticky',
            top: '100px'
          }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: '1.25rem' }}>
              Order Items ({cart.reduce((s, i) => s + i.quantity, 0)})
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.5rem', maxHeight: '260px', overflowY: 'auto' }}>
              {cart.map(item => (
                <div key={item.cartItemId} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <img src={item.product.images[0]} alt={item.product.name} style={{ width: '48px', height: '56px', objectFit: 'cover', borderRadius: 'var(--radius-xs)', flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    <h5 style={{ fontSize: '0.85rem', lineHeight: 1.3 }}>{item.product.name}</h5>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-secondary)' }}>Qty: {item.quantity} • {item.selectedVariant}</span>
                  </div>
                  <strong style={{ fontSize: '0.9rem', color: 'var(--color-charcoal)' }}>
                    ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                  </strong>
                </div>
              ))}
            </div>

            {/* Calculations Breakdown */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', borderTop: '1px solid var(--color-border)', paddingTop: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-secondary)' }}>
                <span>Subtotal</span>
                <span>₹{cartSubtotal.toLocaleString('en-IN')}</span>
              </div>
              {discountAmount > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#2e7d32' }}>
                  <span>Coupon {appliedCoupon?.code}</span>
                  <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                </div>
              )}
              {giftWrapCost > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-secondary)' }}>
                  <span>Royal Velvet Box</span>
                  <span>+₹150</span>
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-secondary)' }}>
                <span>Pan-India Delivery</span>
                <span>{shippingCost === 0 ? <strong style={{ color: '#2e7d32' }}>FREE</strong> : `₹${shippingCost}`}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.15rem', fontWeight: 700, paddingTop: '0.75rem', borderTop: '1px solid var(--color-border)', marginTop: '0.25rem' }}>
                <span>Total Amount</span>
                <span style={{ color: 'var(--color-primary-dark)' }}>
                  ₹{cartTotal.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            <div style={{ marginTop: '1.25rem', padding: '0.75rem', backgroundColor: 'var(--color-surface-low)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: 'var(--color-secondary)' }}>
              <ShieldCheck size={18} style={{ color: 'var(--color-primary)' }} />
              <span>Full insurance transit coverage from our Marine Drive Kochi studio.</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .checkout-grid {
            grid-template-columns: 1fr !important;
          }
          .form-row-2 {
            grid-template-columns: 1fr !important;
          }
          .form-row-3 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
