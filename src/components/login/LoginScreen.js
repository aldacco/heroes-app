import { useNavigate } from "react-router-dom"
import { useState } from "react"

export const LoginScreen = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState('')
    return (
        <div className='m-5'>
            <h1>Login Screen</h1>
            <form>
                <input 
                className='form-control mb-2'
                placeholder='Usuario'
                name='user'
                onChange={(e)=> setUser(e.target.value)}
                >
                </input>
            </form>
            <button
                className='btn btn-primary'
                onClick={()=>{
                    localStorage.setItem('usuario', user)
                    navigate('/', {
                        replace: true
                    })}
                }
            >Login</button>
        </div>
    )
}
