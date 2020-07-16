import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    '& .MuiInput-underline:before': {
      borderBottom: 0,
    },
    '& .MuiInput-underline:after': {
      borderBottom: 0,
    },
    '& .MuiAutocomplete-inputRoot': {
      paddingRight: '16px !important',
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottom: 0,
    },
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}))
