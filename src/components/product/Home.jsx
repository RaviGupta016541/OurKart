import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data using axios
    axios.get('https://dummyjson.com/products')
      .then((response) => {
        setProducts(response.data.products); // Store the products data
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError("Failed to load products.");
        setLoading(false);
      });
  }, []);

  // Function to truncate description to 10 words
  const truncateDescription = (description) => {
    const words = description.split(' ');
    if (words.length > 9) {
      return words.slice(0, 9).join(' ') + '...';
    }
    return description;
  };
  if (loading) return <div class="text-center">
  <div class="spinner-border" style={{width: '3rem', height: '3rem'}} role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Products</h1>
      <div className="row">
        {products.map((product) => {
          // Format the price to 2 decimal places
          const formattedPrice = product.price.toFixed(2);
          const formattedRating = product.rating.toFixed(1);
          const truncatedDescription = truncateDescription(product.description);

          return (
            <div key={product.id} className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4">
              <div className="card" style={{ width: '18rem',height:'500px' }}>
                <img
                  src={product.images[0]}
                  className="card-img-top"
                  alt={product.title}
                  style={{ height: '250px', width: '100%',objectFit: 'contain' }} // Fixing image size
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ minHeight: '40px', overflow: 'hidden' }}>{product.title}</h5>
                  <span class="badge rounded-pill text-bg-success">{formattedRating}⭐</span>
                  <p className="card-text" style={{ minHeight: '40px', overflow: 'hidden' }}>{truncatedDescription}</p>
                  <p><strong>Price: ₹{formattedPrice}</strong></p>
                  <a href="#" className="btn btn-primary">Add to Cart</a>
                  <a href="#" className="btn btn-secondary ms-2">View More</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
