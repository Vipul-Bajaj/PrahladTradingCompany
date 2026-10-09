import { company } from '../data/site';

const message = 'Hello, I would like to enquire about safety equipment.';

export default function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false">
        <path
          d="M12 3.5c-4.7 0-8.5 3.5-8.5 7.9 0 2.4 1.1 4.5 2.9 6l-.8 3.1 3.3-1.6c.97.3 2 .45 3.1.45 4.7 0 8.5-3.5 8.5-7.9S16.7 3.5 12 3.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <circle cx="8.3" cy="11.4" r="1.1" fill="currentColor" />
        <circle cx="12" cy="11.4" r="1.1" fill="currentColor" />
        <circle cx="15.7" cy="11.4" r="1.1" fill="currentColor" />
      </svg>
      <span className="wa-float__label">WhatsApp us</span>
    </a>
  );
}
