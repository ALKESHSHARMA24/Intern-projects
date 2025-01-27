import res from "express/lib/response";
import { URL } from "../utils/constant";
import { IMAGE_URL } from "../utils/constant";

const RestroCards = (props) => {
  const { resData } = props;
  console.log(resData);
  const { name, avgRating, cuisines } = resData?.info;
  const cloudinaryImageid = resData?.info.cloudinaryImageId;
  const { deliveryTime } = resData?.info.sla;

  return (
    <div className="cards-container">
      <div className="cards">
        <img
          src={`${IMAGE_URL}${cloudinaryImageid}`}
          alt="restaurant Image"
          id="Restro-image"
        />

        <div className="header">
          <h3 className="resto-heading">{name}</h3>
          <h4 className="resto-heading">{cuisines.join(", ")}</h4>
          <h4 className="resto-heading">Rating: {avgRating}</h4>
          <h4 className="resto-heading">Delivery Time: {deliveryTime} mins</h4>
        </div>
      </div>
    </div>
  );
};

export default RestroCards;
