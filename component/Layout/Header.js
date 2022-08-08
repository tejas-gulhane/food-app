import React from 'react'
import "./Header.module.css"
import classes from "./Header.module.css";
import meals from "../Assests/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <>
     <header className={classes.header}>
        <h1>Good Meals</h1>
         <HeaderCartButton /> 
      </header>
      <div className={classes["main-image"]}>
        <img src={meals} alt="A table full of delicious food!" />
      </div>
    </>
  )
}

export default Header