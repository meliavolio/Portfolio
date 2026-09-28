type SocialNetwork = 'Instagram' | 'LinkedIn' | 'TikTok' | 'Threads' | 'X' | 'Linktree';

const socialLinks: { network: SocialNetwork; href: string }[] = [
  { network: 'Instagram', href: 'https://www.instagram.com/meliavolio' },
  { network: 'LinkedIn', href: 'https://www.linkedin.com/in/meliavolio/' },
  { network: 'TikTok', href: 'https://www.tiktok.com/@meliavolio' },
  { network: 'Threads', href: 'https://www.threads.com/@meliavolio' },
  { network: 'X', href: 'https://x.com/meliavolio' },
  { network: 'Linktree', href: 'https://linktr.ee/meliavolio' },
];

function SocialIcon({ network }: { network: SocialNetwork }) {
  if (network === 'Instagram') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle className="social-icon-dot" cx="17.4" cy="6.7" r="1"/></svg>;
  }

  if (network === 'LinkedIn') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.3 7.7H2.1V21h3.2V7.7ZM3.7 2A1.85 1.85 0 1 0 3.7 5.7 1.85 1.85 0 0 0 3.7 2ZM21.9 13.4c0-4-2.1-5.9-5-5.9a4.3 4.3 0 0 0-3.9 2.1V7.7H9.8V21H13v-6.6c0-1.7.3-3.4 2.5-3.4s2.3 2 2.3 3.5V21H22l-.1-7.6Z"/></svg>;
  }

  if (network === 'TikTok') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.3 2c.3 2.7 1.8 4.3 4.7 4.5v3.2a8.7 8.7 0 0 1-4.6-1.3v6.4a6.6 6.6 0 1 1-5.7-6.5v3.3a3.4 3.4 0 1 0 2.4 3.2V2h3.2Z"/></svg>;
  }

  if (network === 'Threads') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5c-5.7 0-9 3.5-9 9.6 0 6 3.5 9.4 9.4 9.4 5 0 8.4-2.7 8.4-6.8 0-3.4-2.2-5.5-5.8-5.8-.4-2-1.8-3.1-4.1-3.1-2 0-3.6.8-4.7 2.3l2 1.5c.7-.9 1.5-1.4 2.7-1.4.8 0 1.4.3 1.7.8-3.8.3-6 2.2-6 4.8 0 2.3 1.9 4 4.5 4 3.2 0 5.5-2.3 5.5-5.7V12c1.1.5 1.7 1.4 1.7 2.7 0 2.7-2.2 4.3-5.9 4.3-4.4 0-6.9-2.5-6.9-6.9C5.5 7.5 7.8 5 12 5c3.4 0 5.5 1.6 6.5 4.8l2.4-.7C19.6 4.7 16.6 2.5 12 2.5Zm-.9 12.9c-1.2 0-2-.6-2-1.6 0-1.3 1.4-2.2 4.9-2.4v.7c0 2-1.1 3.3-2.9 3.3Z"/></svg>;
  }

  if (network === 'Linktree') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m13.73635 5.85251 4.00467-4.11665 2.3248 2.3808-4.20064 4.00466h5.9085v3.30473h-5.9365l4.22865 4.10766-2.3248 2.3338L12.0005 12.099l-5.74052 5.76852-2.3248-2.3248 4.22864-4.10766h-5.9375V8.12132h5.9085L3.93417 4.11666l2.3248-2.3808 4.00468 4.11665V0h3.4727zm-3.4727 10.30614h3.4727V24h-3.4727z"/></svg>;
  }

  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.2 2h3.5l-7.6 8.7L23 22h-7l-5.5-7.2L4.2 22H.7L8.9 12.6.4 2h7.2l5 6.6L18.2 2Zm-1.3 18h1.9L6.5 3.9H4.4L16.9 20Z"/></svg>;
}

export function SocialIconLinks() {
  return (
    <ul className="social-icon-links" aria-label="Redes sociales de Melisa Avolio">
      {socialLinks.map(({ network, href }) => (
        <li key={network}>
          <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`${network} de Melisa Avolio`}>
            <SocialIcon network={network}/>
          </a>
        </li>
      ))}
    </ul>
  );
}
