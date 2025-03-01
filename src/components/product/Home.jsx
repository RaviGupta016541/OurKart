import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { store } from '../../App';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]); // Store filtered products
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { cart, setCart } = useContext(store);
  const [searchQuery, setSearchQuery] = useState(''); // Track search query

  useEffect(() => {
    // Fetch data using axios
    axios.get('https://dummyjson.com/products')
      .then((response) => {
        setProducts(response.data.products); // Store the products data
        setFilteredProducts(response.data.products); // Also store in filteredProducts
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError("Failed to load products.");
        setLoading(false);
      });
  }, []);

  const updateCart = (id, title, price) => {
    const cartObj = {
      id,
      title,
      price,
      quantity: 1,
    };

    const existingProduct = cart.find(c => c.id === cartObj.id);

    if (existingProduct) {
      alert("Product already added.");
    } else {
      setCart([...cart, cartObj]);
    }
    console.log(cartObj);
  };

  // Function to handle search input change
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Filter products based on title
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredProducts(filtered); // Update filtered products based on search query
  };

  // Function to truncate description to 10 words
  const truncateDescription = (description) => {
    const words = description.split(' ');
    if (words.length > 9) {
      return words.slice(0, 9).join(' ') + '...';
    }
    return description;
  };

  if (loading) return (
    <div className="text-center spinner-container">
      <div className="spinner-border" style={{ width: '3rem', height: '3rem' }} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );

  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Products</h1>

      {/* Search Bar */}
{/* Search Bar */}
<div className="mb-4 d-flex justify-content-center">
  <div className="col-12 col-md-6 col-lg-4">
    <input
      type="text"
      className="form-control border border-primary border-3"
      placeholder="Search product "
      value={searchQuery}
      onChange={handleSearchChange}
    />
  </div>
</div>

      <div className="row">
        {filteredProducts.map((product) => {
          // Format the price to 2 decimal places
          const formattedPrice = (product.price * 10).toFixed(2);
          const formattedRating = product.rating.toFixed(1);
          const truncatedDescription = truncateDescription(product.description);

          return (
            <div key={product.id} className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4">
              <div className="card shadow-sm border-light rounded-lg overflow-hidden h-100">
                <img
                  src={product.images[0]}
                  className="card-img-top"
                  alt={product.title}
                  style={{
                    height: '250px',
                    objectFit: 'contain',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title" style={{ minHeight: '40px', overflow: 'hidden' }}>{product.title}</h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="badge rounded-pill text-bg-success small">{formattedRating}⭐</span>
                  </div>
                  <p className="card-text" style={{ minHeight: '40px', overflow: 'hidden' }}>
                    {truncatedDescription}
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="text-primary font-weight-bold">₹{formattedPrice}</p>
                    <div>
                      <button className="btn btn-primary btn-sm" onClick={() => updateCart(product.id, product.title, product.price)}>Add to Cart</button>
                      <Link to={`/product/${product.id}`} className="btn btn-outline-secondary btn-sm ms-2">View More</Link>
                    </div>
                  </div>
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
