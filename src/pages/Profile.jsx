import { useEffect } from "react"
import { useSelector } from "react-redux"

function Products(){

    const user = useSelector((state) => {return state.user})

    useEffect(() => {
        console.log(user);
        
    },[])

    return(
        <>
            <h1>Profile Page</h1>
            <h2>{user.FName}</h2>
        </>
    )

}

export default Products