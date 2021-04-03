import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Results from "./components/results/Results";
import requestsUrl from "./utils/requestsUrl";
import Footer from './Footer'

function App() {
  const [selectedOption, setSelectedOption] = useState(requestsUrl.fetchTrending);

  return (
    <div className="app">
      <Header />
      <Nav setSelectedOption={setSelectedOption}/>
      <Results selectedOption={selectedOption} />
      <Footer />
    </div>
  );
}

export default App;
