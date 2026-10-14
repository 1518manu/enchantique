import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { STORE_INFO } from '../data/mockData';
import {
  Star,
  Heart,
  ShoppingBag,
  Truck,
  ShieldCheck,
  RotateCcw,
  Ruler,
  Check,
  ChevronDown,
  Gift,
  Phone,
  Sparkles,
  MapPin,
  Clock,
  ArrowRight
} from 'lucide-react';

export const ProductDetailPage = () => {
  const {
    selectedProduct: product,
    products,
    addToCart,
    toggleWishlist,
    isInWishlist,
    setIsSizeGuideOpen,
    navigate,
    showToast
  } = useShop();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product.colorVariants?.[0]?.name || 'Standard');
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || 'Standard');
  const [quantity, setQuantity] = useState(1);
  const [pincode, setPincode] = useState('');
  const [pincodeResult, setPincodeResult] = useState(null);
  const [activeAccordion, setActiveAccordion] = useState('materials');

  // Review submission state
  const [reviewsList, setReviewsList] = useState([
    {
      id: 1,
      author: 'Aishwarya K. Nair',
      location: 'Kadavanthra, Kochi',
      rating: 5,
      date: '5 days ago',
      verified: true,
      comment: 'Wore this with my golden Kasavu saree on my engagement. The shine and finish look completely indistinguishable from real heirloom gold. Packed in a gorgeous royal emerald box!'
    },
    {
      id: 2,
      author: 'Revathi Krishnan',
      location: 'Trivandrum',
      rating: 5,
      date: '2 weeks ago',
      verified: true,
      comment: 'Very lightweight despite having such heavy royal detail. The Bombay screw closure on the earrings is super secure and comfortable.'
    }
  ]);
  const [newReviewAuthor, setNewReviewAuthor] = useState('');
  const [newReviewText, setNewReviewText] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [isSubmittingReview, setIsSubmittingReview] = useState(false);

  const saved = isInWishlist(product.id);

  const handlePincodeCheck = (e) => {
    e.preventDefault();
    if (!pincode || pincode.length !== 6) {
      setPincodeResult({ valid: false, message: 'Please enter a valid 6-digit Indian PIN code.' });
      return;
    }
    const isKerala = pincode.startsWith('67') || pincode.startsWith('68') || pincode.startsWith('69');
    if (isKerala) {
      setPincodeResult({
        valid: true,
        kerala: true,
        message: '⚡ Express Kerala Delivery: Arriving in 24 to 48 Hours. COD Available.'
      });
    } else {
      setPincodeResult({
        valid: true,
        kerala: false,
        message: '🚚 Pan-India Express Delivery: Estimated 3 to 4 business days. COD Available.'
      });
    }
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedVariant, selectedSize);
    navigate('checkout');
  };

  const handleWhatsAppOrder = () => {
    const text = encodeURIComponent(
      `Hello Enchantique Atelier, I want to order "${product.name}" (Price: ₹${product.price}, Variant: ${selectedVariant}, Size: ${selectedSize}). Is this ready to ship?`
    );
    window.open(`https://wa.me/${STORE_INFO.whatsapp}?text=${text}`, '_blank');
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!newReviewAuthor || !newReviewText) return;
    setIsSubmittingReview(true);
    setTimeout(() => {
      setReviewsList(prev => [
        {
          id: Date.now(),
          author: newReviewAuthor,
          location: 'Kerala, India',
          rating: newReviewRating,
          date: 'Just now',
          verified: true,
          comment: newReviewText
        },
        ...prev
      ]);
      setNewReviewAuthor('');
      setNewReviewText('');
      setIsSubmittingReview(false);
      showToast('Thank you! Your verified review has been published ✨');
    }, 400);
  };

  // Related products (exclude current)
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      {/* Breadcrumb Navigation */}
      <div className="container" style={{ paddingTop: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--color-secondary)' }}>
          <button onClick={() => navigate('home')} style={{ color: 'var(--color-secondary)' }}>Home</button>
          <span>/</span>
          <button onClick={() => navigate('shop')} style={{ color: 'var(--color-secondary)' }}>Shop</button>
          <span>/</span>
          <span style={{ color: 'var(--color-primary-dark)', fontWeight: 600 }}>{product.name}</span>
        </div>
      </div>

      {/* Main PDP Grid: Gallery & Purchase Column */}
      <section className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 1fr',
          gap: '3.5rem',
          alignItems: 'flex-start'
        }} className="pdp-main-grid">
          {/* Gallery Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* Main Stage Image */}
            <div style={{
              position: 'relative',
              aspectRatio: '4/5',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              backgroundColor: 'var(--color-surface-container)',
              boxShadow: 'var(--shadow-card)'
            }}>
              <img
                src={product.images[activeImageIndex] || product.images[0]}
                alt={product.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />

              {/* Floating Badges */}
              <div style={{ position: 'absolute', top: '16px', left: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span className="badge-dark">{product.badge}</span>
                <span className="badge-gold">Kerala Handcrafted</span>
              </div>

              {/* Slideshow Counter */}
              <div style={{
                position: 'absolute',
                bottom: '16px',
                right: '16px',
                backgroundColor: 'rgba(18,18,18,0.75)',
                color: '#ffffff',
                fontSize: '0.75rem',
                padding: '0.25rem 0.65rem',
                borderRadius: 'var(--radius-full)',
                letterSpacing: '0.08em'
              }}>
                {activeImageIndex + 1} / {product.images.length}
              </div>

              {/* Wishlist Button */}
              <button
                onClick={() => toggleWishlist(product.id)}
                aria-label="Save to Wishlist"
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  backdropFilter: 'blur(4px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: saved ? 'var(--color-crimson)' : 'var(--color-charcoal)',
                  boxShadow: 'var(--shadow-subtle)'
                }}
              >
                <Heart size={20} fill={saved ? 'var(--color-crimson)' : 'none'} />
              </button>
            </div>

            {/* Thumbnail Strip */}
            <div style={{ display: 'flex', gap: '0.75rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
              {product.images.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  style={{
                    width: '74px',
                    height: '88px',
                    borderRadius: 'var(--radius-sm)',
                    overflow: 'hidden',
                    border: activeImageIndex === idx ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                    opacity: activeImageIndex === idx ? 1 : 0.65,
                    transition: 'all 0.2s',
                    flexShrink: 0
                  }}
                >
                  <img src={imgUrl} alt={`View ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </button>
              ))}
            </div>
          </div>

          {/* Purchase Details Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Atelier Crest & Stock Alert */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-primary-dark)' }}>
                Malabar Heritage Series
              </span>
              <span style={{ fontSize: '0.75rem', color: '#2e7d32', display: 'flex', alignItems: 'center', gap: '0.35rem', fontWeight: 600 }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#2e7d32', display: 'inline-block' }} />
                Only {product.stockCount} units left in Kochi
              </span>
            </div>

            {/* Title */}
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.1rem', lineHeight: 1.25, color: 'var(--color-charcoal)' }}>
              {product.name}
            </h1>

            {/* Ratings */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', backgroundColor: 'var(--color-primary-tint)', padding: '0.2rem 0.55rem', borderRadius: 'var(--radius-xs)' }}>
                <Star size={14} fill="var(--color-primary)" style={{ color: 'var(--color-primary)' }} />
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-primary-dark)' }}>
                  {product.rating}
                </span>
              </div>
              <span style={{ fontSize: '0.85rem', color: 'var(--color-secondary)' }}>
                ({product.reviewsCount} verified reviews across Kerala & India)
              </span>
            </div>

            {/* Price Card */}
            <div style={{
              backgroundColor: 'var(--color-surface-white)',
              padding: '1.25rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.35rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem' }}>
                <span style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-charcoal)', fontFamily: 'var(--font-serif)' }}>
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.comparePrice && (
                  <>
                    <span style={{ fontSize: '1.1rem', color: 'var(--color-secondary)', textDecoration: 'line-through' }}>
                      ₹{product.comparePrice.toLocaleString('en-IN')}
                    </span>
                    <span className="badge-sale">
                      {Math.round(((product.comparePrice - product.price) / product.comparePrice) * 100)}% OFF
                    </span>
                  </>
                )}
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-on-surface-variant)' }}>
                Inclusive of all taxes • Free Pan-India Insured Shipping
              </span>
            </div>

            {/* Short Editorial Description */}
            <p style={{ fontSize: '0.95rem', color: 'var(--color-on-surface-variant)', lineHeight: 1.6 }}>
              {product.shortDescription}
            </p>

            {/* Variant Shade Selector */}
            {product.colorVariants && product.colorVariants.length > 0 && (
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-charcoal)', display: 'block', marginBottom: '0.5rem' }}>
                  Gemstone & Shade: <strong>{selectedVariant}</strong>
                </span>
                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                  {product.colorVariants.map(v => (
                    <button
                      key={v.name}
                      onClick={() => setSelectedVariant(v.name)}
                      style={{
                        padding: '0.45rem 0.85rem',
                        borderRadius: 'var(--radius-sm)',
                        border: selectedVariant === v.name ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                        backgroundColor: selectedVariant === v.name ? 'var(--color-primary-tint)' : 'var(--color-surface-white)',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.45rem'
                      }}
                    >
                      <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: v.hex, display: 'inline-block', border: '1px solid #ccc' }} />
                      <span>{v.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selector */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-charcoal)' }}>
                    Select Size: <strong>{selectedSize}</strong>
                  </span>
                  <button
                    onClick={() => setIsSizeGuideOpen(true)}
                    style={{ fontSize: '0.75rem', color: 'var(--color-primary-dark)', display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: 600 }}
                  >
                    <Ruler size={14} /> Size Guide
                  </button>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {product.sizes.map(s => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      style={{
                        padding: '0.45rem 0.85rem',
                        borderRadius: 'var(--radius-sm)',
                        border: selectedSize === s ? '2px solid var(--color-obsidian)' : '1px solid var(--color-border)',
                        backgroundColor: selectedSize === s ? 'var(--color-obsidian)' : 'var(--color-surface-white)',
                        color: selectedSize === s ? 'var(--color-surface)' : 'var(--color-charcoal)',
                        fontSize: '0.8rem',
                        fontWeight: 600
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity & Action Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--color-surface-white)'
                }}>
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    style={{ padding: '0.65rem 0.95rem', fontSize: '1rem', color: 'var(--color-charcoal)' }}
                  >
                    -
                  </button>
                  <span style={{ padding: '0 0.5rem', fontWeight: 700, minWidth: '24px', textAlign: 'center' }}>
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    style={{ padding: '0.65rem 0.95rem', fontSize: '1rem', color: 'var(--color-charcoal)' }}
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => addToCart(product, quantity, selectedVariant, selectedSize)}
                  className="btn-primary"
                  style={{ flex: 1, padding: '0.85rem 1.25rem', fontSize: '0.85rem' }}
                >
                  <ShoppingBag size={18} /> Add to Bag
                </button>
              </div>

              {/* Buy Now & WhatsApp Direct Buttons */}
              <div className="pdp-actions-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <button
                  onClick={handleBuyNow}
                  className="btn-gold"
                  style={{ padding: '0.85rem' }}
                >
                  Buy Now <ArrowRight size={16} />
                </button>

                <button
                  onClick={handleWhatsAppOrder}
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
                    fontSize: '0.8125rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  <Phone size={16} /> Order on WhatsApp
                </button>
              </div>
            </div>

            {/* Pincode Delivery Estimator */}
            <div style={{
              marginTop: '0.5rem',
              padding: '1rem',
              backgroundColor: 'var(--color-surface-low)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)'
            }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-charcoal)', display: 'block', marginBottom: '0.5rem' }}>
                Check Estimated Delivery Date
              </span>
              <form onSubmit={handlePincodeCheck} style={{ display: 'flex', gap: '0.4rem' }}>
                <input
                  type="text"
                  placeholder="Enter 6-digit Pincode (e.g. 682001)"
                  maxLength={6}
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
                  style={{
                    flex: 1,
                    padding: '0.5rem 0.75rem',
                    fontSize: '0.85rem',
                    borderRadius: 'var(--radius-xs)',
                    border: '1px solid var(--color-border)'
                  }}
                />
                <button type="submit" className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}>
                  Check
                </button>
              </form>
              {pincodeResult && (
                <div style={{
                  marginTop: '0.5rem',
                  fontSize: '0.8rem',
                  color: pincodeResult.valid ? '#2e7d32' : '#991b1b',
                  fontWeight: 600
                }}>
                  {pincodeResult.message}
                </div>
              )}
            </div>

            {/* Trust Accordions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
              {/* Accordion 1: Materials & Craft */}
              <div style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
                <button
                  onClick={() => setActiveAccordion(activeAccordion === 'materials' ? null : 'materials')}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    backgroundColor: 'var(--color-surface-white)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    textAlign: 'left'
                  }}
                >
                  <span>Materials, Metal & Gemstones</span>
                  <ChevronDown size={16} style={{ transform: activeAccordion === 'materials' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                </button>
                {activeAccordion === 'materials' && (
                  <div style={{ padding: '1rem', backgroundColor: 'var(--color-surface)', fontSize: '0.85rem', lineHeight: 1.6, borderTop: '1px solid var(--color-border)' }}>
                    <p><strong>Base Core:</strong> {product.baseMetal}</p>
                    <p><strong>Micro Plating:</strong> {product.plating}</p>
                    <p><strong>Stone Setting:</strong> {product.stoneType}</p>
                    <p><strong>Skin Safety:</strong> 100% Nickel-Free, Lead-Free & Hypoallergenic.</p>
                  </div>
                )}
              </div>

              {/* Accordion 2: Dimensions & Weight */}
              <div style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
                <button
                  onClick={() => setActiveAccordion(activeAccordion === 'dimensions' ? null : 'dimensions')}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    backgroundColor: 'var(--color-surface-white)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    textAlign: 'left'
                  }}
                >
                  <span>Dimensions, Weight & Fit</span>
                  <ChevronDown size={16} style={{ transform: activeAccordion === 'dimensions' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                </button>
                {activeAccordion === 'dimensions' && (
                  <div style={{ padding: '1rem', backgroundColor: 'var(--color-surface)', fontSize: '0.85rem', lineHeight: 1.6, borderTop: '1px solid var(--color-border)' }}>
                    <p><strong>Dimensions:</strong> {product.dimensions}</p>
                    <p><strong>Weight:</strong> {product.weight}</p>
                    <p><strong>Closure Mechanism:</strong> {product.closure}</p>
                  </div>
                )}
              </div>

              {/* Accordion 3: Care Instructions */}
              <div style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
                <button
                  onClick={() => setActiveAccordion(activeAccordion === 'care' ? null : 'care')}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    backgroundColor: 'var(--color-surface-white)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    textAlign: 'left'
                  }}
                >
                  <span>Heirloom Care & Storage</span>
                  <ChevronDown size={16} style={{ transform: activeAccordion === 'care' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                </button>
                {activeAccordion === 'care' && (
                  <div style={{ padding: '1rem', backgroundColor: 'var(--color-surface)', fontSize: '0.85rem', lineHeight: 1.6, borderTop: '1px solid var(--color-border)' }}>
                    <p>{product.care}</p>
                  </div>
                )}
              </div>

              {/* Accordion 4: Authenticity & Lead Time */}
              <div style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
                <button
                  onClick={() => setActiveAccordion(activeAccordion === 'shipping' ? null : 'shipping')}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    backgroundColor: 'var(--color-surface-white)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    textAlign: 'left'
                  }}
                >
                  <span>Certificate & Lead Time</span>
                  <ChevronDown size={16} style={{ transform: activeAccordion === 'shipping' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                </button>
                {activeAccordion === 'shipping' && (
                  <div style={{ padding: '1rem', backgroundColor: 'var(--color-surface)', fontSize: '0.85rem', lineHeight: 1.6, borderTop: '1px solid var(--color-border)' }}>
                    <p><strong>Certification:</strong> {product.certificate}</p>
                    <p><strong>Production & Dispatch:</strong> {product.leadTime}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="container">
        <div style={{
          backgroundColor: 'var(--color-surface-white)',
          padding: '2.5rem',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--color-border)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem' }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginBottom: '0.5rem' }}>
                Customer Ratings & Feedback
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ display: 'flex', color: 'var(--color-primary)' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="var(--color-primary)" />
                  ))}
                </div>
                <span style={{ fontSize: '1.1rem', fontWeight: 700 }}>{product.rating} out of 5</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-secondary)' }}>
                  • Based on {reviewsList.length + 46} verified purchases
                </span>
              </div>
            </div>
          </div>

          {/* Reviews List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
            {reviewsList.map(rev => (
              <div key={rev.id} style={{ padding: '1rem', backgroundColor: 'var(--color-surface-low)', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <strong style={{ fontSize: '0.9rem' }}>{rev.author}</strong>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-secondary)' }}>({rev.location})</span>
                    {rev.verified && (
                      <span className="badge-gold" style={{ fontSize: '0.65rem' }}>Verified Bride</span>
                    )}
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-secondary)' }}>{rev.date}</span>
                </div>
                <div style={{ display: 'flex', color: 'var(--color-primary)', marginBottom: '0.35rem' }}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={13} fill="var(--color-primary)" />
                  ))}
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-charcoal)', lineHeight: 1.5 }}>
                  "{rev.comment}"
                </p>
              </div>
            ))}
          </div>

          {/* Submit Review Box */}
          <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-surface-container)', borderRadius: 'var(--radius-md)' }}>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', marginBottom: '0.75rem' }}>
              Share Your Bride of Enchantique Experience
            </h4>
            <form onSubmit={handleReviewSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }} className="review-form-inputs">
                <input
                  type="text"
                  placeholder="Your Name (e.g. Dr. Lakshmi Menon)"
                  value={newReviewAuthor}
                  onChange={(e) => setNewReviewAuthor(e.target.value)}
                  required
                  className="form-input"
                />
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#fff', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-secondary)' }}>Your Rating:</span>
                  {[1, 2, 3, 4, 5].map(star => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewReviewRating(star)}
                      style={{ color: star <= newReviewRating ? 'var(--color-primary)' : 'var(--color-border)' }}
                    >
                      <Star size={16} fill={star <= newReviewRating ? 'var(--color-primary)' : 'none'} />
                    </button>
                  ))}
                </div>
              </div>
              <textarea
                placeholder="How did this jewellery feel on your skin and pair with your attire?"
                rows={3}
                value={newReviewText}
                onChange={(e) => setNewReviewText(e.target.value)}
                required
                className="form-input"
              />
              <button
                type="submit"
                disabled={isSubmittingReview}
                className="btn-primary"
                style={{ alignSelf: 'flex-start', padding: '0.65rem 1.4rem', fontSize: '0.8rem' }}
              >
                {isSubmittingReview ? 'Submitting...' : 'Post Verified Review'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* You May Also Like Section */}
      <section className="container">
        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginBottom: '1.5rem' }}>
          Complete the Regal Look
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.5rem'
        }} className="product-grid-4">
          {relatedProducts.map(p => (
            <div
              key={p.id}
              onClick={() => navigate('product', p.id)}
              className="luxury-card"
              style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ aspectRatio: '4/5', overflow: 'hidden', backgroundColor: 'var(--color-surface-container)' }}>
                <img src={p.images[0]} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '1rem' }}>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '0.95rem', marginBottom: '0.35rem' }}>
                  {p.name}
                </h4>
                <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-primary-dark)' }}>
                  ₹{p.price.toLocaleString('en-IN')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .pdp-main-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .review-form-inputs {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
