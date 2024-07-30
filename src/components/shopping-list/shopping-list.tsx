import { Typography, Row, Col, Button } from "antd";
import { cartItem, CartItem } from "./item";
import { MyCart } from "../../App";

const { Title } = Typography;

interface ShoppingListProp {
  addItem: (item: MyCart) => void;
  removeItem: (item: MyCart) => void;
}

export default function ShoppingList({
  addItem,
  removeItem,
}: ShoppingListProp) {
  return (
    <div>
      <Title level={2}>Available</Title>
      <div style={{ fontWeight: "bold" }}>
        <Row gutter={16}>
          <Col span={12}>Name</Col>
          <Col span={6}>Price</Col>
          <Col span={6}>Action</Col>
        </Row>
      </div>
      <br />
      <div>
        {cartItem.map((item: CartItem) => {
          return (
            <Row gutter={16} key={item.id}>
              <Col span={12}>{item.name}</Col>
              <Col span={6}>{item.price}</Col>
              <Col span={6}>
                <Button onClick={() => addItem(item as MyCart)}>+</Button>
                <Button onClick={() => removeItem(item as MyCart)}>-</Button>
              </Col>
            </Row>
          );
        })}
      </div>
    </div>
  );
}
