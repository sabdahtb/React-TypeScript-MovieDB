import React from 'react'

import { useStyles } from './style'

const Footer = () => {
  const classes = useStyles()
  return (
    <div className={classes.footers}>
      <p>Footer</p>
    </div>
  )
}

export default Footer
