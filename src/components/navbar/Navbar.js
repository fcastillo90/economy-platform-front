import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
  Typography,
  Tooltip,
} from '@material-ui/core'
import {
  ChevronLeft as ChevronLeftIcon,
  Menu as MenuIcon,
  Brightness4 as Brightness4Icon,
} from '@material-ui/icons'
import clsx from 'clsx'
import { isEmpty } from '@validations'
import styleJss from './styleJss'

const Navbar = ({ toggleTheme, title, menu, menuAction }) => {
  const classes = styleJss()
  const [open, setOpen] = useState(false)
  const handleToggleDrawer = () => setOpen((oldState) => !oldState)
  return (
    <>
      <div className={classes.root}>
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            {!isEmpty(menu) && (
              <IconButton
                edge="start"
                className={clsx(classes.menuButton, {
                  [classes.hide]: open,
                })}
                color="inherit"
                aria-label="menu"
                onClick={handleToggleDrawer}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Typography variant="h6" className={classes.title}>
              {title}
            </Typography>
            {toggleTheme && (
              <IconButton color="inherit" onClick={toggleTheme}>
                <Brightness4Icon />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
        {!isEmpty(menu) && (
          <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            })}
            classes={{
              paper: clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              }),
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleToggleDrawer}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <List>
              {menu.map((menuItem) => (
                <ListItem button key={menuItem.title} onClick={() => menuAction(menuItem.action)}>
                  <ListItemIcon>
                    <Tooltip title={menuItem.title}>
                      <menuItem.icon />
                    </Tooltip>
                  </ListItemIcon>
                  <ListItemText primary={menuItem.title} />
                </ListItem>
              ))}
            </List>
          </Drawer>
        )}
      </div>
    </>
  )
}
export default Navbar

Navbar.propTypes = {
  title: PropTypes.node.isRequired,
  toggleTheme: PropTypes.func,
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      action: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      icon: PropTypes.object.isRequired,
    }),
  ),
  menuAction: PropTypes.func,
}
Navbar.defaultProps = {
  toggleTheme: undefined,
  menu: [],
  menuAction: () => {},
}
