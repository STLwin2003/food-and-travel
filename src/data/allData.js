import image_1 from "./images/food-4k-b6ytxiu9nhr4w4p7.jpg";

import street from "./streetFood";
import beachData from "./beachData";
import natureData from "./natureData";
import cafeData from "./cafeData";
import restauarant from "./restaurantData";
import pagodaData from "./pagodaData";
var id = 0;
//type => food and place
//collection => street,cafe,pagoda,restauarant,beach,charity
const data = [];

console.log(id);

const allData = data.concat(
  street,
  beachData,
  natureData,
  cafeData,
  restauarant,
  pagodaData
);
export default allData;
