import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PopupProvider } from "./contexts/hooks/usePopup";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./contexts/ProtectedRoute";

import Dashboard from "./pages/home/Dashboard";
import LoginPage from "./pages/auth/LoginPage";
import SignUpPage from "./pages/auth/SignUpPage";

function App() {
  return (
    <AuthProvider>
      <PopupProvider>
        <Router>


          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Dashboard />} />
            </Route>

          </Routes>


        </Router>
      </PopupProvider>
    </AuthProvider>
  );
}

export default App;
