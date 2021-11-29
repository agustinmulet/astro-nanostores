import { atom } from 'nanostores';

const initialValue = { value: 0 }

export const counter = atom(initialValue);

export const increaseCounter = () => {
  counter.set({ value: counter.get().value + 1});
}

export const decreaseCounter = () => {
  counter.set({ value: counter.get().value - 1});
}
