interface SocialLinksProps {
  showEmail?: boolean;
  className?: string;
}

export default function SocialLinks({ showEmail = false, className = '' }: SocialLinksProps) {
  return (
    <div className={`medialinks ${className}`}>
      <a href="https://www.linkedin.com/in/spencer-lin-bb409b1b7/" target="_blank" rel="noopener noreferrer">
        <img src="/assets/logos/linkedin.png" width={30} height={30} alt="LinkedIn" />
      </a>
      {showEmail && (
        <a href="mailto:spencer@estuary-ai.com">
          <img src="/assets/logos/Mail-Glyph.png" width={30} height={30} alt="Email" />
        </a>
      )}
      <a href="https://github.com/Spencer-L" target="_blank" rel="noopener noreferrer">
        <img src="/assets/logos/GitHub-Logo.png" width={30} height={30} alt="GitHub" />
      </a>
      <a
        href="https://scholar.google.com/citations?hl=en&view_op=list_works&gmla=AFix5Ma87LSoh67UcUIhdz9x0_v8Z9shKRm48q6_KJp6XKpRVns6ZuzhZDb7LV7oIxeBqhT2g_FPHnTYKvzt1C2uSm9S&user=RMcELeEAAAAJ"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/assets/logos/Google-Scholar-Logo.png" width={35} height={35} alt="Google Scholar" />
      </a>
    </div>
  );
}
