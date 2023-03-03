import logo from "./logo.svg";
import "./main.css";

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
        </table>
      </div>
    </div>
  );
}

export default App;
