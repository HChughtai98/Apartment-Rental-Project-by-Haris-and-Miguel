import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import "./App.css";
import appartmentListData from "./dataset/AppartmentList.json";

function App() {
  const [appartmentList, setAppartmentList] = useState(appartmentListData);
  /*   const deleteAppartmentHandler = (currentId) => {
    setAppartmentList(
      appartmentList.filter(
        (currentAppartment) => currentAppartment.id === currentId
      )
    );
  }; */
  return (
    <>
      <div>
        <Header />
        <div className="WebPage">
          <Sidebar />
          <div className="appListStyling">
            <Homepage appartmentList={appartmentList} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
