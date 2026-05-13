import { Outlet } from "react-router"

function Technologies() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="java" className={({isActive})=>isActive?"text-blue-500":""}>Java</NavLink>
        </li>
        <li>
          <NavLink to="nodejs" className={({isActive})=>isActive?"text-blue-500":""}>NodeJs</NavLink>
        </li>
        <li>
          <NavLink to="vue" className={({isActive})=>isActive?"text-blue-500":""}>Vue</NavLink>
        </li>
      </ul> 
      <Outlet/>
    </div>
  )
}

export default Technologies