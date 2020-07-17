import React from 'react'
import PropTypes from 'prop-types'
import { InfoCard } from '@components/cards'
import { Grid } from '@material-ui/core'

const CardsResume = ({ data, action }) => {
  return (
    <>
      <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
        {Object.keys(data).map((key) => (
          <Grid item xs key={key}>
            <InfoCard infoObject={data[key]} action={action} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}
export default CardsResume

CardsResume.propTypes = {
  data: PropTypes.shape({
    key: PropTypes.string,
    name: PropTypes.string,
    unit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    date: PropTypes.number,
    value: PropTypes.number,
  }).isRequired,
  action: PropTypes.func.isRequired,
}
