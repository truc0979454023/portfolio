import React from "react";
import styled from "styled-components";
import ChangeLanguageButton from "./ChangeLanguageButton";
import BackToTop from "./BackToTop";
import Theme from "./Theme";

type Props = {};

const Container = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  z-index: 50;
`;

const Corn = (props: Props) => {
  return (
    <Container>
      <ChangeLanguageButton />
      <Theme />
      <BackToTop />
    </Container>
  );
};

export default Corn;
