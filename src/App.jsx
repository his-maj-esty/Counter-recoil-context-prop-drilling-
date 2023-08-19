import { createContext, useContext, useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState, atom } from 'recoil'
import './App.css'

// rerendering happens of component whenever its or its parent's state changes. buttons are getting rerendered because of App component
// we want to reduce rerendering to only for DisplayCount.

// context only solves prop drilling not rerendering because count is being updated in App which is parent to other elements


// with recoil.js we can see only DisplayCount is getting rerendered
const CountState = atom({
  key: "CountState",
  default: 0
});
function App() {

  return (
    <>
        <div className='flex flex-col justify-around w-1/2 h-28 p-6  border-black border-2 rounded-md'>
          <DisplayCounter></DisplayCounter>
          <Buttons></Buttons>
        </div>
    </>
  )
}


function DisplayCounter(){
  const count = useRecoilValue(CountState);
  return (
    <div>
      {count}
    </div>
  );
}

function Buttons(){
  return(
    <div className='flex justify-between'>
      <IncreaseButton></IncreaseButton>
      <DecreaseButton></DecreaseButton>
    </div>
  );
}

function IncreaseButton(){
  const setCount = useSetRecoilState(CountState);
  return(
  <button className='bg-red-500 p-1 rounded-sm text-white' onClick={() => setCount((c) => c+1)}>Increase</button>
  );
}

function DecreaseButton(){
  const setCount = useSetRecoilState(CountState);
  return(
  <button className='bg-red-500 p-1 rounded-sm text-white' onClick={() => setCount((c) => c-1)}>decrease</button>
  );
}
export default App;
