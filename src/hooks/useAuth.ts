import { useState } from "react";

const useAuth = () => {
    const [logined, setLogined] = useState(false)
    
    const handlerAuth = (e: boolean) => {
        setLogined(e)
    }
    
    return [logined, handlerAuth]
}

export default useAuth