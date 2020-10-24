import React, {
  useState,
  useEffect
} from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import {
  AppBar, Button, List, ListItem, ListItemText,
  Toolbar,
  Typography,
} from '@material-ui/core'
import TodoList from './TodoList'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1,
    },
  }),
)

const HomeScreen: React.FC = () => {
  const classes = useStyles()

  return (
    <>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Todo
          </Typography>
        </Toolbar>
      </AppBar>

      <TodoList />

    </>
  )
}

export default HomeScreen
