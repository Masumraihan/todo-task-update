import { useAppSelector } from '../redux/hooks'

const TodoLists = () => {
  const todos = useAppSelector((state) => state.todo)
  console.log(todos)

  return (
    <div style={{ maxWidth: '1200px', margin: '10px auto', width: '100%' }}>
      <h3>Todo List</h3>
    </div>
  )
}

export default TodoLists
