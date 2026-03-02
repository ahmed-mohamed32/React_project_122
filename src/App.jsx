
// import { useReducer } from 'react'
import { useRef } from 'react'
import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
 
  const inputRef = useRef(); //useRef
  function foucsInputs(){
    inputRef.current.focus();
  }
  return (
 
  <>
      <div>
        <input ref={inputRef} type="text"  />
        <button onClick={foucsInputs}>Foucs</button>
      </div>
  </>
  )
}

export default App
