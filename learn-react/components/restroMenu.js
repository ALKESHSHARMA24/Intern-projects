import { useEffect, useState } from "react";
import { Shimmar } from "./ShimmerUI";
import { useParams } from "react-router";
import { RESTAURANT, RESTAURANT_MENU_IMAGE } from "../utils/constants";
import BasicButtons from "./AddImage";
import ItemsAccrodian from "./ItemsAccordian";
const RestroMenu = () => {
  const [resMenu, setResMenu] = useState(null);
  const { resId } = useParams();

  useEffect(function () {
    fetchMenu();
  }, []);

  async function fetchMenu() {
    // try {
    const response = await fetch(RESTAURANT + resId);
    const data = await response.json();
    console.log(data);
    // console.log(data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR.cards);
    const filterdres =
      data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        function (menu) {
          return (
            menu.card.card["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          );
        }
      );

    setResMenu(filterdres);
    console.log(filterdres);
    // );
    // console.log(
    //   data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
    //     .itemCards
    // );

    //   setResMenu(
    //     data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
    //   );
    // } catch (e) {
    //   console.log(e.message);
    // }
  }

  if (resMenu === null) return <Shimmar />;

  return (
    <div className=" h-full w-[1000px] m-10 p-10 border-amber-800 border-2 flex flex-col itmes-center">
      
      {console.log(resMenu)};
        {resMenu &&
          resMenu.map((items, index) => (
            <ItemsAccrodian key={index} item={items} />
          ))}

    </div>
  );

  /*
  return (
    <div className="cards-container mt-5 flex flex-row flex-wrap ">

      {resMenu.map(function (items) {
        return (
          <div
            className="cards w-[200px] h-[400px] m-4 flex flex-col border-2 rounded-b-lg"
            id="Menu-card"
            key={items.card.info.id}
          >
            <div id="item-img">
              {items?.card?.info?.imageId === undefined ? (
                BasicButtons()
              ) : (
                <img
                  src={RESTAURANT_MENU_IMAGE + items.card.info.imageId}
                  alt={"Image is not available"}
                ></img>
              )}
            </div>
            <div className="items-detail header h-100 max-h-full flex flex-col p-2 gap-1 text-blue-900">
              <h3 className="max-h-full">Dish:-{items.card.info.name}</h3>
              <h4 className="max-h-full">Rs:- {items.card.info.price / 100}</h4>
              <h4 className="max-h-full">
                Ratings:- {items.card.info.ratings.aggregatedRating.rating}
              </h4>
            </div>
          </div>
        );
      })}
    </div>
  );
  */
};

export default RestroMenu;
