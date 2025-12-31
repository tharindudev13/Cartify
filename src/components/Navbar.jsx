import { NavLink } from 'react-router'
import Logo from '../assets/logo_bg_rm.png'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Products from '../pages/Products'



function Navbar() {

    const test = 1

    const userName = useSelector((state) => {return state.user.userName})

    useEffect(() => {
        console.log(userName);
    
    })

  return (
    <>
        <div className="navbar">
            <img src={Logo} alt="" />
            <div className="menu-items">
                <ul>
                    <NavLink to='/'><li>Home</li></NavLink>
                    <NavLink to='/product'><li>All Products</li></NavLink>
                    <NavLink to='/cart'><li>Cart</li></NavLink>
                    <NavLink to='/profile'><li>My Profile</li></NavLink>
                </ul>

            </div>
                <input type="text" placeholder='Enter a product name....'/>

                <button>Search</button>

            {test == 0 && (
                <button>Login</button>
            )}
             {test == 1 && (
                <h3 className='user'>Hello {userName} !</h3>
            )}

        </div>
    </>
  )
}

export default Navbar