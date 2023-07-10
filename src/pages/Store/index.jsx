import axios from "axios";
import { useEffect, useState } from "react";
import './store.css'
import {BsFillCartCheckFill, BsFillCartPlusFill} from 'react-icons/bs'
import {setItem, getItem} from '../../services/LocalStorageFuncs'
import { Link } from "react-router-dom";


export default function Store() {

    const [data, setData] = useState([]);
    const [cart, setCart] = useState(getItem('carrinhoTeste') || []);

    const fetchApi = async () => {
        try {
            const response = await axios.get("https://api.mercadolibre.com/sites/MLB/search?q=celular");
            setData(response.data.results);
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    useEffect(() => {
        fetchApi();
    }, []);

    const handleClick = (obj) => {
        const element = cart.find((e) => e.id === obj.id);
        if(element) {
            const arrFilter = cart.filter((e) => e.id !== obj.id);
            setCart(arrFilter);
            setItem('carrinhoTeste', arrFilter);

        }else{
            setCart([...cart, obj]);
            setItem('carrinhoTeste', [...cart, obj]);
        }
    }

    return (
        <div>
            <h1>Store</h1>
            <Link to='/cart'>Carrinho</Link>
            <div className="lista-products">
                <ul>
                    {
                        data.map((e) => (
                            <li key={e.id}>
                                <h4>{e.title}</h4>
                                <img src={e.thumbnail} alt="" />
                                <h5>{e.price}</h5>
                                <button onClick={() => handleClick(e)}>
                                    {
                                        cart.some((itemCart) => itemCart.id === e.id) ? (<BsFillCartCheckFill/>) : (<BsFillCartPlusFill/>)
                                    }
                                </button>
                            </li>
                        ))
                    }
                </ul>


            </div>
        </div>
    )
}