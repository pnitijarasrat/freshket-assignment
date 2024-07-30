import "./App.css";
import ShoppingList from "./components/shopping-list/shopping-list";
import { CartItem } from "./components/shopping-list/item";
import { useState } from "react";
import Cart from "./components/cart/cart";
import { Divider } from "antd";

// TODO: test case

export interface MyCart extends CartItem {
  amount: number;
}

function App() {
  const [cart, setCart] = useState<MyCart[]>([]);

  function addItem(item: MyCart) {
    // if item is already in the cart : increment amount by 1
    if (cart.find((c) => c.id === item.id)) {
      setCart(
        cart.map((c) => {
          if (c.id === item.id) {
            return { ...c, amount: c.amount + 1 };
          } else {
            return c;
          }
        }),
      );
      // if not add new one
    } else {
      setCart([...cart, { ...item, amount: 1 }]);
    }
  }

  function removeItem(item: MyCart) {
    if (cart.find((c) => c.id === item.id)) {
      setCart(
        cart
          .map((c) => {
            if (c.id === item.id) {
              return { ...c, amount: Math.max(c.amount - 1, 0) };
            } else {
              return c;
            }
          })
          // to remove it from cart
          .filter((c) => c.amount > 0),
      );
    }
  }

  return (
    <section className="page-container">
      <ShoppingList addItem={addItem} removeItem={removeItem} />
      <Divider />
      <Cart cart={cart} />
    </section>
  );
}

export default App;
