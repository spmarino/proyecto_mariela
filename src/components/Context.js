import { createContext, useState, useContext } from 'react';

const Context = createContext([])

export const UseCartContext = () => useContext(Context);

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const [precio_total, setPrecio_total] = useState(0)
    const [cantidad_total, setCantidad_total] = useState(0)


    const addProduct = (item, cantidad) => {
    

        const index = cart.findIndex((i) => i.item.id === item.id);
        if (index > -1) {
            cart.splice(index, 1);
            setCart([...cart, {item, cantidad}])
        } else {
            setCart([...cart, {item, cantidad}])
        }
    };

    const deleteProduct = (id) => {
        const items = cart.filter((i)=> i.item.id !== id)
        setCart(items)
    };

    const isInCart = () => {

    };

    const cleanCart = () => {
        setCart([])
    };

    return (
        <Context.Provider value={{
            cart, 
            precio_total, 
            cantidad_total,
            addProduct,
            deleteProduct,
            cleanCart}}>
            {children}
        </Context.Provider>        
    )
}


export default CartProvider