import React, { useMemo, useState } from "react";

const CartTotal = () => {

    const [items, setItems] = useState([
        { id: 1, price: 10, title: "aProduct4" },
        { id: 2, price: 10, title: "cProduct5" },
        { id: 3, price: 10, title: "xProduct6" },
        { id: 4, price: 10, title: "zProduct1" },
        { id: 5, price: 10, title: "aProduct3" },
        { id: 6, price: 10, title: "oProduct2" }
    ]);
let [counter , setCounter] =useState(0)
    const total = useMemo(() => {
        console.log("memo render")
        return items.reduce((sum, item) => sum + item.price , 0)

    }, [items])

    const deleteItem =(i)=>{
        const updated = items.filter((item)=> item.id != i.id);
        setItems(updated);
    }
    const sort=()=>{
        const updated = [...items].sort((a, b) =>
            a.title.localeCompare(b.title));
        // const updated = [...items].sort((a,b)=>a.price > b.price);
        setItems(updated)
    }
    return (
        <>
        <h2>items in card</h2>
        <span>{counter}</span>
        <button onClick={()=>setCounter( counter+=1)}>+</button>
        <button onClick={()=> sort()}>Sort</button>
            <ul>
                {items.map((item, id) => {
                return  <li key={id}>{item.title}<button onClick={()=>deleteItem(item)}>delete</button></li>
                })}
            </ul>
            <h3>Total in Cart : {total}</h3>
            <button onClick={() => setItems([...items, { id: Date.now(), price: 30, title: "Product added" }])}>Add items to Cart</button>
        </>
    )
}
export default CartTotal;