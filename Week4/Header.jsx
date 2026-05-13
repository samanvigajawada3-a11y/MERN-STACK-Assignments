function Header() {
  return (
    <nav>
      <ul className="flex justify-end">
        <li>
          <NavLink to="/" className={({isActive})=>isActive?"text-blue-500":""}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/register" className={({isActive})=>isActive?"text-blue-500":""}>Register</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={({isActive})=>isActive?"text-blue-500":""}>Login</NavLink>
        </li>
        <li>
          <NavLink to="/technologies" className={({isActive})=>isActive?"text-blue-500":""}>Technologies</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header