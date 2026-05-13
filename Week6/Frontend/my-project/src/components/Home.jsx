import { useContext } from "react"
import {counterContextObj} from "../contexts/ContextProvider"
import Test from "./Test"
import {useCounterStore} from "../store/CounterStore"

function Home() {

  console.log("Home")
  // useCounterStore hook (to extract all the states)
  // const {newCounter, incrementCounter, decrementCounter, resetCounter} = useCounterStore()
  // To extract only few states
  const newCounter = useCounterStore((state)=>state.newCounter)
  const incrementCounter = useCounterStore((state)=>state.incrementCounter)
  const decrementCounter = useCounterStore((state)=>state.decrementCounter)
  const resetCounter = useCounterStore((state)=>state.resetCounter)

  const {counter,changeCounter} = useContext(counterContextObj)

  return (
    <div className="text-center">
      <h1 className="text-4xl mt-40">Counter : {counter}</h1>
      <button onClick={changeCounter} className="bg-blue-400 p-5 rounded-2xl mt-5">Change</button>

      <h1 className="text-4xl mt-40">New Counter : {newCounter}</h1>
      <button onClick={incrementCounter} className="bg-blue-400 p-5 rounded-2xl mt-5">+</button>
      <button onClick={decrementCounter} className="bg-blue-400 p-5 rounded-2xl mt-5">-</button>
      <button onClick={resetCounter} className="bg-blue-400 p-5 rounded-2xl mt-5">reset</button>
      <Test/>
    </div>
  )
}

export default Home