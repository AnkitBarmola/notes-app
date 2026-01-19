import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(title);
    setTitle('');
  }
  const [Details, setDetails] = useState('')
  
  return (
    <div className='h-screen bg-black text-white flex flex-col lg:flex-row'>
      
      <form
        onSubmit={(e) => {
          submitHandler(e)
        }}
        className='flex gap-4 lg:w-1/2 p-10 flex-col items-start'>
        <h1 className='text-4xl mb-2 font-bold'>Add Notes</h1>
        {/*first input for heading*/}
        <input
          type="text"
          placeholder='Enter Notes Heading'
          className='px-5 w-full font-medium py-2 border-2 bg-transparent outline-none rounded '
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value);
          }}
        />
        {/*detailed input*/}
        <textarea
          className='px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 bg-transparent outline-none rounded '
          placeholder='Write Details'
        />
        <button className='bg-white font-medium w-full outline-none text-black px-5 py-2 rounded active:scale-95 transition-transform'>
          Add Note
        </button>
      </form>

      {/* lg:border-l-2 ensures the border only appears when side-by-side */}
      <div className='lg:w-1/2 lg:border-l-2 border-white/20 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap gap-5 mt-6 h-full overflow-auto'>
          <div className="h-52 w-40 rounded-xl bg-white"></div>
          <div className="h-52 w-40 rounded-xl bg-white"></div>
        </div>
      </div>

    </div>
  )
}

export default App
