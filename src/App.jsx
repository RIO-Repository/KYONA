import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import LandingPage from "./components/home/LandingPage";

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  transition: all 0.2s ease;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
`;

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <BrowserRouter>
        <AppContainer>
          <NavBar toggleTheme={toggleTheme} isDarkTheme={theme === "dark"} />
          <ContentWrapper>
            <Routes>
              <Route path="/" exact element={<LandingPage />} />
              <Route path="/home" exact element={<Home />} />
              <Route path="/post" exact element={<CreatePost />} />
            </Routes>
          </ContentWrapper>
        </AppContainer>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
