import React from 'react'
import { ReactLogo } from '@components/icons'
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardActions,
  IconButton,
} from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite'
import styleJss from '../styleJss'

const About = () => {
  const classes = styleJss()
  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          avatar={<ReactLogo className={classes.size} />}
          title="Francisco Castillo González"
          subheader="Desarrollador fullstack senior"
          titleTypographyProps={{
            variant: 'h3',
          }}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Página desarrollada utilizando ReactJS, Docker, React Router, PropTypes, Material UI,
            Moment, Axios, Husky, Prettier, ESLint, Recharts, alias, entre otros.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            aria-label="add to favorites"
            onClick={() => window.open('https://github.com/fcastillo90', '_blank')}
          >
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  )
}
export default About

About.propTypes = {}
