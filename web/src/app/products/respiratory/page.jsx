import CategoryPage from '../../../components/CategoryPage';
import category from '../../../data/categories/respiratory';

export const metadata = {
  title: 'Respirators and masks: Karam, Udyogi, 3M and Mallcom | Prahlad Trading Company',
  description:
    'FFP1, FFP2 and FFP3 disposable respirators, welding and painting masks, reusable half and full-face masks and filters in Raipur. Specifications and WhatsApp enquiry.',
};

export default function Page() {
  return <CategoryPage category={category} />;
}
