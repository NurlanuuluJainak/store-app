import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Circle } from "../assats/icons/Ellipse 520.svg";

export const UiSaleCart = ({
  Icon,
  image,
  title,
  price,
  availability,
  set,
  discount,
  discountPrice,
}) => {
  const [count, setCount] = useState(0);
  const [iconClicked, setIconClicked] = useState(false);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleIconClick = () => {
    setIconClicked(!iconClicked);
  };
  return (
    <Container>
      <ContainerChilde>
        <IconStyleContainer>
          <IconStyle onClick={handleIconClick} iconClicked={iconClicked}>
            <Icon
              style={{
                color: iconClicked ? "black" : "rgba(255, 255, 255, 0.5)",
              }}
            />
          </IconStyle>
        </IconStyleContainer>
        <img src={image} alt="img" />
        <Title>{title}</Title>
        <Block>
          <BlockPrice>
            <Price>{price}</Price>
            <DiscountPrice>{discountPrice}</DiscountPrice>
            <Discount>{discount}</Discount>
          </BlockPrice>
          <Availability>{availability}</Availability>
          <CircleBlock>
            <Circle />
            <Set>{set}</Set>
          </CircleBlock>
        </Block>
        <Counter>
          <DecrementBtn onClick={decrement}>-</DecrementBtn>
          <p>{count}</p>
          <IncrementBtn onClick={increment}>+</IncrementBtn>
        </Counter>
      </ContainerChilde>
    </Container>
  );
};

const Container = styled("div")`
  display: flex;
  gap: 1rem;
`;

const ContainerChilde = styled("div")`
  width: 11rem;
  height: 100%;
  border-radius: 0.51819rem;
  background: #fff;
  padding: 0.75rem;
`;
const Block = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const IconStyleContainer = styled("div")`
  display: flex;
  justify-content: flex-end;
  position: relative;
  padding-right: 0.5rem;
`;
const IconStyle = styled("div")`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
  margin-top: 0.5rem;
  padding: 0.23181rem;
  border-radius: 0.25rem;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
`;
const Title = styled("p")`
  color: #1a1919;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.0175rem;
  height: 3rem;
`;
const Price = styled("span")`
  color: #000;
  font-size: 1.1875rem;
  font-weight: 700;
`;

const Availability = styled("span")`
  color: #73cb5e;
  font-size: 0.75rem;
  font-weight: 500;
`;
const Set = styled("span")`
  color: #3286c2;
  font-size: 0.75rem;
  font-weight: 400;
`;
const DecrementBtn = styled("button")`
  width: 2.0625rem;
  height: 2.0625rem;
  border-radius: 6.25rem;
  background: #f5f5f5;
  border: none;
  cursor: pointer;
  &:hover {
    background: #3286c3;
    color: #fff;
  }
`;
const IncrementBtn = styled("button")`
  width: 2.0625rem;
  height: 2.0625rem;
  border-radius: 6.25rem;
  background: #f5f5f5;
  border: none;
  cursor: pointer;
  &:hover {
    background: #3286c3;
    color: #fff;
  }
`;

const Counter = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Discount = styled("p")`
  color: #808080;
  font-size: 0.875rem;
  font-weight: 700;
  text-decoration: line-through;
`;
const BlockPrice = styled("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const DiscountPrice = styled("span")`
  color: red;
  font-size: 1.1875rem;
  font-weight: 700;
`;
const CircleBlock = styled("div")`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
