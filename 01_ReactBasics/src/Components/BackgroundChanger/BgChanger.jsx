import React, { useState } from 'react'

const BgChanger = () => {
    let [color, setColor] = useState('teal')
  return (
    <div className='w-full h-screen flex justify-center' style={{backgroundColor: color}}>
      <div className='h-20 flex flex-wrap gap-4 mt-10 justify-center items-center p-4 shadow-md rounded-md border bg-white'>
        <button className='bg-red-700 px-6 py-2 rounded-md text-white' onClick={() => setColor("red")}>red</button>
        <button className='bg-yellow-400 px-6 py-2 rounded-md text-black' onClick={() => setColor("yellow")}>yellow</button>
        <button className='bg-blue-700 px-6 py-2 rounded-md text-white' onClick={() => setColor("blue")}>blue</button>
        <button className='bg-pink-300 px-6 py-2 rounded-md text-black' onClick={() => setColor("pink")}>pink</button>
        <button className='bg-green-500 px-6 py-2 rounded-md text-white' onClick={() => setColor("green")}>green</button>
        <button className='bg-black px-6 py-2 rounded-md text-white' onClick={() => setColor("black")}>black</button>
        <button className='bg-white px-6 py-2 rounded-md text-black border-2' onClick={() => setColor("white")}>white</button>
        <button className='bg-orange-600 px-6 py-2 rounded-md text-white' onClick={() => setColor("orange")}>orange</button>
        <button className='bg-gray-500 px-6 py-2 rounded-md text-white' onClick={() => setColor("gray")}>gray</button>
        <button className='bg-purple-600 px-6 py-2 rounded-md text-white' onClick={() => setColor("purple")}>purple</button>
      </div>
    </div>
  )
}

export default BgChanger
