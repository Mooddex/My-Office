const ClientCard = ({ name, email, phone, notes }) => {
  return (
    <div className="bg-white border border-purple-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
      <h3 className="text-xl font-bold text-purple-800 mb-2">
        {name}
      </h3>

      <div className="text-sm text-purple-700 space-y-1">
        <p><span className="font-medium">📧 Email:</span> {email}</p>
        <p><span className="font-medium">📞 Phone:</span> {phone}</p>
      </div>

      {notes && (
        <p className="mt-3 text-sm text-purple-600 italic border-t pt-3">
          {notes}
        </p>
      )}
    </div>
  );
};

export default ClientCard;
