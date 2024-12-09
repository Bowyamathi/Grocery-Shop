import React from "react";
import c1 from "./image/c1.webp";
import c2 from "./image/c2.webp";
import c3 from "./image/c3.webp";
import c4 from "./image/c4.webp";
import b1 from "./image/b1.jpg";
import b2 from "./image/b2.jpg";
import b3 from "./image/b3.jpg";
// Customer images
import men1 from "./image/men1.png";

// Importing Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Importing Bootstrap JS for carousel functionality
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./Home.css";

// ProductCard component
const ProductCard = ({ product }) => {
  const { image, name, price, rating, ratingCount } = product;

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} className="product-image-img" />
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <div className="product-rating">
          <span>
            {"⭐".repeat(rating)}
            {"☆".repeat(5 - rating)}
          </span>
          <span className="rating-count"> ({ratingCount})</span>
        </div>
        <p className="product-price">${price}</p>
        <div className="product-buttons">
          <button
            className="btn add-to-cart"
            onClick={() => alert("Added to Cart!")}
          >
            Add to Cart
          </button>
          <button
            className="btn buy-now"
            onClick={() => alert("Proceed to Buy!")}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

// CustomerReview component with an image
const CustomerReview = ({ review }) => {
  const { name, text, rating, image } = review;

  return (
    <div className="customer-review">
      <div className="customer-image">
        <img src={image} alt={name} className="customer-image-img" />
      </div>
      <div className="customer-info">
        <h4>{name}</h4>
        <p>{text}</p>
        <div className="review-rating">
          {"⭐".repeat(rating)}
          {"☆".repeat(5 - rating)}
        </div>
      </div>
    </div>
  );
};

// ServiceCard component
const ServiceCard = ({ service }) => {
  const { icon, title, description } = service;

  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

// Home component with the carousel, products, customer reviews, and services
const Home = () => {
  const products = [
    { name: "Capsicum", image: c4, price: 49.99, rating: 4, ratingCount: 120 },
    { name: "Tomato", image: c2, price: 29.99, rating: 5, ratingCount: 80 },
    { name: "Cabbage", image: c3, price: 19.99, rating: 3, ratingCount: 150 },
    { name: "Onion", image: c1, price: 39.99, rating: 4, ratingCount: 60 },
    { name: "Broccoli", image: c2, price: 25.99, rating: 5, ratingCount: 70 },
    { name: "Lettuce", image: c3, price: 9.99, rating: 2, ratingCount: 110 },
    { name: "Carrot", image: c4, price: 12.99, rating: 5, ratingCount: 95 },
    { name: "Pepper", image: c1, price: 22.99, rating: 4, ratingCount: 130 },
    { name: "Potato", image: c2, price: 15.99, rating: 3, ratingCount: 100 },
  ];

  const customerReviews = [
    {
      name: "John Doe",
      text: "Great products and fast delivery!",
      rating: 5,
      image: men1,
    },
    {
      name: "Jane Smith",
      text: "Fresh vegetables, loved the quality.",
      rating: 4,
      image: men1,
    },
    {
      name: "Michael Johnson",
      text: "Reasonable prices, highly recommend!",
      rating: 4,
      image: men1,
    },
    {
      name: "Emily Davis",
      text: "Some items were not as fresh as expected.",
      rating: 3,
      image: men1,
    },
  ];

  const services = [
    {
      icon: "🚚",
      title: "Fast Delivery",
      description: "Get your products delivered in no time!",
    },
    {
      icon: "💳",
      title: "Secure Payment",
      description: "We offer secure and flexible payment options.",
    },
    {
      icon: "🔄",
      title: "Easy Returns",
      description: "Not satisfied? Easily return your products.",
    },
    {
      icon: "📞",
      title: "24/7 Support",
      description: "Our customer support is available around the clock.",
    },
  ];

  return (
    <>
      {/* Carousel Section */}
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={b1} // Path to your first image
              className="d-block w-80 carousel-img"
              alt="Slide 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src={b2} // Path to your second image
              className="d-block w-80 carousel-img"
              alt="Slide 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src={b3} // Path to your third image
              className="d-block w-80 carousel-img"
              alt="Slide 3"
            />
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Products Section */}
      <div className="container">
        <h2>Our Products</h2>
        <div className="product-grid">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        {/* Customer Reviews Section */}
        <h2>Customer Reviews</h2>
        <div className="reviews-grid">
          {customerReviews.map((review, index) => (
            <CustomerReview key={index} review={review} />
          ))}
        </div>

        {/* Our Services Section */}
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        {/* Footer Section */}
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-flex-container">
              <div className="footer-box">
                <h4>Quick Links</h4>
                <ul className="footer-links">
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#about">About Us</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                  <li>
                    <a href="#privacy">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#faq">FAQ</a>
                  </li>
                </ul>
              </div>

              <div className="footer-box">
                <h4>Address</h4>
                <p>5/204, North street, Govindhapuram</p>
                <p>Email: bowyamathi@gmail.com</p>
                <p>Phone: +91 8220946477</p>
              </div>

              <div className="footer-box">
                <h4>Customer Support</h4>
                <ul className="footer-links">
                  <li>
                    <a href="#support">Support Center</a>
                  </li>
                  <li>
                    <a href="#returns">Returns</a>
                  </li>
                  <li>
                    <a href="#shipping">Shipping Information</a>
                  </li>
                  <li>
                    <a href="#orders">Track Orders</a>
                  </li>
                  <li>
                    <a href="#terms">Terms & Conditions</a>
                  </li>
                </ul>
              </div>

              <div className="footer-box">
                <h4>Follow Us</h4>
                <div className="footer-social">
                  <a href="#facebook">
                    <i className="fab fa-facebook-f"></i> Facebook
                  </a>
                  <a href="#twitter">
                    <i className="fab fa-twitter"></i> Twitter
                  </a>
                  <a href="#instagram">
                    <i className="fab fa-instagram"></i> Instagram
                  </a>
                  <a href="#linkedin">
                    <i className="fab fa-linkedin"></i> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} BOWYA MATHIYAZHAGAN</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
