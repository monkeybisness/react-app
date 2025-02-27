import React from 'react';
import styled, { css } from "styled-components"
import { TodoItemContainer } from './TodoItemContainer';
import { TodoItemCheckbox } from './TodoItemCheckbox';
import { TodoItemPriority } from "./TodoItemPriority";
import { useDeleteTodoItem } from '../../data/hooks/useData';

const checkedCss = css`
  color: #B5B5BA;
  text-decoration: line-through;
`;

const Title = styled.span(props => `
  font-size: 15px;
  ${props.checked ? checkedCss : ''};
  white-space: pre-wrap;
  word-break: break-word;
  max-width: 100%;
  line-height: 1.5;
  overflow-wrap: anywhere;
`);

const Delete = styled.span`
  display: inline-block;
  min-width: 13px;
  min-height: 13px;
  background-image: url(assets/images/png/delete.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 13px;
  cursor: pointer;
`;

export const TodoItem = ({ id, title, checked, priority }) => {
  const { mutate: deleteTodoItem } = useDeleteTodoItem();

  console.log(`Render TodoItem: id=${id}, checked=${checked}, priority=${priority}`);

  const deleteHandler = () => {
        // eslint-disable-next-line no-restricted-globals
    if (confirm(`Вы действительно хотите удалить "${title}"?`)) {
      deleteTodoItem({ id });
    }
  };

  return (
    <TodoItemContainer>
      <TodoItemCheckbox id={id} disabled={false} checked={checked} priority={priority} />
      <Title checked={checked}>{title}</Title>
      <Delete onClick={deleteHandler} />
      <TodoItemPriority id={id} checked={checked} priority={priority || 1} />
    </TodoItemContainer>
  );
};
