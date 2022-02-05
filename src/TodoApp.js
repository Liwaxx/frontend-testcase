import React from 'react';
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

// const getInitData = async () => {
//   let result
//   const URL = 'https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list'

//   let res = await fetch(URL)
//   let json = await res.json()

//   console.log(json)
//   result = json

//   return result
// }

function TodoApp(props) {

  // const [todoList,setTodoList] = useState()

  // useEffect(async () => {
  //   const [todoData] = await Promise.all([
  //     getInitData()
  //   ])

  //   setTodoList(todoData)
  // }, [])

  return (
    <div className='container'>
      <h1>Majoo Todo App</h1>
      <AddTodo/>
      <h2 className='my-2'>Ongoing Task</h2>
      <TodoList />
      {/* <h2 className='my-2'>Complete Task</h2>
      <TodoList /> */}
    </div>
  );
}

export default TodoApp;