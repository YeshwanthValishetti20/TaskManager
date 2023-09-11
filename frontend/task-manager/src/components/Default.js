// import React, { useRef } from 'react';
// import styled from 'styled-components';

// const Container = styled.div`
//   height: 100vh;
//   overflow-y: scroll;
//   scroll-behavior: smooth;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 20px;
// `;

// const Section = styled.section`
//   margin: 40px 0;
// `;

// const ImageLink = styled.a`
//   display: block;
//   margin: 20px 0;
// `;

// const AuthLinks = styled.div`
//   margin-top: 20px;
// `;

// const Default = () => {
//   const section1Ref = useRef(null);
//   const section2Ref = useRef(null);

//   const scrollToSection = (ref) => {
//     if (ref && ref.current) {
//       ref.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <Container>
//       <h1>Welcome to Task Manager</h1>
//       <p>Manage your tasks efficiently with our easy-to-use Task Manager.</p>

//       <button onClick={() => scrollToSection(section1Ref)}>Scroll to Section 1</button>
//       <button onClick={() => scrollToSection(section2Ref)}>Scroll to Section 2</button>

//       <AuthLinks>
//         <a href="/login">Login</a> | <a href="/signup">Sign Up</a>
//       </AuthLinks>

//       <Section ref={section1Ref}>
//         <h2>Section 1</h2>
//         <p>Content for Section 1 goes here.</p>
//         <ImageLink href="https://unsplash.com/photos/hXpPoH1LCl4" target="_blank">
//           <img src="https://images.unsplash.com/photo-1602525142863-94e11cfd55be" alt="Image 1" />
//         </ImageLink>
//       </Section>

//       <Section ref={section2Ref}>
//         <h2>Section 2</h2>
//         <p>Content for Section 2 goes here.</p>
//         <ImageLink href="https://unsplash.com/photos/gUIJ0YszPig" target="_blank">
//           <img src="https://images.unsplash.com/photo-1555685812-4b943f1cb0eb" alt="Image 2" />
//         </ImageLink>
//       </Section>
//     </Container>
//   );
// };

// export default Default;
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('https://wallpapercave.com/wp/wp2351071.jpg'); /* Replace with your background image URL */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 20px;
`;

const WelcomeSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent white background */
  padding: 20px;
  border-radius: 10px;
  max-width: 400px; /* Adjust the maximum width as needed */
`;

const WelcomeText = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: #333; /* Dark text color */
  margin-bottom: 20px;
`;

const LogoImage = styled.img`
  width: 200px; /* Adjust the width as needed */
  height: auto;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

const HighlightedButton = styled(Link)`
  background-color: #007bff; /* Blue background color */
  color: white; /* White text color */
  text-decoration: none; /* Remove underlines */
  padding: 10px 20px;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.3s; /* Smooth transition on hover */

  &:hover {
    background-color: #0056b3; /* Darker blue color on hover */
  }
`;

const Default = () => {
  return (
    <Container>
      <WelcomeSection>
        <WelcomeText>Welcome to Task Manager</WelcomeText>
        <LogoImage
          src="https://1.bp.blogspot.com/-YclFkbtR2LQ/XiP4NiFlcEI/AAAAAAAAAxo/g7px15e0S84FP5nF0s9LKmoVOIiMfh9dgCLcBGAsYHQ/s1600/task.png" /* Replace with your logo image URL */
          alt="Task Manager Logo"
        />
        <ButtonContainer>
          <HighlightedButton to="/login">Login</HighlightedButton>
          <HighlightedButton to="/signup">Sign Up</HighlightedButton>
        </ButtonContainer>
      </WelcomeSection>
    </Container>
  );
};

export default Default;
