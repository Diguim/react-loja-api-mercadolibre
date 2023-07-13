import { useState } from 'react'
import { Link } from 'react-router-dom';
import {setItem, getItem} from '../../services/LocalStorageFuncs'
import '../../styles/store.css'
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

                    <Link to='/store' className='back-store'>Voltar para as compras</Link>
            <div className="lista-products">
                <ul className="list-itens">
                    {
                        data.map((e) => (
                            <li className="product-item" key={e.id}>
                                    <h4>{e.title}</h4>
                                    <img src={e.thumbnail} alt="" />
                                    <h5>{`R$ ${e.price}`}  </h5>
                                    <button onClick={() => removeItem(e)}>
                                        <BsFillCartDashFill />
                                    </button>
                            </li>
                        ))
                    }
                </ul>
                <h3 className='title-sub-total'>{`SubTotal: R$ ${subTotal}`}</h3>
            </div>
        </div>
    )
}