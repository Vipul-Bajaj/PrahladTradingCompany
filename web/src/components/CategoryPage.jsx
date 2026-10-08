import { Header, Footer, href } from './Chrome';
import ProductCatalogue from './ProductCatalogue';

// One product category page: heading, intro, and the model grid with
// spec dialog and WhatsApp enquiry. Content comes from src/data/categories/.
export default function CategoryPage({ category }) {
  return (
    <>
      <Header />
      <main>
        <section className="page-head">
          <div className="wrap">
            <nav className="crumbs" aria-label="Breadcrumb">
              <a href={href('/#products')}>Products</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{category.title}</span>
            </nav>
            <h1>{category.title}</h1>
            <p className="page-head__lede">{category.lede}</p>
          </div>
        </section>
        <div className="wrap shoe-page">
          <ProductCatalogue items={category.items} brands={category.brands} enquiry={category.enquiry} />
        </div>
      </main>
      <Footer />
    </>
  );
}
