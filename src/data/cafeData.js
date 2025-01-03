import V_img1 from "./images/cafe/Vikent/1.jpg";
import V_img2 from "./images/cafe/Vikent/2.jpg";
import V_img3 from "./images/cafe/Vikent/3.jpg";

import S_img1 from "./images/cafe/Swan/12.jpg";
import S_img2 from "./images/cafe/Swan/11.jpg";
import S_img3 from "./images/cafe/Swan/13.jpg";

let id = 400;

const cafeData = [
  {
    id: id++,
    title: "Vikent Cafe",
    sub_title: "Cafe and Food",
    bio: "Coffee, non-coffee and good Korean food shop is the place where most of the teenagers gather",
    date: "28 December, 2024",
    content:
      "You can also use wifi as you like while waiting for the food you ordered, you can read a book, and for those who like to take pictures, this is a good shop to take beautiful pictures. The egg roll and seaweed rice roll are very good and the price is only around 4000 kyats.As for the food, it is a must-go shop in Pathein because of the quality and cleanliness of the food.",
    picture1: V_img1,
    picture2: V_img2,
    picture3: V_img3,
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3407.005824600079!2d94.7532389745421!3d16.785354719870472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30bfebe1298c5f39%3A0xedd26f622d079af4!2sVIKENT%20Caf%C3%A9!5e1!3m2!1smy!2smm!4v1735386291160!5m2!1smy!2smm",
    phone: "09977700087",
    location: "L-36 Aung Si Street,Mya Kyun Thar Housing,Pathein",
    email: "-",
    hour: "9:30AM-7:00PM(closed on Tuesdays)",
    recent: false,
    type: "food",
    collection: "cafe",
    rating: true,
  },
  {
    id: id++,
    title: "Swan Cafe",
    sub_title: "Cafe and Food",
    bio: "Swan Cafe is a chilling place for young and adult. It is located in No 18 Yoe Dayar Gone Road, Pathein.",
    date: "28 December, 2024",
    content:
      "There are lots of menu options in Swan Cafe. Variety Choices of different coffee, hot or cold, is a interesting fact which is unique with others. We can also try sandwich, burger and juice drinks. It is so peaceful and quiet so that we can read books, use laptop, date the love one and take small talks.",
    picture1: S_img1,
    picture2: S_img2,
    picture3: S_img3,
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15279.003128135806!2d94.71969008445737!3d16.78907023686196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30bfeb0061409c6d%3A0xf7e2e251b00833ca!2sSwan%20Coffee%20Shop!5e0!3m2!1sen!2smm!4v1735630281193!5m2!1sen!2smm",
    phone: "09791212021",
    location: "No 18 Yoe Dayar Gone Road, Pathein",
    email: "-",
    hour: "8:30AM-8:30PM",
    recent: true,
    type: "food",
    collection: "cafe",
    rating: false,
  },
];

console.log(id);

export default cafeData;
