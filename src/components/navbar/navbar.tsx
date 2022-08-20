import React from 'react'
import { useStyles } from './style'

const Navbar = () => {
  const classes = useStyles()
  return (
    <div className={classes.navbar}>
      <h2>navbarr</h2>
    </div>
  )
}

export default Navbar
