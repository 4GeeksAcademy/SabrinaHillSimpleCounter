import { useEffect, useState } from 'react';
import { SecondsCounter } from './SecondsCounter';


function App() {
  const [counter,setCounter] = useState(0);
  useEffect() => {
    setInterval(0) => {
    setCounter()(counter+1);
  ), 1000);
  
  return (
    <p>
      <SecondsCounter counter={counter}/>
    </p>
  )
}

export default App;
