import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Nav/Navbar"

export const MainLayout = () => {
    return (
        <>
        <Navbar />
        <Outlet />
        </>
    )
}