'use client';

import { useState } from 'react';
import { ui, type Locale } from '@/lib/i18n';

export function CopyEmail({ email, locale = 'es' }: { email: string; locale?: Locale }) {
  const text = ui[locale];
  const [status, setStatus] = useState('');

  async function copyEmail() {
    setStatus('');
    try {
      await navigator.clipboard.writeText(email);
      setStatus(text.copied);
    } catch {
      setStatus(text.copyError);
    }
  }

  return <div className="copy-email">
    <div className="copy-email-row"><span className="email-text">{email}</span><button type="button" onClick={copyEmail}>{text.copy}</button></div>
    <p className="copy-email-status" role="status" aria-live="polite">{status}</p>
  </div>;
}
