import React,{ useState , useContext } from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu';
import MyOrder from '../containers/MyOrder';
import menu from '@icons/icon_menu.svg'
import logo from '@logos/logo_yard_sale.svg'
import shoppingCart from '@icons/icon_shopping_cart.svg'

import AppContext from '../context/AppContext';

const Header= ()=>{
const [toggleMenu, setToggleMenu] = useState(false);
const [toggleOrder, setToggleOrders] = useState(false);
const {state} = useContext(AppContext);

const handleToggleMenu = () =>{
  setToggleMenu(!toggleMenu);
}
    return (
    <nav>
    <img src={menu} alt="menu" className="menu"/>

    <div className="navbar-left">
      <img src={logo} alt="logo" className="nav-logo"/>

      <ul>
        <li>
          <a href="/">All</a>
        </li>
        <li>
          <a href="/">Clothes</a>
        </li>
        <li>
          <a href="/">Electronics</a>
        </li>
        <li>
          <a href="/">Furnitures</a>
        </li>
        <li>
          <a href="/">Toys</a>
        </li>
        <li>
          <a href="/">Others</a>
        </li>
      </ul>
    </div>

    <div className="navbar-right">
      <ul>
        <li className="navbar-email" onClick={handleToggleMenu}>
          platzi@example.com
        </li>
        <li className="navbar-shopping-cart" 
        onClick={() => setToggleOrders(!toggleOrder)}>
          <img src={shoppingCart} alt="shopping cart"/>
          {state.cart.length >0 ? <div>{state.cart.length}</div> : null}
        </li>
      </ul>
    </div>
    {toggleMenu && <Menu/>}
    {toggleOrder && <MyOrder />}
  </nav>
  );
};

export default Header;