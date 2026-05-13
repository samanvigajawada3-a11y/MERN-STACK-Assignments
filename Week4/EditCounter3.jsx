import { useContext } from "react"
import { createContextObj } from "./ContextProvider.jsx"
function EditCounter3() {
   // state
      const {counter,increment,decrement} = useContext(createContextObj)
    return (
    <div>
        <h1 className="text-3xl mx-7">EditCounter3</h1>
        <div className="bg-amber-500 w-60 py-15 text-2xl text-center mb-5">
          <p>Counter : {counter}</p>
          <div className="flex justify-evenly mt-4">
            <button className="bg-violet-600 px-5 py-2 rounded-2xl" onClick={increment}>+</button>
            <button className="bg-violet-600 px-5 py-2 rounded-2xl" onClick={decrement}>-</button>
          </div>
        </div>
    </div>
  )
}

export default EditCounter3