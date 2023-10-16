import styled from "styled-components";

export const TodoStyle = styled.li`
margin-top: 8px;

.content {
  width: 100%;
  height: 40px;
  border-radius: 8px;
  background: #E5A47F;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
}

  .todo {
    gap: 8px;
    display: flex;
  }
  
  input[type=checkbox]  {
    border: 0px;
    width: 20px;
  }
  
  p {
    color: #fff;
  }
`