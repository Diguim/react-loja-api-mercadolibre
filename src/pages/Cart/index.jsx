import { useState } from 'react'
import { Link } from 'react-router-dom';
import {setItem, getItem} from '../../services/LocalStorageFuncs'

import {BsFillCartDashFill} from 'react-icons/bs'


export default function Cart() {
    const [data, setData] = useState(getItem('carrinhoTeste') || []);

    const removeItem = (obj) => {
        const arrFilter = data.filter((e) => e.id !== obj.id)
        setData(arrFilter);

        setItem('carrinhoTeste', arrFilter)
    }

    const subTotal = data.reduce((acc, cur) => acc + cur.price, 0);

    return (
        <div>
            <h1>CART</h1>
            <Link to='/store'>Voltar para as compras</Link>

            <h3>{`SubTotal: R$ ${subTotal}`}</h3>
            <div>
                {
                    data.map((e) => (
                        <li key={e.id}>
                                <h4>{e.title}</h4>
                                <img src={e.thumbnail} alt="" />
                                <h5>{`R$ ${e.price}`}  </h5>
                                <button onClick={() => removeItem(e)}>
                                    <BsFillCartDashFill />
                                </button>
                        </li>
                    ))
                }
            </div>
        </div>
    )
}