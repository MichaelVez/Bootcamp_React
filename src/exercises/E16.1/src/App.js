import "./App.css";
import { Route } from "react-router-dom";
import Header from "./component/Header";
import Homepage from "./component/Homepage";
import Products from "./component/Products";
import ProductDetail from "./component/ProductDetail";
function App() {
  return (
    <div>
      <Header />
      <Route path='/' exact component={Homepage} />
      <Route path='/products' component={Products} />
      <Route path='/product/:id' exact component={ProductDetail} />
    </div>
  );
}

export default App;
