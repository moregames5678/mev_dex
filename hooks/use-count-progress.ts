import { useEffect, useState } from 'react';


export const useCountProgress = (value: number, delay = 6): number => {
  const [progress, setProgress] = useState(0);

  const roundedValue = Math.round(value);

  useEffect(() => {
    if (progress === roundedValue) return;

    const timer = setTimeout(() => {
      setProgress((prev) => (prev < roundedValue ? prev + 1 : prev - 1));
    }, delay);

    return () => clearTimeout(timer);
  }, [roundedValue, progress]);

  return progress;
};
