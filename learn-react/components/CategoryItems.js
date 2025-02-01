import { IMAGE_URLs } from "../utils/constants";
import { RESTAURANT_MENU_IMAGE } from "../utils/constants";
const CategoryItems = (props) => {
  const { item, activeIndex } = props;
  console.log(item.card.info);
  // console.log(Isopen);
  // console.log(index);
  return (
    <div className="bg-stone-300 w-full justify-between flex  flex-row rounded-lg mt-4 p-4 ">
      <div>
        <span>Type :- {item.card.info.name}</span>
        <p> Dish:- {item.card.info.description}</p>
        <span>Item Price:- {item.card.info.price / 100}</span>
      </div>

      <div className="w-1/3 h-1/2 ">
        <img className="w-full rounded-lg" src={`${RESTAURANT_MENU_IMAGE}${item.card.info.imageId}`} />
      </div>
    </div>
  );
};

export default CategoryItems;
