import { useEffect, useState } from "react";
import React from "react";
import { URL } from "../utils/constants";
import RestroCards from "./restCards";
import SearchRestroCards from "./serachRestCards";
import { Shimmar } from "./ShimmerUI";

const Body = () => {
  const [Restaurant, SetRestaurant] = useState(null);
  const [FliterRestaurant, setFliterRestaurant] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isInitialLoad, setIsInitialLoad] = useState(false);

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array to run only once on mount

  async function fetchData() {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      SetRestaurant(
        data.data.cards[1].groupedCard.cardGroupMap.RESTAURANT.cards[1].card
          .card.restaurants
      );
      setIsInitialLoad(true);
    } catch (e) {
      console.log("in error");
      console.log(e.message);
    }
  }

  async function searchData(searchInput) {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/restaurants/search/v3?lat=23.030244474584375&lng=72.53045917390587&str=${searchInput}&trackingId=dad7d274-5d9c-06fc-e3a1-24901e037d47&submitAction=ENTER&queryUniqueId=e6085f04-f924-c1ad-8e82-ced0a11eacb6`
      );
      const data = await response.json();
      console.log("datttaL ", data);

      //IF THE RESPONSE OF THE DATA IS FOR THE DISH THEN SET THE FILTER RESTAURANT BASED ON THE DISH DATA
      //ELSE SETS THE THE RESTAURATNS DATA INTO THE FILTER RESTAURATN ARRAY
      if (
        data.data.cards[1].groupedCard.cardGroupMap.RESTAURANT.cards ===
        undefined
      ) {
        setFliterRestaurant(
          data.data.cards[1].groupedCard.cardGroupMap.DISH.cards
        );
      } else {
        setFliterRestaurant(
          data.data.cards[1].groupedCard.cardGroupMap.RESTAURANT.cards
        );
      }

      setIsInitialLoad(false);
    } catch (e) {
      console.log(e.message);
    }
  }

  if (Restaurant === null) return <Shimmar />;

  console.log(Restaurant);
  //   <Shimmar/>
  //USING THE TERNARY OPERATOR
  return (
    <div className="body">
      <input
        id="inputRest"
        type="text"
        required
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button onClick={() => searchData(searchInput)}>Search</button>
      <div className="restro-cards">
        {Restaurant === null ? (
          <Shimmar />
        ) : isInitialLoad ? (
          Restaurant.map((Element) => (
            <RestroCards key={Element.info.id} resData={Element} />
          ))
        ) : (
          FliterRestaurant.map((Elements) => (
            <SearchRestroCards
              key={Elements.card.card.info.id}
              resData={Elements}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
