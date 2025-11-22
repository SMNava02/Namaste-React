export const mockData = {
  statusCode: 0,
  data: {
    statusMessage: "done successfully",
    cards: [
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "10576",
              name: "Pizza Hut",
              city: "Bangalore",
              slugs: {
                restaurant: "pizza-hut-6th-block-koramangala",
                city: "bangalore",
              },
              uniqueId: "e51e6528-4859-48c8-8fed-e84c17dc2d76",
              cloudinaryImageId:
                "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/bb48c990-87ae-4884-83d8-03d73f3cd2a7_10576.JPG",
              locality: "6th Block",
              areaName: "Koramangala",
              costForTwo: "35000",
              costForTwoMessage: "₹350 for two",
              cuisines: ["Pizzas"],
              avgRating: 4.2,
              feeDetails: {
                restaurantId: "10576",
                fees: [{}],
              },
              parentId: "721",
              avgRatingString: "4.2",
              totalRatingsString: "22K+ ratings",
            },
            analytics: {},
          },
          relevance: {
            type: "RELEVANCE_TYPE_CHECK_ORDERABILITY_ON_ITEM_ADD",
            sectionId: "POP_UP_CROUTON_MENU",
          },
        },
      },
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                {
                  card: {
                    card: {
                      itemCards: [
                        {
                          card: {
                            info: {
                              id: "111819613",
                              name: "Margherita",
                              category: "Veg Pizza",
                              defaultPrice: 16900,
                            },
                          },
                        },
                        {
                          card: {
                            info: {
                              id: "47542941",
                              name: "Veggie Feast",
                              category: "Veg Pizza",
                              defaultPrice: 25900,
                            },
                          },
                        },
                      ],
                    },
                  },
                },
              ],
            },
          },
        },
      },
    ],
  },
};
