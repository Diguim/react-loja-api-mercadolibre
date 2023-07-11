import { useState } from "react"
import {setItem } from '../../services/LocalStorageFuncs'
import { useNavigate } from "react-router-dom";
// import { redirect } from "react-router-dom"; 

export default function Login(){
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const cond = (name.length > 3 && pass.length > 5);
    const navigate = useNavigate();

    const saveUser = (name, pass) => {
        setItem('usuario', {name, pass});        
        navigate('/store');
    }   

    return (
        <div>
            <h2>Login</h2>
            <div className="form-login">
                <div className="input-login">
                    <label htmlFor="user-login">Usuário:</label>
                    <input 
                        type="text" 
                        name="user-login" 
                        id="user-login" 
                        placeholder="Usuário"
                        onChange={({target:{value}}) => setName(value)}
                        value={name} 
                    />
                </div>
                <div className="input-login">
                    <label htmlFor="password">Senha:</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="Senha" 
                        onChange={({target:{value}}) => setPass(value)}
                        value={pass}
                    />
                </div>
                <div>
                    <button
                        type="button"
                        onClick={ () => saveUser(name, pass) }
                        disabled={ !cond }>ENTRAR</button>
                </div>
            </div>
        </div>
    )
}