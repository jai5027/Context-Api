import { useContext } from "react"
import MyContext from "../mycontext"

function D(){
let data = useContext(MyContext)

   return (<>
  
    <div className="bg-gray-600 p-10">
        <p>{data}</p>
        D</div>
    
    </>)
}

export default D