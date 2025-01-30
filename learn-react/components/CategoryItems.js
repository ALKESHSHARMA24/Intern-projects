const CategoryItems = (props) => {
  const { item } = props;
  console.log(item.card);
  return (
    <div className="p-4 w-full flex flex-col justify-between h-full gap-2">
      <span>{item.card.info.name}</span>
      <img src=""></img>
      <p> {item.card.info.description}</p>
    </div>
  );
};

export default CategoryItems;
