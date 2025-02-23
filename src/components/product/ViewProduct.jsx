import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ViewProduct = () => {
  const { id } = useParams(); // Get product id from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch product details by id
    axios.get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        setProduct(response.data); // Set product details
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        setError("Failed to load product details.");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="text-center spinner-container">
        <div className="spinner-border" style={{ width: '3rem', height: '3rem' }} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  
  if (error) {
    return <div className="alert alert-danger text-center">{error}</div>;
  }

  return (
    <div className="container mt-5">
      {/* Product Title */}
      <h1 className="text-center mb-4">{product.title}</h1>
      
      {/* Product Details Section */}
      <div className="row">
        {/* Product Image */}
        <div className="col-12 col-md-6 mb-4">
          <img
            src={product.images[0]}
            alt={product.title}
            className="img-fluid rounded shadow"
            style={{ objectFit: 'contain', maxHeight: '400px' }}
          />
        </div>

        {/* Product Info */}
        <div className="col-12 col-md-6">
          <h4 className="text-uppercase font-weight-bold">Description</h4>
          <p>{product.description}</p>
          
          <div className="d-flex justify-content-between align-items-center mb-3">
            <p className="text-success">
              <strong>Price: ₹{(product.price * 10).toFixed(2)}</strong>
            </p>
            <p className="text-warning">
              <strong>Rating: {product.rating.toFixed(1)}⭐</strong>
            </p>
          </div>

          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>Warranty:</strong> {product.warrantyInformation}</p>
          <p><strong>Shipping Info:</strong> {product.shippingInformation}</p>
          <p><strong>Return Policy:</strong> {product.returnPolicy}</p>

          <div className="d-grid gap-2 mt-4">
            <button className="btn btn-primary btn-lg">Add to Cart</button>
            <button className="btn btn-secondary btn-lg">Buy Now</button>
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <h3 className="mt-5 mb-4 text-center">Customer Reviews</h3>
      <div className="comments">
        {product.reviews && product.reviews.length > 0 ? (
          product.reviews.map((review, index) => (
            <div key={index} className="card mb-4 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{review.reviewerName}</h5>
                <h6 className="text-muted">{new Date(review.date).toLocaleDateString('en-CA')}</h6>
                <p className="card-text">{review.comment}</p>
                <p><strong>Rating: {review.rating}⭐</strong></p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default ViewProduct;
