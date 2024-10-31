import React, { useState, useCallback, useEffect } from 'react'

const PasswordGenerator = () => {

  const [length, setlength] = useState(8)
  const [NumberAllow, setNumberAllow] = useState(true)
  const [CharAllow, setCharAllow] = useState(true)
  const [password, setpassword] = useState("")



  const PasswordGenerator = useCallback(()=> {

    let pass = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(NumberAllow) str += "1234567890"
    if(CharAllow) str += "@#$%&!*/"

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setpassword(pass)

  }, [length, NumberAllow, CharAllow])

  useEffect(()=>{PasswordGenerator()},[length,NumberAllow,CharAllow,PasswordGenerator])

  return (
    <>
      <div className='bg-black w-screen h-screen place-content-center text-white'>
          <div className='p-4 bg-slate-800 w-fit m-auto text-3xl font-bold'>
              <h1 className='text-white text-center mb-4'>Password Generator</h1>
              <div className='flex'>
                <input type="text" className='h-12 w-full rounded-l text-[23px] px-4 text-orange-500 font-mono outline-none' placeholder='Password'value={password} readOnly/>
                <button className='text-white text-xl bg-green-500 px-4 rounded-r border-none hover:bg-green-400'>Copy</button>
              </div>
              <div className='flex gap-2 mt-6'>
                <input type="range" id="" min={6} max={100} value={length} className='cursor-pointer'
                onChange={(e)=> setlength(e.target.value) }
                />
                <label className='text-orange-500 text-[20px] mr-6'>Length({length})</label>
                <input type="checkbox" id="" defaultChecked={NumberAllow} onChange={(e)=> setNumberAllow((prev)=> !prev)
                }/>
                <p className='text-orange-500 text-[20px] mr-4'>Number</p>
                <input type="checkbox" id="" defaultChecked={CharAllow} onChange={(e)=> setCharAllow((prev)=> !prev)}/>
                <p className='text-orange-500 text-[20px]'>Charcters</p>
              </div>
          </div>
      </div>
    </>
  )
}

export default PasswordGenerator
