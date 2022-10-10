import axios from "axios";
import cheerio from 'cheerio';
import React from "react";
import "../scss/TopCards.scss";


function TopCards() {
  const [db, setDB] = React.useState(null);

  const loadDBVersion = async ()=>{
    const res = await axios.get("https://db.ygoprodeck.com/api/v7/checkDBVer.php")
    setDB([res.data[0].database_version,res.data[0].last_update])
  }

  const loadDB = async ()=>{
    const res = await axios.get('https://ygoprodeck.com/top/')
    console.log(res)
  }

  React.useEffect(()=>{
    loadDBVersion();
    loadDB();
  },[])
  return (
    <div className="All_topCards">
      <header>
        <h3>Yi-Gi-Oh!</h3>
        <ul>
          <li>Top Cards</li>
          <li>Decks</li>
          <li>Card Database</li>
          <li>Articles</li>
        </ul>
      </header>
      <section className="Main">
        <img src={require("../img/menu1.png")} alt="top_cards" />
        <div className="texts">
          <h2>Top Cards</h2>
          <p>These are the most commonly used cards in the Yu-Gi-Oh! TCG.</p>
          {db!== null?(
            <h4>Database Version : {db[0]} <br/> Last Update : {db[1]}</h4>
          ): null}
        </div>
      </section>
    </div>
  );
}
export default TopCards;
