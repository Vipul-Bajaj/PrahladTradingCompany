import CategoryPage from '../../../components/CategoryPage';
import category from '../../../data/categories/helmets';

export const metadata = {
  title: 'Safety helmets: Karam, Udyogi and Mallcom | Prahlad Trading Company',
  description:
    'Karam, Udyogi and Mallcom safety helmets in Raipur, including ventilated, electrical and active-cooling models, bump caps and ladies’ safety helmets. Specifications and WhatsApp enquiry.',
};

export default function Page() {
  return <CategoryPage category={category} />;
}
