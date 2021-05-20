import { useState, useEffect } from "react";


export default function ShoppingBasket() {

const [basket, setBasket] = useState([])

useEffect(() => {
    if (typeof window !== "undefined") {
        console.log(localStorage.getItem('basket'))
        setBasket(JSON.parse(localStorage.getItem('basket')))

    }
    
    
},[])

return(

<p>{basket.item}</p>

)
}
