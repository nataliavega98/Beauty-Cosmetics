import "./App.css";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <ItemListContainer greeting="¡Buen día🌞!" greetimg='./assets/cosmetics.png' className="ItemListContainer"/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
