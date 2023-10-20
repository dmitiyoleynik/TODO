import { ITodo } from '../models/todo';

const mockTodos: ITodo[] = [
  {
    id: '1',
    title: 'Завдання 1',
    description: 'Опис завдання 1',
    user_name: 'Користувач 1',
    priority: 'Важливе',
    state: 'Не виконане',
  },
  {
    id: '2',
    title: 'Завдання 2',
    description: 'Опис завдання 2',
    user_name: 'Користувач 2',
    priority: 'Звичайне',
    state: 'Виконане',
  },
  {
    id: '3',
    title: 'Завдання 3',
    description: 'Опис завдання 3',
    user_name: 'Користувач 1',
    priority: 'Важливе',
    state: 'Не виконане',
  },
  {
    id: '4',
    title: 'Завдання 4',
    description: 'Опис завдання 4',
    user_name: 'Користувач 3',
    priority: 'Звичайне',
    state: 'Не виконане',
  },
  {
    id: '5',
    title: 'Завдання 5',
    description: 'Опис завдання 5',
    user_name: 'Користувач 2',
    priority: 'Важливе',
    state: 'Виконане',
  },
  {
    id: '6',
    title: 'Завдання 6',
    description: 'Опис завдання 6',
    user_name: 'Користувач 1',
    priority: 'Звичайне',
    state: 'Виконане',
  },
  {
    id: '7',
    title: 'Завдання 7',
    description: 'Опис завдання 7',
    user_name: 'Користувач 3',
    priority: 'Звичайне',
    state: 'Не виконане',
  },
  {
    id: '8',
    title: 'Завдання 8',
    description: 'Опис завдання 8',
    user_name: 'Користувач 2',
    priority: 'Важливе',
    state: 'Виконане',
  },
  {
    id: '9',
    title: 'Завдання 9',
    description: 'Опис завдання 9',
    user_name: 'Користувач 1',
    priority: 'Звичайне',
    state: 'Не виконане',
  },
  {
    id: '10',
    title: 'Завдання 10',
    description: 'Опис завдання 10',
    user_name: 'Користувач 3',
    priority: 'Важливе',
    state: 'Не виконане',
  },
];

const getTodos = (): ITodo[] => {
  return mockTodos.slice();
};

const addTodo = (newItem: ITodo) => {
  mockTodos.push(newItem);
};

const removeTodo = (id: string) => {
  mockTodos.splice(
    mockTodos.findIndex((todo) => todo.id === id),
    1,
  );
};

const updateTodo = (updatedItem: ITodo) => {
  mockTodos.splice(
    mockTodos.findIndex((todo) => todo.id === updatedItem.id),
    1,
    updatedItem,
  );
};

const todoDb = { getTodos, addTodo, removeTodo, updateTodo };

export default todoDb;
