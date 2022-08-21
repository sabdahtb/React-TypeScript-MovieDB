import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  footers: {
    backgroundColor: '#393E46',
    width: '100%',
    height: '12vh',
    marginTop: 0,
    paddingTop: '16px',
    color: '#FFD369',
    '& p': {
      textAlign: 'left',
      fontSize: '10px',
      marginLeft: '20px',
      marginTop: '3px',
    },
  },
})
