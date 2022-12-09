import styled from "styled-components";
import { knowledgeData } from "../../../data";

type Props = {};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 60rem) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;

  @media (max-width: 60rem) {
    width: 100%;
  }

  h3 {
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const List = styled.div`
  list-style: none;
  display: flex;
  width: 100%;
  padding: 1rem;
  background: ${(props) => `rgba(${props.theme.bodyRgba},0.7)`};
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;

  li {
    color: ${(props) => `rgba(${props.theme.textRgba},0.9)`};
  }
`;

const Knowledge = (props: Props) => {
  return (
    <div data-aos="zoom-in" data-aos-duration="800">
      <Container>
        {knowledgeData.map((data, index) => (
          <Content key={index}>
            <h3>{data.title}</h3>
            <List>
              {data.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </List>
          </Content>
        ))}
      </Container>
    </div>
  );
};

export default Knowledge;
