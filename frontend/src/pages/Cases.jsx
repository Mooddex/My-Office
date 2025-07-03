import { useEffect, useState } from "react";
import CaseCard from "../components/CaseCard";

const Cases = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await fetch("/api/clients");
        const data = await res.json();
        setClients(data);
      } catch (err) {
        console.error("Error fetching clients:", err);
      }
    };

    fetchClients();
  }, []);

  return (
    <section className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-purple-800 mb-6">Cases</h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clients.length > 0 ? (
            clients.map((client) =>
              client.case ? (
                <CaseCard
                  key={client._id}
                  title={client.case.caseName}
                  client={client.name}
                  type={client.case.caseType}
                  status={client.case.caseStatus}
                  notes={client.case.notes}
                />
              ) : null
            )
          ) : (
            <p className="text-purple-600">No cases found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cases;
