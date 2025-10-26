import React from "react";

function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
export default Contact;
