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

export const Buttons = styled.div`
  display: flex;
  gap: 20px;
`;

export const Button = styled.div`
  border-radius: 10px;
  width: min-content;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  align-items: center;
  font-weight: 500;

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
  border: 2.5px solid #8464f0;
  :hover {
    background-color: #6e4be2;
    border: 2.5px solid #6e4be2;
  }
`;

export const SquareButton = styled.div`
  background-color: #212121;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.15s ease-in-out;

  :hover {
    background-color: #111111;
    transform: scale(1.05);
  }
`;

export const Cross = styled.a`
  opacity: 1;
  cursor: pointer;
  display: flex;

  :before,
  :after {
    position: absolute;
    left: 15px;
    top: 5px;
    content: " ";
    height: 22px;
    width: 2px;
    background-color: #333333;
  }

  :before {
    transform: rotate(45deg);
  }

  :after {
    transform: rotate(-45deg);
  }
`;
