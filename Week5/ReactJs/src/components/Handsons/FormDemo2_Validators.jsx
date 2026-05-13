import {useForm} from "react-hook-form"
import {useState} from "react"
function FormDemo2_Validators(){
/* Form */
    // state
    const [user,setUser] = useState([])
    const {register,handleSubmit,formState:{errors}} = useForm()
    const formSubmit = (obj) =>{
        // setting the inputs of the form into "user".
        setUser([...user,obj]) // Copy of the previous state and the new state.
    }
    // return
    return(
        <div className="bg-fuchsia-500 pb-20 mx-60 mt-40">
            <h1 className="text-center text-7xl mb-7">User Form</h1>
            <form className="bg-amber-300 text-center mx-20" onSubmit={handleSubmit(formSubmit)}>
                <div>
                    <label htmlFor="username" className="text-3xl">User name</label>
                    <input type="text" className="border text-3xl" id="username" {...register("username",{required:"username required", minLength:5, maxLength:10,validate:(v)=>v.trim().length!=0||"white space is not allowed"})} />
                </div>
                {errors.username?.type === "required" && <p className="text-red-500">{errors.username.message}</p>}
                {errors.username?.type === "minLength" && <p className="text-red-500">Username should have minimum 5 characters</p>}
                {errors.usrname?.type === "maxLength" && <p className="text-red-500">Username should have maximum 10 characters</p>}
                {errors.username?.type === "validate" && <p className="text-red-500">{errors.username.message}</p>}

                <div>
                    <label htmlFor="email" className="text-3xl">Email</label>
                    <input type="email" className="border text-3xl" id="email" {...register("email",{required:"Email required",validate:(v)=>v.trim().length!=0||"White spaces are not allowed"})}/>
                </div>
                {errors.email?.type === "required" && <p className="text-red-500">{errors.email.message}</p>}
                {errors.email?.type === "validate" && <p className="text-red-500">{errors.email.message}</p>}

                <div>
                    <label htmlFor="dateOfBirth" className="text-3xl">Date Of Birth</label>
                    <input type="date" className="border text-3xl" id="dateOfBirth" {...register("dateOfBirth",{required:"Date Of Birth requied"})}/>
                </div>
                {errors.dateOfBirth?.type === "required" && <p className="text-red-500">{errors.dateOfBirth.message}</p>}

                <button type="submit" className="border p-3 rounded-2xl my-3">Submit</button>
            </form>
{/* Table */}
            <table className="bg-cyan-400 mx-auto text-3xl mt-4">
                <thead>
                    <tr>
                        <th className="px-5">Username</th>
                        <th className="px-5">Email</th>
                        <th className="px-5">Date Of Birth</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((userObj,index)=><tr key={index}>
                            <td className="px-5">{userObj.username}</td>
                            <td className="px-5">{userObj.email}</td>
                            <td className="px-5">{userObj.dateOfBirth}</td>
                        </tr>)
                    } 
                </tbody>
            </table>
        </div>
    )
}

export default FormDemo2_Validators;