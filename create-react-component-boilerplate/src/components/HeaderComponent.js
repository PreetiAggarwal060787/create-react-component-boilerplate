import React from "react";
import LogoComponent from "./LogoComponent.js";
import ViewTitleComponent from "./ViewTitleComponent.js";


export default function HeaderComponent() {
    return (
      <div> 
          <h1>I am Header Component!!</h1>
          <LogoComponent></LogoComponent>
          <ViewTitleComponent></ViewTitleComponent>
      </div>
      );
    }

