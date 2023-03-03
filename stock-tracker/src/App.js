import logo from "./logo.svg";
import "./main.css";

import StockRow from "./components/stockRow.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Ticker</th>
              <th>Price</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <StockRow ticker="aapl" />
            <StockRow ticker="goog" />
            <StockRow ticker="msft" />
            <StockRow ticker="tsla" />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
