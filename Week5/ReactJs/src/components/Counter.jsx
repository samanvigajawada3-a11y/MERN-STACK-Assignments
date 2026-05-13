import {useState} from "react";
function Counter(){
    // state
    const [count,setCount] = useState(0);
    // function to modify
    const increment = ()=>{
        setCount(count + 1);
    } 
    const decrement = ()=>{
        setCount(count - 1);
    }
    const reset = (value)=>{
        setCount(value)
    }
    // return react element
    return(
        <div>
            <h1 className="text-5xl text-center border-2 mt-40 p-5">Count : {count}</h1>
            <div className="text-center">
                <button className="bg-green-400 p-5 mr-3" onClick={increment}>+</button>
                <button className="bg-red-400 p-5" onClick={decrement}>-</button>
                <button className="bg-orange-400 p-5" onClick={()=>reset(0)}>-</button> {/*If we want to send any argument then we call the function in another function like this.*/}
            </div>
        </div>
    )
}

export default Counter;