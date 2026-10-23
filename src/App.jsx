import { useMemo, useState } from "react";
import "./App.css";
import useProducts from "./data/useProducts";

// ============================================
// SHOP SETTINGS — change these to your own
// ============================================
const SHOP = {
  name: "kumo",
  whatsapp: "8801613113028", // country code + number, no + sign
  bkash: "01521386564",
  nagad: "01521386564",
  rocket: "01521386564",
  facebook: "", // paste your Kumo Facebook page link here later
  instagram: "", // paste your Kumo Instagram link here later
};

const CATEGORIES = [
  "All",
  "Cars & RC",
  "Figures",
  "Building Blocks",
  "Toys",
  "Masks & Costumes",
  "Kids",
  "Fashion",
  "Bags",
  "Phone Cases",
  "Decor",
];

const formatPrice = (amount) =>
  `৳ ${new Intl.NumberFormat("en-BD", { maximumFractionDigits: 0 }).format(amount)}`;

const getAdvanceAmount = (product) => Math.ceil(product.price * 0.5);

const getProductImages = (product) =>
  product.images && product.images.length > 0
    ? product.images
    : [product.image, product.image2].filter(Boolean);

function CloudIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 64 40" aria-hidden="true">
      <path
        d="M17 38h33a12 12 0 0 0 1-24 16 16 0 0 0-30-4A13 13 0 0 0 17 38z"
        fill="currentColor"
      />
    </svg>
  );
}

function SkyClouds() {
  return (
    <div className="sky" aria-hidden="true">
      <CloudIcon className="sky-cloud c1" />
      <CloudIcon className="sky-cloud c2" />
      <CloudIcon className="sky-cloud c3" />
      <CloudIcon className="sky-cloud c4" />
      <CloudIcon className="sky-cloud c5" />
      <span className="sky-star s1">✦</span>
      <span className="sky-star s2">✦</span>
      <span className="sky-star s3">✦</span>
    </div>
  );
}

