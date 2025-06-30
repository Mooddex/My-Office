
const AddNewClient = () => {

  const styles= {
    label :'block text-blue-900 font-bold mb-2',
    section:"bg-white py-20 mb-4",
    container:"container m-auto max-w-2xl py-24",
    inputText:"text-black border rounded w-full py-2 px-3 mb-2",
    button:'bg-violet-800 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
  }
  
  return (
    <>
    
    <section className= {styles.section} >
      <div className= {styles.container} >
        <div
          className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
          {/* <form onSubmit={submit}> */}
          <form>
            <h2 className="text-3xl text-purple-800 text-center font-semibold mb-6">Add Job</h2>

            <div className="mb-4">
              <label htmlFor="type" className={styles.label}
                >Name</label>
                <input
                type="text"
                className={styles.inputText}
                
                />
              
            </div>

            <div className="mb-4">
              <label className={styles.label}
                >Phone</label>
              <input
                type="text"
                id="title"
                name="title"
                className={styles.inputText}
                required
              />
            </div>
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
              ></textarea>
            </div>

            <div className="mb-4">
              <label 
              htmlFor="type"
              className={styles.label}
                >Email</label>
                <textarea 
                  name="email"
                  id="email"
                  className={styles.inputText}
                  placeholder="mahmoud@gmail.com"
                  required
                ></textarea>
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