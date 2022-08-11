import { useContext } from "react"
import {UserInfoContext} from "react"

export default function Login(){
    const {setUser, setIsLoggedIn} = useContext(UserInfoContext)
    const handleLogin = ()=>{
        setIsLoggedIn(true)
        setUser({name: 'Johnthan', position:'Drums', band:' Land Branden'})
    }

    return <button onClick={handleLogin}>Login</button>
}