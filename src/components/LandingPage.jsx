import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  Box,
  CardMedia,
  Paper,
  Avatar,
  Rating,
  IconButton,
  Stack,
  Divider,
  styled
} from '@mui/material';
import { 
  ArrowForward, 
  ArrowBack, 
  Facebook, 
  Twitter, 
  Instagram, 
  LinkedIn,
  Email,
  Phone,
  LocationOn,
  Business
} from '@mui/icons-material';
import logo from '../assets/logo.png';

const StyledHero = styled(Box)(({ theme }) => ({
  backgroundImage: 'url(https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  minHeight: '80vh',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
}));

const StyledOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  backdropFilter: 'blur(4px)',
}));

const LandingPage = () => {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Navigation */}
      <AppBar position="static" color="primary" elevation={0}>
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mr: 2 }}>
            <Avatar sx={{ bgcolor: 'white', color: 'primary.main' }}>
              <img src={logo} alt="Kujia Techies Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </Avatar>
            <Typography variant="h6" color="white" sx={{ display: { xs: 'none', sm: 'block' } }}>
              Kujia Techies Jobs
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Button
            component={RouterLink}
            to="/register/youth"
            color="inherit"
            sx={{ mr: 2 }}
          >
            Register as Youth
          </Button>
          <Button
            component={RouterLink}
            to="/register/employer"
            color="inherit"
          >
            Register as Employer
          </Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <StyledHero>
        <StyledOverlay />
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', position: 'relative', zIndex: 1, mb: { xs: 4, md: 8 } }}>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                mb: 3,
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 'bold',
                background: 'linear-gradient(45deg, #2196F3, #4CAF50)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.02em',
              }}
            >
              Welcome to Kujia Techies Jobs
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                mb: 4,
                fontSize: { xs: '1.5rem', md: '2rem' },
                color: 'white',
                textAlign: 'center',
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.5,
              }}
            >
              Connecting Kenyan youth with ICT opportunities through innovative job matching and skill development programs
            </Typography>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} justifyContent="center">
              <Button
                component={RouterLink}
                to="/register/youth"
                variant="contained"
                color="primary"
                size="large"
                startIcon={<Email />}
                sx={{
                  px: 4,
                  py: 2,
                  fontSize: '1.1rem',
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: 6,
                  },
                }}
              >
                Register as Youth
              </Button>
              <Button
                component={RouterLink}
                to="/register/employer"
                variant="outlined"
                color="primary"
                size="large"
                startIcon={<Business />}
                sx={{
                  px: 4,
                  py: 2,
                  fontSize: '1.1rem',
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: 6,
                  },
                }}
              >
                Register as Employer
              </Button>
            </Stack>
          </Box>
        </Container>
      </StyledHero>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" component="h2" align="center" sx={{ mb: 6, fontWeight: 'bold' }}>
          Our Services
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 4 }}>
              <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
                Job Matching
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ flex: 1 }}>
                We connect talented youth with the right job opportunities based on their skills and experience
              </Typography>
              <Button
                component={RouterLink}
                to="/register/youth"
                color="primary"
                sx={{ mt: 2 }}
              >
                Learn More
              </Button>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 4 }}>
              <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
                Skill Development
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ flex: 1 }}>
                Access training programs and workshops to enhance your technical skills and employability
              </Typography>
              <Button
                component={RouterLink}
                to="/register/youth"
                color="primary"
                sx={{ mt: 2 }}
              >
                Learn More
              </Button>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 4 }}>
              <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
                Employer Services
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ flex: 1 }}>
                Find and hire talented youth for your organization's technical needs
              </Typography>
              <Button
                component={RouterLink}
                to="/register/employer"
                color="primary"
                sx={{ mt: 2 }}
              >
                Learn More
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Divider between sections */}
      <Box sx={{ 
        bgcolor: 'divider',
        height: 1,
        my: 8,
        width: '100%'
      }} />

      {/* Tech Domains Section */}
      <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h2" 
            component="h2" 
            align="center" 
            sx={{ 
              fontWeight: 'bold',
              mb: 6,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: 'primary.main'
            }}
          >
            Our Tech Domains
          </Typography>
          
          <Grid container spacing={4}>
            {/* Software Development */}
            <Grid item xs={12} sm={6} md={3}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: 'background.paper',
                  boxShadow: 3,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  width="100%"
                  image="https://images.unsplash.com/photo-1518770660439-4636193af1ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                  alt="Software Development"
                  sx={{ 
                    objectFit: 'cover',
                    background: '#f5f5f5',
                    borderRadius: 1,
                    transition: 'opacity 0.3s ease',
                    '&:hover': {
                      opacity: 0.9
                    },
                    '&.MuiCardMedia-root': {
                      width: '100%'
                    }
                  }}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography gutterBottom variant="h5" component="h3">
                    Software Development
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Expertise in modern web and mobile applications
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Data Analytics */}
            <Grid item xs={12} sm={6} md={3}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: 'background.paper',
                  boxShadow: 3,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  width="100%"
                  image="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                  alt="Data Analytics"
                  sx={{ 
                    objectFit: 'cover',
                    background: '#f5f5f5',
                    borderRadius: 1,
                    transition: 'opacity 0.3s ease',
                    '&:hover': {
                      opacity: 0.9
                    },
                    '&.MuiCardMedia-root': {
                      width: '100%'
                    }
                  }}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography gutterBottom variant="h5" component="h3">
                    Data Analytics
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Transforming data into actionable insights
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Cybersecurity */}
            <Grid item xs={12} sm={6} md={3}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: 'background.paper',
                  boxShadow: 3,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  width="100%"
                  image="https://images.unsplash.com/photo-1589821744172-9bba9f2c9b4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                  alt="Cybersecurity"
                  sx={{ 
                    objectFit: 'cover',
                    background: '#f5f5f5',
                    borderRadius: 1,
                    transition: 'opacity 0.3s ease',
                    '&:hover': {
                      opacity: 0.9
                    },
                    '&.MuiCardMedia-root': {
                      width: '100%'
                    }
                  }}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography gutterBottom variant="h5" component="h3">
                    Cybersecurity
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Protecting your digital assets
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* AI */}
            <Grid item xs={12} sm={6} md={3}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: 'background.paper',
                  boxShadow: 3,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  width="100%"
                  image="https://images.unsplash.com/photo-1589821744172-9bba9f2c9b4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                  alt="Artificial Intelligence"
                  sx={{ 
                    objectFit: 'cover',
                    background: '#f5f5f5',
                    borderRadius: 1,
                    transition: 'opacity 0.3s ease',
                    '&:hover': {
                      opacity: 0.9
                    },
                    '&.MuiCardMedia-root': {
                      width: '100%'
                    }
                  }}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography gutterBottom variant="h5" component="h3">
                    Artificial Intelligence
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Smart solutions for modern challenges
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Digital Marketing */}
            <Grid item xs={12} sm={6} md={3}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: 'background.paper',
                  boxShadow: 3,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  width="100%"
                  image="https://images.unsplash.com/photo-1589821744172-9bba9f2c9b4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                  alt="Digital Marketing"
                  sx={{ 
                    objectFit: 'cover',
                    background: '#f5f5f5',
                    borderRadius: 1,
                    transition: 'opacity 0.3s ease',
                    '&:hover': {
                      opacity: 0.9
                    },
                    '&.MuiCardMedia-root': {
                      width: '100%'
                    }
                  }}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography gutterBottom variant="h5" component="h3">
                    Digital Marketing
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Reaching your audience effectively
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Cloud Computing */}
            <Grid item xs={12} sm={6} md={3}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: 'background.paper',
                  boxShadow: 3,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  width="100%"
                  image="https://images.unsplash.com/photo-1589821744172-9bba9f2c9b4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                  alt="Cloud Computing"
                  sx={{ 
                    objectFit: 'cover',
                    background: '#f5f5f5',
                    borderRadius: 1,
                    transition: 'opacity 0.3s ease',
                    '&:hover': {
                      opacity: 0.9
                    },
                    '&.MuiCardMedia-root': {
                      width: '100%'
                    }
                  }}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography gutterBottom variant="h5" component="h3">
                    Cloud Computing
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Scalable and secure infrastructure
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ 
        bgcolor: 'rgba(0,0,0,0.9)', 
        backdropFilter: 'blur(10px)', 
        color: 'white', 
        pt: 12,
        pb: 12,
        px: { xs: 2, md: 4 }
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 4 }}>
                  <Avatar sx={{ 
                    bgcolor: 'white', 
                    color: 'primary.main', 
                    width: 64,
                    height: 64
                  }}>
                    <img src={logo} alt="Kujia Techies Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </Avatar>
                  <Typography variant="h6" component="h3" sx={{ 
                    fontWeight: 'bold',
                    fontSize: '1.5rem'
                  }}>
                    Kujia Techies Jobs
                  </Typography>
                </Box>
                <Typography variant="body1" color="text.secondary" sx={{ 
                  opacity: 0.9,
                  lineHeight: 1.6,
                  fontSize: '1rem'
                }}>
                  Connecting Kenyan youth with ICT opportunities through innovative job matching and skill development programs.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Stack spacing={4}>
                <Typography variant="h6" component="h3" sx={{ 
                  fontWeight: 'bold',
                  fontSize: '1.25rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Quick Links
                </Typography>
                <Stack direction="column" spacing={2}>
                  <Button
                    component={RouterLink}
                    to="/register/youth"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      textTransform: 'none',
                      color: 'text.primary',
                      fontSize: '1rem',
                      '&:hover': {
                        color: 'primary.main',
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    <Email sx={{ fontSize: '1.2rem' }} />
                    Register as Youth
                  </Button>
                  <Button
                    component={RouterLink}
                    to="/register/employer"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      textTransform: 'none',
                      color: 'text.primary',
                      fontSize: '1rem',
                      '&:hover': {
                        color: 'primary.main',
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    <Business sx={{ fontSize: '1.2rem' }} />
                    Register as Employer
                  </Button>
                </Stack>
              </Stack>
            </Grid>

            <Grid item xs={12} md={4}>
              <Stack spacing={4}>
                <Typography variant="h6" component="h3" sx={{ 
                  fontWeight: 'bold',
                  fontSize: '1.25rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Contact Us
                </Typography>
                <Stack direction="column" spacing={3}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                    <Email sx={{ color: 'primary.main', fontSize: '1.8rem' }} />
                    <Typography variant="body1" color="text.secondary" sx={{ 
                      fontSize: '1rem',
                      opacity: 0.9,
                      lineHeight: 1.5
                    }}>
                      info@kujiatechies.com
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                    <Phone sx={{ color: 'primary.main', fontSize: '1.8rem' }} />
                    <Typography variant="body1" color="text.secondary" sx={{ 
                      fontSize: '1rem',
                      opacity: 0.9,
                      lineHeight: 1.5
                    }}>
                      +254 700 123 456
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                    <LocationOn sx={{ color: 'primary.main', fontSize: '1.8rem' }} />
                    <Typography variant="body1" color="text.secondary" sx={{ 
                      fontSize: '1rem',
                      opacity: 0.9,
                      lineHeight: 1.5
                    }}>
                      Nairobi, Kenya
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            </Grid>
          </Grid>

          <Divider sx={{ 
            my: 6, 
            borderColor: 'rgba(255,255,255,0.1)',
            width: '100%'
          }} />

          <Grid container spacing={4} justifyContent="center" alignItems="center">
            <Grid item>
              <IconButton 
                sx={{ 
                  color: 'white',
                  '&:hover': {
                    color: 'primary.main'
                  }
                }}
              >
                <Facebook sx={{ fontSize: '1.8rem' }} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton 
                sx={{ 
                  color: 'white',
                  '&:hover': {
                    color: 'primary.main'
                  }
                }}
              >
                <Twitter sx={{ fontSize: '1.8rem' }} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton 
                sx={{ 
                  color: 'white',
                  '&:hover': {
                    color: 'primary.main'
                  }
                }}
              >
                <Instagram sx={{ fontSize: '1.8rem' }} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton 
                sx={{ 
                  color: 'white',
                  '&:hover': {
                    color: 'primary.main'
                  }
                }}
              >
                <LinkedIn sx={{ fontSize: '1.8rem' }} />
              </IconButton>
            </Grid>
          </Grid>

          <Typography variant="body2" color="text.secondary" align="center" sx={{ 
            mt: 4, 
            opacity: 0.7,
            fontSize: '1rem'
          }}>
            &copy; {new Date().getFullYear()} Kujia Techies Jobs. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;
