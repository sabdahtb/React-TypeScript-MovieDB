import React from 'react'
import { Link } from 'react-router-dom'
import { useCustom } from './hooks'
import { useStyles } from './style'

const Navbar = () => {
  const {
    datas: { titles, navbarList },
  } = useCustom()
  const classes = useStyles()
  return (
    <div className={classes.navbar}>
      <h2>{titles}</h2>
      <ul className={classes.listPath}>
        {navbarList.map((list) => (
          <li key={list.titles}>
            <Link to={list.paths} className={classes.listItems}>
              {list.titles}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar
