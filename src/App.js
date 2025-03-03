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
import Add from "./pages/project/Add";
import InformationList from "./pages/admin/Information_list";
import ProjectList from "./pages/admin/Project_list";
import Statistics from "./pages/admin/Statistics";
import Profile from "./pages/auth/Profile";

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

              <Route path="/WorkVisual/p/:id/add" element={<Add />} />
              <Route path="/WorkVisual/p/:id/view/:vi" element={<View />} />
              <Route path="/WorkVisual/p/:id/list" element={<List />} />

              <Route path="/WorkVisual/e/:id/p_list" element={<View />} />
              <Route path="/WorkVisual/e/:id/p_view" element={<View />} />
              <Route path="/WorkVisual/e/:id/u_list" element={<View />} />
              <Route path="/WorkVisual/e/:id/u_view" element={<View />} />

              <Route path="/WorkVisual/c/:id" element={<Calender />} />

              <Route path="/WorkVisual/guide/:id" element={<Calender />} />

              <Route path="/WorkVisual/profile/:id" element={<Profile />} />

              <Route path="/WorkVisual/admin/information" element={<InformationList />} />
              <Route path="/WorkVisual/admin/project" element={<ProjectList />} />
              <Route path="/WorkVisual/admin/statistics" element={<Statistics />} />

            </Route>

          </Routes>
        </Router>
      </PopupProvider>
    </AuthProvider>
  );
}

export default App;
