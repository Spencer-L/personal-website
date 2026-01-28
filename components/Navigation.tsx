'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Projects', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Resume', link: '/assets/pdf/Spencer Lin Resume.pdf', external: true },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav>
      {navItems.map((item) => {
        const isActive = item.link === '/' 
          ? pathname === '/' 
          : pathname.startsWith(item.link);
        
        if (item.external) {
          return (
            <a
              key={item.name}
              href={item.link}
              className={`nav-item ${isActive ? 'current' : ''}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.name}
            </a>
          );
        }

        return (
          <Link
            key={item.name}
            href={item.link}
            className={`nav-item ${isActive ? 'current' : ''}`}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}
