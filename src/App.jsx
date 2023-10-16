import { useState } from 'react'
import './app.style.js'
// componentes abaixo:
import Header from './components/view/Header/Header'
import Todo from './components/view/Todo/Todo'
import TodoForm from './components/view/TodoForm/TodoForm'
import Search from './components/view/Search/Search'
import Days from './components/view/Days/Days'
import { AppStyle } from './app.style.js'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Minha primeira tarefa',
      isCompleted: false,
      areEditing: false,
    },
    {
      id: 2,
      text: 'Tarefa 2',
      isCompleted: false,
    }
  ])

  const [search, setSearch] = useState('')
  const [edit, setEdit] = useState('')

  const addTodo = (text) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        isCompleted: false,
      },
    ];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setTodos(filteredTodos);
  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo
    );
    setTodos(newTodos);
  }

  const editTodo = (id) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id == id) {
        if (edit != '') {
          todo.text = edit
        }
        isEditing(todo.id)
      }
      return todo
    })

    setTodos(updateTodos)
    setEdit('')
  }

  const isEditing = (id) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id == id) {
        todo.areEditing = !todo.areEditing
      }
      return todo
    })
    setTodos(updateTodos)
  }

  return (
    <div className='app'>
      <Header />

      <AppStyle>
        <section>
          <div className="Days">
            <Days />
          </div>

          <div className="todoList">

            <div className="addSearch">
              <TodoForm addTodo={addTodo} />
              <Search search={search} setSearch={setSearch} />
            </div>

            <div className="todo">
              {todos.filter((todo) => todo.text.toLocaleLowerCase().includes(search.toLocaleLowerCase())
              ).map((todo) => (
                <Todo
                  key={todo.id}
                  todo={todo}
                  removeTodo={removeTodo}
                  completeTodo={completeTodo}
                  editTodo={editTodo}
                  edit={edit}
                  setEdit={(e) => setEdit(e.target.value)}
                  isEditing={isEditing} />
              ))}

            </div>

          </div>
        </section>

        <footer>
          <p>Todos os direitos reservados©</p>
        </footer>
      </AppStyle>
    </div>
  )
}

export default App
