import { Github, GraduationCap, Linkedin, Mail } from 'lucide-react';

interface SocialLinksProps {
  showEmail?: boolean;
  className?: string;
}

export default function SocialLinks({ showEmail = false, className = '' }: SocialLinksProps) {
  return (
    <div className={`medialinks ${className}`}>
      <a
        href="https://www.linkedin.com/in/spencer-lin-bb409b1b7/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <span className="icon-circle">
          <Linkedin />
        </span>
      </a>
      {showEmail && (
        <a href="mailto:spencer@estuary-ai.com" aria-label="Email">
          <span className="icon-circle">
            <Mail />
          </span>
        </a>
      )}
      <a href="https://github.com/Spencer-L" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <span className="icon-circle">
          <Github />
        </span>
      </a>
      <a
        href="https://scholar.google.com/citations?hl=en&view_op=list_works&gmla=AFix5Ma87LSoh67UcUIhdz9x0_v8Z9shKRm48q6_KJp6XKpRVns6ZuzhZDb7LV7oIxeBqhT2g_FPHnTYKvzt1C2uSm9S&user=RMcELeEAAAAJ"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Google Scholar"
      >
        <span className="icon-circle">
          <GraduationCap />
        </span>
      </a>
    </div>
  );
}
