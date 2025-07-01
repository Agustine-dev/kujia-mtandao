import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Button, 
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  useTheme 
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const EmployerProfile = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4">Employer Dashboard</Typography>
        <Button 
          variant="contained" 
          color="primary" 
          component={RouterLink} 
          to="/post-job"
        >
          Post New Job
        </Button>
      </Box>

      <Grid container spacing={4}>
        {/* Company Info Card */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Company Information
              </Typography>
              <Box sx={{ mt: 2 }}>
                <TextField
                  fullWidth
                  label="Company Name"
                  defaultValue="Tech Solutions Ltd"
                  disabled
                />
                <TextField
                  fullWidth
                  label="Email"
                  defaultValue="hr@techsolutions.com"
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
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Posted Jobs Card */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Posted Jobs
              </Typography>
              <Box sx={{ mt: 2 }}>
                {/* Job listings will be shown here */}
                <Typography variant="body2" color="text.secondary">
                  No jobs posted yet
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Candidates Card */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Applied Candidates
              </Typography>
              <Box sx={{ mt: 2 }}>
                {/* Candidate applications will be listed here */}
                <Typography variant="body2" color="text.secondary">
                  No candidates yet
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Donations Card */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Donations
              </Typography>
              <Box sx={{ mt: 2 }}>
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel>Donation Purpose</InputLabel>
                  <Select>
                    <MenuItem value="scholarships">Scholarships</MenuItem>
                    <MenuItem value="devices">Devices</MenuItem>
                    <MenuItem value="grants">ICT Business Grants</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  fullWidth
                  label="Amount"
                  type="number"
                  InputProps={{
                    startAdornment: 'KES',
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Make Donation
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EmployerProfile;
