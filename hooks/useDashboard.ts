import { useState, useEffect } from 'react';
import axios from 'axios';
import { getCookie } from '@/utils/cookies';

const API_URL = process.env.NEXT_PUBLIC_API_URL?.replace('https://', 'http://') as string;

interface DashboardData {
  username: string;
  email: string;
  balance: number;
  wallet: string;
  referral_id: string;
  partner_percentage: string;
}

export const useDashboard = () => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchDashboardData = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = getCookie('auth_token');
      
      if (!token) {
        setError('No authentication token found');
        setLoading(false);
        return;
      }

      const response = await axios.get(
        `${API_URL}/account/dashboard`,
        {
          withCredentials: true,
          headers: {
            'Authorization': `Bearer ${token}`
          },
        }
      );

      if (response.data?.data && !response.data?.error) {
        setData(response.data.data);
      } else {
        setError(response.data?.error || 'Invalid response from server');
      }
    } catch (err: any) {
      console.error('Dashboard data fetch error:', err.response);
      setError(err.response?.data?.error || 'Network error or invalid response');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const refreshData = () => {
    fetchDashboardData();
  };

  return { 
    data, 
    loading, 
    error,
    refreshData
  };
};