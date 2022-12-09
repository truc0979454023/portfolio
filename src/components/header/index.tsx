import styled from "styled-components";

type HeaderProps = {};

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  width: 100%;
  padding-top: 1rem;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  text-transform: uppercase;
  cursor: default;
  font-family: "Akaya Telivigala", cursive;

  @media (max-width: 40rem) {
    font-size: ${(props) => props.theme.fontxxl};
  }
`;

const Header = (props: HeaderProps) => {
  return (
    <Container>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="500"
      >
        <a href="#!">
          <Title>MT.6500</Title>
        </a>
      </div>
    </Container>
  );
};

export default Header;
