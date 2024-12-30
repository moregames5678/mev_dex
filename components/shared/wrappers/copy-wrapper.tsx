'use client';

import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib';
import { useCopyToClipboard } from 'usehooks-ts';

type Props = {
  children: React.ReactNode;
  copyValue: string;
  className?: string;
};

export const CopyWrapper = ({ children, copyValue, className }: Props) => {
  const { toast } = useToast();
  const [, copy] = useCopyToClipboard();

  const handleCopy = (text: string) => () => {
    copy(text)
      .then(() => {
        console.log('Copied!', { text });
      })
      .catch((error) => {
        console.error('Failed to copy!', error);
      });
    toast({
      duration: 2000,
      title: 'Copied to clipboard',
      description: copyValue,
    });
  };

  return (
    <button className={cn(className, 'inline')} onClick={handleCopy(copyValue)}>
      {children}
    </button>
  );
};
