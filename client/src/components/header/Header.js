import React, { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import { GlobalState } from '../../GlobalState'
import axios from 'axios'
import './Header.css'


function Header() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    const [cart] = state.userAPI.cart
    const [menu, setMenu] = useState(false)

    const logoutUser = async () =>{
        await axios.get('/user/logout')
        localStorage.removeItem('firstLogin')
        window.location.href = "/";
    }

    const adminRouter = () =>{
        return(
            <>
                <li><Link to="/create_product">Create Product</Link></li>
                <li><Link to="/category">Categories</Link></li>
            </>
        )
    }

    const loggedRouter = () =>{
        return(
            <>
                {/* <li><Link to="/history">History</Link></li> */}
                <li><Link to="/" onClick={logoutUser}>Logout</Link></li>
            </>
        )
    }


    const styleMenu = {
        left: menu ? 0 : "-100%"
    }

    return (
        <header>
            <div className="menu" onClick={() => setMenu(!menu)}>
            <i className="fa-solid fa-bars" width="30"></i>
            </div>

            <div className="logo">
                <h1>
                    <Link to="/">{isAdmin ? 'Admin' : 'Shineclothing'}</Link>
                </h1>
            </div>

            <ul style={styleMenu}>
                <li><Link to="/">{isAdmin ? 'Products' : 'Shop'}</Link></li>

                {isAdmin && adminRouter()}

                {
                    isLogged ? loggedRouter() : <li><Link to="/login">Login ✥ Register</Link></li>
                }

                <li onClick={() => setMenu(!menu)}>
                <i className="fa-solid fa-xmark menu" width="30" ></i>
                </li>

            </ul>

            {
                isAdmin ? '' 
                :<div className="cart-icon">
                    <span>{cart.length}</span>
                    <Link to="/cart">
                    <i class="fa-sharp fa-solid fa-cart-shopping" width="100"></i>
                    </Link>
                </div>
            }
            
        </header>
    )
}

export default Header


//  <i className="fa-solid fa-bars" width="30"></i>
//  <i className="fa-solid fa-xmark menu" width="30" ></i>
//<i class="fa-sharp fa-solid fa-cart-shopping" width="100"></i>