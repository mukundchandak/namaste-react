import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const resList = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
        header: {
          title: "Top restaurant chains in Bangalore",
          action: {},
          headerStyling: {
            padding: {
              left: 16,
              top: 28,
              bottom: 18,
            },
          },
        },
        layout: {
          rows: 1,
          columns: 13,
          horizontalScrollEnabled: true,
          itemSpacing: 32,
          widgetPadding: {},
          containerStyle: {
            containerPadding: {
              left: 16,
              right: 12,
              bottom: 12,
            },
          },
          scrollBar: {
            scrollThumbColor: "#E46D47",
            scrollTrackColor: "#02060C",
            width: 54,
            height: 4,
            scrollStyling: {
              padding: {
                top: 6,
                bottom: 24,
              },
            },
          },
          widgetTheme: {
            defaultMode: {
              backgroundColour: "#1B3028",
              theme: "THEME_TYPE_DARK",
            },
            darkMode: {
              backgroundColour: "#1B3028",
              theme: "THEME_TYPE_DARK",
            },
          },
        },
        id: "top_brands_for_you",
        gridElements: {
          infoWithStyle: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
            restaurants: [
              {
                info: {
                  id: "74444",
                  name: "Samosa Party",
                  cloudinaryImageId: "d8d4e708a41f011361c949d44990d5e0",
                  locality: "Koramangala",
                  areaName: "Koramangala",
                  costForTwo: "₹100 for two",
                  cuisines: [
                    "Fast Food",
                    "Snacks",
                    "Beverages",
                    "Chaat",
                    "North Indian",
                    "Street Food",
                    "Sweets",
                    "Desserts",
                    "Punjabi",
                    "Bakery",
                  ],
                  avgRating: 4.3,
                  feeDetails: {
                    restaurantId: "74444",
                    fees: [
                      {
                        name: "BASE_DISTANCE",
                        fee: 5400,
                      },
                      {
                        name: "BASE_TIME",
                      },
                      {
                        name: "ANCILLARY_SURGE_FEE",
                      },
                    ],
                    totalFee: 5400,
                  },
                  parentId: "6364",
                  avgRatingString: "4.3",
                  totalRatingsString: "10K+",
                  sla: {
                    deliveryTime: 32,
                    lastMileTravel: 6.6,
                    serviceability: "SERVICEABLE",
                    slaString: "32 mins",
                    lastMileTravelString: "6.6 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2023-11-16 00:00:00",
                    opened: true,
                  },
                  badges: {
                    textExtendedBadges: [
                      {
                        iconId: "guiltfree/GF_Logo_android_3x",
                        shortDescription: "options available",
                        fontColor: "#7E808C",
                      },
                    ],
                  },
                  isOpen: true,
                  type: "F",
                  badgesV2: {
                    entityBadges: {
                      imageBased: {},
                      textBased: {},
                      textExtendedBadges: {
                        badgeObject: [
                          {
                            attributes: {
                              description: "",
                              fontColor: "#7E808C",
                              iconId: "guiltfree/GF_Logo_android_3x",
                              shortDescription: "options available",
                            },
                          },
                        ],
                      },
                    },
                  },
                  aggregatedDiscountInfoV3: {
                    header: "10% OFF",
                    subHeader: "ABOVE ₹1500",
                    discountTag: "FLAT DEAL",
                  },
                  differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                      mediaType: "ADS_MEDIA_ENUM_IMAGE",
                      lottie: {},
                      video: {},
                    },
                  },
                  reviewsSummary: {},
                  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  restaurantOfferPresentationInfo: {},
                },
                analytics: {},
                cta: {
                  link: "https://www.swiggy.com/restaurants/samosa-party-koramangala-bangalore-74444",
                  type: "WEBLINK",
                },
              },
              {
                info: {
                  id: "408386",
                  name: "NOTO - Ice Creams & Desserts",
                  cloudinaryImageId: "544f9e6dce1efb7054e4ac5d98aba049",
                  locality: "Ejipura",
                  areaName: "Koramangla",
                  costForTwo: "₹250 for two",
                  cuisines: ["Ice Cream"],
                  avgRating: 4.4,
                  veg: true,
                  feeDetails: {
                    restaurantId: "408386",
                    fees: [
                      {
                        name: "BASE_DISTANCE",
                        fee: 6700,
                      },
                      {
                        name: "BASE_TIME",
                      },
                      {
                        name: "ANCILLARY_SURGE_FEE",
                      },
                    ],
                    totalFee: 6700,
                  },
                  parentId: "7158",
                  avgRatingString: "4.4",
                  totalRatingsString: "1K+",
                  sla: {
                    deliveryTime: 28,
                    lastMileTravel: 7.4,
                    serviceability: "SERVICEABLE",
                    slaString: "28 mins",
                    lastMileTravelString: "7.4 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2023-11-10 05:55:00",
                    opened: true,
                  },
                  badges: {
                    imageBadges: [
                      {
                        imageId: "v1695133679/badges/Pure_Veg111.png",
                        description: "pureveg",
                      },
                    ],
                    textExtendedBadges: [
                      {
                        iconId: "guiltfree/GF_Logo_android_3x",
                        shortDescription: "brand",
                        fontColor: "#7E808C",
                      },
                    ],
                  },
                  isOpen: true,
                  type: "F",
                  badgesV2: {
                    entityBadges: {
                      imageBased: {
                        badgeObject: [
                          {
                            attributes: {
                              description: "pureveg",
                              imageId: "v1695133679/badges/Pure_Veg111.png",
                            },
                          },
                        ],
                      },
                      textBased: {},
                      textExtendedBadges: {
                        badgeObject: [
                          {
                            attributes: {
                              description: "",
                              fontColor: "#7E808C",
                              iconId: "guiltfree/GF_Logo_android_3x",
                              shortDescription: "brand",
                            },
                          },
                        ],
                      },
                    },
                  },
                  aggregatedDiscountInfoV3: {
                    header: "50% OFF",
                    subHeader: "UPTO ₹100",
                  },
                  differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                      mediaType: "ADS_MEDIA_ENUM_IMAGE",
                      lottie: {},
                      video: {},
                    },
                  },
                  reviewsSummary: {},
                  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  restaurantOfferPresentationInfo: {},
                },
                analytics: {},
                cta: {
                  link: "https://www.swiggy.com/restaurants/noto-ice-creams-and-desserts-ejipura-koramangla-bangalore-408386",
                  type: "WEBLINK",
                },
              },
              {
                info: {
                  id: "403197",
                  name: "The Dessert Zone",
                  cloudinaryImageId: "c447c9ce7d0bbe78e46141e866236762",
                  locality: "Millars Road",
                  areaName: "Vasanth Nagar",
                  costForTwo: "₹200 for two",
                  cuisines: ["Bakery", "Desserts", "Ice Cream", "Beverages"],
                  avgRating: 3.6,
                  feeDetails: {
                    restaurantId: "403197",
                    fees: [
                      {
                        name: "BASE_DISTANCE",
                        fee: 3600,
                      },
                      {
                        name: "BASE_TIME",
                      },
                      {
                        name: "ANCILLARY_SURGE_FEE",
                      },
                    ],
                    totalFee: 3600,
                  },
                  parentId: "10414",
                  avgRatingString: "3.6",
                  totalRatingsString: "100+",
                  sla: {
                    deliveryTime: 31,
                    lastMileTravel: 3,
                    serviceability: "SERVICEABLE",
                    slaString: "31 mins",
                    lastMileTravelString: "3.0 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2023-11-16 00:00:00",
                    opened: true,
                  },
                  badges: {},
                  isOpen: true,
                  type: "F",
                  badgesV2: {
                    entityBadges: {
                      imageBased: {},
                      textBased: {},
                      textExtendedBadges: {},
                    },
                  },
                  aggregatedDiscountInfoV3: {
                    header: "50% OFF",
                    subHeader: "UPTO ₹100",
                  },
                  differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                      mediaType: "ADS_MEDIA_ENUM_IMAGE",
                      lottie: {},
                      video: {},
                    },
                  },
                  reviewsSummary: {},
                  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  restaurantOfferPresentationInfo: {},
                },
                analytics: {},
                cta: {
                  link: "https://www.swiggy.com/restaurants/the-dessert-zone-millars-road-vasanth-nagar-bangalore-403197",
                  type: "WEBLINK",
                },
              },
              {
                info: {
                  id: "409923",
                  name: "Kaati Zone Rolls & Wraps",
                  cloudinaryImageId: "cv0ebvdyhlxscaz5czpe",
                  locality: "Millars Road",
                  areaName: "Vasanth Nagar",
                  costForTwo: "₹150 for two",
                  cuisines: ["Fast Food", "Bengali", "Beverages", "Desserts"],
                  avgRating: 3.6,
                  feeDetails: {
                    restaurantId: "409923",
                    fees: [
                      {
                        name: "BASE_DISTANCE",
                        fee: 3600,
                      },
                      {
                        name: "BASE_TIME",
                      },
                      {
                        name: "ANCILLARY_SURGE_FEE",
                      },
                    ],
                    totalFee: 3600,
                  },
                  parentId: "248306",
                  avgRatingString: "3.6",
                  totalRatingsString: "100+",
                  sla: {
                    deliveryTime: 28,
                    lastMileTravel: 3,
                    serviceability: "SERVICEABLE",
                    slaString: "28 mins",
                    lastMileTravelString: "3.0 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2023-11-16 00:00:00",
                    opened: true,
                  },
                  badges: {
                    textExtendedBadges: [
                      {
                        iconId: "guiltfree/GF_Logo_android_3x",
                        shortDescription: "options available",
                        fontColor: "#7E808C",
                      },
                    ],
                  },
                  isOpen: true,
                  type: "F",
                  badgesV2: {
                    entityBadges: {
                      imageBased: {},
                      textBased: {},
                      textExtendedBadges: {
                        badgeObject: [
                          {
                            attributes: {
                              description: "",
                              fontColor: "#7E808C",
                              iconId: "guiltfree/GF_Logo_android_3x",
                              shortDescription: "options available",
                            },
                          },
                        ],
                      },
                    },
                  },
                  aggregatedDiscountInfoV3: {
                    header: "40% OFF",
                    subHeader: "UPTO ₹80",
                  },
                  differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                      mediaType: "ADS_MEDIA_ENUM_IMAGE",
                      lottie: {},
                      video: {},
                    },
                  },
                  reviewsSummary: {},
                  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  restaurantOfferPresentationInfo: {},
                },
                analytics: {},
                cta: {
                  link: "https://www.swiggy.com/restaurants/kaati-zone-rolls-and-wraps-millars-road-vasanth-nagar-bangalore-409923",
                  type: "WEBLINK",
                },
              },
              {
                info: {
                  id: "402714",
                  name: "Indiana Burgers",
                  cloudinaryImageId: "lflq8ulpskdypnl2gbak",
                  locality: "Millars Road",
                  areaName: "Vasanth Nagar",
                  costForTwo: "₹150 for two",
                  cuisines: [
                    "Burgers",
                    "American",
                    "Fast Food",
                    "Beverages",
                    "Desserts",
                  ],
                  avgRating: 3.7,
                  feeDetails: {
                    restaurantId: "402714",
                    fees: [
                      {
                        name: "BASE_DISTANCE",
                        fee: 3600,
                      },
                      {
                        name: "BASE_TIME",
                      },
                      {
                        name: "ANCILLARY_SURGE_FEE",
                      },
                    ],
                    totalFee: 3600,
                  },
                  parentId: "5714",
                  avgRatingString: "3.7",
                  totalRatingsString: "100+",
                  sla: {
                    deliveryTime: 27,
                    lastMileTravel: 3,
                    serviceability: "SERVICEABLE",
                    slaString: "27 mins",
                    lastMileTravelString: "3.0 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2023-11-16 00:00:00",
                    opened: true,
                  },
                  badges: {
                    textExtendedBadges: [
                      {
                        iconId: "guiltfree/GF_Logo_android_3x",
                        shortDescription: "options available",
                        fontColor: "#7E808C",
                      },
                    ],
                  },
                  isOpen: true,
                  type: "F",
                  badgesV2: {
                    entityBadges: {
                      imageBased: {},
                      textBased: {},
                      textExtendedBadges: {
                        badgeObject: [
                          {
                            attributes: {
                              description: "",
                              fontColor: "#7E808C",
                              iconId: "guiltfree/GF_Logo_android_3x",
                              shortDescription: "options available",
                            },
                          },
                        ],
                      },
                    },
                  },
                  aggregatedDiscountInfoV3: {
                    header: "40% OFF",
                    subHeader: "UPTO ₹80",
                  },
                  differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                      mediaType: "ADS_MEDIA_ENUM_IMAGE",
                      lottie: {},
                      video: {},
                    },
                  },
                  reviewsSummary: {},
                  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  restaurantOfferPresentationInfo: {},
                },
                analytics: {},
                cta: {
                  link: "https://www.swiggy.com/restaurants/indiana-burgers-millars-road-vasanth-nagar-bangalore-402714",
                  type: "WEBLINK",
                },
              },
              {
                info: {
                  id: "402710",
                  name: "WarmOven Cake & Desserts",
                  cloudinaryImageId: "e938fb5f416cc2c28b4b519cf27b04cc",
                  locality: "Millars Road",
                  areaName: "Vasanth Nagar",
                  costForTwo: "₹200 for two",
                  cuisines: ["Bakery", "Desserts", "Ice Cream", "Beverages"],
                  avgRating: 3.8,
                  feeDetails: {
                    restaurantId: "402710",
                    fees: [
                      {
                        name: "BASE_DISTANCE",
                        fee: 4300,
                      },
                      {
                        name: "BASE_TIME",
                      },
                      {
                        name: "ANCILLARY_SURGE_FEE",
                      },
                    ],
                    totalFee: 4300,
                  },
                  parentId: "9696",
                  avgRatingString: "3.8",
                  totalRatingsString: "500+",
                  sla: {
                    deliveryTime: 33,
                    lastMileTravel: 3,
                    serviceability: "SERVICEABLE",
                    slaString: "33 mins",
                    lastMileTravelString: "3.0 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2023-11-16 00:00:00",
                    opened: true,
                  },
                  badges: {},
                  isOpen: true,
                  type: "F",
                  badgesV2: {
                    entityBadges: {
                      imageBased: {},
                      textBased: {},
                      textExtendedBadges: {},
                    },
                  },
                  aggregatedDiscountInfoV3: {
                    header: "50% OFF",
                    subHeader: "UPTO ₹100",
                  },
                  differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                      mediaType: "ADS_MEDIA_ENUM_IMAGE",
                      lottie: {},
                      video: {},
                    },
                  },
                  reviewsSummary: {},
                  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  restaurantOfferPresentationInfo: {},
                },
                analytics: {},
                cta: {
                  link: "https://www.swiggy.com/restaurants/warmoven-cake-and-desserts-millars-road-vasanth-nagar-bangalore-402710",
                  type: "WEBLINK",
                },
              },
              {
                info: {
                  id: "69274",
                  name: "Chai Point",
                  cloudinaryImageId: "zoc6jrwby69bpa8qzcxc",
                  locality: "Ashok Nagar",
                  areaName: "Church Street",
                  costForTwo: "₹150 for two",
                  cuisines: [
                    "Bakery",
                    "Beverages",
                    "Maharashtrian",
                    "Snacks",
                    "Street Food",
                    "South Indian",
                    "Punjabi",
                    "Chaat",
                    "Indian",
                    "American",
                    "North Indian",
                    "Fast Food",
                    "Desserts",
                    "Cafe",
                    "Healthy Food",
                    "Home Food",
                  ],
                  avgRating: 4.5,
                  feeDetails: {
                    restaurantId: "69274",
                    fees: [
                      {
                        name: "BASE_DISTANCE",
                        fee: 3000,
                      },
                      {
                        name: "BASE_TIME",
                      },
                      {
                        name: "ANCILLARY_SURGE_FEE",
                      },
                    ],
                    totalFee: 3000,
                  },
                  parentId: "1607",
                  avgRatingString: "4.5",
                  totalRatingsString: "5K+",
                  sla: {
                    deliveryTime: 30,
                    lastMileTravel: 1.8,
                    serviceability: "SERVICEABLE",
                    slaString: "30 mins",
                    lastMileTravelString: "1.8 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2023-11-09 23:00:00",
                    opened: true,
                  },
                  badges: {
                    textExtendedBadges: [
                      {
                        iconId: "guiltfree/GF_Logo_android_3x",
                        shortDescription: "options available",
                        fontColor: "#7E808C",
                      },
                    ],
                  },
                  isOpen: true,
                  type: "F",
                  badgesV2: {
                    entityBadges: {
                      imageBased: {},
                      textBased: {},
                      textExtendedBadges: {
                        badgeObject: [
                          {
                            attributes: {
                              description: "",
                              fontColor: "#7E808C",
                              iconId: "guiltfree/GF_Logo_android_3x",
                              shortDescription: "options available",
                            },
                          },
                        ],
                      },
                    },
                  },
                  aggregatedDiscountInfoV3: {
                    header: "60% OFF",
                    subHeader: "UPTO ₹120",
                  },
                  differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                      mediaType: "ADS_MEDIA_ENUM_IMAGE",
                      lottie: {},
                      video: {},
                    },
                  },
                  reviewsSummary: {},
                  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  restaurantOfferPresentationInfo: {},
                },
                analytics: {},
                cta: {
                  link: "https://www.swiggy.com/restaurants/chai-point-ashok-nagar-church-street-bangalore-69274",
                  type: "WEBLINK",
                },
              },
              {
                info: {
                  id: "272031",
                  name: "Baskin Robbins",
                  cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
                  locality: "5th Block",
                  areaName: "Koramangala",
                  costForTwo: "₹150 for two",
                  cuisines: ["Desserts"],
                  avgRating: 4.3,
                  veg: true,
                  feeDetails: {
                    restaurantId: "272031",
                    fees: [
                      {
                        name: "BASE_DISTANCE",
                        fee: 6100,
                      },
                      {
                        name: "BASE_TIME",
                      },
                      {
                        name: "ANCILLARY_SURGE_FEE",
                      },
                    ],
                    totalFee: 6100,
                  },
                  parentId: "5588",
                  avgRatingString: "4.3",
                  totalRatingsString: "100+",
                  sla: {
                    deliveryTime: 25,
                    lastMileTravel: 6.6,
                    serviceability: "SERVICEABLE",
                    slaString: "25 mins",
                    lastMileTravelString: "6.6 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2023-11-16 00:00:00",
                    opened: true,
                  },
                  badges: {},
                  isOpen: true,
                  type: "F",
                  badgesV2: {
                    entityBadges: {
                      imageBased: {},
                      textBased: {},
                      textExtendedBadges: {},
                    },
                  },
                  aggregatedDiscountInfoV3: {
                    header: "10% OFF",
                    subHeader: "ABOVE ₹1000",
                    discountTag: "FLAT DEAL",
                  },
                  differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                      mediaType: "ADS_MEDIA_ENUM_IMAGE",
                      lottie: {},
                      video: {},
                    },
                  },
                  reviewsSummary: {},
                  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  restaurantOfferPresentationInfo: {},
                },
                analytics: {},
                cta: {
                  link: "https://www.swiggy.com/restaurants/baskin-robbins-5th-block-koramangala-bangalore-272031",
                  type: "WEBLINK",
                },
              },
              {
                info: {
                  id: "381",
                  name: "Adiga's",
                  cloudinaryImageId: "an3rsobpbnvgtyziwtvx",
                  locality: "7th Sector",
                  areaName: "HSR Layout",
                  costForTwo: "₹200 for two",
                  cuisines: [
                    "South Indian",
                    "North Indian",
                    "Chinese",
                    "Thalis",
                    "Juices",
                    "Desserts",
                  ],
                  avgRating: 4.3,
                  veg: true,
                  feeDetails: {
                    restaurantId: "381",
                    fees: [
                      {
                        name: "BASE_DISTANCE",
                        fee: 8000,
                      },
                      {
                        name: "BASE_TIME",
                      },
                      {
                        name: "ANCILLARY_SURGE_FEE",
                      },
                    ],
                    totalFee: 8000,
                  },
                  parentId: "953",
                  avgRatingString: "4.3",
                  totalRatingsString: "10K+",
                  sla: {
                    deliveryTime: 33,
                    lastMileTravel: 9.8,
                    serviceability: "SERVICEABLE",
                    slaString: "33 mins",
                    lastMileTravelString: "9.8 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2023-11-09 23:00:00",
                    opened: true,
                  },
                  badges: {
                    imageBadges: [
                      {
                        imageId: "v1695133679/badges/Pure_Veg111.png",
                        description: "pureveg",
                      },
                    ],
                    textExtendedBadges: [
                      {
                        iconId: "guiltfree/GF_Logo_android_3x",
                        shortDescription: "options available",
                        fontColor: "#7E808C",
                      },
                    ],
                  },
                  isOpen: true,
                  type: "F",
                  badgesV2: {
                    entityBadges: {
                      imageBased: {
                        badgeObject: [
                          {
                            attributes: {
                              description: "pureveg",
                              imageId: "v1695133679/badges/Pure_Veg111.png",
                            },
                          },
                        ],
                      },
                      textBased: {},
                      textExtendedBadges: {
                        badgeObject: [
                          {
                            attributes: {
                              description: "",
                              fontColor: "#7E808C",
                              iconId: "guiltfree/GF_Logo_android_3x",
                              shortDescription: "options available",
                            },
                          },
                        ],
                      },
                    },
                  },
                  aggregatedDiscountInfoV3: {
                    header: "₹125 OFF",
                    subHeader: "ABOVE ₹349",
                    discountTag: "FLAT DEAL",
                  },
                  differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                      mediaType: "ADS_MEDIA_ENUM_IMAGE",
                      lottie: {},
                      video: {},
                    },
                  },
                  reviewsSummary: {},
                  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  restaurantOfferPresentationInfo: {},
                },
                analytics: {},
                cta: {
                  link: "https://www.swiggy.com/restaurants/adigas-7th-sector-hsr-layout-bangalore-381",
                  type: "WEBLINK",
                },
              },
              {
                info: {
                  id: "1531",
                  name: "A2B - Adyar Ananda Bhavan",
                  cloudinaryImageId: "jaeutqjn5liojalu4us6",
                  locality: "Indiranagar",
                  areaName: "Indiranagar",
                  costForTwo: "₹300 for two",
                  cuisines: [
                    "South Indian",
                    "North Indian",
                    "Sweets",
                    "Chinese",
                  ],
                  avgRating: 4.4,
                  veg: true,
                  feeDetails: {
                    restaurantId: "1531",
                    fees: [
                      {
                        name: "BASE_DISTANCE",
                        fee: 5400,
                      },
                      {
                        name: "BASE_TIME",
                      },
                      {
                        name: "ANCILLARY_SURGE_FEE",
                      },
                    ],
                    totalFee: 5400,
                  },
                  parentId: "22",
                  avgRatingString: "4.4",
                  totalRatingsString: "10K+",
                  sla: {
                    deliveryTime: 48,
                    lastMileTravel: 6.3,
                    serviceability: "SERVICEABLE",
                    slaString: "48 mins",
                    lastMileTravelString: "6.3 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2023-11-09 22:30:00",
                    opened: true,
                  },
                  badges: {
                    imageBadges: [
                      {
                        imageId: "v1695133679/badges/Pure_Veg111.png",
                        description: "pureveg",
                      },
                    ],
                  },
                  isOpen: true,
                  type: "F",
                  badgesV2: {
                    entityBadges: {
                      imageBased: {
                        badgeObject: [
                          {
                            attributes: {
                              description: "pureveg",
                              imageId: "v1695133679/badges/Pure_Veg111.png",
                            },
                          },
                        ],
                      },
                      textBased: {},
                      textExtendedBadges: {},
                    },
                  },
                  aggregatedDiscountInfoV3: {
                    header: "₹100 OFF",
                    subHeader: "ABOVE ₹499",
                    discountTag: "FLAT DEAL",
                  },
                  differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                      mediaType: "ADS_MEDIA_ENUM_IMAGE",
                      lottie: {},
                      video: {},
                    },
                  },
                  reviewsSummary: {},
                  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  restaurantOfferPresentationInfo: {},
                },
                analytics: {},
                cta: {
                  link: "https://www.swiggy.com/restaurants/a2b-adyar-ananda-bhavan-indiranagar-bangalore-1531",
                  type: "WEBLINK",
                },
              },
              {
                info: {
                  id: "307291",
                  name: "Samosa Singh",
                  cloudinaryImageId: "77baefd8a5e319c828b4d7dff7260644",
                  locality: "3rd Stage",
                  areaName: "Banashankari",
                  costForTwo: "₹150 for two",
                  cuisines: ["Snacks", "North Indian", "Desserts", "Beverages"],
                  avgRating: 4.1,
                  veg: true,
                  feeDetails: {
                    restaurantId: "307291",
                    fees: [
                      {
                        name: "BASE_DISTANCE",
                        fee: 7000,
                      },
                      {
                        name: "BASE_TIME",
                      },
                      {
                        name: "ANCILLARY_SURGE_FEE",
                      },
                    ],
                    totalFee: 7000,
                  },
                  parentId: "5639",
                  avgRatingString: "4.1",
                  totalRatingsString: "1K+",
                  sla: {
                    deliveryTime: 50,
                    lastMileTravel: 8.9,
                    serviceability: "SERVICEABLE",
                    slaString: "50 mins",
                    lastMileTravelString: "8.9 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2023-11-16 00:00:00",
                    opened: true,
                  },
                  badges: {
                    imageBadges: [
                      {
                        imageId: "v1695133679/badges/Pure_Veg111.png",
                        description: "pureveg",
                      },
                    ],
                  },
                  isOpen: true,
                  type: "F",
                  badgesV2: {
                    entityBadges: {
                      imageBased: {
                        badgeObject: [
                          {
                            attributes: {
                              description: "pureveg",
                              imageId: "v1695133679/badges/Pure_Veg111.png",
                            },
                          },
                        ],
                      },
                      textBased: {},
                      textExtendedBadges: {},
                    },
                  },
                  aggregatedDiscountInfoV3: {
                    header: "15% OFF",
                    subHeader: "ABOVE ₹600",
                    discountTag: "FLAT DEAL",
                  },
                  differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                      mediaType: "ADS_MEDIA_ENUM_IMAGE",
                      lottie: {},
                      video: {},
                    },
                  },
                  reviewsSummary: {},
                  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  restaurantOfferPresentationInfo: {},
                },
                analytics: {},
                cta: {
                  link: "https://www.swiggy.com/restaurants/samosa-singh-3rd-stage-banashankari-bangalore-307291",
                  type: "WEBLINK",
                },
              },
              {
                info: {
                  id: "2998",
                  name: "Rolls On Wheels",
                  cloudinaryImageId: "ae8f2e6bfc382c556f8a8551f044bd71",
                  locality: "RT Nagar",
                  areaName: "RT Nagar",
                  costForTwo: "₹300 for two",
                  cuisines: [
                    "Fast Food",
                    "North Indian",
                    "Snacks",
                    "Bengali",
                    "Kebabs",
                    "Beverages",
                    "Healthy Food",
                    "Chinese",
                  ],
                  avgRating: 4.1,
                  feeDetails: {
                    restaurantId: "2998",
                    fees: [
                      {
                        name: "BASE_DISTANCE",
                        fee: 6000,
                      },
                      {
                        name: "BASE_TIME",
                      },
                      {
                        name: "ANCILLARY_SURGE_FEE",
                      },
                    ],
                    totalFee: 6000,
                  },
                  parentId: "784",
                  avgRatingString: "4.1",
                  totalRatingsString: "10K+",
                  sla: {
                    deliveryTime: 40,
                    lastMileTravel: 7.5,
                    serviceability: "SERVICEABLE",
                    slaString: "40 mins",
                    lastMileTravelString: "7.5 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2023-11-09 08:00:00",
                    opened: true,
                  },
                  badges: {
                    textExtendedBadges: [
                      {
                        iconId: "guiltfree/GF_Logo_android_3x",
                        shortDescription: "options available",
                        fontColor: "#7E808C",
                      },
                    ],
                  },
                  isOpen: true,
                  type: "F",
                  badgesV2: {
                    entityBadges: {
                      imageBased: {},
                      textBased: {},
                      textExtendedBadges: {
                        badgeObject: [
                          {
                            attributes: {
                              description: "",
                              fontColor: "#7E808C",
                              iconId: "guiltfree/GF_Logo_android_3x",
                              shortDescription: "options available",
                            },
                          },
                        ],
                      },
                    },
                  },
                  aggregatedDiscountInfoV3: {
                    header: "₹125 OFF",
                    subHeader: "ABOVE ₹399",
                    discountTag: "FLAT DEAL",
                  },
                  differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                      mediaType: "ADS_MEDIA_ENUM_IMAGE",
                      lottie: {},
                      video: {},
                    },
                  },
                  reviewsSummary: {},
                  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  restaurantOfferPresentationInfo: {},
                },
                analytics: {},
                cta: {
                  link: "https://www.swiggy.com/restaurants/rolls-on-wheels-rt-nagar-bangalore-2998",
                  type: "WEBLINK",
                },
              },
              {
                info: {
                  id: "7069",
                  name: "Cafe Coffee Day",
                  cloudinaryImageId: "b70c7d23d197251b7b315b7e4d8173ae",
                  locality: "2nd stage",
                  areaName: "Indiranagar",
                  costForTwo: "₹400 for two",
                  cuisines: [
                    "Beverages",
                    "Cafe",
                    "Snacks",
                    "Desserts",
                    "Burgers",
                    "Ice Cream",
                    "Bakery",
                    "Fast Food",
                  ],
                  avgRating: 4.2,
                  feeDetails: {
                    restaurantId: "7069",
                    fees: [
                      {
                        name: "BASE_DISTANCE",
                        fee: 6000,
                      },
                      {
                        name: "BASE_TIME",
                      },
                      {
                        name: "ANCILLARY_SURGE_FEE",
                      },
                    ],
                    totalFee: 6000,
                  },
                  parentId: "1",
                  avgRatingString: "4.2",
                  totalRatingsString: "5K+",
                  sla: {
                    deliveryTime: 44,
                    lastMileTravel: 7.1,
                    serviceability: "SERVICEABLE",
                    slaString: "44 mins",
                    lastMileTravelString: "7.1 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2023-11-16 00:00:00",
                    opened: true,
                  },
                  badges: {
                    textExtendedBadges: [
                      {
                        iconId: "guiltfree/GF_Logo_android_3x",
                        shortDescription: "options available",
                        fontColor: "#7E808C",
                      },
                    ],
                  },
                  isOpen: true,
                  type: "F",
                  badgesV2: {
                    entityBadges: {
                      imageBased: {},
                      textBased: {},
                      textExtendedBadges: {
                        badgeObject: [
                          {
                            attributes: {
                              description: "",
                              fontColor: "#7E808C",
                              iconId: "guiltfree/GF_Logo_android_3x",
                              shortDescription: "options available",
                            },
                          },
                        ],
                      },
                    },
                  },
                  aggregatedDiscountInfoV3: {
                    header: "₹150 OFF",
                    subHeader: "ABOVE ₹699",
                    discountTag: "FLAT DEAL",
                  },
                  differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                      mediaType: "ADS_MEDIA_ENUM_IMAGE",
                      lottie: {},
                      video: {},
                    },
                  },
                  reviewsSummary: {},
                  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  restaurantOfferPresentationInfo: {},
                },
                analytics: {},
                cta: {
                  link: "https://www.swiggy.com/restaurants/cafe-coffee-day-2nd-stage-indiranagar-bangalore-7069",
                  type: "WEBLINK",
                },
              },
            ],
            theme: "Restaurant_Group_WebView_SEO_PB_Theme",
            widgetType: "WIDGET_TYPE_POPULAR_BRANDS",
            style: {
              width: {
                type: "TYPE_RELATIVE",
                value: 0.41111112,
                reference: "RELATIVE_DIMENSION_REFERENCE_DEVICE_WIDTH",
              },
              height: {
                type: "TYPE_RELATIVE",
                value: 0.7027027,
                reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
              },
              layoutAlignment: "LAYOUT_ALIGNMENT_LEFT",
            },
            collectionId: "84124",
          },
        },
      },
    },
  },
];

const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = props.restaurant;
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

const Body = () => {
  const restaurants = (resList[0]['card'])['card']['gridElements']['infoWithStyle']['restaurants'];
  console.log(restaurants)
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard restaurant={restaurant['info']} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
