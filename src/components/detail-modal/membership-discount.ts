export default function membershipDiscount(price: number, isMember: boolean) {
  return isMember ? price * 0.1 : 0;
}
