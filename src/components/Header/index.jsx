import { Link } from "react-router-dom";
import { getItem } from "../../services/LocalStorageFuncs";

export default function Header(){
    let usuario = ''
    if(getItem('usuario') != null){
        usuario = getItem('usuario').name;
    }else{
        usuario = 'Visitante';
    }

    return (
        <>
        <h1>Loja com API do Mercado livre</h1>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/cart'>Carrinho</Link></li>
                <li><Link to='/store'>Store</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/profile'>My Profile</Link></li>
                <li><span>{usuario}</span></li>
                
            </ul>
        </nav>
        </>
    )
}