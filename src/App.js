//Estilos
import "./App.css";

//Secciones
import Home from "./components/Home/Home";
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
        <Home/>
        <ItemListContainer/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
