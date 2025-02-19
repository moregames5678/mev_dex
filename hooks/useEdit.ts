import { useState } from 'react';
import axios from 'axios';
import { getCookie, setCookie } from '@/utils/cookies';

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

export const useEdit = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const editAccount = async (email: string, password: string, newPassword: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const authToken = getCookie('auth_token');
      if (!authToken) {
        throw new Error('Authentication token not found');
      }

      const formData = new FormData();
      if (email) formData.append('email', email);
      if (password) formData.append('password', password);
      if (newPassword) formData.append('newPassword', newPassword);

      const response = await axios.put(
        `${API_URL}/account/edit`,
        formData,
        {
          headers: { 
            // "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${authToken}`
          },
          withCredentials: true
        }
      );

      if (response.data?.success) {
        
      } else {
        setError(response.data?.error || "Update failed");
      }
    } catch (err: any) {
      console.error("Edit error:", err.response);
      
      const errorMessage = err.response?.data?.error 
        || err.message 
        || "Network error or invalid response";
        
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { editAccount, loading, error };
};