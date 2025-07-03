import { Routes, Route } from 'react-router-dom';
import Mainlayout from './layouts/Mainlayout';
import Home from './pages/Home';
import Cases from './pages/Cases';
import NotFoundPage from './pages/Notfound';
import Clients from './pages/Clients';
import AddNewClient from './pages/AddNewClient';

  // Add New client
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
      <Route path="/" element={<Mainlayout />}>
        <Route index element={<Home />} />
        <Route path="cases" element={<Cases />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="clients" element={<Clients />} />
        <Route path="add-client" element={<AddNewClient addClient={addclient}/>} />

      </Route>
    </Routes>
  );
}

export default App;
