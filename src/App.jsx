import { Routes, Route } from 'react-router-dom';
import Mainlayout from './layouts/Mainlayout';
import Home from './pages/Home';
import Cases from './pages/Cases';
import NotFoundPage from './pages/Notfound';
import Clients from './pages/Clients';
import AddNewClient from './pages/AddNewClient';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainlayout />}>
        <Route index element={<Home />} />
        <Route path="cases" element={<Cases />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="clients" element={<Clients />} />
        <Route path="add-client" element={<AddNewClient />} />

      </Route>
    </Routes>
  );
}

export default App;
