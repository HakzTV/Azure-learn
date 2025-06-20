// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPage from './pages/Search';
import UploadPage from './pages/Upload';
import { AuthProvider } from './auth/AuthProvider';
import { ProtectedRoute } from './components/ProtectedRoute';
import LoginPage from './pages/Login';
import ViewDetailPage from './pages/ViewDetail';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public login page */}
          <Route path="*" element={<LoginPage />} />

          {/* All these paths require an authenticated user */}
          <Route
            path="/search"
            element={
              <ProtectedRoute>
                <SearchPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/upload"
            element={
              <ProtectedRoute>
                <UploadPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/view/:id"
            element={
              <ProtectedRoute>
                <ViewDetailPage />
              </ProtectedRoute>
            }
          />

          {/* Fallback for any other route: send to login or 404 */}
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
