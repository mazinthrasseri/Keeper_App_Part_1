import React from "react";

const d = new Date();
const date = d.getFullYear();

function Footer() {
  return (
    <footer>
      <p>Terms and Conditions. {date}</p>
    </footer>
  );
}

export default Footer;
