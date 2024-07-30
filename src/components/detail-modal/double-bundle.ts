import { MyCart } from "../../App";

export default function doubleBundle(cart: MyCart[], itemId: string) {
  const discountItem = cart.filter((c) => c.id === itemId)[0];
  if (discountItem === undefined) return 0;
  const numOfPair = Math.floor(discountItem.amount / 2);
  return discountItem.price * numOfPair * 2 * 0.05;
}
