import { company } from '../data/site';
import Emblem from './Emblem';

const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
export const href = (p) => base + p;

export function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1L6.6 10.8Z"
      />
    </svg>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <div className="wrap site-header__inner">
        <a className="wordmark" href={href('/')} aria-label={`${company.name}, back to top`}>
          <Emblem size={42} className="wordmark__mark" />
          <span className="wordmark__text">
            Prahlad <span>Trading Company</span>
          </span>
        </a>
        <nav className="site-nav" aria-label="Main">
          <a href={href('/#products')}>Products</a>
          <a href={href('/#brands')}>Brands</a>
          <a href={href('/#order')}>How to order</a>
          <a href={href('/#contact')}>Contact</a>
        </nav>
        <a
          className="btn btn--solid btn--small header-call"
          href={company.phoneHref}
          aria-label={`Call ${company.phoneDisplay}`}
        >
          <PhoneIcon />
          <span className="header-call__label">{company.phoneDisplay}</span>
        </a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__inner">
        <p>© {new Date().getFullYear()} {company.name}, {company.city}</p>
        <p>Brand names and logos belong to their respective owners.</p>
      </div>
    </footer>
  );
}

