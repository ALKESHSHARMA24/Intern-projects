import { useEffect, useState } from "react";
import React from "react";
import { URL } from "../utils/constants";
import RestroCards from "./restCards";
// import { TEMPURL } from "../utils/constants";

//when we are passing the components it is very important to define keys for every components as it will help the reactdom to identify that
// which element it needs to render and so it doesn't force to re render each and every components(if we doesn't specify keys for each components)
// And index.key <<<<<<<<<<< unique.id.key

const Body = () => {
  const [Restaurant, SetRestaurant] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  //   const TEMPURL = `https://www.swiggy.com/dapi/restaurants/search/v3?lat=23.030244474584375&lng=72.53045917390587&str=${tempvar}&trackingId=dad7d274-5d9c-06fc-e3a1-24901e037d47&submitAction=ENTER&queryUniqueId=e6085f04-f924-c1ad-8e82-ced0a11eacb6`;

  useEffect(function () {
    // const NewRestaurant = resobj.filter(function (Element) {
    //   return Element.card.card.info.avgRating > 3;
    // });
    // SetRestaurant(NewRestaurant);
    serachData(searchInput);
  }, []);

  //   useEffect(() => {
  //     fetchData(searchInput);
  //   }, [Restaurant, searchInput]);

  async function fetchData() {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      console.log(data.data.cards[1].groupedCard.cardGroupMap.RESTAURANT.cards);
      SetRestaurant(
        data.data.cards[1].groupedCard.cardGroupMap.RESTAURANT.cards[1].card
          .card.restaurants
      );
      //   SetRestaurant(
      //     data.data.cards[1].groupedCard.cardGroupMap.RESTAURANT.cards
      //   );
    } catch (e) {
      console.log(e.message);
    }
  }

  async function serachData(searchInput) {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/restaurants/search/v3?lat=23.030244474584375&lng=72.53045917390587&str=${searchInput}&trackingId=dad7d274-5d9c-06fc-e3a1-24901e037d47&submitAction=ENTER&queryUniqueId=e6085f04-f924-c1ad-8e82-ced0a11eacb6`
      );
      const data = await response.json();
      console.log(data);
      console.log(data.data.cards[1].groupedCard.cardGroupMap.RESTAURANT.cards);
      //   SetRestaurant(
      //     data.data.cards[1].groupedCard.cardGroupMap.RESTAURANT.cards[1].card
      //       .card.restaurants
      //   );
      SetRestaurant(
        data.data.cards[1].groupedCard.cardGroupMap.RESTAURANT.cards
      );
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <div className="body">
      <input
        id="inputRest"
        type=""
        required
        onChange={function (e) {
          setSearchInput(e.target.value);
        }}
      ></input>

      {console.log(searchInput)}
      <button onClick={() => serachData(searchInput)}>Search</button>

      <div className="restro-cards">
        {Restaurant.map(function (Element) {
          return (
            <RestroCards key={Element.card.card.info.id} resData={Element} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
