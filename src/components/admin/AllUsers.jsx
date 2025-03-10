import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AllUsers = () => {
  const [users, setUsers] = useState([]); // State to hold user data
  const [loading, setLoading] = useState(true); // Loading state
  const [roleCounts, setRoleCounts] = useState({
    totalUsers: 0,
    totalAdmins: 0,
    totalModerators: 0,
    totalNormalUsers: 0,
  });

  useEffect(() => {
    // Fetch the users data from the API when the component is mounted
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://dummyjson.com/users');
        const data = await response.json();
        setUsers(data.users); // Assuming the API response has a 'users' array
        setLoading(false);

        // Counting role occurrences
        const counts = {
          totalUsers: data.users.length,
          totalAdmins: 0,
          totalModerators: 0,
          totalNormalUsers: 0,
        };

        data.users.forEach(user => {
          if (user.role === 'admin') {
            counts.totalAdmins += 1;
          } else if (user.role === 'moderator') {
            counts.totalModerators += 1;
          } else {
            counts.totalNormalUsers += 1;
          }
        });

        setRoleCounts(counts); // Update role counts
      } catch (error) {
        console.error('Error fetching users data:', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div className="text-center">Loading users...</div>;
  }

  return (
    <div className="container mt-5">
      <h2>All Users</h2>

      {/* Role summary */}
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card text-white bg-primary">
            <div className="card-body">
              <h5 className="card-title">Total Users</h5>
              <p className="card-text">{roleCounts.totalUsers}</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-success">
            <div className="card-body">
              <h5 className="card-title">Total Admins</h5>
              <p className="card-text">{roleCounts.totalAdmins}</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-warning">
            <div className="card-body">
              <h5 className="card-title">Total Moderators</h5>
              <p className="card-text">{roleCounts.totalModerators}</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-info">
            <div className="card-body">
              <h5 className="card-title">Total Users</h5>
              <p className="card-text">{roleCounts.totalNormalUsers}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Profile</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <img
                  src={user.image}
                  alt={`${user.firstName} ${user.lastName}`}
                  className="img-fluid rounded-circle"
                  style={{ width: '50px', height: '50px' }}
                />
              </td>
              <td>
                <Link to={`/admin/singleuser/${user.id}`} className="text-decoration-none">
                  {user.firstName} {user.lastName}
                </Link>
              </td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
