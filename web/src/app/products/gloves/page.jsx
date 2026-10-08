import CategoryPage from '../../../components/CategoryPage';
import category from '../../../data/categories/gloves';

export const metadata = {
  title: 'Safety gloves in Raipur: cotton, nitrile, leather, electrical | Prahlad Trading Company',
  description:
    'Cotton knitted, dotted, nitrile, PU, cut-resistant, leather welding, heat-resistant, chemical and electrical rubber gloves in Raipur. Mostly Mallcom. WhatsApp enquiry.',
};

export default function Page() {
  return <CategoryPage category={category} />;
}
