import React from "react";
import '../scss/Menu_Header.scss';

function MenuHeader() {
  return (
    <header className="Menu">
      <h3>Yi-Gi-Oh!</h3>
      <ul>
        <li>Top Cards</li>
        <li>Decks</li>
        <li>Card Database</li>
        <li>Articles</li>
      </ul>
    </header>
  );
}

export default MenuHeader;
