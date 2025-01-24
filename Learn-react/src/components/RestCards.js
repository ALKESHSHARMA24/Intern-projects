import resobj from "../utils/restoData";

const RestroCards = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines } =
    resData?.card.card.info;
  const { deliveryTime } = resData?.card.card.info.sla;
  return (
    <div className="cards-container">
      <div className="cards">
        <img
          src={`https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1705570676/${cloudinaryImageId}`}
          alt="restorant Image"
          id="Restro-image"
        />
        <h3 className="resto-heading">{name}</h3>
        <h4 className="resto-heading">{cuisines.join(",")}</h4>
        <h4 className="resto-heading"> {avgRating}</h4>
        <h4 className="resto-heading">{deliveryTime}</h4>
      </div>
    </div>
  );
};

export default RestroCards;
