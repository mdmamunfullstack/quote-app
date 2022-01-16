import logo from './logo.svg';
import './styles/App.css';
import  { useEffect, useState, useCallback } from 'react';

import Quote from './components/Quote';
import SearchBar from './components/SearchBar';
import { requestQuotes } from './apis/animecall';

const App =()=> {

  const [quotes, setQuotes] = useState([]);
  const [noResults, setNoResults] = useState(false);

  const onSearchSubmit = async term => {
    console.log('New Search submit:', term);
    const quotesArray = await requestQuotes(term.toLowerCase());
    setNoResults(quotesArray.length === 0);
    setQuotes(quotesArray);
  };

  const clearResults = () => setQuotes([]);

  const renderedQuotes = quotes.map((quote, i) => {
    return <Quote quote={quote} key={i} />
  })

  return (
    <div className='app'>
      <h1 className='title'>Search Quotes</h1>

      <div className='disclaimer-container'>
        <p className='disclaimer'>
          Get 10 quotes from your favorite <span className='highlight'>anime</span>!
        </p>
      </div>
      
      <SearchBar onSearchSubmit={onSearchSubmit} clearResults={clearResults}/>

      { noResults &&
        <p className='no-results'>
          No results found.
        </p>
      }
      <div className='main-content'>
        {renderedQuotes}
      </div>

    </div>
  );
}

export default App;
