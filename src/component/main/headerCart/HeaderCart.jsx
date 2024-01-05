import React from "react";
import styled from "styled-components";
import { cartEmpty, headerCart } from "../../utils/constant";

export const HeaderCart = () => {
  return (
    <Container>
      {headerCart.map((el) => (
        <BlockCart>
          <img src={el.image} alt="img" />
          <Title>{el.title}</Title>
        </BlockCart>
      ))}
      {cartEmpty.map((el) => (
        <BlockCart>
          <Image src={el.image} alt="img" />
          <img src={el.title} alt="img" />
        </BlockCart>
      ))}
    </Container>
  );
};

const Container = styled("div")`
  display: flex;
  justify-content: space-between;
  padding: 0 6.38rem 0 6.38rem;
  margin-top: 5.5rem;
`;
const Title = styled("p")`
  color: #000;
  font-size: 0.75rem;
  font-weight: 400;
`;
const BlockCart = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;
const Image = styled("img")`
  position: relative;
  bottom: 0.6rem;
`;
