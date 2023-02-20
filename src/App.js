import "./App.css";
import logo from "./logo.svg";

function Welcome(props) {
  return (
    <div>
      <h1>Hello, {props.name}</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome name="Gleeford" />
      <Welcome name="Miro" />
      <Welcome name="Soph" />
    </div>
  );
}

// ~~~~~~~~ First Lesson ~~~~~~~~~~~
// function App() {
//   return (
//     <div className="App">
//       <h1>HELLO GLEEFORD</h1>
//       <img src={logo} className="App-logo" alt="logo" />
//       <header className="App-header">
//       <h1>HELLO GLEEFORD</h1>
//         <img src={logo} className="App-logo" alt="logo" />

//       </header>
//     </div>
//   );
// }

export default App;
