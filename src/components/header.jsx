import { Link } from "react-router-dom";
import'./header.css';
import { FaHome } from "react-icons/fa";
export function Header(){
    return(
        <header>
            <h1>AppStore</h1>
            <nav>
                <Link to={'/'}><FaHome className={"icons"}/> Home</Link>
                <Link to={'/categories'}>Categories</Link>
                <Link to={'/contact-us'}>Contact-us</Link>
            </nav>
        </header>
    )
}