import styled from "styled-components";

export const HeaderTitle = styled.h1`
  font-size: 5rem;
  font-weight: 700;
`;

export const SectionTitle = styled.h3`
  font-size: 2.5rem;
  font-weight: 700;
`;

export const SectionSubTitle = styled.h4`
  padding: 0.5rem 0;
  font-size: 1.4rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
`;

export const SectionText = styled.p`
  font-size: 1.15rem;
  font-weight: 300;
  margin-bottom: 1rem;
  line-height: 1.8;
`;

export const Button = styled.div`
  border-radius: 10px;
  width: min-content;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  align-items: center;

  transition: all 0.15s ease-in-out;
`;

export const ButtonGreen = styled(Button)`
  border: 2.5px solid #45d282;

  :hover {
    background-color: #45d282;
  }
`;

export const ButtonPurple = styled(Button)`
  background-color: #8464f0;

  :hover {
    background-color: #6e4be2;
  }
`;
