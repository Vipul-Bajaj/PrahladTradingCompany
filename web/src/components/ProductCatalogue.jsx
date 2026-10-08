'use client';

import { useEffect, useRef, useState } from 'react';
import Media from './Media';
import { company } from '../data/site';

export function whatsappLink(text) {
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function buildEnquiry(shoe, f, enquiry) {
  const lines = [
    'Enquiry from prahladtrading website',
    '',
    `Product: ${shoe.name}${shoe.code && !shoe.name.includes(shoe.code) ? ` (${shoe.code})` : ''}`,
    `${enquiry.variantLabel}: ${f.variant}`,
    `Quantity: ${f.quantity} ${enquiry.unit}`,
    '',
    `Name: ${f.name}`,
  ];
  if (f.company) lines.push(`Company: ${f.company}`);
  if (f.phone) lines.push(`Phone: ${f.phone}`);
  if (f.note) lines.push('', f.note);
  return lines.join('\n');
}

function ShoeCard({ shoe, onOpen }) {
  return (
    <li className="shoe">
      <div className="shoe__photo">
        <Media
          id={shoe.media}
          alt=""
          className="shoe__img"
          fallback={<span className="shoe__img shoe__img--empty">{shoe.name}</span>}
        />
      </div>
      <h3 className="shoe__name">
        <button type="button" className="shoe__open" onClick={() => onOpen(shoe)}>
          {shoe.name}
        </button>
      </h3>
      <p className="shoe__tagline">{shoe.tagline}</p>
      <ul className="shoe__tags" aria-label="Key features">
        {shoe.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
      <span className="shoe__cta" aria-hidden="true">
        View specifications
      </span>
    </li>
  );
}

function Specs({ shoe, onEnquire }) {
  return (
    <>
      <dl className="specs">
        {shoe.specs.map(([k, v]) => (
          <div key={k} className="specs__row">
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
      <p className="dialog__note">
        {shoe.note || 'Specifications as published by the manufacturer. Confirm the current version with us before ordering.'}
      </p>
      <div className="dialog__actions">
        <button type="button" className="btn btn--solid" onClick={onEnquire}>
          Send enquiry
        </button>
      </div>
    </>
  );
}

function EnquiryForm({ shoe, enquiry, onBack }) {
  const [sent, setSent] = useState(null);

  function submit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const url = whatsappLink(buildEnquiry(shoe, data, enquiry));
    window.open(url, '_blank', 'noopener');
    setSent(url);
  }

  if (sent) {
    return (
      <div className="sent" role="status">
        <h3>WhatsApp is ready with your enquiry</h3>
        <p>
          Press send in WhatsApp to deliver it to {company.phoneDisplay}. If WhatsApp didn’t open, use the button below.
        </p>
        <div className="dialog__actions">
          <a className="btn btn--solid" href={sent} target="_blank" rel="noopener noreferrer">
            Open WhatsApp
          </a>
          <button type="button" className="btn btn--line" onClick={() => setSent(null)}>
            Edit enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="enquiry" onSubmit={submit}>
      <p className="enquiry__intro">
        This opens WhatsApp with your enquiry for <strong>{shoe.name}</strong> addressed to {company.phoneDisplay}.
      </p>
      <div className="field-row">
        <label className="field">
          <span>{enquiry.variantLabel}</span>
          <input name="variant" required placeholder={enquiry.variantPlaceholder} autoComplete="off" />
        </label>
        <label className="field">
          <span>Quantity ({enquiry.unit})</span>
          <input name="quantity" required type="number" min="1" inputMode="numeric" placeholder="e.g. 20" />
        </label>
      </div>
      <label className="field">
        <span>Your name</span>
        <input name="name" required autoComplete="name" />
      </label>
      <div className="field-row">
        <label className="field">
          <span>
            Company <em>(optional)</em>
          </span>
          <input name="company" autoComplete="organization" />
        </label>
        <label className="field">
          <span>
            Phone <em>(optional)</em>
          </span>
          <input name="phone" type="tel" autoComplete="tel" inputMode="tel" />
        </label>
      </div>
      <label className="field">
        <span>
          Anything else <em>(optional)</em>
        </span>
        <textarea name="note" rows="3" placeholder={enquiry.notePlaceholder} />
      </label>
      <div className="dialog__actions">
        <button type="submit" className="btn btn--whatsapp">
          Send on WhatsApp
        </button>
        <button type="button" className="btn btn--line" onClick={onBack}>
          Back to specifications
        </button>
      </div>
    </form>
  );
}

export default function ProductCatalogue({ items, brands, enquiry }) {
  const brandOf = (id) => brands.find((b) => b.id === id);
  const dialogRef = useRef(null);
  const [shoe, setShoe] = useState(null);
  const [view, setView] = useState('specs');

  useEffect(() => {
    const d = dialogRef.current;
    if (shoe && d && !d.open) d.showModal();
  }, [shoe]);

  function open(s) {
    setView('specs');
    setShoe(s);
  }

  function close() {
    dialogRef.current?.close();
  }

  return (
    <>
      <h2 className="visually-hidden">Models</h2>
      <ul className="shoe-grid">
        {items.map((s) => (
          <ShoeCard key={s.id} shoe={s} onOpen={open} />
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className="dialog"
        aria-labelledby="dialog-title"
        onClose={() => setShoe(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        {shoe && (
          <div className="dialog__inner">
            <div className="dialog__photo">
              <Media
                id={shoe.media}
                alt={shoe.name}
                className="dialog__img"
                fallback={<span className="dialog__img shoe__img--empty">{shoe.name}</span>}
              />
            </div>
            <div className="dialog__body">
              <div className="dialog__head">
                <div>
                  {brandOf(shoe.brand) && <p className="dialog__brand">{brandOf(shoe.brand).name}</p>}
                  <h2 id="dialog-title">
                    {view === 'specs' ? shoe.name : `Enquire about ${shoe.name}`}
                  </h2>
                  {shoe.code && !shoe.name.includes(shoe.code) && view === 'specs' && (
                    <p className="dialog__code">Model {shoe.code}</p>
                  )}
                </div>
                <button type="button" className="dialog__close" onClick={close} aria-label="Close">
                  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
              {view === 'specs' ? (
                <Specs shoe={shoe} onEnquire={() => setView('enquiry')} />
              ) : (
                <EnquiryForm key={shoe.id} shoe={shoe} enquiry={enquiry} onBack={() => setView('specs')} />
              )}
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
