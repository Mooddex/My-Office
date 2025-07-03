import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const styles = {
  label: 'block text-blue-900 font-bold mb-2',
  section: "bg-white py-20 mb-4",
  container: "container m-auto max-w-2xl py-24",
  inputText: "text-black border rounded w-full py-2 px-3 mb-2",
  button: 'bg-violet-800 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
};

const AddNewClient = ({ addClient }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [caseName, setCaseName] = useState('');
  const [caseType, setCaseType] = useState('');
  const [caseStatus, setCaseStatus] = useState('');
  const [caseNotes, setCaseNotes] = useState(''); 

  const navigate = useNavigate();

  const submitForm = async (e) => {
  e.preventDefault();

  const newClient = {
    name,
    phone,
    email,
    description,
    case: {
      caseName,
      caseType,
      caseStatus,
      notes: caseNotes
    }
  };

  try {
    const res = await fetch("/api/clients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newClient)
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Failed to add client");
    }

    toast.success("Client added successfully");
    navigate("/clients");
  } catch (err) {
    toast.error("Error: " + err.message);
  }
};

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-purple-800 text-center font-semibold mb-6">
              Add Client
            </h2>

            {/* Client Name */}
            <div className="mb-4">
              <label htmlFor="name" className={styles.label}>Name</label>
              <input
                type="text"
                id="name"
                className={styles.inputText}
                placeholder="Client Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label className={styles.label}>Phone</label>
              <input
                type="text"
                id="phone"
                className={styles.inputText}
                placeholder="Phone number"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            {/* Issue Description */}
            <div className="mb-4">
              <label htmlFor="description" className={styles.label}>Issue Description</label>
              <textarea
                id="description"
                className={styles.inputText}
                rows="4"
                placeholder="Add the issue or problem briefly"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className={styles.label}>Email</label>
              <input
                type="email"
                id="email"
                className={styles.inputText}
                placeholder="mahmoud@gmail.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Case Name */}
            <div className="mb-4">
              <label htmlFor="caseName" className={styles.label}>Case Name</label>
              <input
                type="text"
                id="caseName"
                className={styles.inputText}
                placeholder="e.g. Property Dispute"
                required
                value={caseName}
                onChange={(e) => setCaseName(e.target.value)}
              />
            </div>

            {/* Case Type */}
            <div className="mb-4">
              <label htmlFor="caseType" className={styles.label}>Case Type</label>
              <input
                type="text"
                id="caseType"
                className={styles.inputText}
                placeholder="e.g. Civil, Criminal, Family"
                required
                value={caseType}
                onChange={(e) => setCaseType(e.target.value)}
              />
            </div>

            {/* Case Status */}
            <div className="mb-4">
              <label htmlFor="caseStatus" className={styles.label}>Case Status</label>
              <select
                id="caseStatus"
                className={styles.inputText}
                required
                value={caseStatus}
                onChange={(e) => setCaseStatus(e.target.value)}
              >
                <option value="">Select status</option>
                <option value="open">Open</option>
                <option value="in-progress">In Progress</option>
                <option value="closed">Closed</option>
              </select>
            </div>

            {/* 🆕 Case Notes */}
            <div className="mb-4">
              <label htmlFor="caseNotes" className={styles.label}>Case Notes</label>
              <textarea
                id="caseNotes"
                className={styles.inputText}
                rows="3"
                placeholder="Add any extra notes or comments"
                value={caseNotes}
                onChange={(e) => setCaseNotes(e.target.value)}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button className={styles.button} type="submit">
                Add Client
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default AddNewClient;
