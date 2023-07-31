// import logo from './logo.svg';
import './App.css';
import {useState} from 'react' 

/* const App = () => {
  const [counter, setCounter] = useState(0)
  return  <div>
    <h1>Ciao sono app</h1>
    <button onClick={
     () => setCounter(counter-1)         decremento del counter
    }>- 1</button>
    {counter}
  </div> 
} */

const App = () => {

  const [inputValue, setInputValue] = useState('');
  const [savedValues, setSavedValues] = useState([]);

  const handleAddClick = () => {
    if (inputValue.trim() !== '') {
      setSavedValues([...savedValues, inputValue]);
      setInputValue('');
    }
  };

  const renderSavedValues = () => {
    return savedValues.map((value, index) => (
      <p key={index}>{value}</p>
    ));
  };

  return (
    <div>
      <input id="input" type="text" placeholder="Enter engagements" value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddClick}>Add</button>

      {renderSavedValues()}
    </div>
  );
};

export default App;

