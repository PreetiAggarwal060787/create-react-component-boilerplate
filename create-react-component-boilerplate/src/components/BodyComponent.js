import React, { Component } from "react";
import BodyLeftComponent from "./BodyLeftComponent.js";
import BodyRightComponent from "./BodyRightComponent.js"

export default function BodyComponent() {
    return (
        <div>
          <h1>I am Body Component!!</h1> 
       <BodyLeftComponent></BodyLeftComponent>
       <BodyRightComponent></BodyRightComponent>
        </div>
      );
    }