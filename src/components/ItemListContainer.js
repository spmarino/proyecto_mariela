import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = ({listaProductos}) => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
     const {id} = useParams();
   
    useEffect(() => {
        const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                res(listaProductos);
            }, 2000);
        });
        promesa.then((res) => {
            setLoading(false);
            setProductos(!id?res:(res.filter((producto)=>{ return producto.sale === id})));
        })
        promesa.catch(() => {
            console.log("se ha producido un error")
        });
    }, [id]);

    if (loading === true) {
        return (
            <div>
                <p>Cargando...</p>
            </div>
        );
    }  else {
        return (
            <div className="items__container">
            <ItemList productos = {productos}/>
        </div>    
        ); } };



export default ItemListContainer
