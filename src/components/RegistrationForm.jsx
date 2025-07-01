import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  styled,
  Radio,
  RadioGroup,
  FormLabel
} from '@mui/material';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: 2,
  boxShadow: 4,
  backgroundColor: theme.palette.background.paper,
  maxWidth: 600,
  margin: '0 auto',
  animation: 'fadeIn 0.5s ease-in',
  '@keyframes fadeIn': {
    '0%': { opacity: 0, transform: 'translateY(-20px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' }
  }
}));

const RegistrationForm = ({ type }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    experience: '',
    skills: [],
    termsAccepted: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { type, formData });
  };

  return (
    <Container maxWidth="sm">
      <StyledPaper>
        <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
          {type === 'youth' ? 'Youth Registration' : 'Employer Registration'}
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* Common Fields */}
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Phone Number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
              />
            </Grid>

            {/* Type-specific Fields */}
            {type === 'youth' ? (
              <>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>Current Status</InputLabel>
                    <Select
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      label="Current Status"
                    >
                      <MenuItem value="student">Student</MenuItem>
                      <MenuItem value="professional">Professional</MenuItem>
                      <MenuItem value="entrepreneur">Entrepreneur</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Area of Expertise"
                    name="expertise"
                    value={formData.expertise}
                    onChange={handleChange}
                    SelectProps={{
                      multiple: true
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Technical Skills</FormLabel>
                    <RadioGroup
                      row
                      name="skills"
                      value={formData.skills}
                      onChange={handleChange}
                    >
                      <FormControlLabel value="software" control={<Radio />} label="Software Development" />
                      <FormControlLabel value="data" control={<Radio />} label="Data Analytics" />
                      <FormControlLabel value="cyber" control={<Radio />} label="Cybersecurity" />
                      <FormControlLabel value="digital" control={<Radio />} label="Digital Marketing" />
                      <FormControlLabel value="ai" control={<Radio />} label="AI & Machine Learning" />
                      <FormControlLabel value="cloud" control={<Radio />} label="Cloud Computing" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </>
            ) : (
              <>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Company Name"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Number of Employees"
                    name="employees"
                    type="number"
                    value={formData.employees}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Areas of Interest</FormLabel>
                    <RadioGroup
                      row
                      name="interests"
                      value={formData.interests}
                      onChange={handleChange}
                    >
                      <FormControlLabel value="talent" control={<Radio />} label="Talent Acquisition" />
                      <FormControlLabel value="projects" control={<Radio />} label="Project Collaboration" />
                      <FormControlLabel value="mentoring" control={<Radio />} label="Mentoring Programs" />
                      <FormControlLabel value="internships" control={<Radio />} label="Internship Programs" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </>
            )}

            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleChange}
                  />
                }
                label="I agree to the terms and conditions"
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 3, mb: 2 }}
              >
                {type === 'youth' ? 'Register as Youth' : 'Register as Employer'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </StyledPaper>
    </Container>
  );
};

export default RegistrationForm;
