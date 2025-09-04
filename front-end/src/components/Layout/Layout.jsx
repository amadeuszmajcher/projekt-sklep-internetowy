import { Footer } from "../Footer/Footer";
import { MainMenu } from "../MainMenu/MainMenu";
import { Logo } from "../Logo/Logo";
import { CurrencySelector } from "../CurrencySelector/CurrencySelector";
import { IconMenu } from "../IconMenu/IconMenu";
import { TopBar } from "../TopBar/TopBar";
import { CategoryMenu } from "../CategoryMenu/CategoryMenu";
import { MainContent } from "../MainContent/MainContent";
import { Outlet } from "react-router-dom";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { useState } from "react";
import { CURRENCIES } from "../../constants/currencies";
import { CartContext } from "../../contexts/CartContext";

export function Layout() {
  const [currency, setCurrency] = useState(
    localStorage["selected_currency"] || CURRENCIES.PLN
  );

  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <CartContext.Provider value={[cartItems, setCartItems]}>
        <CurrencyContext.Provider value={[currency, setCurrency]}>
          <MainContent>
            <TopBar>
              <MainMenu />
              <Logo />
              <div>
                <CurrencySelector />
                <IconMenu />
              </div>
            </TopBar>
            <CategoryMenu />
            <Outlet />
          </MainContent>
          <Footer />
        </CurrencyContext.Provider>
      </CartContext.Provider>
    </>
  );
}
