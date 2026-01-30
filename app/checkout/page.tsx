"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/src/context/CartContext";
import "./CheckoutPage.css";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaUser,
} from "react-icons/fa";
import config from "@/src/data/config.json";

interface OrderDetails {
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  items: any[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  timestamp: string;
}

export default function CheckoutPage() {
  const router = useRouter();
  const { items, clearCart } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    houseNumber: "",
    city: "",
    pincode: "",
    landmark: "",
    phone: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (items.length === 0 && !isLoading) {
      router.push("/cart");
    }
  }, [items, router, isLoading]);

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = subtotal >= config.delivery.freeDeliveryThreshold ? 0 : config.delivery.deliveryFee;
  const total = subtotal + deliveryFee;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOrderViaWhatsApp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.pincode) {
      alert("Please fill in all required fields");
      return;
    }

    if (!/^[0-9]{10}$/.test(formData.phone)) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }

    if (!/^[0-9]{6}$/.test(formData.pincode)) {
      alert("Please enter a valid 6-digit pincode");
      return;
    }

    setIsLoading(true);

    try {
      const orderDetails: OrderDetails = {
        customerName: formData.name,
        customerPhone: formData.phone,
        customerAddress: `${formData.houseNumber ? `H.No: ${formData.houseNumber}, ` : ""}${formData.city ? `${formData.city}, ` : ""}${formData.pincode ? `Pincode: ${formData.pincode}` : ""}${formData.landmark ? `, Landmark: ${formData.landmark}` : ""}`,
        items,
        subtotal,
        deliveryFee,
        total,
        timestamp: new Date().toISOString(),
      };

      // Save order to localStorage
      const orders = JSON.parse(localStorage.getItem("orders") || "[]");
      orders.push(orderDetails);
      localStorage.setItem("orders", JSON.stringify(orders));

      // Create WhatsApp message
      const orderText = `📦 NEW ORDER\n\n👤 ${formData.name}\n📱 ${formData.phone}\n📍 Address:\n${formData.houseNumber ? `H.No: ${formData.houseNumber}\n` : ""}${formData.city ? `City: ${formData.city}\n` : ""}${formData.pincode ? `Pincode: ${formData.pincode}\n` : ""}${formData.landmark ? `Landmark: ${formData.landmark}\n` : ""}\n🛒 Items:\n${items.map((i) => `• ${i.name} (${i.weight}) x${i.quantity} - ₹${i.price * i.quantity}`).join("\n")}\n\n💰 Subtotal: ₹${subtotal}\n🚚 Delivery: ₹${deliveryFee}\n💵 Total: ₹${total}\n\n⏰ ${new Date().toLocaleString()}`;

      const whatsappUrl = `https://wa.me/${config.businessInfo.whatsappNumber}?text=${encodeURIComponent(orderText)}`;

      // Open WhatsApp
      window.open(whatsappUrl, "_blank");

      // Clear cart and redirect
      clearCart();
      setTimeout(() => {
        router.push("/order-success");
      }, 500);
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (items.length === 0 && !isLoading) {
    return (
      <div className="checkout-loading">
        <p>Redirecting to cart...</p>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <div className="checkout-wrapper">
        {/* Checkout Form Section */}
        <div className="checkout-form-section">
          <h1>Checkout</h1>

          <form onSubmit={handleOrderViaWhatsApp}>
            {/* Customer Name */}
            <div className="form-group">
              <label htmlFor="name">
                <FaUser style={{ marginRight: "8px" }} />
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* House Number */}
            <div className="form-group">
              <label htmlFor="houseNumber">H.No</label>
              <input
                type="text"
                id="houseNumber"
                name="houseNumber"
                placeholder="Enter house number"
                value={formData.houseNumber}
                onChange={handleInputChange}
              />
            </div>

            {/* City */}
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="Enter city"
                value={formData.city}
                onChange={handleInputChange}
              />
            </div>

            {/* Pincode */}
            <div className="form-group">
              <label htmlFor="pincode">Pincode *</label>
              <input
                type="text"
                inputMode="numeric"
                id="pincode"
                name="pincode"
                placeholder="Enter pincode"
                value={formData.pincode}
                onChange={handleInputChange}
                pattern="[0-9]{6}"
                required
              />
            </div>

            {/* Landmark */}
            <div className="form-group">
              <label htmlFor="landmark">Landmark</label>
              <input
                type="text"
                id="landmark"
                name="landmark"
                placeholder="Enter landmark"
                value={formData.landmark}
                onChange={handleInputChange}
              />
            </div>

            {/* Phone Number */}
            <div className="form-group">
              <label htmlFor="phone">
                <FaPhone style={{ marginRight: "8px" }} />
                Mob Number *
              </label>
              <input
                type="tel"
                inputMode="numeric"
                id="phone"
                name="phone"
                placeholder="Enter your mobile number"
                value={formData.phone}
                onChange={handleInputChange}
                pattern="[0-9]{10}"
                required
              />
            </div>

            {/* Checkout Button */}
            <button
              type="submit"
              className="checkout-btn"
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : "Order Via WhatsApp"}
            </button>

            <p
              className="payment-help"
              style={{
                marginTop: 8,
                color: "#666",
                fontWeight: 500,
                textAlign: "center",
              }}
            >
              You will be redirected to WhatsApp to complete your order
            </p>
          </form>
        </div>

        {/* Order Summary Section */}
        <div className="order-summary-section">
          <h2>Order Summary</h2>

          <div className="cart-items">
            {items.map((item) => (
              <div key={item.id} className="cart-item-summary">
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <p className="weight-qty">
                    {item.weight} × {item.quantity}
                  </p>
                </div>
                <div className="item-price">
                  ₹{item.price * item.quantity}
                </div>
              </div>
            ))}
          </div>

          <div className="summary-divider"></div>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          {subtotal < config.delivery.freeDeliveryThreshold && (
            <div className="summary-row">
              <span>Delivery Fee</span>
              <span>₹{deliveryFee}</span>
            </div>
          )}

          {subtotal >= config.delivery.freeDeliveryThreshold && (
            <div className="summary-row">
              <span>Delivery Fee</span>
              <span className="free-delivery">FREE</span>
            </div>
          )}

          {subtotal < config.delivery.freeDeliveryThreshold && (
            <div className="free-delivery-msg">
              Add ₹{config.delivery.freeDeliveryThreshold - subtotal} more for free delivery!
            </div>
          )}

          <div className="summary-divider"></div>

          <div className="summary-total">
            <span>Total Amount</span>
            <span>₹{total}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
