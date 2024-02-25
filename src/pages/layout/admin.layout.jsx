
import  "../../assets/css/admin.css"

import { Outlet } from "react-router-dom";
import CmsHeader from "../../component/cms/header/cms-header";
import Sidebar from "../cms/sidebar/cms-sidebar-component";
import CmsFooter from "../../component/cms/footer/footer-component";

const AdminLayout = () => {

    return (
        <>
        <CmsHeader/>

        <div id="layoutSidenav">
            <Sidebar/>
            <div id="layoutSidenav_content">
                <main>
                    <Outlet/>
                </main>
                <CmsFooter/>
            </div>
        </div>
        </>
    )
}

export default AdminLayout