import BarGraph from "./components/Bar";
import balanceLogo from "./images/logo.svg";

function App() {
  return (
    <div className="container">
      <div className="balance">
        <div className="balance__text">
          <p className="balance__header">My balance</p>
          <p className="balance__amount">$921.48</p>
        </div>
        <img src={balanceLogo} className="balance__logo" alt="logo"></img>
      </div>

      <div className="spendings">
        <h1 className="spendings__header">Spending - Last 7 days</h1>
        <div className="spendings__graph">
          <BarGraph />
        </div>
        <div className="results">
          <div className="results__main">
            <p className="results__header">Total this month</p>
            <p className="results__amount">$478.33</p>
          </div>
          <div className="results__sub">
            <p className="results__percentage">+2.4%</p>
            <p className="results__sub-header">from last month</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
