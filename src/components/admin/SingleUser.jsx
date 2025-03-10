import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const SingleUser = () => {
  const { id } = useParams(); // Get the user ID from the URL
  const [user, setUser] = useState(null); // State to hold the user data
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Fetch the user details when the component is mounted
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/users/${id}`);
        const data = await response.json();
        setUser(data); // Set the user data in state
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) {
    return <div className="text-center"><div className="spinner-border" role="status"></div>Loading user details...</div>;
  }

  if (!user) {
    return <div className="text-center">User not found!</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          {/* Profile Image */}
          <div className="card">
            <img
              src={user.image}
              alt={`${user.firstName} ${user.lastName}`}
              className="img-fluid rounded-circle p-3"
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
          </div>
        </div>
        <div className="col-md-8">
          {/* User Info */}
          <div className="card mb-4">
            <div className="card-body">
              <h3 className="card-title">{user.firstName} {user.lastName}</h3>
              <p className="card-text"><strong>Username:</strong> {user.username}</p>
              <p className="card-text"><strong>Email:</strong> {user.email}</p>
              <p className="card-text"><strong>Phone:</strong> {user.phone}</p>
              <p className="card-text"><strong>Age:</strong> {user.age}</p>
              <p className="card-text"><strong>Gender:</strong> {user.gender}</p>
              <p className="card-text"><strong>Birth Date:</strong> {new Date(user.birthDate).toLocaleDateString()}</p>
              <p className="card-text"><strong>Blood Group:</strong> {user.bloodGroup}</p>
              <p className="card-text"><strong>Height:</strong> {user.height} cm</p>
              <p className="card-text"><strong>Weight:</strong> {user.weight} kg</p>
              <p className="card-text"><strong>Eye Color:</strong> {user.eyeColor}</p>
            </div>
          </div>

          {/* Hair Details */}
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Hair Details</h5>
              <p><strong>Color:</strong> {user.hair.color}</p>
              <p><strong>Type:</strong> {user.hair.type}</p>
            </div>
          </div>

          {/* Address */}
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Address</h5>
              <p><strong>Address:</strong> {user.address.address}</p>
              <p><strong>City:</strong> {user.address.city}</p>
              <p><strong>State:</strong> {user.address.state}</p>
              <p><strong>Postal Code:</strong> {user.address.postalCode}</p>
              <p><strong>Country:</strong> {user.address.country}</p>
            </div>
          </div>

          {/* Company Details */}
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Company</h5>
              <p><strong>Department:</strong> {user.company.department}</p>
              <p><strong>Company Name:</strong> {user.company.name}</p>
              <p><strong>Title:</strong> {user.company.title}</p>
              <p><strong>Company Address:</strong> {user.company.address.address}, {user.company.address.city}, {user.company.address.state}</p>
            </div>
          </div>

          {/* University Details */}
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">University</h5>
              <p><strong>University:</strong> {user.university}</p>
            </div>
          </div>

          {/* Crypto Details */}
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Crypto Details</h5>
              <p><strong>Coin:</strong> {user.crypto.coin}</p>
              <p><strong>Wallet:</strong> {user.crypto.wallet}</p>
              <p><strong>Network:</strong> {user.crypto.network}</p>
            </div>
          </div>

          {/* Bank Details */}
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Bank Details</h5>
              <p><strong>Card Number:</strong> {user.bank.cardNumber}</p>
              <p><strong>Card Type:</strong> {user.bank.cardType}</p>
              <p><strong>Currency:</strong> {user.bank.currency}</p>
              <p><strong>IBAN:</strong> {user.bank.iban}</p>
            </div>
          </div>

          {/* Miscellaneous Details */}
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Other Information</h5>
              <p><strong>MAC Address:</strong> {user.macAddress}</p>
              <p><strong>IP Address:</strong> {user.ip}</p>
              <p><strong>SSN:</strong> {user.ssn}</p>
              <p><strong>User Agent:</strong> {user.userAgent}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Link back to all users */}
      <Link to="/admin/allUsers" className="btn btn-primary mt-4">Back to All Users</Link>
    </div>
  );
};

export default SingleUser;
