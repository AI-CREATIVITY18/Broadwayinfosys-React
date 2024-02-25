import { Routes, Route, BrowserRouter } from "react-router-dom"
import HomePageLayout from "./pages/layout/home.layout"
import AboutUsComponent from "./component/fe/aboutus/Aboutus.component"
import AdminLayout from "./pages/layout/admin.layout"
import HomePage from './pages/home/home.page'
import LoginPage from "./pages/auth/login/login.auth"
import RegisterPage from "./pages/auth/register/register.auth"
import Error404 from "./pages/error/error.page"
import Dashboard from "./pages/cms/dashboard/dashboard"

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<HomePageLayout />}>
                <Route index element={<HomePage />}></Route>
                <Route path="about-us" element={<AboutUsComponent />}></Route>
                <Route path="login" element={<LoginPage />}></Route>
                <Route path="register" element={<RegisterPage />}></Route>


                <Route path="*" element={<Error404 goBackUrl={'/'} name={"Home"} />}></Route>

                </Route>
                <Route path="/admin" element={< AdminLayout />}>
                    <Route index element={<Dashboard/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing