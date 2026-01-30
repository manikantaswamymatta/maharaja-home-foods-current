"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import "./OrderSuccess.css";
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
  utrNumber?: string;
}

export default function OrderSuccessPage() {
  const [lastOrder, setLastOrder] = useState<OrderDetails | null>(null);

  useEffect(() => {
    // Retrieve the last order from localStorage
    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    if (orders.length > 0) {
      setLastOrder(orders[orders.length - 1]);
    }
  }, []);

  return (
    <div className="order-success-container">
      <div className="success-content">
        <div className="success-icon">�</div>
        <h1>Complete Your Payment</h1>
        <p className="success-message">
          Payment details will be sent to your WhatsApp number. Please complete the payment to confirm your order.
        </p>

        {lastOrder && (
          <div className="order-details-card">
            <h3>Order Details</h3>
            <div className="detail-item">
              <span className="detail-label">Order Amount:</span>
              <span className="detail-value">₹{lastOrder.total ?? "N/A"}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Customer:</span>
              <span className="detail-value">{lastOrder.customerName ?? "N/A"}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Phone:</span>
              <span className="detail-value">{lastOrder.customerPhone ?? "N/A"}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Address:</span>
              <span className="detail-value">{lastOrder.customerAddress ?? "N/A"}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Subtotal:</span>
              <span className="detail-value">₹{lastOrder.subtotal ?? "N/A"}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Delivery Fee:</span>
              <span className="detail-value">₹{lastOrder.deliveryFee ?? "N/A"}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Items:</span>
              <span className="detail-value">{lastOrder.items ? lastOrder.items.map((i: any) => `${i.name} (${i.weight}) x${i.quantity}`).join(", ") : "N/A"}</span>
            </div>
          </div>
        )}

        <div className="order-info">
          <div className="info-item">
            <span className="label">What happens next?</span>
            <ul className="info-list">
              <li>Payment details will be shared on your WhatsApp</li>
              <li>Complete the payment to confirm your order</li>
              <li>Your order will be prepared after payment confirmation</li>
              <li>Track your delivery via WhatsApp updates</li>
              <li>Free delivery for orders above ₹{config.delivery.freeDeliveryThreshold}</li>
            </ul>
          </div>

          <div className="info-item">
            <span className="label">Need help?</span>
            <p className="help-text">
              Contact us on WhatsApp for any queries or assistance regarding your order.
            </p>
          </div>
        </div>

        <div className="action-buttons">
          <Link href="/" className="btn btn-primary">
            Back to Home
          </Link>
          <Link href="/products" className="btn btn-secondary">
            Continue Shopping
          </Link>
        </div>

        <div className="thank-you">
          <p>Thank you for ordering from Maharaja Home Foods! 🙏</p>
        </div>
      </div>
    </div>
  );
}
