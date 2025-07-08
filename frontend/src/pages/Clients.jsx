import { useEffect, useState } from "react";
import ClientCard from "../components/ClientCard"; // adjust path as needed

const Clients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await fetch("/api/clients",{
        credentials: "include",});
        const data = await res.json();
        setClients(data);
      } catch (err) {
        console.error("Error fetching clients", err);
      }
    };

    fetchClients();
  }, []);

  return (
    <section className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-purple-800 mb-6">Clients</h1>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clients.length > 0 ? (
            clients.map((client) => (
              <ClientCard
                key={client._id}
                name={client.name}
                email={client.email}
                phone={client.phone}
                notes={client.description} // assuming "description" is the issue
              />
            ))
          ) : (
            <p className="text-purple-600">No clients found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Clients;
