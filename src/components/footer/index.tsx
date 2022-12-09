import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";

type Props = {};

const Container = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;

  @media (max-width: 60rem) {
    flex-direction: column;
    gap: 0.5rem;
  }

  h3 {
    font-size: ${(props) => props.theme.fontlg};
  }

  p {
    font-size: ${(props) => props.theme.fontlg};
    text-transform: uppercase;
  }
`;

const Icons = styled.div`
  display: flex;
  gap: 1rem;

  svg {
    height: 2.5rem;
    width: 2.5rem;

    svg:hover {
      transform: scale(1.1);
    }
  }
`;

const Footer = (props: Props) => {
  return (
    <Container>
      <p>COPYRIGHT ©2022</p>
      <Icons>
        <a href="https://github.com/truc0979454023" target="_brank">
          <GitHubIcon />
        </a>
        <a href="https://www.facebook.com/ca.tu.357622/" target="_brank">
          <FacebookIcon />
        </a>
      </Icons>

      <h3>minhtruc6500 ❤️</h3>
    </Container>
  );
};

export default Footer;
