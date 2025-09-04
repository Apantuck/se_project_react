import { useState } from "react";
import "./App.css";
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import { defaultClothingItems } from "../../utils/clothingItems.js";

function App() {
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [weatherData, setWeatherData] = useState({ type: "warm" });

  return (
    <div className="app">
      <div className="app__content">
        <Header />
        <Main clothingItems={clothingItems} weatherData={weatherData} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
