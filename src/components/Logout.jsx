import { useContext } from "react"
import {UserInfoContext} from "react"

export default function Logout(){
    const {setUser, setIsLoggedIn} = useContext(UserInfoContext)
    const handleLogout = ()=>{
        setIsLoggedIn(false)
        setUser(null)
    }

    return <button onClick={handleLogout}>Logout</button>
}