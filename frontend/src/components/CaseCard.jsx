const CaseCard = ({ title, client, type, status, notes }) => {
  return (
    <div className="bg-white border border-purple-200 rounded-lg shadow p-6">
      <h3 className="text-xl font-semibold text-purple-800 mb-2">
        {title}
      </h3>
      <p className="text-purple-700 mb-1">
        👤 Client: <span className="font-medium">{client}</span>
      </p>
      <p className="text-purple-700 mb-1">
        Type: <span className="font-medium">{type}</span>
      </p>
      <p className="text-purple-700 mb-1">
         Status: <span className="font-medium">{status}</span>
      </p>
      {notes && (
        <p className="text-sm text-purple-600 mt-2 italic">
          {notes}
        </p>
      )}
    </div>
  );
};

export default CaseCard;
