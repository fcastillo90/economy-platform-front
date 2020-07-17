import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardActions, CardContent, Button, Typography, Tooltip } from '@material-ui/core'
import { unitFormatter, dateFormatter } from '@utils'
import styleJss from './styleJss'

const InfoCard = ({ infoObject, action, noWrap }) => {
  const classes = styleJss()
  const { key, name, unit, date, value } = infoObject
  return (
    <Card className={classes.root}>
      <CardContent>
        <Tooltip title={name}>
          <Typography className={classes.title} color="textSecondary" noWrap={noWrap} gutterBottom>
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
      {action && (
        <CardActions>
          <Button onClick={() => action(key)} size="small">
            Ver historial
          </Button>
        </CardActions>
      )}
    </Card>
  )
}
export default InfoCard

InfoCard.propTypes = {
  action: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  infoObject: PropTypes.shape({
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    unit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    date: PropTypes.number.isRequired,
    value: PropTypes.number,
  }).isRequired,
  noWrap: PropTypes.bool,
}
InfoCard.defaultProps = {
  action: false,
  noWrap: true,
}
