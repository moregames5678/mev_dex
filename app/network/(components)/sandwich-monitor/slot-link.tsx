import { ReactElement } from 'react';
import { ImageWrapper } from '@/components/shared';
import { cn } from '@/lib';
import { StaticImageData } from 'next/image';
import Link from 'next/link';

interface LinkProps {
  className?: string;
  image?: StaticImageData;
  text?: ReactElement | string;
  link?: string;
}

export const SlotLink = ({ className, image, text, link = '/network' }: LinkProps) => {
  return (
    <Link href={link} className={cn('text-[#90caf9] hover:text-blue', className)}>
      {image && (
        <ImageWrapper
          src={image.src}
          alt="link"
          width={image.width}
          height={image.height}
          className="opacity-70 hover:opacity-100"
          unoptimized
        />
      )}
      {text && text}
    </Link>
  );
};
