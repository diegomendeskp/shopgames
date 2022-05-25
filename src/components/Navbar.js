import React, { useState, useEffect, useContext } from "react";
import "../css/navBar.css"


import { BsFillCursorFill, BsHandbag, BsSearch } from "react-icons/bs";
import {  IoIosMenu } from "react-icons/io";


function Navbar(){
    function openBar() {
        document.getElementById("sideBar").style.display = "block";
      }
      function closeBar() {
        document.getElementById("sideBar").style.display = "none";
      }

      return(
      <div className="navBar">
          
      <div className="btbar">
        <button className="openBar">
          <IoIosMenu className="btmenu" />
        </button>
        <div className="sideBar" id="sideBar">
          <ul>
            <li>
              <h3>Estratégia</h3>
            </li>
            <li>
              <a href="#">Age of Empires 4</a>
            </li>
            <li>
              <a href="#">Age of Mythology</a>
            </li>
            <li>
              <a href="#">Warcraft III</a>
            </li>
            <li>
              <a href="#">Xcom 2</a>
            </li>
          </ul>

          <ul>
            <li>
              <h3>Sobrevivência</h3>
            </li>
            <li>
              <a href="#">Valheim</a>
            </li>
            <li>
              <a href="#">Minecraft</a>
            </li>
            <li>
              <a href="#">ARK: Survival Evolved</a>
            </li>
            <li>
              <a href="#">7 Days to Die</a>
            </li>
          </ul>

          <ul>
            <li>
              <h3>Indie</h3>
            </li>
            <li>
              <a href="#">Cuphead</a>
            </li>
            <li>
              <a href="#">Dead Cells</a>
            </li>
            <li>
              <a href="#">Have a Nice Death</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="icons">
       
          <h2>
            <BsFillCursorFill />
            Contato
          </h2>
       

        <h2>
          <BsSearch />
          Buscar
        </h2>
        <h2>
          <BsHandbag />
        </h2>
      </div>
    </div>
      );
}

export default Navbar;
