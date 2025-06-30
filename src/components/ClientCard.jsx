const ClientCard = ({ name, email, phone, notes }) => {
  return (
    <div className="bg-white border border-purple-200 rounded-lg shadow p-6 transition-colors duration-200">
      <h3 className="text-xl font-semibold text-purple-800 mb-2">
        {name}
      </h3>
      <p className="text-purple-700 mb-1">📧 {email}</p>
      <p className="text-purple-700 mb-1">📞 {phone}</p>
      {notes && (
        <p className="text-sm text-purple-600 mt-2 italic">
          {notes}
        </p>
      )}
    </div>
  );
};

export default ClientCard;
