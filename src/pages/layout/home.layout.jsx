import { Outlet } from "react-router-dom"
import Feheader from "../../component/fe/header/header.component"
import Fefooter from "../../component/fe/footer/footer"

const HomePageLayout = () => {
    return (<>
        <Feheader/>
            <Outlet/>
        <Fefooter/>
    
    </>)
}

export default HomePageLayout