/* Requirement : As we give data and submit in the form, it should display the data in the table below the form*/
import {useForm} from "react-hook-form"
import {useState} from "react"
function FormDemo2(){
    const [data,setData] = useState([])
    const {register,handleSubmit,formState:{errors}} = useForm()
    // form submit function
    const onFormSubmit = (obj)=>{
        setData([...data,obj])
    }
    //return React element
    return(
        <div>
            <form className="max-w-md mx-auto mt-10" onSubmit={handleSubmit(onFormSubmit)}>
            <h1>Create User Form</h1>
            <div>
                <div>
                    <label htmlFor="firstName">firstName</label>
                    <input type="text" id="firstName"  className="border" {...register("firstName")}  />
                </div>
                <div>
                    <label htmlFor="email">email</label>
                    <input type="email"  id="email"  className="border" {...register("email")}  />
                </div>
                <div>
                    <label htmlFor="dateOfBirth">dateOfBirth</label>
                    <input type="date"  id="dateOfBirth" className="border" {...register("dateOfBirth")}  />
                </div>
                    <button className="bg-amber-500" type="submit">Add User</button>
            </div>
        </form>
        <table className="mx-auto">
            <tr>
                <th className="px-6">firstName</th>
                <th className="px-6">email</th>
                <th className="px-6">dateOfBirth</th>
            </tr>
            {data.map(each=>
                <tr key={each.firstName}>
                    <td className="px-6">{each.firstName}</td>
                    <td className="px-6">{each.email}</td>
                    <td className="px-6">{each.dateOfBirth}</td>
                </tr>
            )}         
        </table>
    </div>
    )
}
export default FormDemo2