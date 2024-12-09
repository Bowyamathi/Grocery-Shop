import React, { useState } from "react";
import "./Product.css";
import c1 from "./image/c1.webp";
import c2 from "./image/c2.webp";
import c3 from "./image/c3.webp";
import c4 from "./image/c4.webp";

// ProductCard component to display individual product details
const ProductCard = ({ product, onAddToCart }) => {
  const { image, name, price, rating, ratingCount } = product;

  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src={image}
          alt={name}
          style={{ width: "100%", height: "auto", maxHeight: "250px" }} // Reduced maxHeight for images
        />
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <div className="product-rating">
          <span>
            {"⭐".repeat(rating)}
            {"☆".repeat(5 - rating)}
          </span>
          <span className="rating-count">({ratingCount})</span>
        </div>
        <p className="product-price">${price}</p>
        <div className="product-buttons">
          <button
            className="btn add-to-cart"
            onClick={() => onAddToCart(product)} // Call the onAddToCart function
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

// Main Product component that renders both vegetables and fruits
const Product = () => {
  const [cart, setCart] = useState([]); // State to store cart items

  const vegetables = [
    { name: "Capsicum", image: c4, price: 49.99, rating: 4, ratingCount: 120 },
    { name: "Tomato", image: c2, price: 29.99, rating: 5, ratingCount: 80 },
    { name: "Cabbage", image: c3, price: 19.99, rating: 3, ratingCount: 150 },
    { name: "Onion", image: c1, price: 39.99, rating: 4, ratingCount: 60 },
    { name: "Carrot", image: c2, price: 14.99, rating: 5, ratingCount: 200 },
    { name: "Broccoli", image: c3, price: 24.99, rating: 4, ratingCount: 70 },
    { name: "Lettuce", image: c1, price: 9.99, rating: 3, ratingCount: 180 },
    { name: "Cucumber", image: c4, price: 19.99, rating: 4, ratingCount: 130 },
    { name: "Spinach", image: c2, price: 12.99, rating: 5, ratingCount: 150 },
    { name: "Pepper", image: c3, price: 22.99, rating: 4, ratingCount: 110 },
  ];

  const fruits = [
    { name: "Apple", image: c2, price: 49.99, rating: 5, ratingCount: 100 },
    { name: "Banana", image: c3, price: 29.99, rating: 4, ratingCount: 90 },
    { name: "Mango", image: c1, price: 19.99, rating: 5, ratingCount: 120 },
    { name: "Grapes", image: c4, price: 39.99, rating: 4, ratingCount: 70 },
    { name: "Orange", image: c1, price: 15.99, rating: 5, ratingCount: 130 },
    { name: "Pineapple", image: c2, price: 25.99, rating: 4, ratingCount: 85 },
    { name: "Peach", image: c3, price: 18.99, rating: 3, ratingCount: 140 },
    { name: "Strawberry", image: c4, price: 19.99, rating: 5, ratingCount: 90 },
    {
      name: "Watermelon",
      image: c2,
      price: 30.99,
      rating: 4,
      ratingCount: 120,
    },
    { name: "Blueberry", image: c1, price: 24.99, rating: 5, ratingCount: 110 },
  ];

  // Handle adding item to cart
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.name === product.name
      );

      if (existingProductIndex >= 0) {
        // Update quantity if product is already in cart
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += 1;
        return updatedCart;
      } else {
        // Add new product to cart
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    alert(`${product.name} has been added to the cart!`);
  };

  // Handle removing item from cart
  const handleRemoveFromCart = (product) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.name !== product.name)
    );
  };

  // Handle increasing quantity of a product in cart
  const handleIncreaseQuantity = (product) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.name === product.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Handle decreasing quantity of a product in cart
  const handleDecreaseQuantity = (product) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.name === product.name && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Calculate total price of all products in the cart
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h2 className="text-center">Vegetables</h2>
      <div
        style={{
          marginTop: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", // Updated to 4 columns
          gap: "15px", // Reduced gap between items
          justifyItems: "center",
        }}
      >
        {vegetables.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      <h2 className="text-center" style={{ marginTop: "40px" }}>
        Fruits
      </h2>
      <div
        style={{
          marginTop: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", // Updated to 4 columns
          gap: "15px", // Reduced gap between items
          justifyItems: "center",
        }}
      >
        {fruits.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      {/* Cart Information */}
      <div
        className="cart-info"
        style={{ marginTop: "40px", textAlign: "center" }}
      >
        <h3>
          Cart ({cart.length} item{cart.length !== 1 ? "s" : ""})
        </h3>
        {cart.length > 0 ? (
          <table
            style={{
              width: "100%",
              marginTop: "20px",
              borderCollapse: "collapse",
              border: "1px solid #ddd", // Add border to table
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#f4f4f4" }}>
                <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                  Product
                </th>
                <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                  Price
                </th>
                <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                  Quantity
                </th>
                <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                  Subtotal
                </th>
                <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                    {item.name}
                  </td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                    ${item.price.toFixed(2)}
                  </td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                    {item.quantity}
                    <button
                      style={{ marginLeft: "5px" }}
                      onClick={() => handleIncreaseQuantity(item)}
                    >
                      +
                    </button>
                    <button
                      style={{ marginLeft: "5px" }}
                      onClick={() => handleDecreaseQuantity(item)}
                    >
                      -
                    </button>
                  </td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                    <button onClick={() => handleRemoveFromCart(item)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Your cart is empty</p>
        )}
        <h4>Total: ${calculateTotal().toFixed(2)}</h4>
      </div>
    </div>
  );
};

export default Product;
