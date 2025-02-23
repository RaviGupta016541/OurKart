import React from 'react';

const ContactUs = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Contact Us</h1>
      <p className="lead text-center">We'd love to hear from you! If you have any questions or feedback, feel free to reach out to us through the form or contact details below.</p>

      <div className="row">
        <div className="col-md-6">
          <h3>Contact Form</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Enter your message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>

        <div className="col-md-6">
          <h3>Contact Details</h3>
          <p>If you prefer to reach out directly, here are our contact details:</p>
          <ul>
            <li><strong>Email:</strong> support@ourkart.com</li>
            <li><strong>Phone:</strong> +91 8756382793</li>
            <li><strong>Address:</strong> 123 E-commerce St, ShopCity, banglore</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
