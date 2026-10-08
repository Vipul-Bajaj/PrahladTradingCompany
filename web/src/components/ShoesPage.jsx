import { Header, Footer, href } from './Chrome';
import ShoeCatalogue from './ShoeCatalogue';

export default function ShoesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-head">
          <div className="wrap">
            <nav className="crumbs" aria-label="Breadcrumb">
              <a href={href('/#products')}>Products</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Safety shoes</span>
            </nav>
            <h1>Safety shoes</h1>
            <p className="page-head__lede">
              Steel-toe shoes from Acme, Mallcom’s Tiger range and Footland. Open a model for its full specifications,
              then send us an enquiry on WhatsApp with the sizes and quantity you need.
            </p>
          </div>
        </section>
        <div className="wrap shoe-page">
          <ShoeCatalogue />
        </div>
      </main>
      <Footer />
    </>
  );
}
