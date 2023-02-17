// Componente React
import React, { useState } from "react";
//Estilos
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Secciones
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";
import { Contexto } from "./components/Context/Context";
import Payment from "./components/Payment/Payment";
import MyOrder from "./components/MyOrder/MyOrder";
function App() {

  const [carrito, setCarrito] = useState([])

  return (
    <Contexto.Provider value={{carrito, setterCarrito: setCarrito}} >
      <div className="App">
        <BrowserRouter>
          <header className="App-header">
            <NavBar />
          </header>
          <main>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/store" element={<ItemListContainer />}></Route>
              <Route exact path="/aboutus" element={<AboutUs />}></Route>
              <Route exact path="/contact" element={<Contact />}></Route>
              <Route exact path="/store/product/:productId" element={<ItemDetailContainer />}></Route>
              <Route exact path="/payment" element={<Payment />}></Route>
              <Route exact path="/order/:orderId" element={<MyOrder />}></Route>
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </Contexto.Provider>
  );
}

export default App;
