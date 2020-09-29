import React from 'react'
import {
  List,
  ListItem,
  ListItemText,
  Button
} from '@material-ui/core'

const todos = [
  { id: 1, content: "砂糖を買う", completed: false },
  { id: 2, content: "課題を終わらせる", completed: false },
  { id: 3, content: "歯医者に行く", completed: false },
  { id: 4, content: "寝る", completed: true },
]

export const TodoList: React.FC = () => {
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
