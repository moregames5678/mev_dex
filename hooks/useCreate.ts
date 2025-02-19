import { useState } from 'react';
import axios from 'axios';
import { setCookie } from '@/utils/cookies';


const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

export const useCreate = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const create = async (username: string, email: string, password: string, invate: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        `${API_URL}/account/create`,
        { username, email, password, invate },
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );

      if (response.data?.data && !response.data?.error) {
        const userData = response.data.data;
        setCookie('auth_token', userData.token);
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        setError(response.data?.error || "Invalid response from server");
      }
    } catch (err: any) {
      console.error("Create error:", err.response);

      if (err.response?.data?.error) {
        setError(err.response.data.error);
      } else {
        setError("Network error or invalid response");
      }

      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  return { isAuthenticated, create, loading, error };
};
