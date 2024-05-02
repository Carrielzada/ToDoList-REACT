import { useState } from 'react';
import "./App.css";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Search from "./components/Search";
import Filter from "./components/Filter"
import "./components/css/Todo.css"
import "./components/css/TodoForm.css"
import "./components/css/Search.css"
import "./components/css/Filter.css"

function App() {
  const [todos, setTodos] = useState([
    {
    id:1,
    text: "Desenvolver em ReactJS",
    category: "Trabalho",
    isCompleted: false,

  },
  {
    id:2,
    text: "Ir pra academia",
    category: "Pessoal",
    isCompleted: false,
  },
  {
    id:3,
    text: "Finalizar as horas complementares do curso ADS",
    category: "Estudos",
    isCompleted: false,
  }
]);

const [search, setSearch] = useState("");

const [filter, setFilter] = useState("all");
const [sort, setSort] = useState("Asc");

const addTodo =  (text,category) =>{

    const newTodos = [...todos, 
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
    },
  ];

  setTodos(newTodos);
};

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter((todo) => 
    todo.id !== id ? todo : null
    ); dwadrerrecheugeui sai fora voltei mas bem acompanhado vim chamar aas top vem mas ssó se for agora deasdade miade mil e cem 
    dinheir nao é problema 
    ceu se[llfddd xsdedrthjnnnnmisADOISADORA DOS SANTOS NEVES
    ]
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
  );
      setTodos(newTodos)
  };

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="todo-list">
        {todos
        .filter((todo) => filter === "All" 
        ? true 
        : filter === "Completed" 
        ? todo.isCompleted 
        : !todo.isCompleted
      )
        .filter((todo) => 
        todo.text.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) => 
      sort === "Asc" 
      ? a.text.localeCompare(b.text) 
      : b.text.localeCompare(a.text)
    )
        .map((todo) => (
          <Todo 
          key={todo.id} 
          todo={todo} 
          removeTodo={removeTodo} 
          completeTodo={completeTodo} 
          />
        ))}
        <todo/>
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>
  );
}

export default App;