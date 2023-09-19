import { Route, Routes } from "react-router-dom";
import CardBook from "./components/card";
import Header from "./components/header";
import Basket from "./pages/basket";
import FavoriteCard from "./pages/favorite";
import Footer from "./components/footer";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<CardBook />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/favorit" element={<FavoriteCard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
