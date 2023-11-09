import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";

const Body = () => {
  const restaurants =
    resList[0]["card"]["card"]["gridElements"]["infoWithStyle"]["restaurants"];

  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard restaurant={restaurant["info"]} />
        ))}
      </div>
    </div>
  );
};

export default Body;