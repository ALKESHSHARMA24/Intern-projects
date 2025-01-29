import { useEffect, useState } from "react";
import { Shimmar } from "./ShimmerUI";
import { useParams } from "react-router";
import { RESTAURANT, RESTAURANT_MENU } from "../utils/constants";
import BasicButtons from "./AddImage";

const RestroMenu = () => {
  const [resMenu, setResMenu] = useState(null);
  const { resId } = useParams();
  console.log(BasicButtons());
  //   BasicButtons();

  useEffect(function () {
    fetchMenu();
  }, []);

  async function fetchMenu() {
    try {
      const response = await fetch(RESTAURANT + resId);
      const data = await response.json();
      setResMenu(
        data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
          .itemCards
      );
      console.log(
        data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
          .itemCards
      );
    } catch (e) {
      console.log(e.message);
    }
  }

  if (resMenu === null) return <Shimmar />;

  return (
    <div className="resMenu-container">
      <div className="resMenu-cards">
        {resMenu.map(function (items) {
          return (
            <div id="Menu-card" key={items.card.info.id}>
              <div id="item-img">
                {items?.card?.info?.imageId === undefined ? (
                  BasicButtons()
                ) : (
                  <img
                    src={RESTAURANT_MENU + items.card.info.imageId}
                    alt={"Image is not available"}
                  ></img>
                )}
              </div>
              <div className="items-detail">
                <h3>Dish:-{items.card.info.name}</h3>
                <h4>Rs:- {items.card.info.price / 100}</h4>
                <h4>
                  Ratings:- {items.card.info.ratings.aggregatedRating.rating}
                </h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestroMenu;