function App() {
  const products = useProducts();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");

  const openProduct = (product) => {
    setSelectedProduct(product);
    setCurrentImage(0);
    setSelectedSize("");
  };

  const categories = useMemo(() => {
    const extra = products
      .map((p) => p.category)
      .filter((c) => c && !CATEGORIES.includes(c));
    return [...CATEGORIES, ...new Set(extra)].filter(
      (c) => c === "All" || products.some((p) => p.category === c)
    );
  }, [products]);

  const filteredProducts = useMemo(() => {
    const q = search.trim().toLowerCase();
    return products.filter((p) => {
      const inCategory = activeCategory === "All" || p.category === activeCategory;
      const inSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        (p.category || "").toLowerCase().includes(q);
      return inCategory && inSearch;
    });
  }, [products, activeCategory, search]);

  const orderOnWhatsApp = (product) => {
    if (product.sizes && product.sizes.length > 0 && !selectedSize) {
      alert("Please select a size first.");
      return;
    }

    const sizeText = product.sizes ? `\nSize: ${selectedSize}` : "";

    const message = product.available
      ? `Hi Kumo, I want to order:

${product.name}
Price: ${formatPrice(product.price)}
Status: Available${sizeText}`
      : `Hi Kumo, I want to pre-order:

${product.name}
Price: ${formatPrice(product.price)}
50% Advance: ${formatPrice(getAdvanceAmount(product))}
Status: Pre-order${sizeText}`;

    window.open(
      `https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const images = selectedProduct ? getProductImages(selectedProduct) : [];

  return (
    <div className="page">
      <SkyClouds />

      <header className="navbar">
        <div className="logo">
          <CloudIcon className="logo-cloud" />
          <span>kumo</span>
        </div>

        <div className="top-socials">
          {SHOP.instagram && (
            <a href={SHOP.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
          )}
          {SHOP.facebook && (
            <a href={SHOP.facebook} target="_blank" rel="noreferrer">
              Facebook
            </a>
          )}
          <a
            className="wa-link"
            href={`https://wa.me/${SHOP.whatsapp}`}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <main className="container">
        <section className="intro">
          <p className="small-title">TOYS · FIGURES · CUTE FINDS</p>
          <h1>
            Little joys, <span>from the clouds.</span>
          </h1>
          <p className="description">
            Cars, figures, building sets and cute everyday finds — imported
            from China, priced in taka.
          </p>

          <label className="search-box">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-4-4" />
            </svg>
            <input
              type="search"
              placeholder="Search toys, figures, cars…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
        </section>

        <section className="filter-section">
          {categories.map((category) => (
            <button
              key={category}
              className={activeCategory === category ? "filter-button active" : "filter-button"}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </section>

        {filteredProducts.length === 0 && (
          <div className="empty">
            <CloudIcon className="empty-cloud" />
            <p>Nothing here yet. Try another search or message us on WhatsApp!</p>
          </div>
        )}

        <section className="products">
          {filteredProducts.map((product, index) => (
            <article
              className="product-card"
              key={product.id}
              style={{ animationDelay: `${Math.min(index, 16) * 50}ms` }}
              onClick={() => openProduct(product)}
            >
              <div className="image-box">
                <img src={product.image} alt={product.name} loading="lazy" />
                <span className={product.available ? "status-badge available" : "status-badge preorder"}>
                  {product.available ? "In stock" : "Pre-order"}
                </span>
              </div>

              <div className="product-info">
                <p className="category">{product.category}</p>
                <h2>{product.name}</h2>
                <div className="price-row">
                  <p className="price">{formatPrice(product.price)}</p>
                  {!product.available && (
                    <span className="advance-chip">
                      50% {formatPrice(getAdvanceAmount(product))}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>

      <section className="terms-section">
        <div className="terms-header">
          <p className="small-title">HOW KUMO WORKS</p>
          <h2>Ordering & pre-order</h2>
          <p>Please read this before placing your order.</p>
        </div>

        <div className="terms-list">
          <div className="term-item">
            <span className="term-number">01</span>
            <div>
              <h3>Direct from China</h3>
              <p>All Kumo products are imported directly from China.</p>
            </div>
          </div>

          <div className="term-item">
            <span className="term-number">02</span>
            <div>
              <h3>Price includes shipping</h3>
              <p>The price you see already includes bringing the product to Bangladesh.</p>
            </div>
          </div>

          <div className="term-item">
            <span className="term-number">03</span>
            <div>
              <h3>Pre-order with 50% advance</h3>
              <p>Pre-order items are confirmed after you pay 50% in advance by bKash, Nagad or Rocket.</p>
            </div>
          </div>

          <div className="term-item">
            <span className="term-number">04</span>
            <div>
              <h3>Arrival time</h3>
              <p>Pre-order products normally take about 15–20 days to arrive.</p>
            </div>
          </div>

          <div className="term-item">
            <span className="term-number">05</span>
            <div>
              <h3>Advance is non-refundable</h3>
              <p>Once your pre-order is confirmed, the advance payment cannot be refunded.</p>
            </div>
          </div>

          <div className="term-item">
            <span className="term-number">06</span>
            <div>
              <h3>Can't find something?</h3>
              <p>Send us a photo on WhatsApp and we'll find it for you.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-logo">
              <CloudIcon className="logo-cloud" />
              <span>kumo</span>
            </div>
            <p>Little joys, from the clouds.</p>
          </div>
          <a
            className="footer-wa"
            href={`https://wa.me/${SHOP.whatsapp}`}
            target="_blank"
            rel="noreferrer"
          >
            Chat on WhatsApp
          </a>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Kumo. All rights reserved.</p>
        </div>
      </footer>

      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="product-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setSelectedProduct(null)} aria-label="Close">
              ×
            </button>

            <div className="modal-gallery">
              <div className="modal-slider">
                <img
                  key={images[currentImage]}
                  src={images[currentImage]}
                  alt={`${selectedProduct.name} view ${currentImage + 1}`}
                />

                {images.length > 1 && (
                  <>
                    <button
                      className="slider-arrow slider-prev"
                      onClick={() => setCurrentImage((c) => (c === 0 ? images.length - 1 : c - 1))}
                      aria-label="Previous image"
                    >
                      ‹
                    </button>
                    <button
                      className="slider-arrow slider-next"
                      onClick={() => setCurrentImage((c) => (c === images.length - 1 ? 0 : c + 1))}
                      aria-label="Next image"
                    >
                      ›
                    </button>
                  </>
                )}
              </div>

              {images.length > 1 && (
                <div className="slider-dots">
                  {images.map((image, index) => (
                    <button
                      key={`${image}-${index}`}
                      className={currentImage === index ? "slider-dot active" : "slider-dot"}
                      onClick={() => setCurrentImage(index)}
                      aria-label={`View image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="modal-content">
              <p className="modal-category">{selectedProduct.category}</p>
              <h2>{selectedProduct.name}</h2>
              <p className="modal-price">{formatPrice(selectedProduct.price)}</p>

              <div className={selectedProduct.available ? "modal-status modal-available" : "modal-status modal-preorder"}>
                <span className="status-dot"></span>
                {selectedProduct.available ? "In stock" : "Pre-order · 15–20 days"}
              </div>

              {selectedProduct.sizes && selectedProduct.sizes.length > 0 && (
                <div className="size-section">
                  <p className="size-title">Select size</p>
                  <div className="size-options">
                    {selectedProduct.sizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        className={selectedSize === size ? "size-button active" : "size-button"}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <p className="modal-description">{selectedProduct.description}</p>

              {!selectedProduct.available && (
                <div className="payment-section">
                  <div className="advance-summary">
                    <div>
                      <span>50% advance to confirm</span>
                      <strong>{formatPrice(getAdvanceAmount(selectedProduct))}</strong>
                    </div>
                    <p>Pay the rest when your product arrives.</p>
                  </div>

                  <p className="payment-title">Pay with</p>
                  <div className="payment-methods">
                    <div className="payment-card">
                      <span className="payment-name">bKash</span>
                      <span className="payment-number">{SHOP.bkash}</span>
                    </div>
                    <div className="payment-card">
                      <span className="payment-name">Nagad</span>
                      <span className="payment-number">{SHOP.nagad}</span>
                    </div>
                    <div className="payment-card">
                      <span className="payment-name">Rocket</span>
                      <span className="payment-number">{SHOP.rocket}</span>
                    </div>
                  </div>
                </div>
              )}

              <button className="whatsapp-button" onClick={() => orderOnWhatsApp(selectedProduct)}>
                {selectedProduct.available ? "Order on WhatsApp" : "Pre-order on WhatsApp"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
