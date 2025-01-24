import RestroCards from "./RestCards";
import resobj from "../utils/restoData";

//when we are passing the components it is very important to define keys for every components as it will help the reactdom to identify that
// which element it needs to render and so it doesn't force to re render each and every components(if we doesn't specify keys for each components)
// And index.key <<<<<<<<<<< unique.id.key
const Body = () => {
  return (
    <div className="body">
      <button>Search</button>
      <div className="restro-cards">
        {resobj.map(function (Element) {
          if (Element.card.card.info.avgRating > 4) {
            return (
              <RestroCards key={Element.card.card.info.id} resData={Element} />
            );
          }  
        })}
      </div>
    </div>
  );
};

export default Body;
