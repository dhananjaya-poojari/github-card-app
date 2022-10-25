import Card from "./Card";

const CardList = (props) => {
  return (
    <div>
      {props.profiles.map((obj) => (
        <Card key={obj.key} {...obj} />
      ))}
    </div>
  );
};

export default CardList;
