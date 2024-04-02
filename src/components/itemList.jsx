import { Item } from "./item"

export const ItemList = ({ productos }) => {
    return(
        <>
        {productos.map((producto) => (
            <div key={producto.id}> 
                <Item producto={producto} />
            </div>
        ))}
        </>
    ); 
}