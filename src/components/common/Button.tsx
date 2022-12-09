import React from "react";
import styled from "styled-components";

type Props = {
  text: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

const Container = styled.button`
  background: transparent;
  outline: none;
  border: 0;
  color: ${(props) => props.theme.text};
  text-transform: uppercase;
  letter-spacing: 4px;
  padding: 1rem 1rem 1rem 0;
  border-bottom: 2px solid #0284c7;
  border-right: 2px solid #0284c7;
  cursor: pointer;
  transition: all 0.25s ease;
  display: flex;
  align-items: center;
  gap: 2px;
  width: fit-content;

  &:hover {
    background: ${(props) => props.theme.bgButton};
    padding: 1rem;
  }
`;

const Button = ({ text, children, onClick }: Props) => {
  return (
    <Container onClick={onClick}>
      {text}
      {children}
    </Container>
  );
};

export default Button;
