import React from "react";
import styled from "styled-components";
import Button from "./buttons/button";
import { useLocation, useNavigate } from "react-router";
import { AddRounded, WebRounded, Brightness4, Brightness7 } from "@mui/icons-material";

const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.navbar};
  color: ${({ theme }) => theme.menu_primary_text};
  font-weight: bold;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  @media only screen and (max-width: 600px) {
    padding: 10px 12px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const NavBar = ({ toggleTheme, isDarkTheme }) => {
  const navigate = useNavigate();
  const location = useLocation();

  let path = location.pathname.split("/");

  const gotoCreatePost = () => {
    navigate("/post");
  };

  const gotoHome = () => {
    navigate("/");
  };

  return (
    <Container>
      KyonaAI
      <ButtonGroup>
        {path[1] === "post" ? (
          <Button
            text="Explore Posts"
            leftIcon={<WebRounded style={{ fontSize: "18px" }} />}
            onClick={gotoHome}
            type="secondary"
          />
        ) : (
          <Button
            text="Create new post"
            leftIcon={<AddRounded style={{ fontSize: "18px" }} />}
            onClick={gotoCreatePost}
          />
        )}
        <Button
          text={isDarkTheme ? "" : ""}
          leftIcon={isDarkTheme ? <Brightness7 /> : <Brightness4 />}
          onClick={toggleTheme}
          type="secondary"
        />
      </ButtonGroup>
    </Container>
  );
};

export default NavBar;
