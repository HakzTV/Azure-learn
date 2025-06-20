// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './auth/AuthProvider';
import { ProtectedRoute } from './components/ProtectedRoute';
import LoginPage from './pages/Login';
import SearchPage from './pages/Search';
import UploadPage from './pages/Upload';
import ViewDetailPage from './pages/ViewDetail';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public route */}
          <Route path="/" element={<LoginPage />} />

          {/* Group protected routes under a parent */}
          <Route element={<ProtectedRoute />}>
            <Route path="search" element={<SearchPage />} />
            <Route path="upload" element={<UploadPage />} />
            <Route path="view/:id" element={<ViewDetailPage />} />
          </Route>

          {/* Catch-all 404 (optional) */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
