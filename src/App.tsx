import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "./components/NavBar/NavBar";
import GlobalStyles from "./styles/GlobalStyles";
import Footer from "./components/Footer";
import { MainIllustration } from "./components/MainIllustration";
import Offers from "./components/Offers/Offers";
import ClientsTestimonials from "./components/Testimonials/ClientsTestimonials";

const AppContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--main-bg-color);
`;


const App: React.FC = () => {
  const [navBarHeight, setNavBarHeight] = useState(0);

  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <NavBar setNavBarHeight={setNavBarHeight} />
        <MainIllustration navBarHeight={navBarHeight} />
		<Offers />
		<ClientsTestimonials />
        <Footer />
      </AppContainer>
    </>
  );
};

export default App;
