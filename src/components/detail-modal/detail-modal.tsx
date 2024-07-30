import { Typography, Divider, Modal, Row, Col, Flex, Button } from "antd";
import { MyCart } from "../../App";
import membershipDiscount from "./membership-discount";
import doubleBundle from "./double-bundle";

const { Title } = Typography;

interface DetailModalProp {
  cart: MyCart[];
  totalPrice: number;
  isMember: boolean;
  close: () => void;
  isOpen: boolean;
}

export default function DetailModal({
  cart,
  totalPrice,
  isMember,
  isOpen,
  close,
}: DetailModalProp) {
  const memberShipDiscountValue = membershipDiscount(totalPrice, isMember);
  const orangeDiscount = doubleBundle(cart, "orange");
  const pinkDiscount = doubleBundle(cart, "pink");
  const greenDiscount = doubleBundle(cart, "green");

  const finalPrice =
    totalPrice -
    memberShipDiscountValue -
    orangeDiscount -
    pinkDiscount -
    greenDiscount;

  return (
    <Modal open={isOpen} footer={null} closeIcon={null}>
      <Title level={2}>Bill Detail</Title>
      <Row>
        <Col span={12}>Before Discount:</Col>
        <Col span={12} style={{ textAlign: "right" }}>
          {totalPrice}
        </Col>
      </Row>
      <Row>
        <Col span={12}>Membership Discount</Col>
        <Col span={12} style={{ textAlign: "right" }}>
          {memberShipDiscountValue}
        </Col>
      </Row>
      <Row>
        <Col>Double Bundle</Col>
      </Row>
      <Row>
        <Col span={12} push={1}>
          Double Orange
        </Col>
        <Col span={12} style={{ textAlign: "right" }}>
          {orangeDiscount}
        </Col>
      </Row>
      <Row>
        <Col span={12} push={1}>
          Double Pink
        </Col>
        <Col span={12} style={{ textAlign: "right" }}>
          {pinkDiscount}
        </Col>
      </Row>
      <Row>
        <Col span={12} push={1}>
          Double Green
        </Col>
        <Col span={12} style={{ textAlign: "right" }}>
          {greenDiscount}
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={12}>
          <Title level={3}>Total</Title>
        </Col>
        <Col span={12} style={{ textAlign: "right" }}>
          <Title level={3}>{finalPrice}</Title>
        </Col>
      </Row>

      <Flex justify="center" align="center" style={{ paddingTop: "32px" }}>
        <Button onClick={close}>Close</Button>
      </Flex>
    </Modal>
  );
}
