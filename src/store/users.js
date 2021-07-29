import { createStore, getValue } from 'nanostores';

const users = createStore(() => {
  users.set([
    {
      id: 1,
      name: 'User Admin',
      age: 28,
      isAdmin: true,
    },
    {
      id: 2,
      name: 'NOT Admin User',
      age: 35,
      isAdmin: false,
    },
    {
      id: 3,
      name: 'Another Admin',
      age: 46,
      isAdmin: true,
    },
  ]);
});

const addUser = function addUser(user) {
  users.set([...getValue(users), user]);
};

export { users, addUser };
