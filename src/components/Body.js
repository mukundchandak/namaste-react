import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // const restaurants =
  //   resList[0]["card"]["card"]["gridElements"]["infoWithStyle"]["restaurants"];

  // local state variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState(
    resList[0]["card"]["card"]["gridElements"]["infoWithStyle"]["restaurants"]
  );

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filterBtn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res["info"].avgRating > 4
            );
            console.log(filteredList);
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant["info"]["id"]}
            restaurant={restaurant["info"]}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
