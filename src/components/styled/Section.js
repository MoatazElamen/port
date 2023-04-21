import styled from "styled-components";

const Section = styled.div`
  background: ${props =>
    props.primary ? "var(--primary-color)" : "var(--secondary-color)"};
  min-height: 100vh;
  padding: 2rem 3rem;
  clip-path: polygon(85% 0, 100% 15%, 100% 100%, 0 100%, 0 0);
  overflow: hidden;
  border-radius: 5px;
  border: 5px solid var(--text-contrast);
  padding: 8rem;
`;
export default Section;
