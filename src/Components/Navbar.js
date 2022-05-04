import { Outlet, Link } from "react-router-dom";
import '../Styles/Style.css';
import homepage from '../Images/homepage.png';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <a className="navbar-brand" href="#"></a>
                <span class="collapse navbar-collapse d-flex justify-content-center align-content-center" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        {<li className="nav-item1">
                            <Link to="/" className="nav-link" aria-current="page">
                                <h4>Home</h4>
                            </Link>
                        </li>}
                        <li className="nav-item2">
                            <Link to="/About" className="nav-link" aria-current="page">
                                <h4>About</h4>
                            </Link>
                        </li>
                        {<li className="nav-item3">
                            <Link to="/" className="nav-link" aria-current="page" data-aos="zoom-in">
                                <img className="homepage" src={homepage} alt="cv" />
                            </Link>
                        </li>}
                        <li className="nav-item4">
                            <Link to="/Projects" className="nav-link" aria-current="page">
                                <h4>Projects</h4>
                            </Link>
                        </li>
                        <li className="nav-item5">
                            <Link to="/Contact" className="nav-link" aria-current="page">
                                <h4>Contact</h4>
                            </Link>
                        </li>
                    </ul>
                </span>
            </nav> 
            <Outlet />
        </>
    )
}

export default Navbar;