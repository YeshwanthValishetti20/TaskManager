import React from 'react';
import Navbar from './Navbar';
import Lists from './Lists';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Home = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: 'url("https://images.freecreatives.com/wp-content/uploads/2016/04/Solid-Black-Website-Background.jpg")', // Replace with your background image URL
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Navbar />
        <Container maxWidth="lg" style={{ marginTop: '20px' }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper elevation={3} style={{ padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                <Typography variant="h4" gutterBottom>
                  Welcome to Task Manager
                </Typography>
                <Typography variant="body1" paragraph>
                  Manage your tasks efficiently with our easy-to-use Task Manager.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Lists />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Home;
