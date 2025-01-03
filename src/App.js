import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import FoodDetail from "./pages/FoodDetail";
import PlaceDetail from "./pages/PlaceDetail";
import List from "./pages/List";
import StreetFood from "./components/list/StreetFood";
import CafeShop from "./components/list/CafeShop";
import Pagoda from "./components/list/Pagoda";
import Restaurants from "./components/list/Restaurant";
import Food from "./pages/Food";
import Place from "./pages/Place";
import "../src/App.css";
import Error from "./pages/Error";
import Nature from "./components/list/Nature";
import Beach from "./components/list/Beach";
import Street from "./pages/Street";
import Cafe from "./pages/Cafe";
import Restaurant from "./pages/Restaurant";
import Pagodas from "./pages/Pagoda";
import Natures from "./pages/Nature";
import Beaches from "./pages/Beach";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* for user */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/list/food" element={<Food />} />
        <Route path="/list/street" element={<Street />} />
        <Route path="/list/cafe" element={<Cafe />} />
        <Route path="/list/restaurant" element={<Restaurant />} />

        <Route path="/list/place" element={<Place />} />
        <Route path="/list/place/pagoda" element={<Pagodas />} />
        <Route path="/list/place/nature" element={<Natures />} />
        <Route path="/list/place/beach" element={<Beaches />} />

        <Route path="/street_food" element={<StreetFood />} />
        <Route path="/cafe_shop" element={<CafeShop />} />
        <Route path="/pagoda" element={<Pagoda />} />
        <Route path="/restaurant" element={<Restaurants />} />
        <Route path="/nature" element={<Nature />} />
        <Route path="/beach" element={<Beach />} />

        <Route path="/food_detail/:id" element={<FoodDetail />} />
        <Route path="/place_detail/:id" element={<PlaceDetail />} />
        <Route path="/search" element={<Search />} />
        {/* for user */}

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
