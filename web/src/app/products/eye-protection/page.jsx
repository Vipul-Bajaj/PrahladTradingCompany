import CategoryPage from '../../../components/CategoryPage';
import category from '../../../data/categories/eye-protection';

export const metadata = {
  title: 'Safety spectacles and goggles: Karam, Udyogi, 3M, Mallcom | Prahlad Trading Company',
  description:
    'Safety spectacles, over-the-glasses eyewear, chemical goggles and welding eyewear in Raipur from Karam, Udyogi, 3M and Mallcom. Specifications and WhatsApp enquiry.',
};

export default function Page() {
  return <CategoryPage category={category} />;
}
