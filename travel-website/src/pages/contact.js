import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD_MgoJQ3gtGOWDvDDKAVwgmBfqQ6cZ3Ao",
  authDomain: "travel-a2b30.firebaseapp.com",
  projectId: "travel-a2b30",
  storageBucket: "travel-a2b30.appspot.com",
  messagingSenderId: "509341503698",
  appId: "1:509341503698:web:ed3b6b824c66a187cd9d0b",
  measurementId: "G-EHTHL5ZDL0",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const docRef = await addDoc(collection(db, "contacts"), formData);
      console.log("Document written with ID: ", docRef.id);
      setSubmitted(true); 
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div style={styles.formContainer}>
      <h2 style={styles.header}>Contact Us</h2>
      {submitted ? (
        <p style={styles.successMessage}>
          Thank you for reaching out! We'll get back to you soon.
        </p>
      ) : (
        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Name:</label>
            <input
              type="text"
              name="name"
              style={styles.input}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email:</label>
            <input
              type="email"
              name="email"
              style={styles.input}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Subject:</label>
            <input
              type="text"
              name="subject"
              style={styles.input}
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Message:</label>
            <textarea
              name="message"
              style={styles.textarea}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" style={styles.submitButton}>
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};


const styles = {
  formContainer: {
    backgroundColor: "#2a2a2a",
    padding: "30px",
    borderRadius: "8px",
    maxWidth: "600px",
    margin: "0 auto",
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
  },
  header: {
    fontSize: "28px",
    marginBottom: "20px",
    color: "#fff",
    textAlign: "center",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    color: "#ddd",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #555",
    backgroundColor: "#333",
    color: "#fff",
    fontSize: "16px",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #555",
    backgroundColor: "#333",
    color: "#fff",
    fontSize: "16px",
    minHeight: "120px",
  },
  submitButton: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#ff6f61",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "18px",
    cursor: "pointer",
    marginTop: "10px",
  },
  successMessage: {
    color: "#76c893",
    textAlign: "center",
    fontSize: "18px",
  },
};

export default ContactForm;
