//Estilos
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Secciones
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/store" element={<ItemListContainer/>}></Route>
            <Route exact path="/store/product/:productId" element={<ItemDetailContainer/>}></Route>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
