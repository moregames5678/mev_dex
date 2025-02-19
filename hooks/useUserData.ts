import { useState, useEffect } from 'react';
import { getCookie } from '@/utils/cookies';

export const useUserData = () => {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const userDataString = getCookie('user_data');
    if (userDataString) {
      try {
        setUserData(JSON.parse(userDataString));
      } catch (e) {
        console.error('Failed to parse user data');
      }
    }
  }, []);

  return userData;
};