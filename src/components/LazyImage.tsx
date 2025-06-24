import { useState, useRef, useEffect } from 'react';
import { User } from 'lucide-react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackIcon?: React.ReactNode;
  onError?: () => void;
  onLoad?: () => void;
}

export const LazyImage = ({ 
  src, 
  alt, 
  className = "", 
  fallbackIcon,
  onError,
  onLoad 
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  if (hasError) {
    return (
      <div className={`${className} bg-gray-100 flex items-center justify-center`}>
        {fallbackIcon || <User className="w-8 h-8 text-gray-400" />}
      </div>
    );
  }

  return (
    <div ref={imgRef} className={className}>
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
        />
      )}
      {!isLoaded && isInView && (
        <div className="skeleton w-full h-full absolute inset-0" />
      )}
    </div>
  );
};