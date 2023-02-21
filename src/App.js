import "./App.css";
// import Header from "./component/header";
import Product from "./component/Product";
import logo from "./logo.svg";
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

// ~~~~~~~~ Second lesson ~~~~~~~~~~~~~
// function Welcome(props) {
//   return (
//     <div>
//       <h1>Hello, {props.name}</h1>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <Welcome name="Gleeford" />
//       <Welcome name="Miro" />
//       <Welcome name="Soph" />
//     </div>
//   );
// }

// ~~~~~ Fourth Lesson After Components ~~~~~~~~~~~~~~~
function App() {
  return (
    <div className="App">
      <Product
        img="https://cdn.shopify.com/s/files/1/1622/9929/products/Adidas_Yeezy_Boost_350_Low_Black_V2_Men_s_grande.png?v=1560321730"
        name="Yeezy 700"
        description="Black Shoes For Men"
        price="PHP 10000"
      />

      <Product
        img="https://static.cloud-boxloja.com/lojas/ym522/produtos/a69892ae-3b38-460a-b60b-fb24cb5a2bb0.jpg"
        name="Air Jordan 1"
        description="Hype Shoes For Men"
        price="PHP 30000"
      />

      <Product
        img="https://nb.scene7.com/is/image/NB/bb550sn1_nb_02_i?$pdpflexf2$&wid=440&hei=440"
        name="New Balance 550"
        description="Trendy Shoes For Men"
        price="PHP 9000"
      />

      <Product
        img={logo}
        name="React logo"
        description="Trendy Shoes For Men"
        price="PHP 9000"
      />
    </div>
  );
}

export default App;
