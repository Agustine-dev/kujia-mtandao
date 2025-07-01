import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import theme from './theme';
import LandingPage from './components/LandingPage.jsx';
import Registration from './components/Registration.jsx';
import YouthProfile from './components/YouthProfile.jsx';
import EmployerProfile from './components/EmployerProfile.jsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register/youth" element={<YouthProfile />} />
          <Route path="/register/employer" element={<EmployerProfile />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/register/:role" element={<Registration />} />
          <Route path="/youth-profile" element={<YouthProfile />} />
          <Route path="/employer-profile" element={<EmployerProfile />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
