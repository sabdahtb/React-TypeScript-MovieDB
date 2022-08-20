import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  navbar: {
    backgroundColor: '#393E46',
    position: 'fixed',
    top: 0,
    width: '100%',
    height: '8vh',
    boxShadow: 'rgba(10, 10, 10, 0.5) 0px 1px 6px 0px',
    color: '#EEEEEE',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '16px',
    alignItems: 'center',
  },
  listPath: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    listStyle: 'none',
  },
  listItems: {
    color: 'white',
    textDecoration: 'none',
    marginInline: '20px',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
})
