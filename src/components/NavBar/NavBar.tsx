import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const NavBarContainer = styled.div<{ scrolled: boolean }>`
  overflow: hidden;
  position: fixed;
  top: 0;
  display: grid;
  grid-template-columns: auto 1fr auto;
  width: 100%;
  background-color: var(--main-bg-color);
  z-index: 1000;
  transition: height 0.3s ease;
  height: ${({ scrolled }) => (scrolled ? "60px" : "80px")};
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  transition: padding 0.3s ease;
  width: auto;

  &:first-child {
    border-left: none;
	padding: 0 5dvh;
  }
  &:last-child {
    padding: 0 5dvh;
  }
`;

const Logo = styled.div`
  font-family: "PPEditorialOld";
  font-size: 36px;
  color: black;
  padding: 0 3dvh;
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 20px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: black;
  font-size: 18px;
  position: relative;
  &:hover {
    color: #b48b59;
  }
  &:after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #b48b59;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }
  &:hover:after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

const NavBar: React.FC<{ setNavBarHeight: (height: number) => void }> = ({
  setNavBarHeight,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (navRef.current) {
      setNavBarHeight(navRef.current.clientHeight);
    }
  }, [scrolled, setNavBarHeight]);

  return (
    <NavBarContainer ref={navRef} scrolled={scrolled}>
      <Section >
        <Logo>BIG BRAIN</Logo>
      </Section>
      <Section >
        <NavLinks>
          <NavLink href="#">SERVICES</NavLink>
          <NavLink href="#">PROJETS</NavLink>
          <NavLink href="#">INSPIRATION</NavLink>
        </NavLinks>
      </Section>
      <Section >
        <NavLinks>
          <NavLink href="#">CONTACT</NavLink>
          <NavLink href="#">ENG/FR </NavLink>
        </NavLinks>
      </Section>
    </NavBarContainer>
  );
};

export default NavBar;
