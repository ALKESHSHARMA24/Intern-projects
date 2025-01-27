import RestroCards from "./RestCards";
import resobj from "../utils/restoData";
import { useEffect, useState } from "react";
import { URL } from "../utils/constant";

//when we are passing the components it is very important to define keys for every components as it will help the reactdom to identify that
// which element it needs to render and so it doesn't force to re render each and every components(if we doesn't specify keys for each components)
// And index.key <<<<<<<<<<< unique.id.key
const Body = () => {
  const [Restaurant, SetRestaurant] = useState([]);

  useEffect(
    function () {
      // const NewRestaurant = resobj.filter(function (Element) {
      //   return Element.card.card.info.avgRating > 3;
      // });
      // SetRestaurant(NewRestaurant);
      fetchData();
    },
    [Restaurant]
  );

  async function fetchData() {
    try {
      const response = await fetch(
        URL)
      const data = await response.json(); 
      SetRestaurant(
        data.data.cards[1].groupedCard.cardGroupMap.RESTAURANT.cards[1].card
          .card.restaurants
      );
    } catch (e) {
      console.log(e.message);
    }
  }


  return (
    <div className="body">
      <button>Search</button>
      <div className="restro-cards">
        {/* {Restaurant.map(function (Element) {
          return <RestroCards key={Element.id} resData={Element} />;
        })} */}


      </div>
    </div>
  );
};

export default Body;
