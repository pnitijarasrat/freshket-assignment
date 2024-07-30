import { Typography, Row, Col, Button, Flex, Switch, Divider } from "antd";
import { MyCart } from "../../App";
import { useState } from "react";
import DetailModal from "../detail-modal/detail-modal";

const { Title, Text } = Typography;

interface CartProp {
  cart: MyCart[];
}

export default function Cart({ cart }: CartProp) {
  const [isMember, setIsMember] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);

  let totalPrice = 0;
  for (const item of cart) {
    totalPrice += item.price * item.amount;
  }

  function onMemberChange(valued: boolean) {
    setIsMember(valued);
  }

  function open() {
    setModal(true);
  }

  function close() {
    setModal(false);
  }

  return (
    <>
      <DetailModal
        totalPrice={totalPrice}
        cart={cart}
        isMember={isMember}
        close={close}
        isOpen={modal}
      />
      <div>
        <Title level={2}>Cart</Title>
        <div>
          {cart.length ? (
            <div>
              <div style={{ fontWeight: "bold" }}>
                <Row gutter={16}>
                  <Col span={12}>Name</Col>
                  <Col span={6}>Amount</Col>
                  <Col span={6}>Price</Col>
                </Row>
              </div>
              {cart.map((item) => {
                return (
                  <Row gutter={16} key={item.id}>
                    <Col span={12}>{item.name}</Col>
                    <Col span={6}>{item.amount}</Col>
                    <Col span={6}>{item.amount * item.price}</Col>
                  </Row>
                );
              })}
              <Divider />
              <Row>
                <Col span={18}>
                  <Title level={4}>Before Discount</Title>
                </Col>
                <Col span={6}>
                  <Title level={4}>{totalPrice}</Title>
                </Col>
              </Row>
              <Row>
                <Col span={18}>Membership</Col>
                <Col span={6}>
                  <Switch onChange={onMemberChange} />
                </Col>
              </Row>
              <br />
              <Flex justify="center" align="center">
                <Button onClick={open} type="primary">
                  Check Out
                </Button>
              </Flex>
            </div>
          ) : (
            <Flex justify="center" align="center" style={{ padding: "16px 0" }}>
              <Text type="secondary">Your cart is empty.</Text>
            </Flex>
          )}
        </div>
      </div>
    </>
  );
}
