import React, { useState, useEffect, useContext } from "react";
import "../css/cardcont.css";




function Cardctst(){
  

      return(
        

        <div className="Card-contrast">
        <div className="card-c1">
          <img
            className="image"
            alt="jogo-dst"
            src={require("../cards/dontst.png")}
          />
          <button className="addbtn">Info</button>
        </div>

        <div className="card-c2">
          <img
            className="image2"
            alt="jogo-mount"
            src={require("../cards/mount.jpg")}
          />
          <button className="addbtn">Info</button>
        </div>
        <div className="card-c3">
          <img
            className="image3"
            alt="jogo-tsims3"
            src={require("../cards/tsims.png")}
          />
          <button className="addbtn">Info</button>
        </div>
      </div>
      );
}

export default Cardctst;
