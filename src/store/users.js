import { atom } from 'nanostores';

const initialValue = [
  {
    id: 1,
    name: 'User Admin',
    age: 28,
    isAdmin: true,
  },
  {
    id: 2,
    name: 'NOT Admin',
    age: 35,
    isAdmin: false,
  },
  {
    id: 3,
    name: 'Another Admin',
    age: 46,
    isAdmin: true,
  },
]

export const users = atom(initialValue);

export const addUser = function addUser(user) {
  users.set([...users.get(), user]);
};
