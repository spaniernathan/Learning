import { Component, createSignal } from 'solid-js';

import styles from './App.module.css';

const App: Component = () => {
  const [count, setCount] = createSignal(0);
  return (
    <div class={styles.App}>
      <button onClick={() => setCount(count() + 1)}>Increment</button>
      <button onClick={() => setCount(count() - 1)}>Decrement</button>
      <p>Count: {count()}</p>
    </div>
  );
};

export default App;
