import React, { useState, useEffect, useContext } from "react";
import "../css/App.css";
import Navbar from "../components/Navbar";
import Cardctst from "../components/Cardcontrast";
import ShopItems from "../components/shopItems";
import ImageSlider from "../slide/imageSlide";
import { SliderData } from "../slide/sliderData";

import { BsFillCursorFill, BsHandbag, BsSearch } from "react-icons/bs";
import { IoIosAdd, IoIosMenu, IoIosSquare } from "react-icons/io";
function AppMain() {
  return (
    <div className="App">
      <main className="App-main">
        <Navbar />
        <ImageSlider slides={SliderData} />
        <body className="body">
          <div className="body-container">
            <Cardctst />
            <div className="Shoplist">
              <div className="contrast">
                <h4 className="subTitle">
                  <IoIosSquare className="constrast-icon" /> Produtos em
                  Destaque
                </h4>
              </div>
              <ShopItems />
            </div>
          </div>
        </body>
      </main>
    </div>
  );
}

export default AppMain;
