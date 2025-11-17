import './App.css';
import React from "react";

const colors = [
  { background: "#FF6B6B", boxColor: "#FF9A9A", button: "#FF8787", shadow: "#B24444", darkText: "#CC5555" },
  { background: "#6BCB77", boxColor: "#9DE7A3", button: "#5BBF68", shadow: "#3C8045", darkText: "#4FA562" },
  { background: "#4D96FF", boxColor: "#8AB8FF", button: "#6AA8FF", shadow: "#2F5EA6", darkText: "#3C78CC" },
  { background: "#FFA62B", boxColor: "#FFC56F", button: "#FFB54C", shadow: "#A66E14", darkText: "#CC8422" },
  { background: "#9D4EDD", boxColor: "#C79BF1", button: "#B673E6", shadow: "#622A8C", darkText: "#7D3AB0" },
  { background: "#00C49A", boxColor: "#66E3C8", button: "#1BD7AD", shadow: "#007E61", darkText: "#009C7A" },
  { background: "#FF4D6D", boxColor: "#FF8099", button: "#FF6B89", shadow: "#A33249", darkText: "#CC3E56" },
  { background: "#F15BB5", boxColor: "#F69FD2", button: "#F37CC5", shadow: "#A13A77", darkText: "#C84791" },
  { background: "#00BBF9", boxColor: "#66D9FF", button: "#33CCFF", shadow: "#007799", darkText: "#0095C6" },
  { background: "#7DDF64", boxColor: "#B2F09E", button: "#94E67C", shadow: "#4F8C3A", darkText: "#65B44E" }
];

const quotes = [
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "What we think, we become.", author: "Buddha" },
  { text: "Happiness depends upon ourselves.", author: "Aristotle" },
  { text: "Everything you can imagine is real.", author: "Pablo Picasso" },
  { text: "The future belongs to those who prepare for it today.", author: "Malcolm X" },
  { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" }
];

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      quote: quotes[0],
      color: colors[0],
      isActive: false

    };
    this.getRandomQuote = this.getRandomQuote.bind(this);
  }

  //Helps so on first load the page does not have a white background
  componentDidMount() {
  document.body.style.backgroundColor = this.state.color.background;
}

  getRandomQuote(){
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomColor = Math.floor(Math.random() * colors.length);

    this.setState({
      quote: quotes[randomIndex],
      color: colors[randomColor]
    });
    document.body.style.backgroundColor = colors[randomColor].background;
  }

render() {
  return (
    <div id="quote-box"
      style={{
        backgroundColor: this.state.color.boxColor,
        boxShadow: `3px 3px 9px ${this.state.color.shadow}`,
      }}
    >
      <div className="text-container">
        <h1 id="text" style={{ color: this.state.color.darkText }}>{this.state.quote.text}</h1>
        <p id="author" style={{ color: this.state.color.darkText }}>- {this.state.quote.author}</p>
      </div>

      <div className="buttons-container">
        <button
          id="new-quote"
          className="button-style"
          onClick={this.getRandomQuote}
          onMouseDown={() => this.setState({ isActive: true })}
          onMouseUp={() => this.setState({ isActive: false })}
          style={{ backgroundColor: this.state.isActive
            ? this.state.color.darkText    // when clicked
            : this.state.color.background,
          color: this.state.color.boxColor
          }}
        >
          New Quote
        </button>

        <div id="socials">
          <a
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              `"${this.state.quote.text}" - ${this.state.quote.author}`
            )}`}
            target="_blank"
            style={{ color: this.state.color.darkText }}
          >
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 50 50"
            >
              <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}}

export default App;
