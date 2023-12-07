// import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, lazy, Suspense } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  // const restaurants =
  //   resList[0]["card"]["card"]["gridElements"]["infoWithStyle"]["restaurants"];

  // local state variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredSearch, setFilteredSearch] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCard = lazy(() => import("./RestaurantCard.js"));

  // const element = document.getElementById("more-data");
  // console.log(element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" }));

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  // }, [listOfRestaurants]);

  const updateFetchData = () => {
    // Example POST method implementation:
    async function postData(url, data) {
      // Default options are marked with *
      const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: "same-origin", // include, *same-origin, omit
        // headers: {
        //   "Content-Type": "application/json",
        //   // 'Content-Type': 'application/x-www-form-urlencoded',
        // },
        // redirect: "follow", // manual, *follow, error
        // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      });
      return response.json(); // parses JSON response into native JavaScript objects
    }

    postData("https://www.swiggy.com/dapi/restaurants/list/update", {
      lat: 12.9715987,
      lng: 77.5945627,
      nextOffset: "COVCELQ4KIDI07HgiM77IzCnEw==",
      widgetOffset: {
        NewListingView_category_bar_chicletranking_TwoRows: "",
        Restaurant_Group_WebView_SEO_PB_Theme: "",
        collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "40",
        inlineFacetFilter: "",
        restaurantCountWidget: "",
      },
      filters: {},
      seoParams: {
        seoUrl: "https://www.swiggy.com/",
        pageType: "FOOD_HOMEPAGE",
        apiName: "FoodHomePage",
      },
      page_type: "DESKTOP_WEB_LISTING",
      _csrf: "0kgi2GojuIMf-rJHAd6uPxSv6Pf7_dReM_R1idKs",
    }).then((data) => {
      console.log(data);
      console.log(
        data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      ); // JSON data parsed by `data.json()` call
      const newData =
        data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setListOfRestaurants(
        listOfRestaurants !== undefined &&
          newData !== undefined && [...listOfRestaurants, ...newData]
      );
    });
  };

  document.addEventListener("scrollend", updateFetchData());

  document.getElementById("main-body")?.addEventListener("scroll", (event) => {
    const { scrollHeight, scrollTop, clientHeight } = event.target;
    alert("scrolled");
    updateFetchData();
    if (Math.abs(scrollHeight - clientHeight - scrollTop) < 1) {
      console.log("scrolled");
    }
  });

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    ).catch((err) => console.log(err));

    const json = await data.json();
    console.log(json);
    console.log(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setListOfRestaurants(
      // Optional Chaining
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      // json['data']['cards'][5]["card"]["card"]["gridElements"]["infoWithStyle"]["restaurants"]
    );
    setFilteredSearch(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body" id="main-body">
      <div className="filter">
        <div className="search">
          <input
            className="search-input"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              console.log(searchText);
              const filterList =
                Array.isArray(listOfRestaurants) &&
                listOfRestaurants.filter((res) => {
                  console.log(res.info.name);
                  return res.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
                });
              console.log(filterList);
              setFilteredSearch(filterList);
            }}
          >
            search
          </button>
        </div>
        <button
          className="filterBtn"
          onClick={() => {
            const filteredList =
              Array.isArray(listOfRestaurants) &&
              listOfRestaurants.filter((res, i) => {
                console.log(res);
                return res?.info?.avgRating > 4;
              });
            console.log(filteredList);
            setFilteredSearch(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {Array.isArray(filteredSearch) &&
          filteredSearch.length &&
          filteredSearch?.map((restaurant, i) => (
            <Suspense fallback={<Shimmer />}>
              <Link
                to={"/restaurants/" + restaurant.info.id}
                key={restaurant["info"]["id"]}
              >
                <RestaurantCard restaurant={restaurant["info"]} />
              </Link>
              <div id="more-data"></div>
            </Suspense>
          ))}
      </div>
    </div>
  );
};

export default Body;
