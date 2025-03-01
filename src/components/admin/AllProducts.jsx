import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const AllProducts = () => {
  const [products, setProducts] = useState([]); // State to store products
  const [loading, setLoading] = useState(true); // State to handle loading status
  const [error, setError] = useState(null); // State to handle any errors

  // Fetch data when the component mounts
  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then((response) => {
        setProducts(response.data.products); // Store products data
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        setError("Failed to load products.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>; // Loading state
  if (error) return <div className="alert alert-danger">{error}</div>; // Error handling

  return (
    <div className="container mt-5">
      <h1>All Products</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Rating</th>
            <th>Brand</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>
                {/* Create a clickable link for the product title */}
                <Link to={`/admin/singleProduct/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {product.title}
                </Link>
              </td>
              <td>{product.category}</td>
              <td>₹{product.price.toFixed(2)}</td> {/* Format price */}
              <td>{product.stock}</td>
              <td>{product.rating}</td>
              <td>{product.brand}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllProducts;
