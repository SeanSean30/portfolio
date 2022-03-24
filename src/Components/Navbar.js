import { Outlet, Link } from "react-router-dom";
import '../Styles/Style.css';

const Navbar = () => {
    return (
        <>
            <nav className="navbar container-fluid navbar-expand-lg sticky-top">
                <a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse offset-8" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        {<li className="nav-item">
                            <Link to="/Homepage" className="nav-link" aria-current="page">
                                Home
                            </Link>
                        </li>}
                        <li className="nav-item">
                            <Link to="/About" className="nav-link" aria-current="page">
                                About me
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Projects" className="nav-link" aria-current="page">
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Contact" className="nav-link" aria-current="page">
                                Contact me
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Navbar;