import { Outlet } from "react-router-dom"

export const Layout = () => {
    return (
        <div>
            <h1>Star wars</h1>
            <Outlet/>
        </div>
    )
}