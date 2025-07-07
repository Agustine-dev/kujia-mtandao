import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Tabs, 
  Tab, 
  Paper, 
  Stepper, 
  Step, 
  StepLabel, 
  Button, 
  TextField, 
  FormControl, 
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Alert,
  useTheme 
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Registration() {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState('youth');
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    role: '',
    email: '',
    phone: '',
    name: '',
    age: '',
    county: '',
    linkedin: '',
    techDomain: '',
    cv: null,
    github: '',
    portfolio: '',
    companyName: '',
    jobTitle: '',
    description: '',
    location: '',
    budget: '',
    agreedToTerms: false,
    acceptedMOU: false,
  });

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    setActiveStep(0);
  };

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileUpload = (e) => {
    setFormData((prev) => ({
      ...prev,
      cv: e.target.files[0],
    }));
  };

  const techDomains = [
    'Software Development',
    'Data Analytics',
    'Cybersecurity',
    'AI',
    'Digital Marketing',
    'Cloud Computing',
  ];

  const steps = activeTab === 'youth' 
    ? ['Basic Info', 'Tech Profile', 'Kujia Chapter', 'Upload Documents']
    : ['Company Info', 'Job Details', 'Terms & Conditions'];

  const renderYouthForm = () => {
    switch (activeStep) {
      case 0:
        return (
          <Box sx={{ mt: 3 }}>
            <TextField
              fullWidth
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              margin="normal"
            />
          </Box>
        );
      case 1:
        return (
          <Box sx={{ mt: 3 }}>
            <TextField
              fullWidth
              label="Age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              margin="normal"
              type="number"
            />
            <TextField
              fullWidth
              label="County"
              name="county"
              value={formData.county}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="LinkedIn Profile"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              margin="normal"
            />
          </Box>
        );
      case 2:
        return (
          <Box sx={{ mt: 3 }}>
            <FormControl fullWidth margin="normal">
              <InputLabel>Tech Domain</InputLabel>
              <Select
                name="techDomain"
                value={formData.techDomain}
                onChange={handleChange}
                label="Tech Domain"
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
              label="GitHub Profile"
              name="github"
              value={formData.github}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Portfolio URL"
              name="portfolio"
              value={formData.portfolio}
              onChange={handleChange}
              margin="normal"
            />
          </Box>
        );
      case 3:
        return (
          <Box sx={{ mt: 3 }}>
            <input
              accept="application/pdf"
              style={{ display: 'none' }}
              id="cv-upload"
              type="file"
              onChange={handleFileUpload}
            />
            <label htmlFor="cv-upload">
              <Button
                variant="contained"
                component="span"
                fullWidth
                sx={{ mb: 2 }}
              >
                Upload CV
              </Button>
            </label>
            <TextField
              fullWidth
              label="Kujia Chapter Membership ID"
              name="chapterId"
              margin="normal"
            />
          </Box>
        );
      default:
        return null;
    }
  };

  const renderEmployerForm = () => {
    switch (activeStep) {
      case 0:
        return (
          <Box sx={{ mt: 3 }}>
            <TextField
              fullWidth
              label="Company Name"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              margin="normal"
            />
          </Box>
        );
      case 1:
        return (
          <Box sx={{ mt: 3 }}>
            <TextField
              fullWidth
              label="Job Title"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Job Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              margin="normal"
              multiline
              rows={4}
            />
            <FormControl fullWidth margin="normal">
              <InputLabel>Tech Domain</InputLabel>
              <Select
                name="techDomain"
                value={formData.techDomain}
                onChange={handleChange}
                label="Tech Domain"
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
              label="Location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              margin="normal"
              type="number"
            />
          </Box>
        );
      case 2:
        return (
          <Box sx={{ mt: 3 }}>
            <Alert severity="info" sx={{ mb: 3 }}>
              By proceeding, you agree to pay a 10% placement fee upon successful hire.
            </Alert>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.agreedToTerms}
                    onChange={(e) => setFormData((prev) => ({
                      ...prev,
                      agreedToTerms: e.target.checked
                    }))}
                  />
                }
                label="I agree to the 10% placement fee"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.acceptedMOU}
                    onChange={(e) => setFormData((prev) => ({
                      ...prev,
                      acceptedMOU: e.target.checked
                    }))}
                  />
                }
                label="I have read and accept the MOU"
              />
            </FormGroup>
          </Box>
        );
      default:
        return null;
    }
  };

  const renderForm = () => {
    return activeTab === 'youth' ? renderYouthForm() : renderEmployerForm();
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          {activeTab === 'youth' ? 'Youth Registration' : 'Employer Registration'}
        </Typography>
        
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          centered
          sx={{
            mb: 4,
            '& .MuiTabs-indicator': {
              backgroundColor: theme.palette.primary.main,
            },
            '& .MuiTab-root': {
              textTransform: 'none',
              fontWeight: 600,
              fontSize: '1rem',
              minHeight: '48px',
              minWidth: '200px',
              borderRadius: '8px',
              transition: 'all 0.3s ease',
              '&:hover': {
                opacity: 0.8,
              },
            },
            '& .Mui-selected': {
              backgroundColor: activeTab === 'youth' 
                ? theme.palette.tab.youth.main 
                : theme.palette.tab.employer.main,
              backgroundImage: activeTab === 'youth' 
                ? theme.palette.tab.youth.gradient 
                : theme.palette.tab.employer.gradient,
              color: '#fff',
            },
            '& .MuiTab-root:not(.Mui-selected)': {
              color: theme.palette.text.primary,
              opacity: 0.8,
            },
          }}
        >
          <Tab value="youth" label="Register as Youth" />
          <Tab value="employer" label="Register as Employer" />
        </Tabs>

        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {renderForm()}

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mt: 3, ml: 1 }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={handleNext}
            sx={{ mt: 3, ml: 1 }}
          >
            {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Registration;
