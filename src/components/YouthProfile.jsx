import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Button, 
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  useTheme 
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const YouthProfile = () => {
  const theme = useTheme();
  const techDomains = [
    'Software Development',
    'Data Analytics',
    'Cybersecurity',
    'AI',
    'Digital Marketing',
    'Cloud Computing',
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4">My Profile</Typography>
        <Button 
          variant="contained" 
          color="primary" 
          component={RouterLink} 
          to="/edit-profile"
        >
          Edit Profile
        </Button>
      </Box>

      <Grid container spacing={4}>
        {/* Profile Info Card */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Personal Information
              </Typography>
              <Box sx={{ mt: 2 }}>
                <TextField
                  fullWidth
                  label="Full Name"
                  defaultValue="John Doe"
                  disabled
                />
                <TextField
                  fullWidth
                  label="Email"
                  defaultValue="john@example.com"
                  disabled
                  sx={{ mt: 2 }}
                />
                <TextField
                  fullWidth
                  label="Phone Number"
                  defaultValue="+254 712 345 678"
                  disabled
                  sx={{ mt: 2 }}
                />
                <TextField
                  fullWidth
                  label="Age"
                  defaultValue="25"
                  disabled
                  sx={{ mt: 2 }}
                />
                <TextField
                  fullWidth
                  label="County"
                  defaultValue="Nairobi"
                  disabled
                  sx={{ mt: 2 }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Professional Info Card */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Professional Information
              </Typography>
              <Box sx={{ mt: 2 }}>
                <FormControl fullWidth sx={{ mt: 2 }}>
                  <InputLabel>Tech Domain</InputLabel>
                  <Select
                    defaultValue="Software Development"
                    disabled
                  >
                    {techDomains.map((domain) => (
                      <MenuItem key={domain} value={domain}>
                        {domain}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <TextField
                  fullWidth
                  label="LinkedIn Profile"
                  defaultValue="https://linkedin.com/in/john-doe"
                  disabled
                  sx={{ mt: 2 }}
                />
                <TextField
                  fullWidth
                  label="GitHub Profile"
                  defaultValue="https://github.com/john-doe"
                  disabled
                  sx={{ mt: 2 }}
                />
                <TextField
                  fullWidth
                  label="Portfolio URL"
                  defaultValue="https://john-doe-portfolio.com"
                  disabled
                  sx={{ mt: 2 }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Job Applications Card */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Applied Jobs
              </Typography>
              <Box sx={{ mt: 2 }}>
                {/* Job applications will be listed here */}
                <Typography variant="body2" color="text.secondary">
                  No job applications yet
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default YouthProfile;
