import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  styled,
  Chip,
  Box,
  Link
} from '@mui/material';
import { 
  ArrowForward, 
  Phone,
  Email,
  LocationOn,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  GitHub,
  SmartToy,
  Analytics,
  Security,
  Code,
  Storage,
  Security as CyberSecurity,
  Campaign,
  Cloud,
  Business,
  School,
  Shield,
  CloudUpload,
  CloudDownload,
  CloudQueue,
  CloudDone
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import YouthProfile from './YouthProfile';
import EmployerProfile from './EmployerProfile';

const StyledHero = styled(Box)(({ theme }) => ({
  backgroundImage: 'url(https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '80vh',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  backgroundAttachment: 'fixed',
}));

const StyledOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  backdropFilter: 'blur(4px)',
  zIndex: 1,
}));

const chaptersData = {
  regions: [
    {
      title: 'Nairobi',
      chapters: [
        'Kujia Techies Nairobi (17)',
        'Kujia Techies Kiambu',
        'Kujia Techies Diaspora'
      ]
    },
    {
      title: 'Lower Eastern',
      chapters: [
        'Kujia Techies Machakos',
        'Kujia Techies Kitui',
        'Kujia Techies Makueni',
        'Kujia Techies Kajiado'
      ]
    },
    {
      title: 'Coast Region',
      chapters: [
        'Kujia Techies Mombasa',
        'Kujia Techies Kilifi',
        'Kujia Techies Kwale',
        'Kujia Techies Taita Taveta',
        'Kujia Techies Tana River',
        'Kujia Techies Lamu'
      ]
    },
    {
      title: 'North Eastern',
      chapters: [
        'Kujia Techies Garissa',
        'Kujia Techies Wajir',
        'Kujia Techies Mandera'
      ]
    },
    {
      title: 'Central Region',
      chapters: [
        'Kujia Techies Laikipia',
        'Kujia Techies Muranga',
        'Kujia Techies Nyeri',
        'Kujia Techies Kirinyaga',
        'Kujia Techies Nyandarua'
      ]
    },
    {
      title: 'Upper Eastern',
      chapters: [
        'Kujia Techies Meru',
        'Kujia Techies Embu',
        'Kujia Techies Tharaka-Nthi'
      ]
    },
    {
      title: 'North Rift',
      chapters: [
        'Kujia Techies Uasin Gishu',
        'Kujia Techies West Pokot',
        'Kujia Techies Baringo',
        'Kujia Techies Nandi',
        'Kujia Techies Elgeyo Marakwet'
      ]
    },
    {
      title: 'Northern',
      chapters: [
        'Kujia Techies Turkana',
        'Kujia Techies Marsabit',
        'Kujia Techies Isiolo',
        'Kujia Techies Samburu'
      ]
    },
    {
      title: 'South Rift',
      chapters: [
        'Kujia Techies Nakuru',
        'Kujia Techies Bomet',
        'Kujia Techies Nandi',
        'Kujia Techies Kericho'
      ]
    },
    {
      title: 'South Nyanza',
      chapters: [
        'Kujia Techies Kisii',
        'Kujia Techies Homabay',
        'Kujia Techies Migori',
        'Kujia Techies Nyamira'
      ]
    },
    {
      title: 'Central Nyanza',
      chapters: [
        'Kujia Techies Kisumu',
        'Kujia Techies Siaya'
      ]
    },
    {
      title: 'Western',
      chapters: [
        'Kujia Techies Kakamega',
        'Kujia Techies Bungoma',
        'Kujia Techies Trans Zoia',
        'Kujia Techies Vihiga',
        'Kujia Techies Busia'
      ]
    }
  ],
  about: {
    title: "Kujia Techies for Chapters",
    description: "Kujia has Local Associations known as Chapters for Kenyan Youth in Digital Space aged 18-35, some are students, some are professionals and some are entrepreneurs specialized in Digital Marketing and Reselling, Data Analytics, Software Development, Artificial Intelligence, Cloud Computing, and Cybersecurity.",
    benefits: [
      "Home of a tech-savvy and entrepreneurial-minded Kenyan youth with a global perspective",
      "A Kujia Chapter is a Home to Kenyan Youth in Digital Marketing, Data Analytics, Software Development, Artificial Intelligence, Cloud Computing and Cybersecurity",
      "Occupation of Kujia Techies: Kenyan Students, Professionals, Entrepreneurs, in Digital Marketing, Data Analytics, Software Development, Artificial Intelligence, Cloud Computing, and Cybersecurity"
    ],
    chaptersInfo: {
      total: "17 Nairobi Only, 46 County Chapters, and 16 Diaspora Chapters for Kenyan Techies Outside the Country",
      callToAction: "Join a chapter near You"
    }
  }
};

