import React from "react";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import PublicIcon from "@mui/icons-material/Public";

type Props = {
  project: any;
};

const Container = styled.div`
  width: 100%;
  display: flex;
  border: 2px solid ${(props) => props.theme.text};
  border-radius: 1rem;

  @media (max-width: 60rem) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.a`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: content;

  @media (max-width: 60rem) {
    width: 100%;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 1rem 0 0 1rem;

    @media (max-width: 60rem) {
      border-radius: 1rem 1rem 0 0;
    }
  }
`;

const Content = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 1rem;
  padding-left: 2rem;
  padding-bottom: 2rem;
  border-left: 2px solid ${(props) => props.theme.text};

  @media (max-width: 60rem) {
    width: 100%;
    align-items: center;
    border-left: 0;

    border-top: 2px solid ${(props) => props.theme.text};
  }

  @media (max-width: 40rem) {
    padding-left: 1rem;
    padding-right: 1rem;
    min-height: 18rem;
  }
`;

const Title = styled.h3`
  font-size: ${(props) => props.theme.fontxl};
  letter-spacing: 2px;
  text-transform: uppercase;

  @media (max-width: 28rem) {
    text-align: center;
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const Text = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;

  p {
    font-size: ${(props) => props.theme.fontmd};

    color: ${(props) => `rgba(${props.theme.textRgba},0.5)`};
  }

  @media (max-width: 40rem) {
    justify-content: center;
  }
`;

const Link = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  a {
    display: flex;
    align-items: center;
    gap: 2px;
    color: #0284c7;

    svg {
      width: 2.5rem;
      height: 2.5rem;
      fill: ${(props) => props.theme.text};

      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;

const ProjectItem = ({ project }: Props) => {
  return (
    <Container>
      <ImageContainer href={project.linkDeploy} target="_brank">
        <img src={project.linkImage} alt="" />
      </ImageContainer>
      <Content>
        <Title>{project.title}</Title>
        <Text>
          {project.technologys.map((technology: string[], index: number) => (
            <p key={index}>{technology}</p>
          ))}
        </Text>
        <Link>
          <a href={project.linkGitHub} target="_brank">
            <GitHubIcon />
          </a>
          <a href={project.linkDeploy} target="_brank">
            <PublicIcon />
          </a>
        </Link>
      </Content>
    </Container>
  );
};

export default ProjectItem;
