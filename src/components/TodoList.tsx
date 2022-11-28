import React, { FC, useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { TodoActionTypes } from "../types/todo";

const TodoList: FC = () => {
  const { todos, loading, error, page, limit } = useTypedSelector(
    (state) => state.todos
  );
  const { fetchTodo } = useActions();
  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    fetchTodo();
  }, []);

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }

  if (error) {
    return <h1>Произошла ошибка</h1>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.id}. {todo.title}
        </div>
      ))}
      {/*<div style={{ display: "flex", marginTop: 15 }}>
        {pages.map((page) => (
          <div
            style={{
              height: 50,
              width: 50,
              border: "1px solid teal",
              cursor: "pointer",
            }}
            key={page}
          >
            {page}
          </div>
        ))}
          </div>*/}
    </div>
  );
};

export default TodoList;
