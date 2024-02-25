import SidebarItem from "./sidebar-menu-item.component"

const Sidebar = () => {
    const sidebarItems = [
        {
            name:"Home",
            icon:"fa-home",
            url:"/"
        }
    ]
    return (<>
        <div id="layoutSidenav_nav">
            <nav className={`sb-sidenav accordion sb-sidenav-dark`} id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        <div className="sb-sidenav-menu-heading">CORE</div>
                        <SidebarItem
                        url={"/"}
                        icon={'fa-home'}
                        name={'Home'}
                         />
                        <a className="nav-link" href="index.html">
                            <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                            Dashboard
                        </a>
                    </div>
                    <div className="nav">
                        <div className="sb-sidenav-menu-heading">FEATURES</div>
                        <a className="nav-link" href="index.html">
                            <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                            Brand Manager
                        </a>
                        <a className="nav-link" href="index.html">
                            <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                            Banner Manager
                        </a>
                        <a className="nav-link" href="index.html">
                            <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                            Category Manager
                        </a>
                        <a className="nav-link" href="index.html">
                            <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                            Users Manager
                        </a>
                        <a className="nav-link" href="index.html">
                            <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                            Product Manager
                        </a>
                        <a className="nav-link" href="index.html">
                            <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                            Order Manager
                        </a>
                    </div>
                    <div className="nav">
                        <div className="sb-sidenav-menu-heading">ADD ON FEATURES</div>
                        <a className="nav-link" href="index.html">
                            <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                            Transition Manager
                        </a>
                        <a className="nav-link" href="index.html">
                            <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                            Blogs Manager
                        </a>
                        <a className="nav-link" href="index.html">
                            <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                            Tags Manager
                        </a>
                        <a className="nav-link" href="index.html">
                            <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                            Offers Manager
                        </a>
                        <a className="nav-link" href="index.html">
                            <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                            Promo Manager
                        </a>
                    </div>
                </div>
                <div className="sb-sidenav-footer">
                    <div className="small">Logged in as:</div>
                    Start Bootstrap
                </div>
            </nav>
        </div>
    </>)
}

export default Sidebar