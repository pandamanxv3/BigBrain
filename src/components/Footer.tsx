import styled from "styled-components";

const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: var(--main-bg-color);
  z-index: 1000;
  width: 100dvw;
`;

const FooterSection = styled.div`
padding: 30px;
  display: flex;
  height: auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-left: 1px solid black;
  border-top: 1px solid black;
  width: auto;

  &:first-child {
    border-left: none;
  }
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: black;
  font-size: 18px;
  &:hover {
    color: #0070f3;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <FooterLink href="#">Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum</FooterLink>
        <FooterLink href="#">Dolor Sit AmetDolor Sit AmetDolor Sit Amet</FooterLink>
        <FooterLink href="#">  1234 Main St 1234 Main St 1234 Main St</FooterLink>
      </FooterSection>
      <FooterSection>
        <FooterLink href="#">Adipiscing Elit</FooterLink>
        <FooterLink href="#">Sed Do Eiusmod</FooterLink>
        <FooterLink href="#">Tempor</FooterLink>
      </FooterSection>
      <FooterSection>
        <FooterLink href="#">Incididunt Ut</FooterLink>
        <FooterLink href="#">Labore Et Dolore</FooterLink>
        <FooterLink href="#">Magna</FooterLink>
      </FooterSection>
    </FooterContainer>
  );
};

export default Footer;
