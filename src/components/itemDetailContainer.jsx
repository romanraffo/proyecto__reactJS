import { useEffect, useState } from "react"
import data from "../data/data.json"
import { useParams } from "react-router-dom"

export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState( null )
    
    const { id } = useParams();

    useEffect( () => {
        const get = new Promise(resolve => {
            setTimeout(() => {
                resolve(data)
            }, 2000)
        })
        get.then((data) => {
            const filter = data.find( (p) => p.id === Number(id) )
            setProducto(filter)
        })

    }, [id] )

    if(!producto) return <div className="loading"> "CARGANDO" </div>;

    return(
        <div className="box">
            <div className="box__inter">
            <img  className="product__img" width={300} src={producto.img} alt={producto.name} />
            <h2 className="product__name"> Nombre: {producto.name} </h2>
            <h3 className="product__id"> Id: {producto.id} </h3>
            <h3 className="product__category"> Categoría: {producto.category} </h3>
            </div>
        </div>
    )
}

