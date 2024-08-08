import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import store from './store'
import { useSelector } from 'react-redux'

function App() {
  const [count, setCount] = useState(0)
  // console.log(store.getState());
function huame(params) {
  
  store.dispatch({type: 'hombre/getData',payload: {name:"TOTO",food: []}})   
  store.dispatch({type: 'hombre/getData',payload: {name:"TOTO",food: ["pizza"]}})      

}
  
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {store.dispatch({type: 'counter/addBtn'}); huame()}}>
          count is {useSelector((state) => state.counter.value)}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
