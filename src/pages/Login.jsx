import { BiLogIn } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { login } from "../features/UserSlice"

function Login(){

    const navigate = useNavigate()

    const user = useSelector((state) => {return state.user})
    const dispatch = useDispatch()
    const [fname,setFname] = useState('')
    const [lname,setLname] = useState('')
    const [age,setAge] = useState(0)
    const [email,setEmail] = useState('')
    const [address,setAddress] = useState('')
    const [country,setcountry] = useState('')
    const [phone,setphone] = useState('')

    const handleLogin = () =>{
        dispatch(login({address,lname, age, email, fname, country, phone}))
        navigate('/profile')
    }

    useEffect(() =>{
        console.log(fname,lname,age,email,address,country,phone);
        
    },[user])


    return(
        <>
        <div className="login">
            <h3>Login</h3>
        <p>
            <span className="data">First Name  </span>
            <input type="text" placeholder="Enter Your first name..." onChange={(e) => setFname(e.target.value)} value={fname}/>
        </p>
        <p>
            <span className="data">Last Name  </span>
            <input type="text" placeholder="Enter Your last name..." onChange={(e) => setLname(e.target.value)} value={lname}/>
        </p>
        <p>
            <span className="data">Age  </span>
            <input type="number" placeholder="Enter Your age..." onChange={(e) => setAge(e.target.value)} value={age}/>
        </p>
        <p>
            <span className="data">Email  </span>
            <input type="text" placeholder="Enter Your email..." onChange={(e) => setEmail(e.target.value)} value={email}/>
            </p>
        <p>
            <span className="data">Address  </span>
            <input type="text" placeholder="Enter Your address..." onChange={(e) => setAddress(e.target.value)} value={address}/>
        </p>
        <p>
            <span className="data">Country  </span>
            <input type="text" placeholder="Enter Your Country..." onChange={(e) => setcountry(e.target.value)} value={country}/>
        </p>
        <p>
            <span className="data">Phone  </span>
            <input type="tel" placeholder="Enter Your Phone no..." onChange={(e) => setphone(e.target.value)} value={phone}/>
        </p>

        <button onClick={handleLogin}>Login <BiLogIn className="icon"/></button>
        </div>
        </>
    )
}

export default Login