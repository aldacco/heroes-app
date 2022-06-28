import { useNavigate } from "react-router-dom"

export const LoginScreen = () => {
    const navigate = useNavigate()
    return (
        <div className='m-5'>
            <h1>Login Screen</h1>
            <button
                className='btn btn-primary'
                onClick={()=>{
                    navigate('/', {
                        replace: true
                    })}
                }
            >Login</button>
        </div>
    )
}
