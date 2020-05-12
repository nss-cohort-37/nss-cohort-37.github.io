import React from "react";
import "./App.css";
import Header from "./components/Header";
import CarouselBanner from "./components/CarouselBanner";
import Developers from "./components/Developers";
import Technologies from "./components/Technologies";
import Thanks from "./components/Thanks";

function App() {
  return (
    <div className="App">
      <Header />
      <CarouselBanner />
      <Developers />
      <Technologies />
      <Thanks />
      <footer className="navbar navbar-light bg-light footer">
        <p>&copy; 2020. Nashville Software School Cohort 37.</p>
      </footer>
    </div>
  );
}

export default App;
