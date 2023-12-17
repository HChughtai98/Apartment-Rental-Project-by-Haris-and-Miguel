import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
//import About from './components/About';
import Page404  from "./components/Page404";
//import NewApartment from "./components/NewApartment";
//import ApartmentDetails from "./components/AppartmentsDetails";
//import UpdateApartment from "./components/UpdateApartment";
//import Favourites from "./components/Favourites.jsx"

import "./App.css";
import { Route, Routes } from 'react-router-dom'
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
          <Routes>
            {/*<Route path='/' element={<Homepage />} />*/}
            {/*<Route path='/about' element={<About />} />*/}
            {/*<Route path='/apartments/new' element={<NewApartment setApartment={setApartment} />} />*/}
            {/*<Route path='/apartments/:apartmentId' element={<ApartmentDetails apartment={apartment} />} />*/}
            {/*<Route path='/apartments/update/:apartmentId' element={<UpdateApartment updateApartment={updateApartment} />} />*/}            
            {/*<Route path='/favorites' element={<NewApartment setApartment={setApartment} />} />*/}
            {/*<Route path='*' element={<Page404 />} />*/}
          </Routes>
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
