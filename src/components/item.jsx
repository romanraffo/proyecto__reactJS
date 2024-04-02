import { Link } from "react-router-dom"

export const Item = ({producto}) => {
    
    return(
        <div className="box">
            <div className="box__inter">
            <img  className="product__img" width={300} src={producto.img} alt={producto.name} />
            <h2 className="product__name"> Nombre: {producto.name} </h2>
            <h3 className="product__id"> Id: {producto.id} </h3>
            <h3 className="product__category"> Categoría: {producto.category} </h3>
            <Link to={`/item/${producto.id}`}> <button className="product__button">Ver más</button> </Link> 
            </div>
        </div>
    )
}