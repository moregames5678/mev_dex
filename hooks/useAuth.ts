import { useState, useEffect } from 'react';
import axios from 'axios';
import { getCookie, setCookie } from '@/utils/cookies';

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const checkAuth = () => {
    if (typeof document !== 'undefined') {
      const token = getCookie('auth_token');
      
      if (token) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    }
  };

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        `${API_URL}/account/auth`,
        { email, password },
//        { withCredentials: true }
      );

      if (response.data?.data && !response.data?.error) {
        const userData = response.data.data;
        
        setCookie('auth_token', userData.token);
        setCookie('user_data', JSON.stringify(userData));

        setIsAuthenticated(true);
        checkAuth();
      } else {
        setError(response.data?.error || 'Invalid response from server');
      }
    } catch (err: any) {
      console.error('Login error:', err.response);
      setError(err.response?.data?.error || 'Network error or invalid response');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    document.cookie = 'auth_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'user_data=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    
    setIsAuthenticated(false);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return { 
    isAuthenticated, 
    login, 
    logout, 
    loading, 
    error, 
    token: getCookie('auth_token')
  };
};
