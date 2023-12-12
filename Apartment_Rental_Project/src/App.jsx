import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Header />
        <Sidebar />
        <Footer />
      </div>
    </>
  );
}

export default App;
