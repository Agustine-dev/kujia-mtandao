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
  useTheme,
  Alert,
  CircularProgress,
  Input,
  IconButton,
  FormControlLabel,
  Checkbox
} from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { useNavigate } from 'react-router-dom';

const YouthProfile = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    phone_number: '',
    role: 'youth',
    status: '',
    expertise: '',
    skills: [],
    age: '',
    tech_domain: '',
    github: '',
    portfolio: '',
    cv: null,
    county: '',
    linkedin: '',
    chapter_id: '',
    terms_accepted: false
  });
  const [cvFile, setCvFile] = useState(null);

  const [loading, setLoading] = useState(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // Validate required fields
      if (!formData.terms_accepted) {
        setError('Please accept the terms and conditions before submitting.');
        return;
      }

      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSuccess('Registration successful!');
      setTimeout(() => {
        navigate('/thank-you', { 
          state: { 
            success: true, 
            message: 'Your registration was successful!' 
          } 
        });
      }, 2000);

    } catch (err) {
      setError('An error occurred during registration. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const statuses = [
    'student',
    'professional',
    'entrepreneur'
  ];

  const techDomains = [
    'Software Development',
    'Data Analytics',
    'Cybersecurity',
    'AI & Machine Learning',
    'Digital Marketing',
    'Cloud Computing'
  ];

  return (
    <Container maxWidth="md" sx={{ 
      mt: 4, 
      mb: 4, 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh'
    }}>
      <Card sx={{ 
        width: '100%',
        maxWidth: 800,
        boxShadow: 2,
        borderRadius: 2,
        border: '1px solid rgba(0,0,0,0.1)',
        p: 4
      }}>
        <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4, color: '#FFA500' }}>
          Youth Registration
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
            {/* Personal Information */}
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Personal Information
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Age"
                name="age"
                type="number"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="County"
                name="county"
                value={formData.county}
                onChange={handleChange}
                required
              />
            </Grid>

            {/* Professional Information */}
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
                Professional Information
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Status</InputLabel>
                <Select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  required
                >
                  {statuses.map((status) => (
                    <MenuItem key={status} value={status}>
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Expertise"
                name="expertise"
                value={formData.expertise}
                onChange={handleChange}
                multiline
                rows={2}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Skills (comma-separated)"
                name="skills"
                value={formData.skills.join(', ')}
                onChange={(e) => setFormData({ ...formData, skills: e.target.value.split(',').map(skill => skill.trim()) })}
                helperText="Separate skills with commas"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Tech Domain</InputLabel>
                <Select
                  name="tech_domain"
                  value={formData.tech_domain}
                  onChange={handleChange}
                  required
                >
                  {techDomains.map((domain) => (
                    <MenuItem key={domain} value={domain}>
                      {domain}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="LinkedIn Profile"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="GitHub Profile"
                name="github"
                value={formData.github}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Portfolio Website"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Chapter ID"
                name="chapter_id"
                value={formData.chapter_id}
                onChange={handleChange}
                helperText="Optional"
              />
            </Grid>

            {/* CV Upload */}
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 1 }}>
                <IconButton color="primary" aria-label="upload picture" component="label">
                  <AttachFileIcon />
                  <input
                    hidden
                    accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    type="file"
                    onChange={(e) => setFormData({ ...formData, cv: e.target.files[0] })}
                  />
                </IconButton>
                <Typography variant="subtitle1" color="textSecondary">
                  {formData.cv ? formData.cv.name : 'Upload CV (PDF, DOC, DOCX)'}
                </Typography>
              </Box>
            </Grid>

            {/* Terms Acceptance */}
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.terms_accepted}
                    onChange={(e) => setFormData({ ...formData, terms_accepted: e.target.checked })}
                    sx={{ color: '#FFA500' }}
                  />
                }
                label={
                  <Typography sx={{ color: '#666' }}>
                    I accept the terms and conditions
                  </Typography>
                }
              />
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                sx={{
                  mt: 4,
                  bgcolor: '#FFA500',
                  color: 'white',
                  '&:hover': {
                    bgcolor: '#FF8C00'
                  },
                  '&:disabled': {
                    bgcolor: '#DAA520'
                  },
                  borderRadius: 2,
                  boxShadow: 2,
                  transition: 'all 0.3s ease-in-out'
                }}
                disabled={loading || !formData.terms_accepted}
              >
                {loading ? (
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                    <CircularProgress size={24} color="inherit" />
                    <Typography variant="button" sx={{ color: 'white' }}>
                      Submitting...
                    </Typography>
                  </Box>
                ) : (
                  <Typography variant="button" sx={{ color: 'white', fontWeight: 600 }}>
                    Submit Registration
                  </Typography>
                )}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Card>
    </Container>
  );
};

export default YouthProfile;
