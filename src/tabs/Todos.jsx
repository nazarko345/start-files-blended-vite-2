import { nanoid } from 'nanoid';
import Form from '../components/Form/Form';
import TodoList from '../components/TodoList/TodoList';
import { useState } from 'react';

const Todos = () => {
  const [todos, setTodos] = useState([]);

  const deleteTodo = currentId => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== currentId);
    });
  } 

  const addNewTodo = newTodo => {
    setTodos((prevTodos) => {
      return [...prevTodos, {text: newTodo, id: nanoid()}];
    });
  };

  return (
    <>
      <Form onSubmit={addNewTodo} />
      <TodoList deleteTodo={deleteTodo} todos={todos} />
    </>
  );
};

export default Todos;
