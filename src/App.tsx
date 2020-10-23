import React, { useState, useEffect } from 'react'
// import { HomeScreenContainer } from './containers/HomeScreenContainer'
import { firestore } from './plugins/firebase'
import { HomeScreenContainer } from './containers/HomeScreenContainer'

type TodoProps = {
  id: string,
  content: string,
  completed: boolean,
}

const App: React.FC = () => {

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

  return (
    // <HomeScreenContainer />
    <div>
      {todos.map(todo => (
        <div>
          <p>{todo.id}</p>
          <p>{todo.content}</p>
        </div>
      ))}
    </div>
  )
}

export default App
