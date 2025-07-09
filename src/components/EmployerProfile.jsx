import React, { useState } from 'react';
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
  Alert,
  CircularProgress,
  FormControlLabel,
  Checkbox
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const EmployerProfile = () => {
  const [formData, setFormData] = useState({
    company_name: '',
    industry: '',
    company_size: '',
    website: '',
    description: '',
    location: '',
    interests: [],
    job_title: '',
    budget: '',
    agreed_to_terms: false,
    accepted_mou: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.checked
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.agreed_to_terms || !formData.accepted_mou) {
      setError('Please agree to terms and accept MOU before submitting.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/employers/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          company_name: formData.company_name,
          industry: formData.industry,
          company_size: formData.company_size,
          website: formData.website,
          description: formData.description,
          location: formData.location,
          interests: formData.interests,
          job_title: formData.job_title,
          budget: formData.budget ? parseFloat(formData.budget) : null,
          agreed_to_terms: formData.agreed_to_terms,
          accepted_mou: formData.accepted_mou
        })
      });

      if (response.ok) {
        navigate('/thank-you');
      } else {
        setError('Failed to submit the form. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const industries = [
    'Software Development',
    'Data Analytics',
    'Cybersecurity',
    'Digital Marketing',
    'AI & Machine Learning',
    'Cloud Computing'
  ];

  const companySizes = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-500 employees',
    '500+ employees'
  ];

  return (
    <Box sx={{ width: '100%', maxWidth: 800, mx: 'auto', mt: 4, mb: 4 }}>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
            Employer Registration
          </Typography>

          {success && (
            <Alert severity="success" sx={{ mb: 3 }}>
              {success}
            </Alert>
          )}
          {error && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {error}
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Company Information
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Company Name"
                  name="company_name"
                  value={formData.company_name}
                  onChange={handleChange}
                  margin="normal"
                  maxLength={100}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  margin="normal"
                  maxLength={50}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Company Size"
                  name="company_size"
                  value={formData.company_size}
                  onChange={handleChange}
                  margin="normal"
                  maxLength={20}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  margin="normal"
                  type="url"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Company Description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  margin="normal"
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  margin="normal"
                  maxLength={100}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Interests"
                  name="interests"
                  value={formData.interests.join(', ')}
                  onChange={(e) => setFormData({ ...formData, interests: e.target.value.split(',').map(interest => interest.trim()) })}
                  margin="normal"
                  helperText="Separate interests with commas (e.g., talent, mentoring)"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Job Title"
                  name="job_title"
                  value={formData.job_title}
                  onChange={handleChange}
                  margin="normal"
                  maxLength={100}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  margin="normal"
                  type="number"
                  inputProps={{
                    step: '0.01',
                    min: '0'
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.agreed_to_terms}
                        onChange={handleCheckboxChange('agreed_to_terms')}
                      />
                    }
                    label="I agree to the terms and conditions"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.accepted_mou}
                        onChange={handleCheckboxChange('accepted_mou')}
                      />
                    }
                    label="I accept the Memorandum of Understanding"
                  />
                </Box>

                <Button
                  fullWidth
                  variant="contained"
                  type="submit"
                  disabled={isSubmitting || !formData.agreed_to_terms || !formData.accepted_mou}
                  sx={{
                    mt: 2,
                    bgcolor: '#FFA500',
                    color: 'white',
                    '&:hover': {
                      bgcolor: '#FF8C00'
                    },
                    '&:disabled': {
                      bgcolor: '#DAA520'
                    },
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                    {isSubmitting ? (
                      <>
                        <CircularProgress size={24} color="inherit" />
                        <Typography 
                          variant="button" 
                          component="span"
                          sx={{ 
                            fontSize: '1.2rem',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            color: 'white'
                          }}
                        >
                          Submitting...
                        </Typography>
                      </>
                    ) : (
                      <Typography 
                        variant="button" 
                        component="span"
                        sx={{ 
                          fontSize: '1.2rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '1px',
                          color: 'white'
                        }}
                      >
                        Submit
                      </Typography>
                    )}
                  </Box>
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default EmployerProfile;
