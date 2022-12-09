import { useState } from "react";
import styled from "styled-components";

type Props = {};

const Container = styled.div<{ percent: number }>`
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  cursor: pointer;
  box-shadow: 0 0 10px ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  position: relative;
  overflow: hidden;
  background: ${(props) =>
    `conic-gradient(rgba(${props.theme.bodyRgba},0.5) ${props.percent}%, ${props.theme.text} ${props.percent}%)`};
`;
const Content = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: 50%;
  width: 100%;
  position: absolute;
  transform: scale(0.9);
  background: ${(props) => props.theme.text};
  top: 0;

  &:hover p {
    transform: translateY(-100%);
  }

  &:hover span {
    transform: translateY(0);
  }

  p {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    transition: all 0.5s ease;
  }

  span {
    height: 100%;
    position: absolute;
    transform: translateY(100%);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease;
  }
`;

const BackToTop = (props: Props) => {
  const [percent, setPercent] = useState(0);
  document.addEventListener("scroll", () => {
    setPercent(
      (window.scrollY /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight)) *
        100
    );
  });

  const backToTop = () => {
    let element: HTMLElement = document.getElementById("app") as HTMLElement;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <Container onClick={backToTop} percent={percent}>
      <Content>
        <p>{Math.floor(percent)}%</p>
        <span className="material-symbols-sharp">arrow_upward</span>
      </Content>
    </Container>
  );
};

export default BackToTop;
