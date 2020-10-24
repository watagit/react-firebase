import React, {useEffect, useState} from 'react'
import {
  List,
  ListItem,
  ListItemText,
  Button
} from '@material-ui/core'
import { firestore } from '../plugins/firebase'

type TodoProps = {
  id: string,
  content: string,
  completed: boolean,
}

export const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<TodoProps[]>([])

  useEffect(() => {
    firestore.collection('todos').onSnapshot((docs) => {
      const allTodos: TodoProps[] = []
      docs.forEach(doc => {
        allTodos.push(doc.data() as TodoProps)
      })
      setTodos(allTodos)
    })
  }, [])

  const renderStateButton = (todo: any) => {
    if (todo.completed) {
      return (
        <Button variant="contained" disabled>finished</Button>
      )
    } else {
      return (
        <Button variant="contained" color="primary" onClick={() => {todo.completed = true}}>done</Button>
      )
    }
  }

  return (
    <>
      <List>
        {todos.map((todo) => (
          <ListItem>
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

export default TodoList
