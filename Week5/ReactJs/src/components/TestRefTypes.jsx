import {useState} from "react"
function TestRefTypes(){
    // state
    const [user, setUser] = useState({username : "Samanvi", age : 18, city : "Hyd"})
    const [marks, setMarks] = useState([10,20,30])
    console.log(user,marks)
    // update user state
    const updateUser = ()=>{
        setUser({...user,username:"Sanjana",age : 20});
        // Above line makes copy of the original object something like this : 
        // {username : "Samanvi", age : 18, city : "Hyd",username:"Sanjana",age : 20} -> both username and age overwrites
    }
    // update marks
    const updateMarks = ()=>{
        setMarks([40,...marks])
    }

    // return 
    return(
        <div>
            <p>Username : {user.username}</p>
            <p>Age : {user.age}</p>
            <p>City : {user.city}</p>
            <button onClick={updateUser}>UpdateUser</button>
            {
                // ALways place the key on the element that you are repeating inside a loop(like map())
                marks.map((mark)=><p key={mark}>Marks : {mark}</p>)
            }
            <button onClick={updateMarks}>UpdateMarks</button>
        </div>
    )
}

export default TestRefTypes;