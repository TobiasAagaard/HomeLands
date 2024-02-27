import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MainLayout } from "./Layouts/MainLayout"
import { Frontpage } from "./pages/Frontpage/Frontpage"
import { Login } from "./pages/Login/Login"


function App() {
 

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}> 
        <Route index element={<Frontpage />} />
        <Route path="/Login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
