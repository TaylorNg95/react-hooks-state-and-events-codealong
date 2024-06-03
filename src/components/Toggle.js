import React, {useState} from "react";

function Toggle() {
  let [status, changeStatus] = useState(true)

  function handleClick() {
    /* changeStatus((status) => !status)
    changeStatus((status) => !status) */
    changeStatus((status) => !status)
    changeStatus((status) => !status)
  }

  console.log(status)

  const color = status ? "red" : "white"

  return <button style={{color: color}} onClick={handleClick}>{status ? "ON" : "OFF"}</button>;
}

export default Toggle;
