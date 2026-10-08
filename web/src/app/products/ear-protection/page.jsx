import CategoryPage from '../../../components/CategoryPage';
import category from '../../../data/categories/ear-protection';

export const metadata = {
  title: 'Earplugs and earmuffs: Karam, Udyogi, 3M, Mallcom | Prahlad Trading Company',
  description:
    'Foam and reusable earplugs, headband and helmet-mounted earmuffs in Raipur from Karam, Udyogi, 3M and Mallcom, with noise ratings. WhatsApp enquiry.',
};

export default function Page() {
  return <CategoryPage category={category} />;
}
