import React from "react";
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import LogoComponent from './components/LogoComponent';
import ViewTitleComponent from './components/ViewTitleComponent';
import BodyComponent from './components/BodyComponent';
import BodyLeftComponent from './components/BodyLeftComponent';
import BodyRightComponent from './components/BodyRightComponent';
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div>
      <h1>learn react</h1>
      <HeaderComponent></HeaderComponent>
      <LogoComponent></LogoComponent>
      <ViewTitleComponent></ViewTitleComponent>
      <BodyComponent></BodyComponent>
      <BodyLeftComponent></BodyLeftComponent>
      <BodyRightComponent></BodyRightComponent>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
