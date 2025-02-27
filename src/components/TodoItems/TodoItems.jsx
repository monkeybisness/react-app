import React, { useState } from 'react';
import { TodoItemsContainer } from './TodoItemsContainer';
import { NewTodoItem } from '../TodoItem/NewTodoItem';
import { TodoItem } from '../TodoItem/TodoItem';
import { useData } from '../../data/hooks/useData';
import { SearchInput } from './components/SearchInput';
import { SortButton } from './SortButton';

export const TodoItems = () => {
  const [searchValue, setSearchValue] = useState('');
  const [sortMethod, setSortMethod] = useState('');

  const { data: todoItems, isLoading } = useData();

  if (!todoItems || isLoading) {
    return <TodoItemsContainer>Загрузка данных...</TodoItemsContainer>;
  }

  const filteredBySearchItems = todoItems.filter((todoItem) => {
    const clearedTodoItemTitle = todoItem.title.trim().toLowerCase();
    const clearedSearchValue = searchValue.trim().toLowerCase();
    return clearedTodoItemTitle.includes(clearedSearchValue) || clearedSearchValue.length < 3;
  });

  const sortedElements = () => {
    return [...filteredBySearchItems].sort((item1, item2) => {
      if (sortMethod === 'asc') return item1.priority - item2.priority;
      if (sortMethod === 'desc') return item2.priority - item1.priority;
      return 0;
    });
  };

  const todoItemsElements = sortedElements().map((item) => (
    <TodoItem key={item.id} id={item.id} title={item.title} checked={item.isDone} priority={item.priority || 1} />
  ));

  return (
    <TodoItemsContainer>
      <div>
        <SearchInput value={searchValue} setValue={setSearchValue} />
        <SortButton active={sortMethod === 'asc'} onClick={() => setSortMethod('asc')}>🔼</SortButton>
        <SortButton active={sortMethod === 'desc'} onClick={() => setSortMethod('desc')}>🔽</SortButton>
        <SortButton active={sortMethod === ''} onClick={() => setSortMethod('')}>❌</SortButton>

      </div>
      {todoItemsElements}
      <NewTodoItem />
    </TodoItemsContainer>
  );
};
