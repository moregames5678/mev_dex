import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface ImageWrapperProps {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  unoptimized?: boolean;
  loader?: (props: { src: string }) => string;
  quality?: number;
  fill?: boolean;
  style?: React.CSSProperties;
}

export const ImageWrapper: React.FC<ImageWrapperProps> = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  unoptimized = false,
  loader,
  quality = 100,
  fill = false,
  style,
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      fill={fill}
      className={className}
      style={style}
      priority={priority}
      unoptimized={unoptimized}
      loader={loader}
      quality={quality}
    />
  );
};
