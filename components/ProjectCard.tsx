import Link from 'next/link';
import { ReactNode } from 'react';

interface ProjectCardProps {
  href: string;
  imageSrc: string;
  width: number;
  height?: number;
  overlayText?: ReactNode;
  alt?: string;
  className?: string;
}

export default function ProjectCard({
  href,
  imageSrc,
  width,
  height,
  overlayText,
  alt,
  className = '',
}: ProjectCardProps) {
  return (
    <div className={`overlay-container ${className}`} style={{ width }}>
      <Link href={href}>
        <figure className={overlayText ? 'mb-3' : ''}>
          <img
            src={imageSrc}
            style={{ width: '100%', height: height || 'auto' }}
            alt={alt || (typeof overlayText === 'string' ? overlayText : 'Project')}
          />
          {overlayText && (
            <div className="overlay">
              <div className="overlay-text">{overlayText}</div>
            </div>
          )}
        </figure>
      </Link>
    </div>
  );
}
