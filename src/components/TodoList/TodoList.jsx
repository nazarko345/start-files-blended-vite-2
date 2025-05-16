import GridItem from '../GridItem/GridItem';
import Grid from '../Grid/Grid';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <Grid>
      {todos.map((todo, index) => {
        return (
          <GridItem key={todo.id}>
            <TodoListItem
              text={todo.text}
              deleteTodo={deleteTodo}
              count={index}
              id={todo.id}
            />
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default TodoList;
