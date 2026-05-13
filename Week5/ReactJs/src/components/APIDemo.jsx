import {useEffect, useState} from "react";
function APIDemo(){
    let [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)

    useEffect(()=>{
        // a function to make API req
        async function getData(){
            // set loading to true
            setLoading(true)
            try{
            let res = await fetch()
            let usersList = await res.json();
            // update state
            setUsers(usersList);
        }catch(err){
            console.log("err is :", err)
            setError(err) // Displays on the web page.
        }finally{
            setLoading(false)
        }
        }
    },[]);
    // return React element
    // deal with loading state
    if(loading){
        return <p className="text-center text-5xl">Loading...</p>
    }
    // deal with error state
    if(error != null){
        return <p className="text-center text-5xl">Failed to Fetch</p>
    }
    return(
        <div>
            <h1>List Of Users</h1>
            <div>
                {users.map((userObj)=>(
                        <div key = {userObj.id}>
                            <p>{userObj.name}</p>
                            <p>{userObj.email}</p>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default APIDemo;