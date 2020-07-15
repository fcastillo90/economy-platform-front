/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core'
import { unitFormatter, dateFormatter } from '@utils'
import styleJss from './styleJss'

const InfoCard = ({ infoObject }) => {
  const classes = styleJss()
  const { name, unit, date, value } = infoObject
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" noWrap gutterBottom>
          {name}
        </Typography>
        <Typography variant="h5" component="h2">
          {unitFormatter({ unit, value })}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {dateFormatter(date)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver historial</Button>
      </CardActions>
    </Card>
  )
}
export default InfoCard
