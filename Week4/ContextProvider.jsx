import {useState,createContext} from "react"

export const createContextObj = createContext()
function ContextProvider({children}) {
  // state
  const [counter,setCounter] = useState(10)

  // function to increment
  const increment = ()=>{
    setCounter(counter+1)
  }

  // function to decrement
  const decrement = ()=>{
    setCounter(counter-1)
  }

  return (
    <createContextObj.Provider value={{counter,increment,decrement}}>{children}</createContextObj.Provider>
  )
}

export default ContextProvider
