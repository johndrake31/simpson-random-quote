import { useState } from 'react';
import './App.css';
import Card from './components/Card';

const App = () => {
  const [quote, setQuote] = useState({
    quote:
      "I can't even say the word 'titmouse' without gigggling like a schoolgirl.",
    character: 'Homer Simpson',
    image:
      'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939',
    characterDirection: 'Right',
  });
  const getCharacterHandler = ()=>{
    fetch('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then(res => res.json())
    .then(data=>setQuote(data[0]))
  }

  return (
    <div className='container mt-5'>
      <h1>Hello World of Simpson</h1>
      <Card quoteObj={quote}></Card>
      <button onClick={getCharacterHandler} className='btn btn-success'>Get Simpson Quote</button>
    </div>
  );
};

export default App;
