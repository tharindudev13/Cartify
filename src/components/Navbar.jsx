import { NavLink } from 'react-router'
import Logo from '../assets/logo_bg_rm.png'

const test = 1

function Navbar() {
  return (
    <>
        <div className="navbar">
            <img src={Logo} alt="" />
            <div className="menu-items">
                <ul>
                    <NavLink><li>All Products</li></NavLink>
                    <NavLink><li>Cart</li></NavLink>
                    <NavLink><li>My Profile</li></NavLink>
                    <NavLink><li>Contact Us</li></NavLink>
                </ul>

            </div>
                <input type="text" placeholder='Enter a product name....'/>

                <button>Search</button>

            {test == 0 && (
                <button>Login</button>
            )}
             {test == 1 && (
                <h3 className='user'>Hello User !</h3>
            )}

        </div>
    </>
  )
}

export default Navbar