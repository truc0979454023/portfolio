import React from "react";
import styled from "styled-components";
import Connect from "./Connect";
import Email from "./Email";

type Props = {};

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const About = (props: Props) => {
  return (
    <Container>
      <Connect></Connect>
      <Email></Email>
    </Container>
  );
};

export default About;
