import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/styles/root.css';
import './assets/styles/style.css';
import './assets/styles/form.css';
import './assets/styles/font.css';
import "./assets/styles/comment.css";
import "./assets/styles/animated.css";

import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

import LoginPage from './pages/auth/LoginPage';
import SigninPage from './pages/auth/SigninPage';
import Dashboard from './pages/home/Dashboard';
import APage from './pages/project/a';
import BPage from './pages/project/b';
import EmployeeManagement from './pages/management/EmployeeManagement';
import ProjectManagement from './pages/management/ProjectManagement';
import BusinessSettings from './pages/management/BusinessSettings';
import StatisticsManagement from './pages/management/StatisticsManagement';
import ProjectView from './pages/project/ProjectView';
import PasswordFindPage from './pages/auth/PasswordFindPage';
import ProjectCreate from './pages/project/ProjectCreate';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path='/WorkVisual/login' element={<LoginPage />} />
          <Route path='/WorkVisual/signin' element={<SigninPage />} />
          <Route path='/WorkVisual/password-find' element={<PasswordFindPage />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>

            <Route path='/WorkVisual/' element={<Dashboard />} />
            <Route path='/WorkVisual/a' element={<APage />} />
            <Route path='/WorkVisual/b' element={<BPage />} />

            <Route path='/WorkVisual/project-create' element={<ProjectCreate />} />
            <Route path='/WorkVisual/project/:id' element={<ProjectView />} />

            <Route path='/WorkVisual/employee-management' element={<EmployeeManagement />} />
            <Route path='/WorkVisual/project-management' element={<ProjectManagement />} />
            <Route path='/WorkVisual/business-settings' element={<BusinessSettings />} />
            <Route path='/WorkVisual/statistics-management' element={<StatisticsManagement />} />
            
          </Route>

          {/* 404 Page (Optional) */}
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
