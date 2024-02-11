import { useState, useCallback, useEffect } from 'react'
import './index.css'

function App() {

  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() =>{
    let pass = "";
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums = "0123456789";
    const syms = "!@#$%^&*()_+";

    if (numbers) chars+=nums;
    if (symbols) chars+=syms;

    for (let i = 1; i <= length; i++) {
      let randomIndex = Math.floor(Math.random() * chars.length);
      pass += chars[randomIndex];
    }
    setPassword(pass);
  }, [length, numbers, symbols, setPassword])


  const copyPassword = () => {
    window.navigator.clipboard.writeText(password);
  }
  useEffect(() => {passwordGenerator()}, [length, numbers, symbols, passwordGenerator])

  return (

    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-20 bg-gray-800 text-orange-500'>
      <h1 className='text-4xl text-center py-5'>Password Generator</h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
          <input
            className='outline-none w-full px-3 py-1'
            type='text'
            value={password}
            placeholder='Password'
            readOnly
          />
      
          <button  onClick = {copyPassword} className='outline-none bg-blue-700 text-white px-3 py-0.5 hover:bg-blue-800 focus:ring-2'>
            Copy
          </button>
      </div>

      <div className='flex text-sm gap-x-8 py-5'>
        <div className='flex items-center gap-x-1'>
          <input
            className='cursor-pointer'
            type='range'
            value={length}
            min={8}
            max={50}
            onChange={e => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
        
         </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={numbers}
            id='numbers-input'
            onChange={() => {setNumbers((prev) => !prev);}}
             />
             <label htmlFor="numbersInput">Numbers</label>

          </div>

         <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={symbols}
          id='symbols-input'
          onChange={() => {setSymbols((prev) => !prev)}}
          />
          <label htmlFor="symbolsInput">Symbols</label>
         </div>

      </div>

    </div>
    
  )
}

export default App
