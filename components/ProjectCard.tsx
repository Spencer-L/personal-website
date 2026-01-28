'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  href: string;
  imageSrc: string;
  overlayText?: ReactNode;
  alt?: string;
  className?: string;
  delay?: number;
  priority?: boolean;
  objectFit?: 'cover' | 'contain';
  objectPosition?: string;
  bgColor?: string;
  aspectRatio?: string;
}

export default function ProjectCard({
  href,
  imageSrc,
  overlayText,
  alt,
  className = '',
  delay = 0,
  priority = false,
  objectFit = 'cover',
  objectPosition = 'center',
  bgColor,
  aspectRatio,
}: ProjectCardProps) {
  return (
    <motion.div
      className={`bento-item ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <div className="overlay-container">
        <Link href={href}>
          <figure style={{ 
            ...(bgColor && { backgroundColor: bgColor }),
            ...(aspectRatio && { aspectRatio })
          }}>
            <Image
              src={imageSrc}
              alt={alt || (typeof overlayText === 'string' ? overlayText : 'Project')}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading={priority ? 'eager' : 'lazy'}
              priority={priority}
              style={{ objectFit, objectPosition }}
            />
            {overlayText && (
              <div className="overlay">
                <div className="overlay-text">{overlayText}</div>
              </div>
            )}
          </figure>
        </Link>
      </div>
    </motion.div>
  );
}
