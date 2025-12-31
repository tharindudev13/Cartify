import { Outlet } from "react-router"
import Navbar from "../components/Navbar"

function RootLayout(){

    return(
        <>
        <Navbar />
            <div className="container">
                <Outlet />
            </div>
        </>
    )

}

export default RootLayout