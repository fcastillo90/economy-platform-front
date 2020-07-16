import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardContent, Typography, Tooltip } from '@material-ui/core'
import { unitFormatter, dateFormatter } from '@utils'
import styleJss from './styleJss'

// eslint-disable-next-line no-unused-vars
const MediaCard = ({ action, infoObject }) => {
  const classes = styleJss()
  const { name, unit, date, value } = infoObject
  return (
    <Card className={classes.rootMedia}>
      <CardContent className={classes.content}>
        <Tooltip title={name}>
          <Typography className={classes.title} color="textSecondary" noWrap gutterBottom>
            {name}
          </Typography>
        </Tooltip>
        <Typography variant="h5" component="h2">
          {unitFormatter({ unit, value })}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {dateFormatter(date)}
        </Typography>
      </CardContent>
    </Card>
  )
}
export default MediaCard

MediaCard.propTypes = {
  action: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  infoObject: PropTypes.shape({
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    unit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    date: PropTypes.number.isRequired,
    value: PropTypes.number,
  }).isRequired,
}
MediaCard.defaultProps = {
  action: false,
}
