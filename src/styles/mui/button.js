const buttonStyled = (theme) => ({
  root: {
    height: 44,
    borderRadius: 0,
    '&$disabled': {
      background: 'rgba(154, 154, 154, 0.5)',
      opacity: '0.4',
      cursor: 'not-allowed',
    },
  },
  label: {
    fontFamily: "'Roboto', sans-serif",
    color: '#FFFFFF',
    textTransform: 'capitalize',
  },
  contained: {
    boxShadow: 'none',
  },
  containedPrimary: {
    backgroundColor: theme.palette.primary.main,
  },
});

export default buttonStyled;