const LandingPage = () => {
  const [showForm, setShowForm] = React.useState(false);
  const [formType, setFormType] = React.useState('');

  const handleRegister = (type) => {
    setShowForm(true);
    setFormType(type);
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', overflow: 'hidden' }}>
      {/* Navigation */}
      <AppBar position="static" color="primary" elevation={0} sx={{ mb: 4 }}>
        <Toolbar sx={{ px: { xs: 1, sm: 2, md: 4 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mr: 2 }}>
            <Typography 
              variant="h6" 
              color="white" 
              sx={{ 
                display: { xs: 'none', sm: 'block' },
                fontWeight: 600,
                letterSpacing: '0.5px'
              }}
            >
              Kujia Techies Jobs
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Button
            component={RouterLink}
            to="/register/youth"
            color="inherit"
            variant="outlined"
            sx={{ 
              mr: 2, 
              borderRadius: 2, 
              textTransform: 'none', 
              px: 3, 
              py: 1.5, 
              fontSize: '1rem'
            }}
          >
            Register as Youth
          </Button>
          <Button
            component={RouterLink}
            to="/register/employer"
            color="inherit"
            variant="contained"
            sx={{ 
              borderRadius: 2, 
              textTransform: 'none', 
              px: 3, 
              py: 1.5, 
              fontSize: '1rem'
            }}
          >
            Register as Employer
          </Button>
        </Toolbar>
      </AppBar>

      {/* Form Overlay */}
      {showForm && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1300
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              maxWidth: 1200,
              bgcolor: 'background.paper',
              borderRadius: 2,
              p: 4
            }}
          >
            <Button
              onClick={() => setShowForm(false)}
              sx={{
                position: 'absolute',
                right: 16,
                top: 16,
                color: 'primary.main',
                '&:hover': {
                  bgcolor: 'primary.light'
                }
              }}
            >
              Close
            </Button>
            {formType === 'youth' ? (
              <YouthProfile />
            ) : (
              <EmployerProfile />
            )}
          </Box>
        </Box>
      )}

      {/* Hero Section */}
      <StyledHero>
        <StyledOverlay />
        <Container maxWidth="lg">
          <Box sx={{ 
            textAlign: 'center', 
            position: 'relative', 
            zIndex: 2,
            mb: { xs: 4, md: 8 },
            px: 2
          }}>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                color: 'white',
                fontWeight: 700,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                mb: 2,
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                lineHeight: 1.2
              }}
            >
              Welcome to Kujia Techies Jobs
            </Typography>
            <Typography
              variant="h4"
              color="white"
              sx={{
                mb: 4,
                fontSize: { xs: '1.2rem', md: '1.5rem' },
                opacity: 0.9,
                textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
              }}
            >
              Connecting talented youth with amazing opportunities
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              gap: 3, 
              justifyContent: 'center', 
              mb: 6,
              mt: 4,
              flexWrap: 'wrap'
            }}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                endIcon={<ArrowForward />}
                sx={{
                  px: 5,
                  py: 2.5,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: 4
                  }
                }}
              >
                Get Started
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                size="large"
                sx={{
                  px: 5,
                  py: 2.5,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: 4
                  }
                }}
              >
                Learn More
              </Button>
            </Box>
          </Box>
        </Container>
      </StyledHero>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: 3,
                boxShadow: 3,
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)'
                }
              }}
            >
              <SmartToy sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography
                variant="h5"
                align="center"
                sx={{ mb: 2 }}
              >
                AI-Powered Matching
              </Typography>
              <Typography
                variant="body1"
                align="center"
                sx={{ color: 'text.secondary' }}
              >
                Our advanced AI system matches you with the perfect job opportunities
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: 3,
                boxShadow: 3,
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)'
                }
              }}
            >
              <Analytics sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography
                variant="h5"
                align="center"
                sx={{ mb: 2 }}
              >
                Data-Driven Insights
              </Typography>
              <Typography
                variant="body1"
                align="center"
                sx={{ color: 'text.secondary' }}
              >
                Get insights into job market trends and your application status
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: 3,
                boxShadow: 3,
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)'
                }
              }}
            >
              <Security sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography
                variant="h5"
                align="center"
                sx={{ mb: 2 }}
              >
                Secure Platform
              </Typography>
              <Typography
                variant="body1"
                align="center"
                sx={{ color: 'text.secondary' }}
              >
                Your data is protected with our enterprise-grade security measures
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Tech Domains Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 }, mt: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            Our Tech Domains
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            paragraph
            sx={{ maxWidth: 600, mx: 'auto' }}
          >
            Discover our expertise in cutting-edge technology solutions designed to help you succeed in the digital age
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Software Development */}
          <Grid item xs={12} md={6} lg={4}>
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
                  boxShadow: 6
                }
              }}
            >
              <CardContent sx={{ flexGrow: 1, p: 4 }}>
                <Box sx={{ 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 3,
                  bgcolor: 'primary.light',
                  borderRadius: 2,
                  p: 2,
                  width: '80px',
                  height: '80px'
                }}>
                  <Code sx={{ fontSize: 48, color: 'primary.main' }} />
                </Box>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h3"
                  sx={{ mb: 2 }}
                >
                  Software Development
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  paragraph
                >
                  We specialize in developing robust, scalable, and maintainable software solutions using modern technologies and best practices.
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                  <Chip
                    label="React"
                    size="small"
                    sx={{ bgcolor: 'primary.light', color: 'primary.main' }}
                  />
                  <Chip
                    label="Node.js"
                    size="small"
                    sx={{ bgcolor: 'primary.light', color: 'primary.main' }}
                  />
                  <Chip
                    label="TypeScript"
                    size="small"
                    sx={{ bgcolor: 'primary.light', color: 'primary.main' }}
                  />
                  <Chip
                    label="Python"
                    size="small"
                    sx={{ bgcolor: 'primary.light', color: 'primary.main' }}
                  />
                  <Chip
                    label="Java"
                    size="small"
                    sx={{ bgcolor: 'primary.light', color: 'primary.main' }}
                  />
                </Box>
              </CardContent>
              <Button
                fullWidth
                variant="text"
                color="primary"
                size="small"
                component={Link}
                to="#software-development"
                sx={{ 
                  mt: 2, 
                  textTransform: 'none',
                  fontWeight: 500,
                  fontSize: '1rem'
                }}
              >
                Learn More
              </Button>
            </Card>
          </Grid>

          {/* Data Analytics */}
          <Grid item xs={12} md={6} lg={4}>
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
                  boxShadow: 6
                }
              }}
            >
              <CardContent sx={{ flexGrow: 1, p: 4 }}>
                <Box sx={{ 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 3,
                  bgcolor: 'secondary.light',
                  borderRadius: 2,
                  p: 2,
                  width: '80px',
                  height: '80px'
                }}>
                  <Analytics sx={{ fontSize: 48, color: 'secondary.main' }} />
                </Box>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h3"
                  sx={{ mb: 2 }}
                >
                  Data Analytics
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  paragraph
                >
                  Transform raw data into meaningful insights using advanced analytics and visualization tools to drive business decisions.
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                  <Chip
                    label="Big Data"
                    size="small"
                    sx={{ bgcolor: 'secondary.light', color: 'secondary.main' }}
                  />
                  <Chip
                    label="AI"
                    size="small"
                    sx={{ bgcolor: 'secondary.light', color: 'secondary.main' }}
                  />
                  <Chip
                    label="ML"
                    size="small"
                    sx={{ bgcolor: 'secondary.light', color: 'secondary.main' }}
                  />
                  <Chip
                    label="SQL"
                    size="small"
                    sx={{ bgcolor: 'secondary.light', color: 'secondary.main' }}
                  />
                  <Chip
                    label="BI"
                    size="small"
                    sx={{ bgcolor: 'secondary.light', color: 'secondary.main' }}
                  />
                </Box>
              </CardContent>
              <Button
                fullWidth
                variant="text"
                color="primary"
                size="small"
                component={Link}
                to="#data-analytics"
                sx={{ 
                  mt: 2, 
                  textTransform: 'none',
                  fontWeight: 500,
                  fontSize: '1rem'
                }}
              >
                Learn More
              </Button>
            </Card>
          </Grid>

          {/* Cybersecurity */}
          <Grid item xs={12} md={6} lg={4}>
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
                  boxShadow: 6
                }
              }}
            >
              <CardContent sx={{ flexGrow: 1, p: 4 }}>
                <Box sx={{ 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 3,
                  bgcolor: 'error.light',
                  borderRadius: 2,
                  p: 2,
                  width: '80px',
                  height: '80px'
                }}>
                  <CyberSecurity sx={{ fontSize: 48, color: 'error.main' }} />
                </Box>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h3"
                  sx={{ mb: 2 }}
                >
                  Cybersecurity
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  paragraph
                >
                  Protect your digital assets with our comprehensive security solutions and threat intelligence services.
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                  <Chip
                    label="Pen Testing"
                    size="small"
                    sx={{ bgcolor: 'error.light', color: 'error.main' }}
                  />
                  <Chip
                    label="Firewall"
                    size="small"
                    sx={{ bgcolor: 'error.light', color: 'error.main' }}
                  />
                  <Chip
                    label="Encryption"
                    size="small"
                    sx={{ bgcolor: 'error.light', color: 'error.main' }}
                  />
                  <Chip
                    label="SIEM"
                    size="small"
                    sx={{ bgcolor: 'error.light', color: 'error.main' }}
                  />
                  <Chip
                    label="SOC"
                    size="small"
                    sx={{ bgcolor: 'error.light', color: 'error.main' }}
                  />
                </Box>
              </CardContent>
              <Button
                fullWidth
                variant="text"
                color="primary"
                size="small"
                component={Link}
                to="#cybersecurity"
                sx={{ 
                  mt: 2, 
                  textTransform: 'none',
                  fontWeight: 500,
                  fontSize: '1rem'
                }}
              >
                Learn More
              </Button>
            </Card>
          </Grid>

          {/* Digital Marketing */}
          <Grid item xs={12} md={6} lg={4}>
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
                  boxShadow: 6
                }
              }}
            >
              <CardContent sx={{ flexGrow: 1, p: 4 }}>
                <Box sx={{ 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 3,
                  bgcolor: 'success.light',
                  borderRadius: 2,
                  p: 2,
                  width: '80px',
                  height: '80px'
                }}>
                  <Campaign sx={{ fontSize: 48, color: 'success.main' }} />
                </Box>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h3"
                  sx={{ mb: 2 }}
                >
                  Digital Marketing
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  paragraph
                >
                  Reach your target audience through strategic digital marketing campaigns and analytics-driven strategies.
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                  <Chip
                    label="SEO"
                    size="small"
                    sx={{ bgcolor: 'success.light', color: 'success.main' }}
                  />
                  <Chip
                    label="SEM"
                    size="small"
                    sx={{ bgcolor: 'success.light', color: 'success.main' }}
                  />
                  <Chip
                    label="SMM"
                    size="small"
                    sx={{ bgcolor: 'success.light', color: 'success.main' }}
                  />
                  <Chip
                    label="Content"
                    size="small"
                    sx={{ bgcolor: 'success.light', color: 'success.main' }}
                  />
                  <Chip
                    label="Analytics"
                    size="small"
                    sx={{ bgcolor: 'success.light', color: 'success.main' }}
                  />
                </Box>
              </CardContent>
              <Button
                fullWidth
                variant="text"
                color="primary"
                size="small"
                component={Link}
                to="#digital-marketing"
                sx={{ 
                  mt: 2, 
                  textTransform: 'none',
                  fontWeight: 500,
                  fontSize: '1rem'
                }}
              >
                Learn More
              </Button>
            </Card>
          </Grid>

          {/* AI & Machine Learning */}
          <Grid item xs={12} md={6} lg={4}>
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
                  boxShadow: 6
                }
              }}
            >
              <CardContent sx={{ flexGrow: 1, p: 4 }}>
                <Box sx={{ 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 3,
                  bgcolor: 'info.light',
                  borderRadius: 2,
                  p: 2,
                  width: '80px',
                  height: '80px'
                }}>
                  <SmartToy sx={{ fontSize: 48, color: 'info.main' }} />
                </Box>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h3"
                  sx={{ mb: 2 }}
                >
                  AI & Machine Learning
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  paragraph
                >
                  Implement intelligent solutions using machine learning and AI to automate processes and enhance decision-making.
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                  <Chip
                    label="ML"
                    size="small"
                    sx={{ bgcolor: 'info.light', color: 'info.main' }}
                  />
                  <Chip
                    label="NLP"
                    size="small"
                    sx={{ bgcolor: 'info.light', color: 'info.main' }}
                  />
                  <Chip
                    label="CV"
                    size="small"
                    sx={{ bgcolor: 'info.light', color: 'info.main' }}
                  />
                  <Chip
                    label="DL"
                    size="small"
                    sx={{ bgcolor: 'info.light', color: 'info.main' }}
                  />
                  <Chip
                    label="GPT"
                    size="small"
                    sx={{ bgcolor: 'info.light', color: 'info.main' }}
                  />
                </Box>
              </CardContent>
              <Button
                fullWidth
                variant="text"
                color="primary"
                size="small"
                component={Link}
                to="#ai-machine-learning"
                sx={{ 
                  mt: 2, 
                  textTransform: 'none',
                  fontWeight: 500,
                  fontSize: '1rem'
                }}
              >
                Learn More
              </Button>
            </Card>
          </Grid>

          {/* Cloud Computing */}
          <Grid item xs={12} md={6} lg={4}>
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
                  boxShadow: 6
                }
              }}
            >
              <CardContent sx={{ flexGrow: 1, p: 4 }}>
                <Box sx={{ 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 3,
                  bgcolor: 'warning.light',
                  borderRadius: 2,
                  p: 2,
                  width: '80px',
                  height: '80px'
                }}>
                  <Cloud sx={{ fontSize: 48, color: 'warning.main' }} />
                </Box>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h3"
                  sx={{ mb: 2 }}
                >
                  Cloud Computing
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  paragraph
                >
                  Build scalable and resilient cloud infrastructure using modern cloud-native technologies and best practices.
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                  <Chip
                    label="AWS"
                    size="small"
                    sx={{ bgcolor: 'warning.light', color: 'warning.main' }}
                  />
                  <Chip
                    label="Azure"
                    size="small"
                    sx={{ bgcolor: 'warning.light', color: 'warning.main' }}
                  />
                  <Chip
                    label="GCP"
                    size="small"
                    sx={{ bgcolor: 'warning.light', color: 'warning.main' }}
                  />
                  <Chip
                    label="K8s"
                    size="small"
                    sx={{ bgcolor: 'warning.light', color: 'warning.main' }}
                  />
                  <Chip
                    label="Serverless"
                    size="small"
                    sx={{ bgcolor: 'warning.light', color: 'warning.main' }}
                  />
                </Box>
              </CardContent>
              <Button
                fullWidth
                variant="text"
                color="primary"
                size="small"
                component={Link}
                to="#cloud-computing"
                sx={{ 
                  mt: 2, 
                  textTransform: 'none',
                  fontWeight: 500,
                  fontSize: '1rem'
                }}
              >
                Learn More
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
      <Box sx={{ bgcolor: 'background.default', py: 4 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography
              variant="body2"
              color="text.secondary"
            >
              &copy; {new Date().getFullYear()} Kujia Techies. All rights reserved.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton
                color="inherit"
                size="small"
              >
                <Facebook />
              </IconButton>
              <IconButton
                color="inherit"
                size="small"
              >
                <Twitter />
              </IconButton>
              <IconButton
                color="inherit"
                size="small"
              >
                <Instagram />
              </IconButton>
              <IconButton
                color="inherit"
                size="small"
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                color="inherit"
                size="small"
              >
                <GitHub />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;
