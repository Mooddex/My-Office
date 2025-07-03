import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const styles= {
    label :'block text-blue-900 font-bold mb-2',
    section:"bg-white py-20 mb-4",
    container:"container m-auto max-w-2xl py-24",
    inputText:"text-black border rounded w-full py-2 px-3 mb-2",
    button:'bg-violet-800 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
  };

const AddNewClient = ({ addClient }) => {
    const [name, setName]= useState('');
    const [phone, setPhone]= useState('');
    const [description, setDescription]= useState('');
    const [email, setEmail]= useState('');
    const navigate=useNavigate();
    

    const submitForm = (e)=>{
      e.preventDefault();
      const newClient ={
        name,
        phone,
        description,
        email,
      };
      addClient(newClient);
      toast.success('added successfly')
      
      return navigate('/clients');
    };

  
  return (
    <>
    
    <section className= {styles.section} >
      <div className= {styles.container} >
        <div
          className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
          <form
           onSubmit={submitForm} 
           >
            <h2 className="text-3xl text-purple-800 text-center font-semibold mb-6"
            >Add Job</h2>

            <div className="mb-4">
              <label htmlFor="name" className={styles.label}
                >Name</label>
                <input
                type="text"
                id="name"
                name='name'
                className={styles.inputText}
                placeholder="Client Name"
                required
                value={name}
                onChange={(e)=>setName(e.target.value)}
                                
                />
            </div>
              {/* phone number */}
            <div className="mb-4">
              <label className={styles.label}
                >Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                className={styles.inputText}
                placeholder="phone number"
                required
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
              />
            </div>
            {/* description */}
            <div className="mb-4">
              <label
                htmlFor="description"
                className={styles.label}
                >Issue Description </label>
              <textarea
                id="description"
                name="description"
                className={styles.inputText}
                rows="4"
                placeholder="Add the issue or problem in breef"
                required
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label 
              htmlFor="email"
              className={styles.label}
                >Email</label>
                <input
                  type="email" 
                  id="email"
                  name="email"  
                  className={styles.inputText}
                  placeholder="mahmoud@gmail.com"
                  required
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                ></input>
            </div>
            <div>
              <button
                className={styles.button}
                type="submit"
              >
                Add Client
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default AddNewClient