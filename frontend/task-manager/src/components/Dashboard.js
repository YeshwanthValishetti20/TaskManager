import React from 'react';
import styled from 'styled-components';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

// Define styled components for your elements
const AppWrapper = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  position: relative;
  background-color: #282c34;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const BackgroundImages = styled.div`
  position: absolute;
  width: 200%;
  height: 100%;
  top: 0;
  left: 0;
  animation: slide 20s linear infinite;
`;

const BackgroundImage = styled.div`
  width: 50%;
  height: 100%;
  background-size: cover;
  background-position: center;
`;

const Content = styled.div`
  z-index: 1;
`;

const Heading = styled.h1`
  font-size: 3rem;
`;

const LoginSignupWrapper = styled.div`
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  background-color: ${(props) => (props.primary ? '#007bff' : 'transparent')};
  color: ${(props) => (props.primary ? 'white' : 'inherit')};
`;

// Your App component
// ... (previous code)

const dashboard = () => {
    return (
      <Router>
        <AppWrapper>
          <AppHeader>
            <BackgroundImages>
              <BackgroundImage
                id="image1"
                href="https://unsplash.com/photos/gUIJ0YszPig" // Replace with your actual URL
              ></BackgroundImage>
              <BackgroundImage
                id="image2"
                href="https://unsplash.com/photos/hXpPoH1LCl4" // Replace with your actual URL
              ></BackgroundImage>
            </BackgroundImages>
            <Content>
              <Heading>Task Manager Dashboard</Heading>
              <p>Your one-stop solution for efficient task management.</p>
              <LoginSignupWrapper>
                <Link to="/login">
                  <Button>Login</Button>
                </Link>
                <Link to="/signup">
                  <Button primary>Sign Up</Button>
                </Link>
              </LoginSignupWrapper>
            </Content>
          </AppHeader>
        </AppWrapper>
      </Router>
    );
  };
  
  export default dashboard;
  