const CaseCard = ({ title, client, type, status, notes }) => {
  return (
    <div className="bg-white border border-purple-200 rounded-lg shadow p-6">
      <h3 className="text-xl font-semibold text-purple-800 mb-2">
        {title || 'Untitled Case'}
      </h3>

      <p className="text-purple-700 mb-1">
        👤 Client: <span className="font-medium">{client || 'Unknown'}</span>
      </p>

      <p className="text-purple-700 mb-1">
        🏷️ Type: <span className="font-medium">{type || 'N/A'}</span>
      </p>

      <p className="text-purple-700 mb-1">
        📌 Status: <span className="font-medium capitalize">{status || 'N/A'}</span>
      </p>

      {notes && (
        <div className="mt-3">
          <p className="text-sm font-semibold text-purple-700">Notes:</p>
          <p className="text-sm text-purple-600 italic">{notes}</p>
        </div>
      )}
    </div>
  );
};

export default CaseCard;
