import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='flex flex-col justify-around w-1/2 h-28 p-6  border-black border-2 rounded-md'>
        <DisplayCounter count={count} setCount={setCount}></DisplayCounter>
        <Buttons counter={count} setCount={setCount}></Buttons>
      </div>
    </>
  )
}


function DisplayCounter({count, setCount}){
  return (
    <div>
      {count}
    </div>
  );
}

function Buttons({count, setCount}){
  return(
    <div className='flex justify-between'>
      <IncreaseButton count={count} setCount={setCount} ></IncreaseButton>
      <DecreaseButton count={count} setCount={setCount}></DecreaseButton>
    </div>
  );
}

function IncreaseButton({count, setCount}){
  return(
  <button className='bg-red-500 p-1 rounded-sm text-white' onClick={() => setCount((c) => c+1)}>Increase</button>
  );
}

function DecreaseButton({count, setCount}){
  return(
  <button className='bg-red-500 p-1 rounded-sm text-white' onClick={() => setCount((c) => c-1)}>decrease</button>
  );
}
export default App;
