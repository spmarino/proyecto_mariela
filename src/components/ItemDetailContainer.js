import {React, useEffect, useState} from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = ({listaProductos}) => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(false);
    const {id} = useParams();
   
    useEffect(() => {
        const promise = new Promise ((res, rej) => {
            setTimeout(() => {
                res(listaProductos)
            }, 2000);
        })

        promise.then((res) => {
            setItem(res.find(product => product.id === +id ));
            setLoading(true)
        })
    }, [id]);

    if (!loading) {
        return (
            <>
            <h2>...Cargando</h2>
            </>
        )
    } else {
        return(
            <div className="itemDetailContainer">
               <ItemDetail item={item} key={id}/>
            </div>
        )
    }
}

export default ItemDetailContainer;
