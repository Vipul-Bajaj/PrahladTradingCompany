'use client';

import { useRef, useState } from 'react';
import { company, categories } from '../data/site';

const OTHER = 'Other / not listed';

function buildMessage(f) {
  const lines = ['Hello, I have an enquiry from the website.', ''];
  if (f.category) lines.push(`Products: ${f.category}`);
  lines.push(`Requirement: ${f.requirement.trim()}`, '');
  lines.push(`Name: ${f.name.trim()}`);
  if (f.company?.trim()) lines.push(`Company: ${f.company.trim()}`);
  lines.push(`Phone: ${f.phone.trim()}`);
  if (f.email?.trim()) lines.push(`Email: ${f.email.trim()}`);
  return lines.join('\n');
}

// General enquiry form for the Contact section. The site has no server, so the
// form hands the enquiry to WhatsApp (or the visitor's email app), ready to send.
export default function ContactForm() {
  const formRef = useRef(null);
  const [sent, setSent] = useState(null);

  function read() {
    const form = formRef.current;
    if (!form.reportValidity()) return null;
    return Object.fromEntries(new FormData(form).entries());
  }

  function sendWhatsApp(e) {
    e.preventDefault();
    const f = read();
    if (!f) return;
    const url = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(buildMessage(f))}`;
    window.open(url, '_blank', 'noopener');
    setSent({ via: 'WhatsApp', url });
  }

  function sendEmail() {
    const f = read();
    if (!f) return;
    const subject = `Enquiry from website${f.category ? `: ${f.category}` : ''}`;
    const url = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildMessage(f))}`;
    window.location.href = url;
    setSent({ via: 'email', url });
  }

  if (sent) {
    return (
      <div className="contact-form contact-form--sent" role="status">
        <h3>Your enquiry is ready in {sent.via}</h3>
        <p>
          Press send in {sent.via} to deliver it to us. We’re open {company.hoursShort}.
        </p>
        <div className="contact-form__actions">
          <a className="btn btn--solid" href={sent.url} target={sent.via === 'WhatsApp' ? '_blank' : undefined} rel="noopener noreferrer">
            Open {sent.via} again
          </a>
          <button type="button" className="btn btn--line" onClick={() => setSent(null)}>
            Edit enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form ref={formRef} className="contact-form enquiry" onSubmit={sendWhatsApp} aria-labelledby="contact-form-title">
      <div>
        <h3 id="contact-form-title">Send an enquiry</h3>
        <p className="enquiry__intro">Tell us what you need and we’ll get back with availability and prices.</p>
      </div>
      <div className="field-row">
        <label className="field">
          <span>Your name</span>
          <input name="name" required autoComplete="name" />
        </label>
        <label className="field">
          <span>Phone</span>
          <input name="phone" required type="tel" autoComplete="tel" inputMode="tel" pattern="[0-9+ ()-]{8,}" />
        </label>
      </div>
      <div className="field-row">
        <label className="field">
          <span>
            Company <em>(optional)</em>
          </span>
          <input name="company" autoComplete="organization" />
        </label>
        <label className="field">
          <span>
            Email <em>(optional)</em>
          </span>
          <input name="email" type="email" autoComplete="email" />
        </label>
      </div>
      <label className="field">
        <span>
          Products <em>(optional)</em>
        </span>
        <select name="category" defaultValue="">
          <option value="">Select a category</option>
          {categories.map((c) => (
            <option key={c.id} value={c.name}>
              {c.name}
            </option>
          ))}
          <option value={OTHER}>{OTHER}</option>
        </select>
      </label>
      <label className="field">
        <span>Your requirement</span>
        <textarea
          name="requirement"
          required
          rows="4"
          placeholder="Items, sizes and quantities, e.g. 50 pairs of steel-toe safety shoes, sizes 7–10"
        />
      </label>
      <div className="contact-form__actions">
        <button type="submit" className="btn btn--whatsapp">
          Send on WhatsApp
        </button>
        <button type="button" className="btn btn--line" onClick={sendEmail}>
          Send by email
        </button>
      </div>
    </form>
  );
}
