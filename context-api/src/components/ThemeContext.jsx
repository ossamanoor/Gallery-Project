import { createContext } from "react"
 
export const ThemeContextData = createContext()

const ThemeContext = (props) => {
  return (
    <div>
       <ThemeContextData.Provider value='Osama'> 
                   {props.children}
       </ThemeContextData.Provider>
                
        
       
    </div>
  )
}

export default ThemeContext