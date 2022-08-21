import { createUseStyles } from 'react-jss'

const WINDOW_WIDTH = window.innerWidth
const WINDOW_HEIGHT = window.innerHeight

export const useStyles = createUseStyles({
  movieDetail: {
    display: 'flex',
    justifyContent: 'start',
    color: '#EEEEEE',
    '& p': {
      margin: '10px',
    },
    '& #movieTitle': {
      fontSize: '32px',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
  },
  movieImg: {
    borderRadius: '10px',
    width: `${Math.floor(WINDOW_WIDTH / 4)}px`,
    height: `${Math.floor(WINDOW_HEIGHT / 1.4)}px`,
    objectFit: 'cover',
    margin: '10px',
  },
  pageController: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
    '& div': {
      padding: '10px',
      color: 'white',
      margin: '10px',
      backgroundColor: '#393E46',
      borderRadius: '5px',
    },
    '& #changePage': {
      cursor: 'pointer',
      '&:hover': {
        boxShadow: 'rgba(10, 10, 10, 0.5) 1px 2px 6px 1px',
      },
    },
  },
})
