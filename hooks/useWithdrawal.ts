import { useState } from 'react';
import axios from 'axios';
import { getCookie } from '@/utils/cookies';

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

export const useWithdraw = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [signature, setSignature] = useState<string | null>(null);

  const withdraw = async (amount: string, toWallet: string, saveWallet: boolean) => {
    setLoading(true);
    setError(null);
    setStatus(null);
    setSignature(null);

    try {
      const authToken = getCookie('auth_token');
      if (!authToken) {
        throw new Error('Authentication token not found');
      }

      const formData = new FormData();
      formData.append('amount', amount);
      formData.append('to_wallet', toWallet);
      if (saveWallet) formData.append('save_wallet', String(+saveWallet));

      const response = await axios.post(`${API_URL}/wallet/withdrawal`, formData, {
        headers: {
          // 'Authorization': `Bearer ${authToken}`
          'Authorization': authToken
        }
      });

      if (response.data?.status) {
        setStatus(response.data.status);
        setSignature(response.data.signature);
      } else {
        throw new Error('Invalid response from server');
      }
    } catch (err: any) {
      console.error('Withdrawal error:', err);
      setError(err.response?.data?.error || err.message || 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  return { withdraw, loading, error, status, signature };
};
