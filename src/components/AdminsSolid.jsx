import { createSignal } from 'solid-js';

import { getValue } from 'nanostores';

import { admins } from '../store/admins.js';
import { counter, increaseCounter, decreaseCounter } from '../store/counter.js';

const AdminsSolid = () => {
  const [count, setCount] = createSignal(getValue(counter));

  const add = () => {
    increaseCounter();
    setCount(() => getValue(counter));
  }
  const subtract = () => {
    decreaseCounter();
    setCount(() => getValue(counter));
  }

  return (
    <>
      <h1>Solid</h1>
      <ul>
        {getValue(admins).map((admin) => (
          <li key={admin.id}>{JSON.stringify(admin, null, 2)}</li>
        ))}
      </ul>
      <div>
        <h3>Counter</h3>
        <p>{count()}</p>
        <button onClick={subtract}>-1</button>
        <button onClick={add}>+1</button>
      </div>
    </>
  );
}

export default AdminsSolid;