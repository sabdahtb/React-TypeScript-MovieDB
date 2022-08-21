import React from 'react'

import { useStyles } from './style'

const Footer = () => {
  const classes = useStyles()
  return (
    <div className={classes.footers}>
      <p>React JS x MovieDB</p>
      <p>Vite EsLint Prettier</p>
      <p>by: sabdahtb</p>
    </div>
  )
}

export default Footer
