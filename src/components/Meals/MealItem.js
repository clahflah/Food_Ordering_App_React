import React from "react";

import classes from './MealItem.module.css'

const MealItem = props => {

  return (
    <div className={classes.meal}>
      <h3>{props.title}</h3>
      <h2 className={classes.description}>{props.description}</h2>
      <h2 className={classes.price}>{props.price}</h2>
    </div>
  )
};

export default MealItem