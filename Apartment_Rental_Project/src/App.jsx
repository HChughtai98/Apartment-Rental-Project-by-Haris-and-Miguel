import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import AppartmentsDetailsPage from "./components/AppartmentsDetails";
import Page404 from "./components/Page404";


import "./App.css";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import appartmentListData from "./dataset/AppartmentList.json";

function App() {
  const [appartmentList, setAppartmentList] = useState(appartmentListData);

  return (
    <>
      <div>
        <Header />
        <div className="WebPage">
          <Sidebar />
          <Routes>
            <Route
              path="/"
              element={
                <Homepage
                  className="appListStyling"
                  appartmentList={appartmentList}
                />
              }
            />

            <Route
              path="/appartments/:appartmentId"
              element={<AppartmentsDetailsPage />}
            />
            <Route path="*" element={<Page404 />} />
            {/*<Route path='/about' element={<About />} />*/}
            {/*<Route path='/apartments/new' element={<NewApartment setApartment={setApartment} />} />*/}
            {/*<Route path='/apartments/update/:apartmentId' element={<UpdateApartment updateApartment={updateApartment} />} />*/}
            {/*<Route path='/favorites' element={<NewApartment setApartment={setApartment} />} />*/}
            
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
