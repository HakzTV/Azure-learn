// src/components/ProtectedRoute.tsx
import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';

type Props = { children: ReactNode };

export function ProtectedRoute({ children }: Props) {
  const { user, loading } = useAuth();
  if (loading) return <p>Loading...</p>;
  if (!user) return <Navigate to="/" replace />;
  return <>{children}</>;
}
