import './App.css';

function App() {
  return (
    <div id="quote-box">
      <div id="text">
        <p>Quote goes here</p>
      </div>
      <div id="author">
        <p>Author goes here</p>
      </div>
      <button id="new-quote">New Quote</button>
      <a id="tweet-quote" href="twitter.com/intent/tweet">Tweet Quote</a>
    </div>
  );
}

export default App;
