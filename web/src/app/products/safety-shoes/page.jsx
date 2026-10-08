import CategoryPage from '../../../components/CategoryPage';
import category from '../../../data/categories/safety-shoes';

export const metadata = {
  title: 'Safety shoes: Acme, Tiger and Footland | Prahlad Trading Company',
  description:
    'Acme Atom, Storm and Tusker; Tiger Lorex and Leopard; Mallcom Civet; and the full Footland range of safety shoes in Raipur. Specifications and WhatsApp enquiry.',
};

export default function Page() {
  return <CategoryPage category={category} />;
}
