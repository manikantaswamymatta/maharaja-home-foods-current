"use client";

import { useState } from "react";
import Footer from "@/src/components/Footer";
import "@/src/styles/contact.css";
import config from "@/src/data/config.json";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.phone || !form.message) {
      alert("Please fill required fields");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data?.redirectUrl) {
        window.open(data.redirectUrl, "_blank");
      }
    } catch (err) {
      console.error("Contact submit error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <section className="contact-page">
        {/* HERO */}
        <div className="contact-hero">
          <span className="tag">Get in Touch</span>
          <h1>We'd Love to Hear From You</h1>
          <p>
            Have questions about our products? Want to place a bulk order?
            Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* CONTENT */}
        <div className="contact-content">
          {/* LEFT */}
          <div className="contact-info">
            <h2>Contact Information</h2>

            <p><strong>Phone</strong><br />{config.businessInfo.phone}</p>
            <p><strong>Email</strong><br />{config.businessInfo.email}</p>
            <p>
              <strong>Address</strong><br />
              {config.businessInfo.address}
            </p>
            <p><strong>Instagram</strong><br />{config.businessInfo.instagram}</p>

            <div className="business-hours">
              <h3>Business Hours</h3>
              <p>{config.businessHours.weekdays}</p>
              <p>{config.businessHours.saturday}</p>
              <p>{config.businessHours.sunday}</p>
            </div>

            <div className="quick-whatsapp">
              <h3>Quick WhatsApp</h3>
              <p>For faster response, reach out to us directly on WhatsApp!</p>
              <button onClick={handleSubmit}>Chat on WhatsApp</button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="contact-form">
            <h2>Send us a Message</h2>

            <input name="name" placeholder="Enter your full name" onChange={handleChange} />
            <input name="phone" placeholder="Enter your phone number" onChange={handleChange} />
            <input name="email" placeholder="Enter your email address" onChange={handleChange} />

            <textarea
              name="message"
              placeholder="How can we help you?"
              onChange={handleChange}
            />

            <button onClick={handleSubmit}>Send via WhatsApp</button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
