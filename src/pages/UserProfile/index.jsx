import { getItem } from "../../services/LocalStorageFuncs"
import { useNavigate } from "react-router-dom";

export default function UserProfile(){

    const user = getItem('usuario');
    const navigate = useNavigate();

    const toProfileEdit = () => {
        navigate('/profile/edit')
    }

    return (
        <>
            <h2>PERFIL DE USUÁRIO</h2>
            <p>user: {user.name}</p>
            <button onClick={toProfileEdit}>EDITAR PERFIL</button>
        </>
    )
}