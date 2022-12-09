import styled from "styled-components";
import CV from "./CV";
import Knowledge from "./Knowledge";

type Props = {};

const Container = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 4rem;
  min-height: 100vh;
`;

const Skill = (props: Props) => {
  return (
    <Container id="skill">
      <CV></CV>
      <Knowledge />
    </Container>
  );
};

export default Skill;
