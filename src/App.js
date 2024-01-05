import { StoreAdress } from "./component/main/storeAdress/StoreAdress";
import { HeaderCart } from "./component/main/headerCart/HeaderCart";
import Header from "./component/header/Header";
import { DiscountProduct } from "./component/main/discountProduct/DiscountProduct";
import { SaleCart } from "./component/main/saleCart/SaleCart";
import { Categories } from "./component/main/categories/Сategories";
import { Footer } from "./component/footer/Footer";
import { NewsPage } from "./component/main/news/NewsPage";

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderCart />
      <Categories />
      <SaleCart />
      <NewsPage />
      <DiscountProduct />
      <StoreAdress />
      <Footer />
    </div>
  );
}

export default App;
