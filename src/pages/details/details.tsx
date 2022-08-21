import React from 'react'

import { useCustom } from './hooks'
import { useStyles } from './style'

const Details = () => {
  const {
    datas: { imageUri, movieDetais },
  } = useCustom()
  const classes = useStyles()
  return (
    <>
      {movieDetais && (
        <div key={movieDetais.id} className={classes.movieDetail}>
          <img
            src={`${imageUri}${movieDetais?.poster_path}`}
            alt='imgMovie'
            className={classes.movieImg}
          />
          <div>
            <p id='movieTitle'>{movieDetais?.title}</p>
            <p>{movieDetais?.overview}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default Details
