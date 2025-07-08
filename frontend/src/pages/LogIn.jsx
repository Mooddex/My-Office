import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useAuth } from '../context/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setUser } = useAuth();

const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch('/auth/login', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    let data = {};
    try {
      data = await res.json();
    } catch {
      return alert('Login failed (invalid response from server)');
    }

    if (res.ok) {
      setUser(data.user); // ✅ Save user in context
      navigate('/');
    } else {
      alert(data.error || 'Login failed');
    }
  } catch (err) {
    console.error('Login error:', err);
    alert('Login error');
  }
};


  return (
    <div
       className="min-h-screen flex items-center justify-center px-4"
  style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1580740088850-4c84d9d46c91?auto=format&fit=crop&w=1600&q=80')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  
      }}
    >
      <div className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-xl p-8 shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome Back
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 bg-white">
            <FontAwesomeIcon icon={faEnvelope} className="text-gray-400 mr-3" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="w-full bg-transparent outline-none text-gray-800"
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 bg-white">
            <FontAwesomeIcon icon={faLock} className="text-gray-400 mr-3" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full bg-transparent outline-none text-gray-800"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition duration-200"
          >
            Log In
          </button>
        </form>

        <div className="text-center text-sm text-gray-600 mt-6">or login with</div>
        <div className="flex justify-center space-x-4 mt-3">
          <button className="p-3 bg-blue-800 hover:bg-blue-900 text-white rounded-full transition">
            <FontAwesomeIcon icon={faFacebookF} />
          </button>
          <button className="p-3 bg-blue-400 hover:bg-blue-500 text-white rounded-full transition">
            <FontAwesomeIcon icon={faTwitter} />
          </button>
          <button className="p-3 bg-red-500 hover:bg-red-600 text-white rounded-full transition">
            <FontAwesomeIcon icon={faGoogle} />
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-700">
          Don’t have an account?{' '}
          <a href="/signup" className="text-blue-600 hover:underline font-medium">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
