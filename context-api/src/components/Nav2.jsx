import { useContext } from "react"
import { ThemeContextData } from "./ThemeContext"


const Nav2 = () => {
const data = useContext(ThemeContextData)
    return (
        <div className='nav2'>
            <h4>Home</h4>
            <h4>About</h4>
            <h4>Contact</h4>
            <h4>{data}</h4>
          
        </div>
    )
}

export default Nav2