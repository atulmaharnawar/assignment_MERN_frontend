import React from 'react'
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
    let location = useLocation();
    let history = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        toast.success("Logged Out Successfully!", { autoClose: 1000 });
        setTimeout(() => {
            history("/login");
        }, 1000);

    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                    </ul>
                    {!localStorage.getItem('token') ? <form className="d-flex">
                        {/* {(location.pathname !== "/login" && location.pathname !== "/signup") && <Link className="btn btn-primary mx-2" role="button" to="/login">Sign in</Link>}
                        {(location.pathname !== "/login" && location.pathname !== "/signup") && <Link className="btn btn-primary mx-2" role="button" to="/signup">Sign up</Link>} */}
                    </form> : <button className='btn btn-primary' onClick={handleLogout}>Log out</button>}
                </div>
            </div>
        </nav>
    )

}


export default Navbar