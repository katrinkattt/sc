import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import burger from '../media/burger.png';

export default function Toolbar(props){
  return(
    <Navbar bg="dark" variant="dark" className="toolbar">
      <Navbar.Brand href="#home" >
        <div className="menu__burg">
          <img
          alt="burg"
          src = {burger}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        </div>
        <div className="menu__burg title__bar">
          Smart City
        </div>
      </Navbar.Brand>
    </Navbar>
    )
}