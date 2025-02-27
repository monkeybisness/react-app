const TODO_ITEMS_LOCAL_STORAGE_KEY = "TODO_ITEMS_LOCAL_STORAGE_KEY";

export const LocalStorage = {
  getTodoItemsFromLocalStorage: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const rawData = localStorage.getItem(TODO_ITEMS_LOCAL_STORAGE_KEY);
        const defaultResult = [];

        if (!rawData) {
          resolve(defaultResult);
          return;
        }

        const data = JSON.parse(rawData);
        if (!Array.isArray(data)) {
          resolve(defaultResult);
          return;
        }

        resolve(data);
      }, 500);
    });
  },

  saveTodoItemToLocalStorage: (todoItem) => {
    return new Promise((resolve) => {
      LocalStorage.getTodoItemsFromLocalStorage().then((todoItems) => {
        const newTodoItems = [...todoItems, todoItem];
        localStorage.setItem(TODO_ITEMS_LOCAL_STORAGE_KEY, JSON.stringify(newTodoItems));
        resolve();
      });
    });
  },

  deleteTodoItemFromLocalStorage: (deleteTodoItemId) => {
    return new Promise((resolve) => {
      LocalStorage.getTodoItemsFromLocalStorage().then((todoItems) => {
        const newTodoItems = todoItems.filter((todoItem) => todoItem.id !== deleteTodoItemId);
        localStorage.setItem(TODO_ITEMS_LOCAL_STORAGE_KEY, JSON.stringify(newTodoItems));
        resolve();
      });
    });
  },

  updateCheckTodoItemIntoLocalStorage: (updatedId, checked) => {
    return new Promise((resolve) => {
      LocalStorage.getTodoItemsFromLocalStorage().then((todoItems) => {
        const newTodoItems = todoItems.map((todoItem) =>
          todoItem.id === updatedId
            ? { ...todoItem, isDone: checked}
            : todoItem
        );

        localStorage.setItem(TODO_ITEMS_LOCAL_STORAGE_KEY, JSON.stringify(newTodoItems));
        resolve();
      });
    });
  },

  updatePriorityTodoItemIntoLocalStorage: (updatedId, priority) =>{
    return new Promise((resolve) => {
      LocalStorage.getTodoItemsFromLocalStorage().then((todoItems) =>{
        const newTodoItems = todoItems.map((todoItem) =>
        todoItem.id ===updatedId
          ? {...todoItem, priority: priority}
          : todoItem
      );
      localStorage.setItem(TODO_ITEMS_LOCAL_STORAGE_KEY, JSON.stringify(newTodoItems));
      resolve();
      });
    });
  }
};
