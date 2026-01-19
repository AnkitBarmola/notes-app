import React from 'react'

const App = () => {
  return (
    <div className='h-screen  bg-black text-white' >
      <form className='flex items-start p-10 flex-col gap-4 '>
        <input 
         type="text"
         placeholder='Enter Notes Heading'
         className='px-5 w-1/2 py-2 border-2 rounded '
         />
        <br />
        <input 
        type='text' 
        className='px-5 h-20 w-1/2 py-2 border-2 rounded'
        placeholder='Write Details'>
        </input>
        <br />
        <button className='bg-white w-1/2 text-black px-5 py-2 rounded'>Add Note</button>
      </form>
    </div>
  )
}

export default App

