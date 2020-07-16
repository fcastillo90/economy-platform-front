import React from 'react'
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
