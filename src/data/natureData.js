import HFU_img1 from "./images/nature/Heaven For You Garden/1.jpg";
import HFU_img2 from "./images/nature/Heaven For You Garden/2.jpg";
import HFU_img3 from "./images/nature/Heaven For You Garden/3.jpg";

import MBDL_img1 from "./images/nature/Mahar Bandoola Park/photo1.jpg";
import MBDL_img2 from "./images/nature/Mahar Bandoola Park/photo2.jpg";
import MBDL_img3 from "./images/nature/Mahar Bandoola Park/photo3.jpg";

import KYT_img1 from "./images/nature/Kan Yoe Tann Water Boom/photo1.jpg";
import KYT_img2 from "./images/nature/Kan Yoe Tann Water Boom/photo2.jpg";
import KYT_img3 from "./images/nature/Kan Yoe Tann Water Boom/photo3.jpg";

import SL_img1 from "./images/nature/Sea and Lake Park/photo1.jpg";
import SL_img2 from "./images/nature/Sea and Lake Park/photo2.jpg";
import SL_img3 from "./images/nature/Sea and Lake Park/photo3.jpg";

import RL_img1 from "./images/nature/Royal Lake Park/photo1.jpg";
import RL_img2 from "./images/nature/Royal Lake Park/photo2.jpg";
import RL_img3 from "./images/nature/Royal Lake Park/photo3.jpg";

import KTS_img1 from "./images/nature/Kan Thone Sint Garden/photo1.jpg";
import KTS_img2 from "./images/nature/Kan Thone Sint Garden/photo2.jpg";
import KTS_img3 from "./images/nature/Kan Thone Sint Garden/photo3.jpg";

let id = 300;

