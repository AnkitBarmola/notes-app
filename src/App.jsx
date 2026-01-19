import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails ] = useState('')
  const [task, settask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault()
    const copytask = [...task]
    copytask.push({title, details})
    settask(copytask)
    setTitle('');
    setDetails('');
  }
  
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
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value);
          }}
        />
        <button className='bg-white font-medium w-full outline-none text-black px-5 py-2 rounded active:bg-gray-400 active:scale-95 transition-transform'>
          Add Note
        </button>
      </form>

      {/* lg:border-l-2 ensures the border only appears when side-by-side */}
      <div className='lg:w-1/2 lg:border-l-2 border-white/20 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-items-start gap-5 mt-6 h-full overflow-auto'>
          {task.map(function(elem, idx){
            return <div key={idx} className="relative bg-cover h-52 w-40 rounded-xl text-black p-4 bg-[url('https://i.pinimg.com/1200x/a7/6c/38/a76c38b398f8dfa44037f46ec0afecfb.jpg')]">
              <h3 className='py-2 leading-tight text-xl- font-bold'>{elem.title}</h3>
              <p className='leading-tight font-medium text-gray-500'>{elem.details}</p>
            </div>
              
          })}
          
        </div>
      </div>

    </div>
  )
}

export default App
