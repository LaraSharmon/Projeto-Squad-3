import React from 'react'
import MobileNavigation from './MobileNavigation'
import Navigation from './Navigation'
import style from "./NavBar.module.css";

export default function NavBar(props) {
  return (
    <div className={style.NavBar}>
      <Navigation/>
      <MobileNavigation/>
    </div>
  )
}
