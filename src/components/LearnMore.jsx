import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Paper, Grid, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';

const AnimateBox = styled(Box)({
  opacity: 0,
  transform: 'translateY(20px)',
  transition: 'all 0.6s ease',
  '&.visible': {
    opacity: 1,
    transform: 'translateY(0)'
  }
});

const LearnMore = () => {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
      <AnimateBox className={isVisible ? 'visible' : ''}>
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 2,
            bgcolor: theme.palette.background.paper,
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <AnimateBox className={isVisible ? 'visible' : ''} sx={{ mb: 3 }}>
                <Typography
                  variant="h3"
                  component="h1"
                  gutterBottom
                  sx={{
                    fontWeight: 'bold',
                    color: theme.palette.primary.main,
                    mb: 3
                  }}
                >
                  Kujia Kenya
                </Typography>
              </AnimateBox>

              <AnimateBox className={isVisible ? 'visible' : ''} sx={{ mb: 3 }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.secondary,
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    mb: 3
                  }}
                >
                  Founded by Benard O. Nyachieo in November 2019, Kujia Kenya is a premier organization of tech-savvy and entrepreneurial-minded Kenyan youth, with a strong focus on female empowerment in the digital space. We're not just a community - we're a movement shaping Kenya's digital future.
                </Typography>
              </AnimateBox>

              <AnimateBox className={isVisible ? 'visible' : ''} sx={{ mb: 3 }}>
                <Typography
                  variant="h4"
                  component="h2"
                  gutterBottom
                  sx={{
                    fontWeight: 'bold',
                    color: theme.palette.secondary.main,
                    mb: 2
                  }}
                >
                  Our Vision
                </Typography>
              </AnimateBox>

              <AnimateBox className={isVisible ? 'visible' : ''} sx={{ mb: 3 }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.secondary,
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    mb: 4
                  }}
                >
                  To be a premier organization of tech-savvy and entrepreneurial-minded Kenyan youth, majority female, in the digital space with a global perspective. We aim to be the driving force behind Kenya's digital transformation.
                </Typography>
              </AnimateBox>

              <AnimateBox className={isVisible ? 'visible' : ''} sx={{ mb: 3 }}>
                <Typography
                  variant="h4"
                  component="h2"
                  gutterBottom
                  sx={{
                    fontWeight: 'bold',
                    color: theme.palette.secondary.main,
                    mb: 2
                  }}
                >
                  Our Mission
                </Typography>
              </AnimateBox>

              <AnimateBox className={isVisible ? 'visible' : ''} sx={{ mb: 3 }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.secondary,
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    mb: 4
                  }}
                >
                  Kujia's mission is to foster an organization of tech-savvy and entrepreneurial-minded Kenyan youth, majority female, in the digital space. We empower our members and promote ICT for Development in Kenya, creating opportunities and driving innovation.
                </Typography>
              </AnimateBox>
            </Grid>

            <Grid item xs={12} md={6}>
              <AnimateBox className={isVisible ? 'visible' : ''}>
                <Box
                  sx={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: theme.palette.primary.light,
                    borderRadius: 2,
                    p: 4,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                  }}
                >
                  <Typography
                    variant="h5"
                    align="center"
                    sx={{
                      color: theme.palette.primary.contrastText,
                      fontWeight: 'bold',
                      lineHeight: 1.6
                    }}
                  >
                    Join the Digital Revolution
                    <br />
                    Be part of Kenya's tech future
                  </Typography>
                </Box>
              </AnimateBox>
            </Grid>
          </Grid>
        </Paper>
      </AnimateBox>
    </Container>
  );
};

export default LearnMore;
