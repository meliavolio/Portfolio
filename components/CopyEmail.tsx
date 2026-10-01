'use client';

import { useState } from 'react';

export function CopyEmail({ email }: { email: string }) {
  const [status, setStatus] = useState('');

  async function copyEmail() {
    setStatus('');
    try {
      await navigator.clipboard.writeText(email);
      setStatus('Mail copiado');
    } catch {
      setStatus('No se pudo copiar automáticamente. Seleccioná el mail y copialo manualmente.');
    }
  }

  return <div className="copy-email">
    <div className="copy-email-row"><span className="email-text">{email}</span><button type="button" onClick={copyEmail}>Copiar mail</button></div>
    <p className="copy-email-status" role="status" aria-live="polite">{status}</p>
  </div>;
}
