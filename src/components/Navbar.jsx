import { NavLink, useNavigate } from 'react-router'
import Logo from '../assets/logo_bg_rm.png'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Products from '../pages/Products'



function Navbar() {


    const user = useSelector((state) => {return state.user})
    const userName = user.FName

    const link = user.isLoggedin ? '/profile' : '/login'
    const navigate = useNavigate()

    // useEffect(() => {
    //     console.log(user.isLoggedin);
    
    // })

  return (
    <>
        <div className="navbar">
            <img src={Logo} alt="" />
            <div className="menu-items">
                <ul>
                    <NavLink to='/'><li>Home</li></NavLink>
                    <NavLink to='/product'><li>All Products</li></NavLink>
                    <NavLink to='/cart'><li>Cart</li></NavLink>
                    <NavLink to={link}><li>My Profile</li></NavLink>
                </ul>

            </div>
                <input type="text" placeholder='Enter a product name....'/>

                <button>Search</button>
            
            {!user.isLoggedin ? <button onClick={() => navigate('/login')}>Login</button> : <h3 className='user'>Hello {userName} !</h3>}

        </div>
    </>
  )
}

export default Navbar