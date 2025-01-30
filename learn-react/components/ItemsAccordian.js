import CategoryItems from "./CategoryItems";

const ItemsAccrodian = function (props) {
  const { item } = props;
  console.log("ItemsACCordian");
  //   const { card } = props;
  console.log(props);
  console.log(item.card.card.title);
  return (
    <div className=" h-full mt-20 w-full flex flex-col justify-center content-center w-full  border-r-amber-600 rounded-b-xl">
      <div className="flex justify-between bg-gray-300 content-between  ">
        <span>{item.card.card.title}</span>
        <span>⬇️</span>
      </div>

      {item.card.card.itemCards.map(function (items) {

          return <CategoryItems item={items} />;

      })}
    </div>
  );
};

export default ItemsAccrodian;
