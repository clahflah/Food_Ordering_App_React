import React from "react";
import mealsImage from "../../assets/meals.jpeg"
import HeaderCartButton from './HeaderCartButton'

import classes from "./Header.module.css"

const Header = props => {
  return (
  <React.Fragment>
    <header className={classes.header}>
      <h1>MealzOnReact</h1>
      <HeaderCartButton title="Cart" />
    </header>
    <div className={classes['main-image']}>
      <img src={mealsImage} alt="Tasty meals"/>
    </div>
  </React.Fragment>
  )
};

export default Header;
