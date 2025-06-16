import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/')
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => console.error('Error fetching:', err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{message ? message : 'Loading...'}</p>
      </header>
    </div>
  );
}

export default App;


