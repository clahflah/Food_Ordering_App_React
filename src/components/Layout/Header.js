import React from "react";
import breakfast from "../../assets/breakfast.jpg"
import HeaderCartButton from './HeaderCartButton'

import classes from "./Header.module.css"

const Header = props => {
  return (
  <React.Fragment>
    <header className={classes.header}>
      <h1>Food 2 U</h1>
      <HeaderCartButton title="Cart" onClick={props.onShowCart}/>
    </header>
    <div className={classes['main-image']}>
      <img src={breakfast} alt="Tasty meals"/>
    </div>
  </React.Fragment>
  )
};

export default Header;
