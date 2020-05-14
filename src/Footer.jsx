import React from "react";

function Footer() {
  var d = new Date();
  var year = d.getFullYear();
  return (
    <footer>
      <p> CopyRight © {year}</p>
    </footer>
  );
}
export default Footer;
