import React, { useState } from 'react';

interface HoneypotProps {
  onSpamDetected: () => void;
}

/**
 * Honeypot Component (Anti-Spam)
 * Невидимое поле, которое заполняют только боты.
 * Если поле заполнено, форма считается спамом.
 */
export function Honeypot({ onSpamDetected }: HoneypotProps) {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (e.target.value.length > 0) {
      onSpamDetected();
      console.warn('[Security] Bot detected via Honeypot');
    }
  };

  return (
    <div 
      className="opacity-0 absolute top-0 left-0 h-0 w-0 z-[-1] overflow-hidden" 
      aria-hidden="true"
    >
      <label htmlFor="website_url_field">Leave this field empty</label>
      <input
        type="text"
        id="website_url_field"
        name="website_url_field"
        tabIndex={-1}
        autoComplete="off"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
