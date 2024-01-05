import React from "react";
import styled from "styled-components";
import { ReactComponent as Circle } from "../../assats/icons/Ellipse 492.svg";
import { ReactComponent as Circles } from "../../assats/icons/Ellipse 491.svg";
import { ReactComponent as Illustration } from "../../assats/icons/illustration.svg";
import { newsPage } from "../../utils/constant";

export const NewsPage = () => {
  return (
    <Container>
      <DescBlock>
        <Title>Новости</Title>
        <Text>все</Text>
      </DescBlock>
      <ContainerChilde>
        {newsPage.map((el, index) => (
          <Banner key={index}>
            <CircleStyles>
              <Circles />
            </CircleStyles>
            <InfoBlock>
              <div>
                <Price>-{el.discount}%</Price>
                <p>{el.title}</p>
              </div>
              <IllustrationStyle />
            </InfoBlock>
            <CircleStyle>
              <Circle />
            </CircleStyle>
            <Button>Подробнее</Button>
          </Banner>
        ))}
        <EmptyBunner></EmptyBunner>
      </ContainerChilde>
    </Container>
  );
};

const Container = styled("div")`
  padding: 0 2rem;
  margin-top: 2rem;

  @media (min-width: 768px) {
    padding: 0 3rem;
  }

  @media (min-width: 1024px) {
    padding: 0 6.38rem;
  }
`;

const DescBlock = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ContainerChilde = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Title = styled("p")`
  color: #000;
  font-size: 1.5625rem;
  font-weight: 600;
`;

const Banner = styled("div")`
  position: relative;
  width: 100%;
  height: 11.3425rem;
  border-radius: 0.69163rem;
  background: #f0f9ff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  @media (min-width: 768px) {
    width: 25.10563rem;
  }
`;

const CircleStyle = styled("div")`
  display: none;
  align-items: flex-end;
  height: 8.5rem;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const CircleStyles = styled("div")`
  display: flex;
  justify-content: flex-end;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const InfoBlock = styled("div")`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 1.39rem;
  left: 1.38rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Price = styled("span")`
  color: #000;
  font-size: 1.50631rem;
  font-weight: 700;
`;

const IllustrationStyle = styled(Illustration)`
  padding-top: 1rem;

  @media (min-width: 768px) {
    padding-left: 2rem;
    padding-top: 0;
  }
`;

const Button = styled("button")`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 0.50213rem 1.50631rem;
  border-radius: 0.69163rem;
  background: #0063a9;
  color: #fff;
  border: none;
  cursor: pointer;

  @media (min-width: 768px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const EmptyBunner = styled("div")`
  width: 100%;
  height: 11.3425rem;
  border-radius: 0.69163rem;
  background: #ecedf2;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  @media (min-width: 768px) {
    width: 25.10563rem;
  }
`;

const Text = styled("p")`
  color: #3186c3;
  font-size: 1rem;
  font-weight: 600;
`;
