import axios from "axios";
import React from "react";
import MenuHeader from "../components/MenuHeader";
import Spinner from "../components/Spinner";
import "../scss/TopCards.scss";

function TopCards() {
  const [db, setDB] = React.useState(null)
  const [list, setList] = React.useState([])
  const [base, setBase] = React.useState(0)

  let lists = []
  const prize_list = list.slice(0, 3);

  const loadDBVersion = async () => {
    try {
      const res = await axios.get(
        "https://db.ygoprodeck.com/api/v7/checkDBVer.php"
      );
      setDB([res.data[0].database_version, res.data[0].last_update]);
    } catch (err) {
      console.log(err)
      throw new Error("Network response was not ok.");
    }
  };

  const loadDB = async () => {
    try{
      const res = await axios.get(
        "https://db.ygoprodeck.com/api/v7/cardinfo.php?misc=yes"
      );
      res.data.data.map((v) => {
        let vote = v.misc_info[0].upvotes - v.misc_info[0].downvotes;
        if (vote >= 300) {
          lists.push({ vote, v })
        }
      })
  
      lists.sort((a, b) => {
        return b.vote - a.vote;
      });
      setList(lists)
      setBase(lists[0].vote)
    }catch(err){
      console.log(err);
      throw new Error("Network response was not ok.");
    }
  }

  React.useEffect(() => {
    loadDBVersion();
    loadDB();
  }, [])
  return (
    <div className="All_topCards">
      <MenuHeader />
      <section className="Main">
        <img src={require("../img/menu1.png")} alt="top_cards" />
        <div className="texts">
          <h2>Top Cards</h2>
          <p>These are the most commonly used cards in the Yu-Gi-Oh! TCG.</p>
          {db !== null ? (
            <h4>
              Database Version : {db[0]} <br /> Last Update : {db[1]}
            </h4>
          ) : null}
        </div>
      </section>
      <section className="Podium">
        {prize_list.length >= 1 ? (
          prize_list.map((value, idx) => {
            return (
              <div className="Rank" key={idx}>
                <h4>{idx + 1}st</h4>
                <img src={value.v.card_images[0].image_url} alt="top_cards" />
                <div className="col">
                  <h3>{value.v.name}</h3>
                  <ProgressRank width={value.vote} base={base} />
                </div>
              </div>
            );
          })
        ) : (
          <Spinner />
        )}
      </section>
    </div>
  );
}

function ProgressRank(props) {
  const bar_width = (props.width / (props.base + 500)) * 100

  return (
    <div className="progressBar">
      <div className="highLight" style={{ width: `${bar_width}%` }} />
      <p>Upvote : {props.width}</p>
    </div>
  );
}

export default TopCards;
