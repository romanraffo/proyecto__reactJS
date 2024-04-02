import { useEffect, useState } from "react"
import data from "../data/data.json"
import { ItemList } from "./itemList"
import { useParams } from "react-router-dom"

export const ItemListContainer = () => {
    const [productos, setProductos] = useState( [] )

    const {id} = useParams();
    
    useEffect( () => {
        const get = new Promise(resolve => {
            setTimeout(() => {
                resolve(data)
            }, 2000)
        })
        get.then((data) => {
            if(!id) {
                setProductos(data)
            }else{
                console.log("ID:", id); // Imprime el ID de la categoría
                const filtered = data.filter((p) => p.category === id);
                console.log("Filtered:", filtered); // Imprime los productos filtrados
                setProductos(filtered);
            }
        });

    }, [id] )

    return(
        <div>
            <ItemList productos={productos}/>
        </div>
    )
}