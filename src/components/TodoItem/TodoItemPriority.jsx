import React from 'react';
import styled from "styled-components";
import { useUpdatePriorityTodoItem } from "../../data/hooks/useData";

const PriorityContainer = styled.span`
    display: flex;
    gap: 5px;
`;

const PriorityCircle = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    border: 2px solid transparent;

    ${({ selected, color }) =>
      selected
        ? `background-color: ${color}; border-color: ${color};`
        : `background-color: transparent; border-color: ${color};`}
    
    &:hover {
        opacity: 0.7;
    }
`;

export const TodoItemPriority = ({ id, checked, priority }) => {
  const { mutate } = useUpdatePriorityTodoItem();

  const onClickSetPriority = (newPriority) => {
    mutate({ updatedId: id, checked, priority: newPriority });
  };

  const priorityColors = {
    1: "green",
    2: "blue",
    3: "red",
  };

  return (
    <PriorityContainer>
      {[1, 2, 3].map(level => (
        <PriorityCircle
          key={level}
          color={priorityColors[level]}
          selected={level === priority}
          onClick={() => onClickSetPriority(level)}
        />
      ))}
    </PriorityContainer>
  );
};
