import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
  const { id } = useParams(); // Get the product id from the URL
  const [product, setProduct] = useState(null); // State to hold product data
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Fetch the product details when the component is mounted
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product data:', error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (!product) {
    return <div className="text-center">Product not found!</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Product Image */}
        <div className="col-md-4">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="img-fluid mb-4"
            style={{ maxHeight: '300px', objectFit: 'cover' }}
          />
        </div>
        {/* Product Details */}
        <div className="col-md-8">
          <h2>{product.title}</h2>
          <p className="text-muted">{product.category} / {product.brand}</p>
          <p>{product.description}</p>
          
          {/* Price and Discount */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="h4 text-success">${product.price}</span>
            <span className="text-muted"><strike>${(product.price * (1 + product.discountPercentage / 100)).toFixed(2)}</strike></span>
          </div>
          <div className="mb-3">
            <strong>Discount: </strong>{product.discountPercentage}%
          </div>
          
          {/* Rating */}
          <div className="mb-3">
            <strong>Rating: </strong>
            <span className="text-warning">{'★'.repeat(Math.round(product.rating))}</span>
            <span className="text-muted">({product.rating})</span>
          </div>

          {/* Stock & Availability */}
          <div className="mb-3">
            <strong>Stock: </strong>{product.stock} items
          </div>
          <div className="mb-3">
            <strong>Availability Status: </strong>
            <span className={product.availabilityStatus === 'Low Stock' ? 'text-danger' : 'text-success'}>
              {product.availabilityStatus}
            </span>
          </div>

          {/* Shipping and Warranty */}
          <div className="mb-3">
            <strong>Warranty: </strong>{product.warrantyInformation}
          </div>
          <div className="mb-3">
            <strong>Shipping Information: </strong>{product.shippingInformation}
          </div>
          
          {/* Return Policy */}
          <div className="mb-4">
            <strong>Return Policy: </strong>{product.returnPolicy}
          </div>

          {/* Barcode QR Code */}
          <div className="mb-4">
            <h4>Barcode</h4>
            <img
              src={product.meta.qrCode}
              alt="QR Code"
              className="img-fluid"
              style={{ width: '100px', height: 'auto' }}
            />
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-5">
        <h3>Reviews</h3>
        {product.reviews.length > 0 ? (
          product.reviews.map((review) => (
            <div key={review.date} className="border p-3 mb-3">
              <div className="d-flex justify-content-between">
                <strong>{review.reviewerName}</strong>
                <span className="text-warning">{'★'.repeat(review.rating)}</span>
              </div>
              <p>{review.comment}</p>
            </div>
          ))
        ) : (
          <p>No reviews available.</p>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
