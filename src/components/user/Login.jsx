import React, { useState ,useContext} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import { store } from '../../App';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const {user,setUser}=useContext(store);
  const navigate = useNavigate(); // Replace useHistory with useNavigate

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Make API request to login
      const loginResponse = await axios.post('https://dummyjson.com/user/login', {
        username,
        password,
      });

      const { accessToken } = loginResponse.data; // Get accessToken from response

      // Save the accessToken to localStorage or sessionStorage
      localStorage.setItem('accessToken', accessToken);

      // Fetch user data using the access token
      const userResponse = await axios.get('https://dummyjson.com/user/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      console.log(userResponse.data)
      setUser(userResponse.data);


      const userRole = userResponse.data.role; // Assume the response contains a role field

      // Redirect based on user role
      if (userRole === 'admin') {
        navigate('/admin'); // Redirect to admin page using navigate
      } else {
        navigate('/home'); // Redirect to home page using navigate
      }

    } catch (error) {
      setError('Invalid username or password');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Login</h1>

      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;
