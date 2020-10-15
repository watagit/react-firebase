import React, {
  useState,
  // useEffect
} from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import {
  AppBar, Button, List, ListItem, ListItemText,
  Toolbar,
  Typography,
} from '@material-ui/core'
import axios from 'axios'

const GET_ALL_TODOS_ENDPOINT = 'http://localhost:8080/api/v1/todos'
const POST_TODO_ENDPOINT = 'http://localhost:8080/api/v1/todos'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1,
    },
  }),
)

const HomeScreen: React.FC = () => {
  const classes = useStyles()

  const [content, setContent] = useState('')
  const [todos, setTodos] = useState([{id: 0, content: '', completed: false}])

  const handleChange = (event: any) => {
    switch (event.target.name) {
      case 'content':
        setContent(event.target.value)
        break
      default:
        console.log('key not found')
    }
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    postTodo()
  }

  const postTodo = () => {
    // setTodos([
    //   ...todos,
    //   {
    //     id: todos.length,
    //     content: content,
    //     completed: false,
    //   },
    // ])
    // setContent('')
    console.log('todos.length: ' + todos.length)
    console.log('content: ' + content)
    const data = { id: 10, content: content, completed: false }
    axios
      .post(POST_TODO_ENDPOINT, data).catch(() => {
        console.log('通信に失敗しました')
    })
    setContent('')
  }

  const renderStateButton = (todo: any) => {
    if (todo.completed) {
      return (
        <Button variant="contained" disabled>finished</Button>
      )
    } else {
      return (
        <Button variant="contained" color="primary">done</Button>
      )
    }
  }

  // useEffect(() => {
  //   axios
  //     .get(GET_ALL_TODOS_ENDPOINT)
  //     .then((results) => {
  //       const data = results.data
  //       console.log(data)
  //       setTodos(data)
  //     }).catch(() => {
  //       console.log('通信に失敗しました')
  //   })
  // })

  return (
    <>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Todo
          </Typography>
        </Toolbar>
      </AppBar>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={content}
          name="content"
          onChange={handleChange}
        />
        <input type="submit" value="Add" />
      </form>

      <List>
        {todos.map((todo) => (
          <ListItem key={todo.id}>
            <ListItemText
              primary={todo.content}
            />
            {renderStateButton(todo)}
          </ListItem>
        ))}
      </List>

    </>
  )
}

export default HomeScreen
