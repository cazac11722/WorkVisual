import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/root.css';
import './styles/style.css';
import './styles/form.css';
import './styles/font.css';
import "./styles/comment.css"
import LoginPage from './pages/auth/LoginPage.js';
import SigninPage from './pages/auth/SigninPage.js';
import Dashboard from './pages/home/Dashboard.js';
import EmployeeManagement from './pages/management/EmployeeManagement.js';


function App() {
  return (
    <Router>
      <Routes>

        <Route path='/' element={<Dashboard />} />

        <Route path='/login' element={<LoginPage />} />
        <Route path='/signin' element={<SigninPage />} />


        <Route path='/employee-management' element={<EmployeeManagement />} />

        
        

      </Routes>
    </Router>
  );
}

export default App;
