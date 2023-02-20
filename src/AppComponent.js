import "./App.css";
// import logo from "./logo.svg";
import Header from './component/header';

const name = "Gleeford";
const first = 5;
const second = 6;

function AppComponent() {
  return (
    <div className="App">
      <h1>Hello {name}</h1>
      <h2> Calculate: 5 + 6 = {first + second}</h2>
      <Header />
    </div>
  );
}

export default AppComponent;
