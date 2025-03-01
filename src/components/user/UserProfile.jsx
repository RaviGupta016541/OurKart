import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UserProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/user/${id}`);
        setUser(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch user data');
        setLoading(false);
      }
    };

    fetchUserData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={user.image}
              alt="User Avatar"
              className="img-fluid rounded-start"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{`${user.firstName} ${user.lastName}`}</h5>
              <p className="card-text"><strong>Username:</strong> {user.username}</p>
              <p className="card-text"><strong>Age:</strong> {user.age}</p>
              <p className="card-text"><strong>Gender:</strong> {user.gender}</p>
              <p className="card-text"><strong>Email:</strong> {user.email}</p>
              <p className="card-text"><strong>Phone:</strong> {user.phone}</p>
              <p className="card-text"><strong>Blood Group:</strong> {user.bloodGroup}</p>
              <p className="card-text"><strong>Role:</strong> {user.role}</p>
              <h6>Address</h6>
              <p className="card-text">
                {user.address.address}, {user.address.city}, {user.address.state}, {user.address.country}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
