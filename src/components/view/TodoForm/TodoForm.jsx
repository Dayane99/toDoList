import { useState } from 'react'
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import { Plus } from 'phosphor-react';
import { TodoFormStyle } from './todoForm.style';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value == '') {
      return
    } else {
      addTodo(value)
    }
  }

  return (
    <div className='todoForm'>
      <TodoFormStyle typeof='submit' onSubmit={(e) => handleSubmit(e)}>
        <Input
          type="text"
          width="1000px"
          contentPH='Nova tarefa:'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onSubmit={(e) => handleSubmit(e)}
        />
        <Button
          onClick={(e) => handleSubmit(e)}
          icone={<Plus size={32} color="#fff" />}
        />
      </TodoFormStyle>
    </div>
  )
}

export default TodoForm