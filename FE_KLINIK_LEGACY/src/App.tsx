// src/App.tsx
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';     // ← create this file
import { RegistrasiTab } from './components/tabs/RegistrasiTab';
import { AuthProvider, useAuth } from './pages/AuthContext';



function ProtectedLayout() {
  const { isAuthenticated } = useAuth();
  const [loading, setLoading] = useState(true);

  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return <Outlet />;
}


function PublicLayout() {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) return <Navigate to="/dashboard" replace />;
  return <Outlet />;
}


function App() {
  return (
   <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/login" element={<LoginPage />} />
          </Route>

          <Route element={<ProtectedLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
          </Route>

          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;