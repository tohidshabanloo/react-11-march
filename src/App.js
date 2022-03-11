import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Counter from "./Components/Counter/Counter";
import Footer from "./Components/Footer/Footer";
import Button from "./Components/Button/Button";

function App() {
  return (
    <div>
      <Header />
      <Counter />
      <Button />
      <Footer />
    </div>
  );
}

export default App;
