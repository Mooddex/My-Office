import { useEffect, useState } from "react";
import CaseCard from "../components/CaseCard";

const Cases = () => {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    const fetchClientsAndExtractCases = async () => {
      try {
        const res = await fetch("/api/clients", {
          credentials: "include",
        });
        const clients = await res.json();

        const extractedCases = clients
          .filter(client => client.case) // skip clients with no case
          .map(client => ({
            ...client.case,
            clientName: client.name,
            _id: client._id,
          }));

        setCases(extractedCases);
      } catch (err) {
        console.error("Error fetching clients/cases", err);
      }
    };

    fetchClientsAndExtractCases();
  }, []);

  return (
    <section className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-purple-800 mb-6">Cases</h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cases.length > 0 ? (
            cases.map((c) => (
              <CaseCard
                key={c._id}
                client={c.clientName}
                type={c.caseName}
                status={c.caseStatus}
                description={c.description}
              />
            ))
          ) : (
            <p className="text-purple-600">No cases found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cases;
