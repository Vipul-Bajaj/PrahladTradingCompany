import CategoryPage from '../../../components/CategoryPage';
import category from '../../../data/categories/fall-protection';

export const metadata = {
  title: 'Fall protection: harnesses, lanyards, fall arresters | Prahlad Trading Company',
  description:
    'Karam and Udyogi full body harnesses, energy-absorbing and twin lanyards, retractable fall arresters, anchors and karabiners in Raipur. Specifications and WhatsApp enquiry.',
};

export default function Page() {
  return <CategoryPage category={category} />;
}
