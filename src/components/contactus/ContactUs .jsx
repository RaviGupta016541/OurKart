import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactUs = () => {
  // Formik hook setup
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      message: Yup.string().required('Message is required')
    }),
    onSubmit: (values) => {
      // On form submit, log the values
      console.log('Form submitted:', values);
    }
  });

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Contact Us</h1>
      <p className="lead text-center">
        We'd love to hear from you! If you have any questions or feedback, feel free to reach out to us through the form or contact details below.
      </p>

      <div className="row">
        <div className="col-md-6">
          <h3>Contact Form</h3>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                className={`form-control ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''}`}
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your name"
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="invalid-feedback">{formik.errors.name}</div>
              ) : null}
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your email"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="invalid-feedback">{formik.errors.email}</div>
              ) : null}
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className={`form-control ${formik.touched.message && formik.errors.message ? 'is-invalid' : ''}`}
                id="message"
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                rows="4"
                placeholder="Enter your message"
              ></textarea>
              {formik.touched.message && formik.errors.message ? (
                <div className="invalid-feedback">{formik.errors.message}</div>
              ) : null}
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>

        <div className="col-md-6">
          <h3>Contact Details</h3>
          <p>If you prefer to reach out directly, here are our contact details:</p>
          <ul>
            <li>
              <strong>Email:</strong> support@ourkart.com
            </li>
            <li>
              <strong>Phone:</strong> +91 8756382793
            </li>
            <li>
              <strong>Address:</strong> 123 E-commerce St, ShopCity, Bangalore
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
