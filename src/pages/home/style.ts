import { createUseStyles } from 'react-jss'

const WINDOW_WIDTH = window.innerWidth
const WINDOW_HEIGHT = window.innerHeight

export const useStyles = createUseStyles({
  gridsView: {
    paddingInline: `${Math.floor(WINDOW_WIDTH / 20)}px`,
    display: 'grid',
    gridTemplateColumns: `${Math.floor(WINDOW_WIDTH / 4)}px ${Math.floor(
      WINDOW_WIDTH / 4,
    )}px ${Math.floor(WINDOW_WIDTH / 4)}px`,
    gridGap: `${Math.floor(WINDOW_WIDTH / 20)}px`,
  },
  gridsItem: {
    borderRadius: '10px',
    overflow: 'hidden',
    color: '#EEEEEE',
    backgroundColor: '#393E46',
    cursor: 'pointer',
    '& p': {
      margin: '10px',
    },
    '&:hover': {
      boxShadow: 'rgba(10, 10, 10, 0.5) 1px 2px 6px 1px',
    },
  },
  movieImg: {
    borderRadius: 'inheriit',
    width: `${Math.floor(WINDOW_WIDTH / 4)}px`,
    height: `${Math.floor(WINDOW_HEIGHT / 1.5)}px`,
    objectFit: 'cover',
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
