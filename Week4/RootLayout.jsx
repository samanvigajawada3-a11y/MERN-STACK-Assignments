import Header from "./Header"
import Footer from "./Footer"
import {Outlet} from "react-router"
function RootLayout() {
  return (
    <div>
        <Header/>  
        {/* Place Holder */}
        <div className="min-h-screen bg-blue-200">
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default RootLayout