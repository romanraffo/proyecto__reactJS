import { Cart } from "./cartWidget"

const Navbar = () => {
    return(
        <div className="navbar">
        <h1 className="brandname">
            Cyber-SHOPBUY
        </h1>
        <Cart/>
        <div className="category_general">
            <button className="category">Alimentos</button>
            <button className="category">Entretenimiento</button>
            <button className="category">Muebles</button>
        </div>
        </div>
        
    )
}

export default Navbar