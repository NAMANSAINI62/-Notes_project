import React, { useState } from 'react';

const App = () => {
  const [heading, setHeading] = useState("");
  const [details, setDetails] = useState("")
  const [task, setTask] = useState([])


  const handleSubmit = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({heading , details})

    setTask(copyTask)
    console.log(copyTask)

    setHeading("")
    setDetails("")
  };

  const deleteHandler = (index) =>{
    const deleteTask = [...task];

    deleteTask.splice(index,1)  // splice(startIndex, numberOfItemsToDelete) strting index voh hh jiss note ko tumne delete krne ke liye dbaya hh vha se start honge items delete hone.

    setTask(deleteTask)

    console.log("delete tasks")

    setHeading("")
    setDetails("")
  }

  return (
    // Parent container poori screen leta hai
    <div className = 'flex flex-col md:flex-row h-screen w-screen lg:flex'>
      
      <div className= 'bg-blue-400 md:h-full w-full md:w-1/2 h-1/2 flex items-center justify-center px-10'>
        <form 
          className='bg-white flex px-5 py-10 w-full max-w-md rounded-3xl flex-col gap-5' 
          onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Enter your heading" 
            value={heading}
            onChange={(e) => setHeading(e.target.value)} 
            className='h-12 w-full p-4 text-black border border-black rounded-xl font-bold' />
          <textarea 
            placeholder="Enter your Details" 
            value={details} 
            onChange={(e) => setDetails(e.target.value)} 
            className='py-3 h-32 w-full p-3 text-black border border-black rounded-xl font-bold' />
          <button
            className="text-white bg-black font-bold py-3 px-10 rounded-xl hover:bg-gray-800 transition" 
            type="submit">Add Note</button>
        </form>
      </div>

      <div className='bg-blue-950 h-1/2 md:h-full w-full md:w-1/2 overflow-y-auto p-6 border-l-2'>
        <div className='flex flex-col h-full'>
          <h2 className='text-2xl font-semibold text-yellow-500 mb-4'>Recent Notes</h2>
            <div className='grid grid-cols-3 gap-6 items-start'>
              {task.map(function(elem, index){
                return <div key={index}
                  className='flex-col h-52 w-full flex justify-between rounded-xl p-4 bg-cover bg-no-repeat bg-center'
                  style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')" }}
                > 
                <div>
                  <h3 className='mt-2 text-center leading-tight text-x font-bold text-black'>{elem.heading}</h3>
                  <p className='leading-tight text-sm font-semibold text-black'>{elem.details}</p>
                </div>
                  <button onClick={() => {
                    deleteHandler(index)
                  }} className="items-center bg-red-500 border-2 rounded-3xl cursor-pointer active:scale-95">Delete</button>
                </div>
              })}
            </div>
        </div>
      </div>
  </div>
  );
};

export default App;