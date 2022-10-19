import axios from "axios";
import React from "react";

const Test =()=>{
  const loadDB = async () => {
    const res = await axios.get(
      "https://db.ygoprodeck.com/api/v7/cardinfo.php"
    );
    console.log(res)
  }
  React.useEffect(() => {
    loadDB();
  },[]);

  return(
    <div>안녕</div>
  )
}

export default Test;