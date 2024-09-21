import React, { useEffect, useState } from "react";

const About = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about-section");
      const sectionTop = aboutSection.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (sectionTop < screenHeight * 0.75) {
        setAnimate(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        ...styles.aboutSection,
        opacity: animate ? 1 : 0,
        transform: animate ? "translateY(0)" : "translateY(50px)",
      }}
      id="about-section"
    >
      <h2 style={styles.header}>About Us</h2>
      <p style={styles.text}>
        Welcome to <strong>TravelDreams Travels</strong>, your go-to destination for incredible travel experiences! We are passionate globetrotters dedicated to exploring the world’s most beautiful destinations and helping you make the most of your travel adventures.
      </p>

      <h3 style={styles.subHeader}>Our Mission</h3>
      <p style={styles.text}>
        At TravelDreams, we strive to inspire and empower travelers by offering expertly curated travel experiences that focus on authenticity, sustainability, and local culture. Whether you're looking to immerse yourself in bustling city life, unwind on a secluded beach, or trek through scenic mountains, we've got you covered.
      </p>

      <h3 style={styles.subHeader}>What We Offer</h3>
      <ul style={styles.list}>
        <li style={styles.listItem}>📍 Custom Travel Itineraries: Tailored to suit your preferences and travel goals.</li>
        <li style={styles.listItem}>🛶 Adventure Tours: From hiking, kayaking, to thrilling wildlife safaris.</li>
        <li style={styles.listItem}>🏨 Accommodation Deals: Exclusive partnerships with top-rated hotels, resorts, and homestays.</li>
        <li style={styles.listItem}>🌍 Sustainable Travel Guides: Promoting eco-friendly and culturally conscious travel.</li>
        <li style={styles.listItem}>🚗 24/7 Travel Assistance: Our support team is available anytime to ensure your journey is smooth.</li>
      </ul>

      <h3 style={styles.subHeader}>Our Values</h3>
      <p style={styles.text}>
        We believe in responsible and ethical tourism, preserving the beauty of the environment, and supporting local communities. Our values revolve around:
      </p>
      <ul style={styles.list}>
        <li style={styles.listItem}>🌱 Sustainability: Minimizing environmental impact.</li>
        <li style={styles.listItem}>🧑‍🤝‍🧑 Inclusivity: Travel for everyone, irrespective of background or abilities.</li>
        <li style={styles.listItem}>🗺️ Cultural Respect: Emphasizing immersive, respectful interactions with local cultures.</li>
      </ul>

      <h3 style={styles.subHeader}>Client Testimonials</h3>
      <div style={styles.testimonials}>
        <blockquote style={styles.blockquote}>
          "GlobeTrek transformed my honeymoon into an unforgettable adventure! Their team made sure every detail was perfect. I can't wait to book my next trip with them!" – Sarah L.
        </blockquote>
        <blockquote style={styles.blockquote}>
          "I've never experienced such a seamless, exciting, and culturally enriching trip. The personalized itinerary took all the stress out of planning. 10/10!" – Jason K.
        </blockquote>
      </div>

      <h3 style={styles.subHeader}>Join Our Travel Community</h3>
      <p style={styles.text}>
        Ready to start your journey? Whether you're a solo traveler, a family adventurer, or a thrill-seeker, we’re here to craft the perfect experience for you. Follow us on social media, sign up for our newsletter, and let’s make your next vacation unforgettable.
      </p>
      <button style={styles.ctaButton}>Plan Your Adventure</button>
    </div>
  );
};


const styles = {
  aboutSection: {
    backgroundColor: "#1e1e1e", 
    padding: "50px 80px",
    marginTop: "50px",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.4)",
    borderRadius: "10px",
    opacity: "0",
    transform: "translateY(50px)",
    transition: "all 1s ease",
    overflow: "hidden",
  },
  header: {
    fontSize: "36px",
    marginBottom: "20px",
    color: "#ffffff", 
  },
  subHeader: {
    fontSize: "28px",
    marginTop: "30px",
    color: "#ffffff", 
  },
  text: {
    fontSize: "18px",
    lineHeight: "1.6",
    color: "#d1d1d1", 
    marginBottom: "20px",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  listItem: {
    fontSize: "18px",
    color: "#a9a9a9", 
    marginBottom: "10px",
    position: "relative",
  },
  testimonials: {
    fontStyle: "italic",
    color: "#aaaaaa", 
    margin: "20px 0",
  },
  blockquote: {
    margin: "15px 0",
  },
  ctaButton: {
    display: "inline-block",
    padding: "10px 30px",
    backgroundColor: "#ff6f61", 
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "18px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  ctaButtonHover: {
    backgroundColor: "#e65a50", 
  },
  animated: {
    opacity: "1",
    transform: "translateY(0)",
  },
};

export default About;
