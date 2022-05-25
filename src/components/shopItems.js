import React, { useState, useEffect, useContext } from "react";

import "../css/carditem.css"




function ShopItems(){
  

      return(
        <div className="shopItens">
                <div className="cardItem">
                  <img
                    className="imgIten"
                    src={require("../cardItens/hollow.jpg")}
                  />
                  <div className="name">
                    <h2>Hollow knight</h2>
                  </div>
                  <div className="price">R$80.00</div>
                  <button className="purchase">Comprar</button>
                </div>

                <div className="cardItem">
                  <img
                    className="imgIten"
                    src={require("../cardItens/horizon.png")}
                  />
                  <div className="name">
                    <h2>Horizon Zero Dawn</h2>
                  </div>
                  <div className="price">R$300.00</div>
                  <button className="purchase">Comprar</button>
                </div>

                <div className="cardItem">
                  <img
                    className="imgIten"
                    src={require("../cardItens/nomansky.png")}
                  />
                  <div className="name">
                    <h2>No Man's Sky</h2>
                  </div>
                  <div className="price">R$150.00</div>
                  <button className="purchase">Comprar</button>
                </div>
              </div>
      );
}

export default ShopItems;
