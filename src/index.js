//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: ""
};

var result = myfunction();

function myfunction() {
  var date = new Date();
  var hours = date.getHours();
  if (hours >= 0 && hours <= 12) {
    customStyle.color = "red";
    return "Good Morning!!";
  } else if (hours > 12 && hours < 18) {
    customStyle.color = "green";
    return "Good Afternoon!!";
  } else {
    customStyle.color = "blue";
    return "Good Evening!!";
  }
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={customStyle}>
      {result}
    </h1>
  </div>,
  document.getElementById("root")
);
