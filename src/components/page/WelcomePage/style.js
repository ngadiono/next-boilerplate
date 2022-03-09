// MUI
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '0 2rem',
  },
  main: {
    minHeight: '100vh',
    padding: '4rem 0',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    margin: 0,
    lineHeight: 1.15,
    fontSize: '4rem',
    '& a': {
      color: '#0070f3',
      textDecoration: 'none',
      '&:hover, &:focus, &:active': {
        textDecoration: 'underline',
      },
    },
  },
  description: {
    margin: '4rem 0',
    lineHeight: 1.5,
    fontSize: '1.5rem',
    textAlign: 'center',
  },
  code: {
    background: '#fafafa',
    borderRadius: 5,
    padding: '0.75rem',
    fontSize: '1.1rem',
    fontFamily:
      'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace',
  },
  grid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    maxWidth: 800,
    // [theme.breakpoints.down('md')]: {
    //   width: '100%',
    //   flexDirection: 'column',
    // },
  },
  card: {
    margin: '1rem',
    padding: '1.5rem',
    textAlign: 'left',
    color: 'inherit',
    textDecoration: 'none',
    border: '1 solid #eaeaea',
    borderRadius: 10,
    transition: 'color 0.15s ease, border-color 0.15s ease',
    maxWidth: 300,
    '&:hover, &:focus, &:active': {
      color: '#0070f3',
      borderColor: '#0070f3',
    },
    '& h2': {
      margin: '0 0 1rem 0',
      fontSize: '1.5rem',
    },
    '& p': {
      margin: 0,
      fontSize: '1.25rem',
      lineHeight: 1.5,
    },
  },
  logo: {
    height: '1em',
    marginLeft: '0.5rem',
  },
  footer: {
    display: 'flex',
    flex: 1,
    padding: '2rem 0',
    borderTop: '1 solid #eaeaea',
    justifyContent: 'center',
    alignItems: 'center',
    '& a': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexGrow: 1,
    },
  },
}));

export default useStyles;
