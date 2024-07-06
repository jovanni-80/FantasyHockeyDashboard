import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(counter + 1);
  } 

  const decrement = () => {
    setCounter(counter - 1 < 0 ? 0 : counter - 1);
  }

  return (
    <div className="App m-2">
      <header>
        { counter }
      </header>
      <ButtonGroup aria-label="Counter">
        <Button
          variant = "primary"
          onClick = {increment}>
          +
        </Button>
        <Button
          variant = "primary"
          onClick = {decrement}>
          -
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default App;
