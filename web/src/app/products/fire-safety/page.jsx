import CategoryPage from '../../../components/CategoryPage';
import category from '../../../data/categories/fire-safety';

export const metadata = {
  title: 'Omex fire extinguishers and fire safety equipment | Prahlad Trading Company',
  description:
    'Omex ABC, CO2, clean agent, foam, water, automatic and trolley fire extinguishers, refills, hydrant valves, hoses, sprinklers and detectors in Raipur. Specifications and WhatsApp enquiry.',
};

export default function Page() {
  return <CategoryPage category={category} />;
}
