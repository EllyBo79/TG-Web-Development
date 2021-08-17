import React from "react"
import { Link } from "react-router-dom"
import SmellyCatColor from './SmellyCatColor.png';

const Header = () => {
    return ( 
        <nav> 
            <div className="logoName">
                <img className="imageCat" src={SmellyCatColor} width="150" height="150" alt="logo"/>
                <h1>The SmElly Cat</h1>
            </div>

            <nav className="allClass">
                <ul className="navList">
                    <li>
                        <Link className="linkStyle" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="linkStyle" to="/CatStuff1">Cat Couture</Link>
                    </li>
                    <li>
                        <Link className="linkStyle" to="/CatStuff2">CatStuff 2</Link>
                    </li>
                    <li>
                        <Link className="linkStyle" to="/Pay">Pay</Link>
                    </li>
                    <button className="cart">Cart</button>
                </ul>
            </nav>
            <a href="#/cart">Cart</a>
        </nav>
    )
}

export default Header

