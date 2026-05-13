function Navbar(){
    // State
    // const {navbarObj} = props
    // return a react element
    return(
        <div className="flex justify-between bg-blue-400 p-5">
            <h2>LOGO</h2>
            <ul className=" w-2xl flex justify-evenly">  
                <li>Home</li>
                <li>SignUp</li>
                <li>Login</li>
            </ul>
        </div>
    )
}

export default Navbar;