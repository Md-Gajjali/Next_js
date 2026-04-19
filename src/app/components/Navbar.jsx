import React from 'react'
import css from "../Style/Navbar.module.css"

const Navbar = () => {
  console.log(css)
  return (
    <div>
      <div className={css.navbarContainer}>
        <div>
          <h2 className={css.hello}>Hello world</h2>
        </div>
        <ul className={css.NavbarUl}>
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
        <div>
          <button className={css.NavbarBtn}>click</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
