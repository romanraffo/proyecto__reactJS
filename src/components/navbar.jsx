import { Link, NavLink } from "react-router-dom"
import { Cart } from "./cartWidget"

const Navbar = () => {
    return(
        <div className="navbar">
        <h1 className="brandname">
            <Link to="/">Cyber-SHOPBUY</Link>
        </h1>
        <Cart/>
        <div className="category_general">
            <button className="category"><Link to="/" as={NavLink}>Productos</Link></button>
            <button className="category"><Link to="/category/camioneta" as={NavLink}>Camionetas</Link></button>
            <button className="category"><Link to="/category/auto" as={NavLink}>Autos</Link></button>
        </div>
        </div>
        
    )
}

export default Navbar