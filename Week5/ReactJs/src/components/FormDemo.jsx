import {useForm} from 'react-hook-form'

function FormDemo() {
    const {register, // to register the form fields
        handleSubmit, // to handle form submission
        formState:{errors}} // to handle validations
        = useForm()

    // form submit function
    const onFormSubmit = (obj)=>{
        // Rather than submitting the form we're just checking if it is submitting properly or not.
        console.log(obj)
    }

    return(
        <form className="max-w-md mx-auto mt-10" onSubmit={handleSubmit(onFormSubmit)}>
            <h1>Form Demo</h1>
            {/*User name*/}
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" {...register("username",// It is nothing but name = "username"
                {required:"Username required", // We can also send object of validators as the second arrgument.
                    minLength:4,
                    maxLength:6,
                    validate:(v)=>v.trim().length != 0 || "White spaces is invalid"})} />
                {/*username validation error message */}
                {/* We can use the error message provided while writing the validators like this : */}
                {errors.username?.type === "required" && <p className='text-red-500'>{errors.username.message}</p>}
                {/*username minimum length error message */}
                {/* We can also write error message here like this : */}
                {errors.username?.type === "minLength" && <p className='text-red-500'>Minimum 4 letters required</p>} 
                {/*username maximum length error message */}
                {errors.username?.type === "maxLength" && <p className='text-red-500'>Maximum 6 letters required</p>}
                {/*username white space error message */}
                {errors.username?.type === "validate" && <p className='text-red-500'>{errors.username.message}</p>}   
            </div>
            {/*User email*/}
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" {...register("email")} />

            </div>
            {/*Submit button*/}
            <button type='submit'>Submit Form</button>
        </form>    
    )
}
export default FormDemo;