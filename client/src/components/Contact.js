import React from 'react';

function Contact() {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>
        You can reach us at the following email address:
        <a href="mailto:contact@example.com">contact@example.com</a>
      </p>
      <h3>Contact Form</h3>
      <form>
        <div>
          <label For="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label For="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label For="message">Message:</label>
          <textarea id="message" name="message" rows="4" required />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
