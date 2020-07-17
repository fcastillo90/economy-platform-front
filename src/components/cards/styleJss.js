import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  root: {
    minWidth: 192,
  },
  rootMedia: {
    width: '100%',
    minWidth: 192,
    display: 'flex',
  },
  title: {
    fontSize: 14,
    maxWidth: 128,
  },
  pos: {
    marginBottom: 12,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}))
