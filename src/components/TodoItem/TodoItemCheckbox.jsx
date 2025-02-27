import styled, { css } from "styled-components";
import { useUpdateCheckTodoItem } from "../../data/hooks/useData";

const disabledCss = css`
  background-color: #E2E2E2;
  border-width: 0px;
`;

const checkedCss = css`
  border-color: #B5B5BA;
  background-color: #B5B5BA;
  background-image: url(assets/images/svg/todo-done.svg);
  background-position: center;
  background-repeat: no-repeat;
`;

export const CheckboxContainer = styled.span(props => `
  display: inline-block;
  min-width: 20px;
  min-height: 20px;
  border: 2px solid #C4C4C4;
  border-radius: 6px;
  cursor: pointer;
  ${props.disabled ? disabledCss : ''}
  ${props.checked ? checkedCss : ''}
`);

export const TodoItemCheckbox = ({ id, disabled, checked, priority }) => {
  const { mutate: updateCheckTodoItem } = useUpdateCheckTodoItem();
  
  const updateCheckHandler = () => {
    updateCheckTodoItem({ updatedId: id, checked: !checked, priority });
  };

  return <CheckboxContainer disabled={disabled} checked={checked} onClick={updateCheckHandler} />;
};
