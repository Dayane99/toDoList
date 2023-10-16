import Button from '../../common/Button/Button';
import { Check, PencilSimple, Trash, X } from 'phosphor-react';
import Input from '../../common/Input/Input';
import { TodoStyle } from './todo.style';

const Todo = ({
  todo,
  removeTodo,
  completeTodo,
  editTodo,
  edit,
  setEdit,
  isEditing,
}) => {
  return (
    <TodoStyle>
      <div className="content">
        <div
          className="todo"
          style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
        >
          {todo.areEditing ? null : (
            <input type="checkbox" onClick={() => completeTodo(todo.id)} />
          )}
          {todo.areEditing ? (
            <Input
              width="500px"
              contentPH="Edite sua tarefa..."
              type="text"
              onChange={setEdit}
              value={edit}
            />
          ) : (
            <p>{todo.text}</p>
          )}
        </div>
        <div className="Buttons">
          {todo.areEditing ? (
            <>
              <Button
                icone={<Check size={32} color="#fff" />}
                onClick={() => editTodo(todo.id)}
              />
              <Button
                icone={<X size={32} color="#fff" />}
                onClick={() => isEditing(todo.id)}
              />
            </>
          ) : (
            <>
              <Button
                icone={<PencilSimple size={25} color="#fff" />}
                onClick={() => isEditing(todo.id)}
              />
              <Button
                icone={<Trash size={25} color="#fff" />}
                onClick={() => removeTodo(todo.id)}
              />
            </>
          )}
        </div>
      </div>
    </TodoStyle>
  );
};

export default Todo;
