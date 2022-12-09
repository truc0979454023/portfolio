import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import avatar from "../../../assets/images/avatar.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";

type Props = {};

const Container = styled.div`
  width: 24rem;
  height: 24rem;
  border-radius: 50%;
  border: 6px solid ${(props) => `rgba(${props.theme.textRgba},0.2)`};
  position: relative;
  cursor: pointer;

  @media (max-width: 60rem) {
    width: 20rem;
    height: 20rem;
  }

  &:hover #contact {
    top: 0;
  }

  &:hover::after {
    width: 110%;
  }

  &::after {
    content: "";
    height: 110%;
    width: 4rem;
    position: absolute;
    background: linear-gradient(315deg, #0891b2, #be185d);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
    animation: around 4s linear infinite;
    transition: all 0.5s ease;
  }

  @keyframes around {
    from {
      transform: translate(-50%, -50%) rotate(0);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  &::before {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    background-color: ${(props) => props.theme.bgAvatar};
    transform: translate(-50%, -50%);
    z-index: 10;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  background-color: ${(props) => props.theme.body};
`;

const Image = styled.div`
  width: 85%;
  height: 85%;
  border-radius: 50%;
  z-index: 20;
  border: 5px solid #334155;
  overflow: hidden;
  box-sizing: content-box;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Contact = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  transition: all 0.4s ease;
  background-color: ${(props) => props.theme.bgAvatar};

  h3 {
    text-transform: uppercase;
    color: ${(props) => props.theme.textAvatar};
    font-size: ${(props) => props.theme.fontlg};

    @media (max-width: 60rem) {
      font-size: ${(props) => props.theme.fontmd};
    }
  }
  p {
    text-transform: uppercase;
    font-size: ${(props) => props.theme.fontsm};
    color: ${(props) => `rgba(${props.theme.textRgbaAvatar},0.5)`};
  }
`;

const Icons = styled.div`
  display: flex;
  gap: 1rem;

  svg {
    fill: ${(props) => props.theme.textAvatar};
    width: 2rem;
    height: 2rem;
    transition: all 0.25s ease;
  }

  svg:hover {
    transform: scale(1.1);
  }
`;

const ButtonAvatar = styled.button`
  outline: none;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: ${(props) => props.theme.fontlg};
  color: #0f172a;
  background-color: #f8fafc;
  transition: all 0.25s ease;

  @media (max-width: 60rem) {
    font-size: ${(props) => props.theme.fontmd};
  }

  &:hover {
    transform: scaleX(1.1);
    box-shadow: #f8fafc 0px 5px 15px;
  }
`;

const Avatar = (props: Props) => {
  const { t } = useTranslation("", { keyPrefix: "intro" });

  return (
    <Container>
      <Content>
        <Image>
          <img src={avatar} alt="avatar" />
          <Contact id="contact">
            <h3>{t("name")}</h3>
            <p>{t("major")}</p>
            <Icons>
              <a href="https://github.com/truc0979454023" target="_brank">
                <GitHubIcon />
              </a>
              <a href="https://www.facebook.com/ca.tu.357622/" target="_brank">
                <FacebookIcon />
              </a>
            </Icons>
            <a href="mailto:vmtruc060500@gmail.com">
              <ButtonAvatar>{t("textButton")}</ButtonAvatar>
            </a>
          </Contact>
        </Image>
      </Content>
    </Container>
  );
};

export default Avatar;
