import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../auth"

export const LoginScreen = () => {
    const navigate = useNavigate()

    const { login } = useContext(AuthContext)

    const onLogin = () => {
        login('Invitado')
        navigate('/', {
            replace: true
        })
    }


    return (
        <div className='m-5'>
            <h1>Login Screen</h1>
            <button
                className='btn btn-primary'
                onClick={() => onLogin()}
            >Login</button>
        </div>
    )
}