const natureData = [
  {
    id: id++,
    title: "Heaven for you",
    sub_title: "Park and Garden",
    bio: "Heaven for you is a ",
    date: "19 Decemober, 2024",
    content: "test",
    picture1: HFU_img1,
    picture2: HFU_img2,
    picture3: HFU_img3,
    map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15279.480824390132!2d94.76400167873761!3d16.783131900000008!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30bfeb8b4c0fd721%3A0x5f83d7e1ead91866!2sHeaven%20for%20you!5e0!3m2!1sen!2smm!4v1735187359761!5m2!1sen!2smm",
    location: " Kinmalin Kyun Ward, Pathein",
    email: "-",
    hour: "9am to 5pm",
    recent: false,
    type: "place",
    collection: "nature",
    rating: false,
  },
  {
    id: id++,
    title: "Mahar Bandoola Park",
    sub_title: "Park and Garden",
    bio: "Mahar Bandoola Park is a relaxing park in the city. It is located beside the Mahar Bandoola Road, Pathein. ",
    date: "19 Decemober, 2024",
    content:
      "It is a great place to relax in downtown. The entrance fee is free and a large area of the park makes people feel safe and sound. It has so many gardens and chair to sit and talk. It has many large trees and so quiet and peaceful. It also has so many decorations and enjoyable places to relax. We can park our vehicles safe and sound. It is a beautiful and quiet to relex or study in downtown.",
    picture1: MBDL_img1,
    picture2: MBDL_img2,
    picture3: MBDL_img3,
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4542.333697089382!2d94.75438942569171!3d16.794968524590562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30bfea456f5dbdbb%3A0xcd7987cb4882dab1!2sMaha%20Bandoola%20Park%2C%20Kozu%20Rd%2C%20Pathein!5e0!3m2!1sen!2smm!4v1735188118434!5m2!1sen!2smm",
    phone: "-",
    location: "Mahar Bandoola road, Pathein",
    email: "-",
    hour: "12am-6pm",
    recent: false,
    type: "place",
    collection: "nature",
    rating: false,
  },

  {
    id: id++,
    title: "Kan Yoe Tann",
    sub_title: "Water Boom and Resorts",
    bio: "A nice place for children and adults to have fun. It is located beside the Ngwe Saung Road, Pathein.",
    date: "19 Decemober, 2024",
    content:
      "It is one of natural resorts on countryside. The entrance fee is 2000mmk and it has restaurants, swimming pool, waterboom, resorts and singing rooms. It also has so many decorations and natural large trees can be found. The entance fee for children waterboom is 10000mmk and swimming pool for adults is 8000mmk.",
    picture1: KYT_img1,
    picture2: KYT_img2,
    picture3: KYT_img3,
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d488611.0688996606!2d94.27692900625!3d16.911772381377055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30bfc1f02ecda8c3%3A0x5aaab80a504bf1a7!2sKanyoetan%20Waterboom%20%26%20Resort!5e0!3m2!1sen!2smm!4v1735439300577!5m2!1sen!2smm",
    phone: "09771651020",
    location: "Hle Kyaw, Kone street, Pathein",
    email: "-",
    hour: "8am",
    recent: false,
    type: "place",
    collection: "nature",
    rating: false,
  },
  {
    id: id++,
    title: "Sea and Lake Garden",
    sub_title: "Park and Resorts",
    bio: "A combination of sea and land with large area in Shwe Thaung Yan, Sea and Lake Garden is one and only resort that provides great foods and breathtaking views.Sea and lake garden spans 80 acres with a glistening blue lake at the heart of it all. The garden boasts a variety of tropical trees bearing seasonal fruits and flowers.",
    date: "19 Decemober, 2024",
    content:
      "Sea and Lake Garden is a must-go place when we travel to Chaung Tha Beach. It has a large area of garden and park to relax. It also has resorts, restaurants and pools. We can do a lot of activities like fishing, cycling, swimming, zipriding, kayaking, sailing in the lake, waterboom, wall climbing and golf. The entrance fee is 2000mmk per person and we can park our vehicles safe and sound.",
    picture1: SL_img1,
    picture2: SL_img2,
    picture3: SL_img3,
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3814.4352069338133!2d94.4540033!3d17.0513519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30bfb390413ff151%3A0x3405ce2513bcd292!2sSea%20%26%20Lake%20Garden!5e0!3m2!1sen!2smm!4v1735439230211!5m2!1sen!2smm",
    phone: "09881777944",
    location: "Shwe Thaung Yan, Chaung Tha",
    email: "-",
    hour: "8am",
    recent: false,
    type: "place",
    collection: "nature",
    rating: false,
  },

  {
    id: id++,
    title: "Royal Lake",
    sub_title: "Amusement Park",
    bio: "Royal Lake is a big amusement park in downtown. It is located beside the Mahar Bandoola Road. ",
    date: "19 Decemober, 2024",
    content:
      "Royal Lake is well-known place in Pathein. It has many decorations and relaxing places. It has restaurants, parks, garden, lakes and heart-shaped island. The significant one is the heart-shaped island as shown in figure. The entance fee is 3000mmk per person. We can park vahicles safe and sound.",
    picture1: RL_img1,
    picture2: RL_img2,
    picture3: RL_img3,
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3389.2114299301875!2d94.75184855086637!3d16.795903901091975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30bfeb00119ae26b%3A0x482f2b390d4b9f4c!2sKan%20Thone%20Sint%20Park!5e0!3m2!1sen!2smm!4v1735441226341!5m2!1sen!2smmhttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.6071340841518!2d94.74684948885496!3d16.796210400000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30bfea43037fad8b%3A0x881bdc847b26c20!2sRoyal%20Lake%20Amusement%20Park!5e0!3m2!1sen!2smm!4v1735441422790!5m2!1sen!2smm",
    phone: "09427868872",
    location: "QQW2+FGQ, Pathein",
    email: "-",
    hour: "8am-10pm",
    recent: false,
    type: "place",
    collection: "nature",
    rating: false,
  },
  {
    id: id++,
    title: "Kan Thone Sint Park",
    sub_title: "Park and Garden",
    bio: "Kan Thone Sint Park a new park in Pathein. It is located beside the Mahar Bandoola Road. ",
    date: "31 Decemober, 2024",
    content:
      "Kan Thone Sint Park is a upcoming famous park in the town. It is relaxing for uptown people and beautiful gardens make people attractive.The night view is also breathtaking.",
    picture1: KTS_img1,
    picture2: KTS_img2,
    picture3: KTS_img3,
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3389.2114299301875!2d94.75184855086637!3d16.795903901091975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30bfeb00119ae26b%3A0x482f2b390d4b9f4c!2sKan%20Thone%20Sint%20Park!5e0!3m2!1sen!2smm!4v1735441226341!5m2!1sen!2smm",
    phone: "09427868872",
    location: " Maha Bandoola Rd, Pathein",
    email: "-",
    hour: "7am-7pm",
    recent: true,
    type: "place",
    collection: "nature",
    rating: false,
  },
];

//items - 6

export default natureData;
