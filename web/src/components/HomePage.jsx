import Media from './Media';
import { Header, Footer, PhoneIcon, href } from './Chrome';
import { company, brands, categories, brandName, enquiryMailto } from '../data/site';

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <h1 className="hero__title">Safety equipment for Raipur’s plants and work sites.</h1>
          <p className="hero__lede">
            Helmets, safety shoes, gloves, respirators, harnesses and fire extinguishers from Acme, Karam, Udyogi, Mallcom, Footland and Omex.
            Supplying Raipur’s industry for {company.years} years.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href={company.phoneHref}>
              <PhoneIcon /> Call {company.phoneDisplay}
            </a>
            <a className="btn btn--line" href={enquiryMailto('Requirement for safety equipment')}>
              Email your requirement
            </a>
          </div>
          <p className="hero__hours">Open {company.hoursShort}</p>
        </div>
        <figure className="hero__figure">
          <Media
            id="hero"
            alt="Worker wearing a full body safety harness"
            className="hero__img"
            loading="eager"
            fallback={<div className="hero__img hero__img--empty" aria-hidden="true" />}
          />
        </figure>
      </div>
    </section>
  );
}

function LogoStrip() {
  return (
    <section className="logo-strip" aria-label="Brands we deal in">
      <ul className="wrap logo-strip__list">
        {brands.filter((b) => b.featured).map((b) => (
          <li key={b.id} className="logo-strip__item">
            <Media
              id={b.logo}
              alt={`${b.name} logo`}
              className="logo-strip__img"
              fallback={<span className="logo-fallback">{b.name}</span>}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

function Products() {
  return (
    <section className="section" id="products" aria-labelledby="products-title">
      <div className="wrap">
        <div className="section__head">
          <h2 id="products-title">What we stock</h2>
          <p>
            Ten kinds of protective equipment, in the sizes and quantities a plant or site needs. Open any category to
            see what’s in it.
          </p>
        </div>
        <ul className="catalogue">
          {categories.map((c) => (
            <li key={c.id} className={c.page ? 'cat cat--linked' : 'cat'}>
              <div className="cat__photo">
                <Media
                  id={c.media}
                  alt=""
                  className="cat__img"
                  fallback={<span className="cat__img cat__img--empty">{c.name}</span>}
                />
              </div>
              <div className="cat__body">
                <h3 className="cat__name">
                  {c.page ? (
                    <a className="cat__link" href={href(c.page)}>
                      {c.name}
                    </a>
                  ) : (
                    c.name
                  )}
                </h3>
                <p className="cat__summary">{c.summary}</p>
                <p className="cat__brands">
                  <span className="visually-hidden">Brands: </span>
                  {c.brands.map((id) => (
                    <span key={id} className="chip">
                      {brandName(id)}
                    </span>
                  ))}
                </p>
                {c.page ? (
                  <span className="cat__cta" aria-hidden="true">
                    {c.pageLabel}
                  </span>
                ) : (
                <details className="cat__more">
                  <summary>What’s included</summary>
                  <ul>
                    {c.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                  <a className="text-link" href={enquiryMailto(`Price enquiry: ${c.name}`)}>
                    Ask for a price
                  </a>
                </details>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function BrandCard({ b }) {
  const authorized = b.relationship === 'authorized';
  return (
    <div className={authorized ? 'brand-card brand-card--authorized' : 'brand-card'}>
      <div className="brand-card__logo">
        <Media
          id={b.logo}
          alt={`${b.name} logo`}
          className="brand-card__img"
          fallback={<span className="logo-fallback">{b.name}</span>}
        />
      </div>
      <p className="brand-card__name">{b.name}</p>
      <p className={`badge badge--${b.relationship}`}>{authorized ? 'Authorized dealer' : 'Products available'}</p>
    </div>
  );
}

function Brands() {
  return (
    <section className="section section--grey" id="brands" aria-labelledby="brands-title">
      <div className="wrap">
        <div className="section__head">
          <h2 id="brands-title">Brands we deal in</h2>
          <p>
            Authorized dealer for {brands.filter((b) => b.relationship === 'authorized').map((b) => b.name).join(', ').replace(/, ([^,]*)$/, ' and $1')}.
            Genuine products from the other brands, bought through their distribution network.
          </p>
        </div>
      </div>
      <div className="marquee" role="region" aria-label="Brands we deal in" tabIndex={0}>
        <div className="marquee__track">
          <ul className="marquee__group">
            {brands.map((b) => (
              <li key={b.id}>
                <BrandCard b={b} />
              </li>
            ))}
          </ul>
          <ul className="marquee__group" aria-hidden="true">
            {brands.map((b) => (
              <li key={b.id}>
                <BrandCard b={b} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function HowToOrder() {
  const steps = [
    ['Send your list', 'Call us, or email the items, sizes and quantities you need.'],
    ['Get a quotation', 'We confirm what’s in stock and send you prices.'],
    ['Confirm and collect', 'Confirm the order and we keep it ready for you.'],
  ];
  return (
    <section className="section" id="order" aria-labelledby="order-title">
      <div className="wrap order">
        <div className="section__head">
          <h2 id="order-title">Ordering for a plant or site</h2>
          <p>Bulk and repeat orders are most of our work. Send one list for the whole crew.</p>
        </div>
        <ol className="steps">
          {steps.map(([t, d]) => (
            <li key={t} className="step">
              <h3>{t}</h3>
              <p>{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="wrap contact__grid">
        <div>
          <h2 id="contact-title">Talk to us</h2>
          <p className="contact__lede">Ask for {company.owner}.</p>
          <div className="hero__actions">
            <a className="btn btn--solid" href={company.phoneHref}>
              <PhoneIcon /> Call {company.phoneDisplay}
            </a>
            <a className="btn btn--line btn--on-dark" href={enquiryMailto('Enquiry from website')}>
              Email us
            </a>
          </div>
        </div>
        <dl className="contact__facts">
          <div>
            <dt>Phone</dt>
            <dd>
              <a href={company.phoneHref}>{company.phoneDisplay}</a>
            </dd>
          </div>
          <div>
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </dd>
          </div>
          <div>
            <dt>Hours</dt>
            <dd>{company.hours}</dd>
          </div>
          <div>
            <dt>Location</dt>
            <dd>{company.city}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#products">
        Skip to products
      </a>
      <Header />
      <main>
        <Hero />
        <LogoStrip />
        <Products />
        <Brands />
        <HowToOrder />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
