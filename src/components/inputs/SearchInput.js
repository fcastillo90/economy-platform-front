/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'
import { Paper, IconButton, TextField, Chip } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import { capitalizeFirstLetter } from '@utils'
import { doesArrayContains } from '@validations'
import styleJss from './styleJss'

function SearchInput({ options, keysSelected, onSearch, onDeleteSelected }) {
  const classes = styleJss()
  const onToggleSelected = (singleChip) => {
    const newValue = keysSelected.filter(
      (keyObject) => JSON.stringify(singleChip) !== JSON.stringify(keyObject),
    )
    onDeleteSelected(newValue)
  }
  const handleSearchIconClick = (value) => {
    if (doesArrayContains(value, options)) onSearch([value])
  }
  return (
    <Paper component="form" className={classes.root}>
      <Autocomplete
        fullWidth
        multiple
        options={options}
        value={keysSelected}
        getOptionSelected={(option, value) => value.key === option}
        getOptionLabel={(option) => capitalizeFirstLetter(option.key || option)}
        onChange={(_, value) => onSearch(value)}
        renderTags={(value) =>
          value.map((singleChip) => (
            <Chip
              key={singleChip.key}
              label={capitalizeFirstLetter(singleChip.key)}
              onDelete={() => onToggleSelected(singleChip)}
            />
          ))
        }
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              id="search-input"
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <IconButton
                    onClick={() => handleSearchIconClick(params.inputProps.value)}
                    className={classes.iconButton}
                    aria-label="search"
                  >
                    <SearchIcon />
                  </IconButton>
                ),
                startAdornment: (
                  <>
                    <IconButton
                      {...params.InputProps.endAdornment.props.children[1].props}
                      className={classes.iconButton}
                      aria-label="menu"
                    >
                      <MenuIcon />
                    </IconButton>
                    {params.InputProps?.startAdornment?.map((adorment) => adorment)}
                  </>
                ),
              }}
              fullWidth
              className={classes.input}
              placeholder="Buscar"
            />
          )
        }}
      />
    </Paper>
  )
}
export default SearchInput

SearchInput.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  keysSelected: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSearch: PropTypes.func.isRequired,
  onDeleteSelected: PropTypes.func.isRequired,
}
