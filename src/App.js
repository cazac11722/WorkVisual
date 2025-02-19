import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PopupProvider } from "./contexts/hooks/usePopup";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./contexts/ProtectedRoute";

import Dashboard from "./pages/home/Dashboard";
import LoginPage from "./pages/auth/LoginPage";
import SignUpPage from "./pages/auth/SignUpPage";
import View from "./pages/project/View";
import List from "./pages/project/List";
import Calender from "./pages/management/Calendar";

function App() {
  return (
    <AuthProvider>
      <PopupProvider>
        <Router>
          <Routes>
            <Route path="/WorkVisual/login" element={<LoginPage />} />
            <Route path="/WorkVisual/sign-up" element={<SignUpPage />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/WorkVisual/" element={<Dashboard />} />
              <Route path="/WorkVisual/p/:id/add" element={<View />} />
              <Route path="/WorkVisual/p/:id/list" element={<List />} />
              <Route path="/WorkVisual/l/:id" element={<Calender />} />
              <Route path="/WorkVisual/guide/:id" element={<Calender />} />
            </Route>

          </Routes>
        </Router>
      </PopupProvider>
    </AuthProvider>
  );
}

export default App;
