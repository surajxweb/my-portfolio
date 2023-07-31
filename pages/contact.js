// ContactForm.js
import React, { useState } from "react";
import styles from "../styles/ContactForm.module.css";
import Navbar from "../components/navbar";
import LastComp from "../components/LastComp";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/xwkdvoqa11", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Successful form submission logic (e.g., show success message)
        alert("Form submitted successfully!!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        // Error handling (e.g., show error message)
        alert("Form submission failed. Please try again!");
      }
    } catch (error) {
      console.log("Error:", error);
    }
    // Clear form fields after submission (optional)
  };

  return (
    <>
      {" "}
      <Navbar />
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Send</button>
      </form>
      <LastComp />
    </>
  );
};

export default ContactForm;
