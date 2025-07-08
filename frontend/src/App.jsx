import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Mainlayout from './layouts/Mainlayout';
import Home from './pages/Home';
import Cases from './pages/Cases';
import NotFoundPage from './pages/Notfound';
import Clients from './pages/Clients';
import AddNewClient from './pages/AddNewClient';
import ProtectedRoute from './components/ProtectedRoutes'; // ✅ import
import { useAuth } from './context/AuthContext';

const addclient = async (client) => {
  const res = await fetch('/api/clients', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(client),
  });
  return;
};

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />

      {/* 🔐 Protect everything inside Mainlayout */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Mainlayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Home />} />
        <Route path="cases" element={<Cases />} />
        <Route path="clients" element={<Clients />} />
        <Route path="add-client" element={<AddNewClient addClient={addclient} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
