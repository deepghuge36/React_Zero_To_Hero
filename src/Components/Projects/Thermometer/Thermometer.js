import React, { useState } from 'react';
import { Button } from 'reactstrap';

export default function Thermometer() {
  const [month, setMonth] = useState(``);
  var months = ["January", `February`, "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var randomMonth = months[Math.floor(Math.random() * months.length)];

  console.log("random month =>", randomMonth);

  const _onClick = () => {
    console.log(randomMonth);
  };
  return (
    <>
      <Button color="primary" onClick={_onClick ? '{randomMonth}' : null}>
        {randomMonth}
      </Button>
    </ >
  );
}