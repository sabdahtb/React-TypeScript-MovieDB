import React from 'react'

import { useCustom } from './hooks'
import { useStyles } from './style'

const HomePage = () => {
  const {
    datas: { listmovie, imageUri, moviesPage },
    methods: { nextPage, prevPage },
  } = useCustom()
  const classes = useStyles()
  return (
    <>
      <div className={classes.gridsView}>
        {listmovie?.map((movies) => (
          <div key={movies.id} className={classes.gridsItem}>
            <img
              src={`${imageUri}${movies?.poster_path}`}
              alt='imgMovie'
              className={classes.movieImg}
            />
            <p>{movies?.title}</p>
          </div>
        ))}
      </div>
      <div className={classes.pageController}>
        <div id='changePage' onClick={prevPage} aria-hidden={true}>
          {'<<<<<'}
        </div>
        <div>{moviesPage}</div>
        <div id='changePage' onClick={nextPage} aria-hidden={true}>
          {'>>>>>'}
        </div>
      </div>
    </>
  )
}

export default HomePage
